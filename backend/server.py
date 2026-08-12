from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import html as html_lib
import httpx
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, field_validator
from typing import List
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Emergent managed email proxy (constant — survives deployment)
EMAIL_BASE_URL = "https://integrations.emergentagent.com"
EMAIL_KEY = os.environ["EMERGENT_EMAIL_KEY"]
EMAIL_FROM_NAME = os.environ["EMAIL_FROM_NAME"]
OWNER_EMAIL = os.environ["OWNER_EMAIL"]

app = FastAPI()
api_router = APIRouter(prefix="/api")


class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class ContactCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    email: EmailStr
    message: str = Field(..., min_length=10, max_length=5000)

    @field_validator("name")
    @classmethod
    def name_not_blank(cls, v):
        if not v.strip():
            raise ValueError("Name cannot be blank")
        return v.strip()


class ContactMessage(ContactCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


@api_router.get("/")
async def root():
    return {"message": "Hello World"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


async def send_owner_notification(msg: "ContactMessage"):
    name = html_lib.escape(msg.name)
    email = html_lib.escape(msg.email)
    message = html_lib.escape(msg.message).replace("\n", "<br>")
    html_content = f"""
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#0A0D12;padding:24px;font-family:Arial,Helvetica,sans-serif;">
      <tr><td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#121824;border:1px solid rgba(255,255,255,0.08);border-radius:16px;overflow:hidden;">
          <tr><td style="background:#10B981;padding:18px 24px;color:#04160f;font-size:16px;font-weight:bold;">New Portfolio Contact Message</td></tr>
          <tr><td style="padding:24px;color:#E2E8F0;">
            <p style="margin:0 0 8px;color:#94A3B8;font-size:12px;text-transform:uppercase;letter-spacing:1px;">From</p>
            <p style="margin:0 0 16px;font-size:16px;font-weight:bold;color:#ffffff;">{name}</p>
            <p style="margin:0 0 8px;color:#94A3B8;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Email</p>
            <p style="margin:0 0 16px;font-size:15px;"><a href="mailto:{email}" style="color:#34D399;">{email}</a></p>
            <p style="margin:0 0 8px;color:#94A3B8;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Message</p>
            <p style="margin:0;font-size:15px;line-height:1.6;color:#E2E8F0;">{message}</p>
          </td></tr>
          <tr><td style="padding:14px 24px;border-top:1px solid rgba(255,255,255,0.08);color:#64748B;font-size:12px;">Sent from your portfolio contact form.</td></tr>
        </table>
      </td></tr>
    </table>
    """
    payload = {
        "to": [OWNER_EMAIL],
        "subject": f"New contact message from {msg.name}",
        "html": html_content,
        "from_name": EMAIL_FROM_NAME,
        "contact_email": msg.email,
    }
    async with httpx.AsyncClient(timeout=30) as http_client:
        resp = await http_client.post(
            f"{EMAIL_BASE_URL}/api/v1/email/send",
            headers={"X-Email-Key": EMAIL_KEY},
            json=payload,
        )
    resp.raise_for_status()
    return resp.json().get("id")


@api_router.post("/contact")
async def create_contact(input: ContactCreate):
    try:
        msg = ContactMessage(**input.model_dump())
        await db.contact_messages.insert_one(msg.model_dump())
    except Exception as e:
        logging.error(f"contact save error: {e}")
        raise HTTPException(status_code=500, detail="Failed to save message")

    email_sent = False
    try:
        await send_owner_notification(msg)
        email_sent = True
    except Exception as e:
        logging.error(f"contact email error: {e}")

    return {"success": True, "id": msg.id, "email_sent": email_sent, "message": "Message received"}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
