import os
import logging
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from supabase import create_client, Client
from dotenv import load_dotenv

load_dotenv()
logger = logging.getLogger(__name__)

router = APIRouter()

# Supabase setup
SUPABASE_URL = os.getenv("SUPABASE_URL", "")
SUPABASE_KEY = os.getenv("SUPABASE_SERVICE_KEY", "")
try:
    supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
except Exception as e:
    logger.error(f"Failed to initialize Supabase client: {e}")
    supabase = None

class NewsletterForm(BaseModel):
    email: EmailStr

@router.post("/newsletter")
async def subscribe_newsletter(form: NewsletterForm):
    if not supabase:
        raise HTTPException(status_code=500, detail="Database not configured")

    try:
        # Check if already subscribed to handle gracefully
        existing = supabase.table("newsletter").select("*").eq("email", form.email).execute()
        if existing.data:
            return {"success": False, "message": "You're already subscribed!"}

        supabase.table("newsletter").insert({"email": form.email}).execute()
        logger.info(f"New newsletter subscription: {form.email}")
        return {"success": True, "message": "You're subscribed! Welcome aboard."}
    except Exception as e:
        # Handle unique constraint violation just in case
        if "unique constraint" in str(e).lower() or "duplicate key" in str(e).lower() or "23505" in str(e):
             return {"success": False, "message": "You're already subscribed!"}
        
        logger.error(f"Failed to subscribe to newsletter: {e}")
        raise HTTPException(status_code=500, detail="Failed to process subscription.")
