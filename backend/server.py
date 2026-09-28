"""
FastAPI Backend Server for Kamran Khan Personal Website
Project 3: Evidence-Driven Iterative AI Prompting

Provides API endpoints for portfolio data, certificate status checks,
inquiry handling, and health verification.
"""

from pathlib import Path
from typing import Any, Dict, List, Optional
import os
import sys

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, EmailStr, Field

# Base Directory Resolution
BASE_DIR = Path(__file__).resolve().parent.parent
CERT_DIR = BASE_DIR / "public" / "assets" / "certificate"
DIST_DIR = BASE_DIR / "dist"

app = FastAPI(
    title="Kamran Khan Portfolio API",
    description="Backend API for Project 3 - Evidence-Driven Iterative AI Prompting",
    version="1.0.0",
)

# Enable CORS for development frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ContactRequest(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    topic: str = Field(..., min_length=2, max_length=100)
    message: str = Field(..., min_length=10, max_length=2000)


@app.get("/api/health")
def get_health() -> Dict[str, Any]:
    """Health check endpoint providing environment and system metadata."""
    return {
        "status": "healthy",
        "service": "Kamran Khan Personal Portfolio API",
        "python_version": sys.version.split()[0],
        "project": "Project 3: Evidence-Driven Iterative AI Prompting",
        "framework": "FastAPI + Uvicorn",
        "certificate_dir_exists": CERT_DIR.exists(),
    }


@app.get("/api/certificate/status")
def get_certificate_status() -> Dict[str, Any]:
    """
    Inspects the certificate directory to determine if a real user certificate
    has been supplied or if the verified fallback SVG should be served.
    """
    valid_extensions = {".png", ".jpg", ".jpeg", ".pdf", ".webp"}
    custom_files: List[str] = []

    if CERT_DIR.exists():
        for f in CERT_DIR.iterdir():
            if f.is_file() and f.suffix.lower() in valid_extensions:
                custom_files.append(f.name)

    sample_svg_exists = (CERT_DIR / "sample-certificate.svg").exists()
    placeholder_txt_exists = (CERT_DIR / "PLACE-CERTIFICATE-HERE.txt").exists()

    has_custom = len(custom_files) > 0
    active_file = custom_files[0] if has_custom else ("sample-certificate.svg" if sample_svg_exists else None)

    return {
        "has_custom_certificate": has_custom,
        "active_certificate_file": active_file,
        "available_custom_files": custom_files,
        "sample_svg_available": sample_svg_exists,
        "placeholder_guide_present": placeholder_txt_exists,
        "instructions": "Place your certificate.png, certificate.jpg, or certificate.pdf into public/assets/certificate/",
    }


@app.get("/api/portfolio")
def get_portfolio_data() -> Dict[str, Any]:
    """Returns the verified profile and portfolio metadata."""
    return {
        "identity": {
            "name": "Kamran Khan",
            "title": "GIAIC Student | Agentic AI & Python Developer | Digital Marketer | Cloud & Applied Generative AI Learner",
            "institution": "Governor Sindh Initiative for GenAI, Web3 & Metaverse (GIAIC)",
            "location": "Karachi, Pakistan",
            "authenticity_notice": "Strictly evidence-driven. No unearned claims or invented credentials.",
        },
        "links": {
            "snake_game": "https://snake-game-by-junaid.netlify.app/",
            "ai_prompting_2026": "https://agentfactory.panaversity.org/docs/ai-prompting-2026",
        },
        "assistants": [
            {
                "name": "ChatGPT (OpenAI)",
                "focus": "Prompt Design & Iterative Code Drafting",
                "uses": ["Prompt engineering", "Python scripting", "Logic validation", "Iterative code refactoring"],
            },
            {
                "name": "Claude (Anthropic)",
                "focus": "Context Engineering & Architecture Analysis",
                "uses": ["System prompts", "Complex reasoning", "Long context analysis", "Iterative document review"],
            },
            {
                "name": "Gemini (Google)",
                "focus": "Multimodal Synthesis & Ecosystem Integration",
                "uses": ["Research synthesis", "Multimodal inputs", "Google workspace tools", "API exploration"],
            },
        ],
        "workflow_steps": [
            "1. Vague Idea",
            "2. Specific Brief",
            "3. First Website Build",
            "4. Human Review",
            "5. Add Personal Evidence",
            "6. Create Update Plan",
            "7. Improve Website",
            "8. Final Review",
        ],
    }


@app.post("/api/contact")
def submit_contact(req: ContactRequest) -> Dict[str, Any]:
    """Handles inquiry submissions with validation."""
    return {
        "success": True,
        "message": f"Thank you, {req.name}. Your inquiry regarding '{req.topic}' has been received successfully.",
        "received_data": {
            "name": req.name,
            "email": req.email,
            "topic": req.topic,
        },
    }


# Serve static assets from public
if (BASE_DIR / "public").exists():
    app.mount("/public", StaticFiles(directory=str(BASE_DIR / "public")), name="public")

# Serve built frontend if exists
if DIST_DIR.exists():
    app.mount("/", StaticFiles(directory=str(DIST_DIR), html=True), name="dist")


def run():
    """Runs uvicorn server directly."""
    import uvicorn
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run("backend.server:app", host="127.0.0.1", port=port, reload=True)


if __name__ == "__main__":
    run()
