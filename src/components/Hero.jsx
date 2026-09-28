import React from 'react';
import { personalData } from '../data/portfolio-data';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span>✨</span> PROJECT 3 • AI PROMPTING IN 2026
          </div>

          <h1 className="hero-title">
            <span className="hero-title-name">{personalData.name}</span>
          </h1>

          <div className="hero-positioning">
            {personalData.title}
          </div>

          <p className="hero-description">
            A living demonstration of how <strong>better prompting, personal context, real evidence, and iterative review</strong> produce an authentic, high-impact digital portfolio rather than a generic first attempt.
          </p>

          <div className="hero-actions">
            <a href="#prompt-evolution" className="btn btn-primary">
              Explore Prompt Evolution ↓
            </a>
            <a href="#game" className="btn btn-secondary">
              View Web Game Showcase ↗
            </a>
            <a href="#certificate" className="btn btn-outline">
              Verify Certificate 📜
            </a>
          </div>

          <div className="hero-stats-row">
            {personalData.stats.map((stat, idx) => (
              <div key={idx} className="hero-stat-card">
                <span className="hero-stat-val">{stat.value}</span>
                <span className="hero-stat-lbl">{stat.label}</span>
                <span className="hero-stat-sub">{stat.subtext}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Visual Card showing the Iterative Workflow Engine */}
        <div className="hero-visual">
          <div className="hero-visual-card">
            <div className="visual-badge-header">
              <span className="status-dot-active">Live Verification Engine</span>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>GIAIC June 2026</span>
            </div>

            <div className="visual-pipeline">
              <div className="pipeline-node">
                <div className="pipeline-node-left">
                  <div className="pipeline-num">1</div>
                  <span className="pipeline-text">Vague Novice Idea</span>
                </div>
                <span className="pipeline-status" style={{ color: '#f87171' }}>Generic</span>
              </div>

              <div className="pipeline-node">
                <div className="pipeline-node-left">
                  <div className="pipeline-num">2</div>
                  <span className="pipeline-text">Specific Persona Brief</span>
                </div>
                <span className="pipeline-status" style={{ color: '#fbbf24' }}>Structured</span>
              </div>

              <div className="pipeline-node">
                <div className="pipeline-node-left">
                  <div className="pipeline-num">3</div>
                  <span className="pipeline-text">Personal Evidence Injected</span>
                </div>
                <span className="pipeline-status" style={{ color: '#34d399' }}>Evidence-Backed</span>
              </div>

              <div className="pipeline-node">
                <div className="pipeline-node-left">
                  <div className="pipeline-num">4</div>
                  <span className="pipeline-text">Iterative Human Review Loop</span>
                </div>
                <span className="pipeline-status" style={{ color: '#c084fc' }}>Production</span>
              </div>
            </div>

            <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)', fontSize: '0.82rem', color: '#64748b', textAlign: 'center' }}>
              Anchored in Python, Canvas Web Games &amp; Real Certificates
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
