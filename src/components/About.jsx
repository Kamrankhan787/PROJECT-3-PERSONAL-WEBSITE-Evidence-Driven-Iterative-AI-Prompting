import React from 'react';
import { personalData } from '../data/portfolio-data';

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Identity &amp; Philosophy</div>
          <h2 className="section-title">Who is <span>Kamran Khan?</span></h2>
          <p className="section-subtitle">
            An authentic look at my background as a GIAIC student, my technical capabilities, and my commitment to evidence-driven engineering.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-text">
            {personalData.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            <div className="about-highlight-box">
              <p>
                "Authenticity matters. I do not invent years of experience, fictional client portfolios, or unearned credentials. Every piece of code, link, and tool shown on this site reflects what I have genuinely studied, built, and verified."
              </p>
            </div>
          </div>

          <div className="about-cards-grid">
            <div className="about-fact-card">
              <div className="about-fact-icon">🎓</div>
              <div>
                <div className="about-fact-title">GIAIC Student</div>
                <div className="about-fact-desc">
                  Enrolled in the Governor Sindh Initiative for GenAI, Web3 &amp; Metaverse, learning cutting-edge AI pipelines and modern software engineering.
                </div>
              </div>
            </div>

            <div className="about-fact-card">
              <div className="about-fact-icon">⚙️</div>
              <div>
                <div className="about-fact-title">Agentic AI &amp; Python Developer</div>
                <div className="about-fact-desc">
                  Hands-on experience building lightweight API architectures with Python, FastAPI, and modular system integrations.
                </div>
              </div>
            </div>

            <div className="about-fact-card">
              <div className="about-fact-icon">🎮</div>
              <div>
                <div className="about-fact-title">Web &amp; Game Mechanics</div>
                <div className="about-fact-desc">
                  Designing responsive interactive web interfaces, canvas-based game loops, collision systems, and dynamic event handling.
                </div>
              </div>
            </div>

            <div className="about-fact-card">
              <div className="about-fact-icon">📈</div>
              <div>
                <div className="about-fact-title">Digital Marketing &amp; SEO</div>
                <div className="about-fact-desc">
                  Pairing modern AI-assisted copy workflows with semantic HTML, technical SEO audits, and audience-first positioning.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
