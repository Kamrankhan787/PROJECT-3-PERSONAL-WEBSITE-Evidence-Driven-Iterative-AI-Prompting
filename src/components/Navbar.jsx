import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#hero" className="nav-brand" onClick={closeMenu}>
            <div className="nav-logo-box">KK</div>
            <div className="nav-brand-text">
              <span className="nav-brand-name">Kamran Khan</span>
              <span className="nav-brand-title">GIAIC Student &amp; AI Developer</span>
            </div>
          </a>

          <nav>
            <ul className="nav-links">
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#journey" className="nav-link">Journey</a></li>
              <li><a href="#prompt-evolution" className="nav-link">Prompt Evolution</a></li>
              <li><a href="#skills" className="nav-link">Skills</a></li>
              <li><a href="#assistants" className="nav-link">AI Assistants</a></li>
              <li><a href="#game" className="nav-link">Web Game</a></li>
              <li><a href="#certificate" className="nav-link">Certificate</a></li>
              <li><a href="#guidance" className="nav-link">Guidance</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
          </nav>

          <div className="nav-actions">
            <a
              href="https://agentfactory.panaversity.org/docs/ai-prompting-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Explore AI Prompting 2026 ↗
            </a>
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#about" className="nav-link" onClick={closeMenu}>About Me</a>
        <a href="#journey" className="nav-link" onClick={closeMenu}>AI Learning Journey</a>
        <a href="#prompt-evolution" className="nav-link" onClick={closeMenu}>Prompt Evolution (4 Stages)</a>
        <a href="#skills" className="nav-link" onClick={closeMenu}>Core Competencies</a>
        <a href="#assistants" className="nav-link" onClick={closeMenu}>AI Assistant Workflows</a>
        <a href="#game" className="nav-link" onClick={closeMenu}>Web Game Showcase</a>
        <a href="#certificate" className="nav-link" onClick={closeMenu}>Summer Camp Certificate</a>
        <a href="#guidance" className="nav-link" onClick={closeMenu}>Prompting Guidance</a>
        <a href="#contact" className="nav-link" onClick={closeMenu}>Get in Touch</a>
        <a
          href="https://agentfactory.panaversity.org/docs/ai-prompting-2026"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ marginTop: '12px' }}
          onClick={closeMenu}
        >
          Explore AI Prompting 2026 ↗
        </a>
      </div>
    </>
  );
}
