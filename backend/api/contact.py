import os
import logging
import time
from collections import defaultdict
from fastapi import APIRouter, HTTPException, Request
from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from supabase import create_client, Client
from email.message import EmailMessage
import aiosmtplib
from dotenv import load_dotenv

load_dotenv()
logger = logging.getLogger(__name__)

router = APIRouter()

# Simple in-memory rate limiting
RATE_LIMIT = 5
RATE_LIMIT_WINDOW = 3600  # 1 hour in seconds
rate_limits = defaultdict(list)

# Supabase setup
SUPABASE_URL = os.getenv("SUPABASE_URL", "")
SUPABASE_KEY = os.getenv("SUPABASE_SERVICE_KEY", "")
try:
    supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
except Exception as e:
    logger.error(f"Failed to initialize Supabase client: {e}")
    supabase = None

class ContactForm(BaseModel):
    name: str = Field(..., min_length=1)
    email: EmailStr
    phone: Optional[str] = None
    service: Optional[str] = None
    message: str = Field(..., min_length=10)

def is_rate_limited(ip: str) -> bool:
    now = time.time()
    # Filter out old requests
    rate_limits[ip] = [req_time for req_time in rate_limits[ip] if now - req_time < RATE_LIMIT_WINDOW]
    if len(rate_limits[ip]) >= RATE_LIMIT:
        return True
    rate_limits[ip].append(now)
    return False

async def send_email_notification(contact: ContactForm):
    try:
        smtp_host = os.getenv("SMTP_HOST")
        smtp_port = int(os.getenv("SMTP_PORT", "587"))
        smtp_email = os.getenv("SMTP_EMAIL")
        smtp_password = os.getenv("SMTP_PASSWORD")
        notification_email = os.getenv("NOTIFICATION_EMAIL")

        if not all([smtp_host, smtp_email, smtp_password, notification_email]):
            logger.warning("SMTP credentials not fully configured. Skipping email.")
            return

        message = EmailMessage()
        message["From"] = smtp_email
        message["To"] = notification_email
        message["Subject"] = f"New Contact from ADHYA Website - {contact.name}"

        # Plain text fallback
        message.set_content(
            f"New contact request from {contact.name}:\n\n"
            f"Email: {contact.email}\n"
            f"Phone: {contact.phone or 'N/A'}\n"
            f"Service: {contact.service or 'N/A'}\n\n"
            f"Message:\n{contact.message}"
        )

        # HTML version
        html_content = f"""
        <html>
            <body style="font-family: Arial, sans-serif; color: #333;">
                <h2 style="color: #DAA520;">ADHYA Creations & Tech Solutions</h2>
                <h3>New Contact Request</h3>
                <table style="width: 100%; max-width: 600px; border-collapse: collapse;">
                    <tr>
                        <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">Field</th>
                        <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">Value</th>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border-bottom: 1px solid #ddd;"><b>Name</b></td>
                        <td style="padding: 8px; border-bottom: 1px solid #ddd;">{contact.name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border-bottom: 1px solid #ddd;"><b>Email</b></td>
                        <td style="padding: 8px; border-bottom: 1px solid #ddd;">{contact.email}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border-bottom: 1px solid #ddd;"><b>Phone</b></td>
                        <td style="padding: 8px; border-bottom: 1px solid #ddd;">{contact.phone or 'N/A'}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border-bottom: 1px solid #ddd;"><b>Service</b></td>
                        <td style="padding: 8px; border-bottom: 1px solid #ddd;">{contact.service or 'N/A'}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border-bottom: 1px solid #ddd;"><b>Message</b></td>
                        <td style="padding: 8px; border-bottom: 1px solid #ddd;">{contact.message}</td>
                    </tr>
                </table>
            </body>
        </html>
        """
        message.add_alternative(html_content, subtype="html")

        await aiosmtplib.send(
            message,
            hostname=smtp_host,
            port=smtp_port,
            start_tls=True,
            username=smtp_email,
            password=smtp_password
        )
        logger.info(f"Email notification sent for {contact.email}")
    except Exception as e:
        logger.error(f"Failed to send email notification: {e}")

@router.post("/contact")
async def submit_contact(contact: ContactForm, request: Request):
    client_ip = request.client.host if request.client else "unknown"
    
    if is_rate_limited(client_ip):
        raise HTTPException(status_code=429, detail="Too many requests. Please try again later.")

    # Save to Supabase
    if supabase:
        try:
            data, count = supabase.table("contacts").insert({
                "name": contact.name,
                "email": contact.email,
                "phone": contact.phone,
                "service": contact.service,
                "message": contact.message
            }).execute()
            logger.info(f"Contact saved to Supabase: {contact.email}")
        except Exception as e:
            logger.error(f"Failed to save contact to Supabase: {e}")
            raise HTTPException(status_code=500, detail="Failed to save contact information.")

    # Send email asynchronously
    await send_email_notification(contact)

    return {"success": True, "message": "Thank you! We'll get back to you soon."}
