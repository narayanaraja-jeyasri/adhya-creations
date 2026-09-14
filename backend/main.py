import logging
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import RedirectResponse
from dotenv import load_dotenv
import os

from api.contact import router as contact_router
from api.newsletter import router as newsletter_router

# Load environment variables
load_dotenv()

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="ADHYA API")

# Configure CORS
origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:8000",
    os.getenv("FRONTEND_URL", "*")
]

# Allow all origins for dev if FRONTEND_URL is not set securely
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"] if os.getenv("FRONTEND_URL") is None else origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(contact_router, prefix="/api", tags=["Contact"])
app.include_router(newsletter_router, prefix="/api", tags=["Newsletter"])

@app.on_event("startup")
async def startup_event():
    logger.info("Starting up ADHYA API")

@app.get("/api/health")
async def health_check():
    return {"status": "ok", "service": "ADHYA API"}

@app.get("/")
async def root():
    return RedirectResponse(url="/api/health")
