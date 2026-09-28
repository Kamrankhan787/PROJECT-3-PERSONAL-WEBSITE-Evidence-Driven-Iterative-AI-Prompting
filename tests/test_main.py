"""
Automated unit tests for main.py orchestrator and backend integrity.
"""

from pathlib import Path
import sys
import unittest

# Ensure project root is in sys.path
PROJECT_ROOT = Path(__file__).resolve().parent.parent
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

import main
from backend.server import app
from fastapi.testclient import TestClient


class TestMainOrchestrator(unittest.TestCase):
    """Test suite for validating orchestrator functionality and file structure."""

    def test_mandatory_files_exist(self):
        """Verifies that all required files and docs exist on disk."""
        for file_name in main.MANDATORY_FILES:
            target = PROJECT_ROOT / file_name
            self.assertTrue(
                target.exists(),
                f"Mandatory file missing: {file_name}"
            )

    def test_workflow_diagram_svg_content(self):
        """Verifies that docs/workflow-diagram.svg contains valid SVG tags and steps."""
        svg_path = PROJECT_ROOT / "docs" / "workflow-diagram.svg"
        self.assertTrue(svg_path.exists())
        content = svg_path.read_text(encoding="utf-8")
        self.assertIn("<svg", content)
        self.assertIn("VAGUE IDEA", content)
        self.assertIn("SPECIFIC BRIEF", content)
        self.assertIn("HUMAN REVIEW", content)
        self.assertIn("ADD EVIDENCE", content)

    def test_workflow_mermaid_loop(self):
        """Verifies that docs/workflow.md includes the H --> D loop."""
        md_path = PROJECT_ROOT / "docs" / "workflow.md"
        self.assertTrue(md_path.exists())
        content = md_path.read_text(encoding="utf-8")
        self.assertIn("flowchart TD", content)
        self.assertIn("H --> D", content)

    def test_certificate_placeholder_exists(self):
        """Verifies that the certificate instruction placeholder is present."""
        cert_txt = PROJECT_ROOT / "public" / "assets" / "certificate" / "PLACE-CERTIFICATE-HERE.txt"
        self.assertTrue(cert_txt.exists())
        content = cert_txt.read_text(encoding="utf-8")
        self.assertIn("KAMRAN KHAN", content)

    def test_validate_project_function(self):
        """Tests that validate_project() passes without missing files."""
        is_valid, missing = main.validate_project()
        self.assertTrue(is_valid, f"Validation failed with missing: {missing}")
        self.assertEqual(len(missing), 0)


class TestBackendAPI(unittest.TestCase):
    """Test suite for FastAPI endpoints."""

    def setUp(self):
        self.client = TestClient(app)

    def test_health_endpoint(self):
        """Tests GET /api/health."""
        response = self.client.get("/api/health")
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data["status"], "healthy")
        self.assertIn("Kamran Khan", data["service"])

    def test_certificate_status_endpoint(self):
        """Tests GET /api/certificate/status."""
        response = self.client.get("/api/certificate/status")
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertTrue(data["sample_svg_available"])
        self.assertTrue(data["placeholder_guide_present"])

    def test_portfolio_endpoint(self):
        """Tests GET /api/portfolio."""
        response = self.client.get("/api/portfolio")
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data["identity"]["name"], "Kamran Khan")
        self.assertIn("snake-game-by-junaid.netlify.app", data["links"]["snake_game"])
        self.assertIn("agentfactory.panaversity.org", data["links"]["ai_prompting_2026"])

    def test_contact_submission(self):
        """Tests POST /api/contact with valid payload."""
        payload = {
            "name": "Ali Hassan",
            "email": "ali@example.com",
            "topic": "AI Prompting Guidance",
            "message": "Hello Kamran, I would love to learn more about your context engineering techniques.",
        }
        response = self.client.post("/api/contact", json=payload)
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertTrue(data["success"])
        self.assertIn("Ali Hassan", data["message"])


if __name__ == "__main__":
    unittest.main()
