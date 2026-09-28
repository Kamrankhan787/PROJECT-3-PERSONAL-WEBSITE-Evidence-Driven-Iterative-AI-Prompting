#!/usr/bin/env python3
"""
PROJECT 3: EVIDENCE-DRIVEN ITERATIVE AI PROMPTING
Personal Website Orchestrator & Launcher for Kamran Khan

Author: Kamran Khan (GIAIC Student & Agentic AI Developer)
Purpose: Demonstrates how personal context, real evidence, and iterative review
         transform a novice prompt into an authentic, production-grade website.
"""

from pathlib import Path
import argparse
import os
import shutil
import subprocess
import sys

# Ensure UTF-8 output on Windows terminals
if sys.stdout and hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

# Project root directory
PROJECT_ROOT = Path(__file__).resolve().parent

# Mandatory project files check list
MANDATORY_FILES = [
    "README.md",
    "main.py",
    "requirements.txt",
    ".gitignore",
    "docs/workflow-diagram.svg",
    "docs/workflow.md",
    "docs/project-context.md",
    "docs/prompting-process.md",
    "public/favicon.svg",
    "public/assets/certificate/PLACE-CERTIFICATE-HERE.txt",
    "backend/__init__.py",
    "backend/server.py",
    "tests/test_main.py",
    "tests/test_content.py",
]

PROJECT_METADATA = {
    "Project": "Project 3: Personal Website - Evidence-Driven Iterative AI Prompting",
    "Student": "Kamran Khan",
    "Role": "GIAIC Student | Agentic AI & Python Developer | Digital Marketer | Cloud & Applied Generative AI Learner",
    "Curriculum": "AI Prompting in 2026 (Governor Sindh Initiative - GIAIC)",
    "Course Documentation": "https://agentfactory.panaversity.org/docs/ai-prompting-2026",
    "Web Game Reference": "https://snake-game-by-junaid.netlify.app/",
    "Core AI Assistants": "ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google)",
}


def print_banner() -> None:
    """Displays formatted terminal banner."""
    print("=" * 80)
    print("  PROJECT 3: EVIDENCE-DRIVEN ITERATIVE AI PROMPTING")
    print("  Kamran Khan Personal Portfolio Orchestrator")
    print("=" * 80)


def validate_project() -> Tuple[bool, List[str]]:
    """
    Validates the workspace structure, presence of required documentation,
    backend modules, and certificate placeholder files.
    """
    print("\n[+] Step 1: Validating Project Environment & Integrity...")
    missing_files = []

    for file_path in MANDATORY_FILES:
        target = PROJECT_ROOT / file_path
        if not target.exists():
            missing_files.append(file_path)

    # Check certificate status
    cert_dir = PROJECT_ROOT / "public" / "assets" / "certificate"
    has_cert_dir = cert_dir.exists()

    if not has_cert_dir:
        missing_files.append("public/assets/certificate/ directory")

    if missing_files:
        print("  [!] Validation WARNING: Missing required files:")
        for item in missing_files:
            print(f"      - {item}")
        return False, missing_files
    else:
        print("  [PASS] All mandatory files and directories verified successfully.")
        return True, []


def show_project_info() -> None:
    """Displays structured project metadata and learning context."""
    print("\n[+] Step 2: Project Metadata & Identity:")
    for key, value in PROJECT_METADATA.items():
        print(f"  * {key:22}: {value}")

    print("\n[+] Step 3: 8-Step Iterative Workflow Architecture:")
    workflow_steps = [
        "1. VAGUE IDEA       --> Generic student prompt with no context",
        "2. SPECIFIC BRIEF   --> Clear goal, audience, styling & identity defined",
        "3. FIRST BUILD      --> Initial functional scaffold",
        "4. HUMAN REVIEW     --> Audit for missing artifacts and generic fluff",
        "5. ADD EVIDENCE     --> Ground in real game, AI assistant tools & certificate",
        "6. UPDATE PLAN      --> Plan modal lightbox, interactive timeline & tests",
        "7. IMPROVED BUILD   --> Personalized, fully responsive, evidence-backed site",
        "8. FINAL REVIEW     --> Automated tests, validation loop back to Step 4",
    ]
    for step in workflow_steps:
        print(f"  {step}")


def check_node_environment() -> Dict[str, str]:
    """Checks Node.js and npm availability for the frontend layer."""
    node_path = shutil.which("node")
    npm_path = shutil.which("npm")
    return {
        "node_installed": bool(node_path),
        "npm_installed": bool(npm_path),
        "node_path": node_path or "Not Found",
        "npm_path": npm_path or "Not Found",
    }


def run_tests() -> int:
    """Executes the test suite using pytest."""
    print("\n[+] Running Automated Test Suite...")
    try:
        import pytest
        return pytest.main(["-v", str(PROJECT_ROOT / "tests")])
    except ImportError:
        print("  [!] pytest not found, running with python unittest...")
        res = subprocess.run([sys.executable, "-m", "unittest", "discover", "-s", "tests"])
        return res.returncode


def start_backend(host: str = "127.0.0.1", port: int = 8000) -> None:
    """Launches the FastAPI backend server."""
    print(f"\n[+] Launching FastAPI Backend on http://{host}:{port} ...")
    try:
        import uvicorn
        uvicorn.run("backend.server:app", host=host, port=port, reload=True)
    except ImportError:
        print("  [!] Uvicorn not installed. Please install with: pip install -r requirements.txt")
        sys.exit(1)


def show_quickstart_guide() -> None:
    """Prints instructions for running both frontend and backend."""
    print("\n" + "=" * 80)
    print("  APPLICATION READY: HOW TO RUN")
    print("=" * 80)
    print("  1. Run Backend Server:")
    print("     python main.py --server")
    print("     -> API available at: http://127.0.0.1:8000")
    print("     -> API Docs:         http://127.0.0.1:8000/docs")
    print()
    print("  2. Run Frontend Development Server:")
    print("     npm install")
    print("     npm run dev")
    print("     -> Web UI available at: http://localhost:5173")
    print()
    print("  3. Run Verification Tests:")
    print("     python main.py --test")
    print("=" * 80)


def main() -> None:
    """Main orchestration entry point."""
    parser = argparse.ArgumentParser(
        description="Kamran Khan Personal Portfolio - Project 3 Orchestrator"
    )
    parser.add_argument(
        "--check", action="store_true", help="Run project validation checks and exit"
    )
    parser.add_argument(
        "--test", action="store_true", help="Run the automated test suite"
    )
    parser.add_argument(
        "--server", action="store_true", help="Start the FastAPI backend server"
    )
    parser.add_argument(
        "--port", type=int, default=8000, help="Port for the backend server (default: 8000)"
    )

    args = parser.parse_args()

    print_banner()
    is_valid, _ = validate_project()
    show_project_info()

    if args.check:
        print("\n[PASS] Project check completed.")
        sys.exit(0 if is_valid else 1)

    if args.test:
        code = run_tests()
        sys.exit(code)

    if args.server:
        start_backend(port=args.port)
        return

    # Default action: show quickstart guidance
    show_quickstart_guide()


if __name__ == "__main__":
    main()
