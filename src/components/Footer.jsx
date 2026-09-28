import React from 'react';
import { personalData } from '../data/portfolio-data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div className="nav-logo-box" style={{ width: '32px', height: '32px', fontSize: '0.9rem' }}>KK</div>
              <strong style={{ fontSize: '1.1rem', color: '#f8fafc' }}>{personalData.name}</strong>
            </div>
            <p>
              Project 3 of <em>AI Prompting in 2026</em>. Evidence-driven personal website built on the philosophy of iterative refinement and verified authenticity.
            </p>
          </div>

          <div className="footer-col">
            <h5>Sections</h5>
            <ul>
              <li><a href="#about">About Me</a></li>
              <li><a href="#journey">Learning Journey</a></li>
              <li><a href="#prompt-evolution">Prompt Evolution</a></li>
              <li><a href="#skills">Competencies</a></li>
              <li><a href="#assistants">AI Assistants</a></li>
              <li><a href="#game">Web Game Showcase</a></li>
              <li><a href="#certificate">Summer Camp Certificate</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Documentation &amp; Proof</h5>
            <ul>
              <li>
                <a href="https://agentfactory.panaversity.org/docs/ai-prompting-2026" target="_blank" rel="noopener noreferrer">
                  AI Prompting 2026 Syllabus ↗
                </a>
              </li>
              <li>
                <a href="https://snake-game-by-junaid.netlify.app/" target="_blank" rel="noopener noreferrer">
                  Web Game Live Demo ↗
                </a>
              </li>
              <li><a href="#prompt-evolution">4-Stage Prompt Evolution</a></li>
              <li><a href="#certificate">Verified Credential Modal</a></li>
              <li><a href="#contact">Contact &amp; Inquiries</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © 2026 Kamran Khan. GIAIC Student • All authentic claims strictly evidence-driven.
          </div>
          <button className="back-to-top-btn" onClick={scrollToTop}>
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
