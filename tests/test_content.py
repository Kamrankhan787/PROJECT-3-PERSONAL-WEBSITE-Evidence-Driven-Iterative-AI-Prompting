"""
Content and authenticity validation tests for Project 3.
Ensures that all facts adhere strictly to user identity and real evidence.
"""

from pathlib import Path
import json
import unittest

PROJECT_ROOT = Path(__file__).resolve().parent.parent


class TestAuthenticityAndContent(unittest.TestCase):
    """Audits content integrity, authenticity, and required evidence links."""

    def test_no_hallucinated_qualifications(self):
        """
        Scans documentation files to ensure no unearned degrees, fake companies,
        or invented awards were inserted.
        """
        forbidden_terms = [
            "PhD", "Master of Science in Artificial Intelligence",
            "5 years of experience", "10 years of experience",
            "Senior Principal Architect", "Fortune 500 consultancy",
            "Forbes 30 under 30", "$1M in revenue"
        ]

        docs_dir = PROJECT_ROOT / "docs"
        for doc in docs_dir.glob("*.md"):
            content = doc.read_text(encoding="utf-8")
            for term in forbidden_terms:
                self.assertNotIn(
                    term, content,
                    f"Forbidden hallucinated term '{term}' found in {doc.name}"
                )

    def test_required_evidence_links(self):
        """Verifies that the required URLs are present in documentation and project context."""
        context_file = PROJECT_ROOT / "docs" / "project-context.md"
        content = context_file.read_text(encoding="utf-8")

        self.assertIn("https://snake-game-by-junaid.netlify.app/", content)
        self.assertIn("https://agentfactory.panaversity.org/docs/ai-prompting-2026", content)

    def test_ai_assistants_represented(self):
        """Verifies ChatGPT, Claude, and Gemini are referenced in context."""
        context_file = PROJECT_ROOT / "docs" / "project-context.md"
        content = context_file.read_text(encoding="utf-8")

        self.assertIn("ChatGPT", content)
        self.assertIn("Claude", content)
        self.assertIn("Gemini", content)

    def test_identity_fields(self):
        """Verifies Kamran Khan's professional title and student status."""
        context_file = PROJECT_ROOT / "docs" / "project-context.md"
        content = context_file.read_text(encoding="utf-8")

        self.assertIn("Kamran Khan", content)
        self.assertIn("GIAIC Student", content)
        self.assertIn("Agentic AI", content)


if __name__ == "__main__":
    unittest.main()
