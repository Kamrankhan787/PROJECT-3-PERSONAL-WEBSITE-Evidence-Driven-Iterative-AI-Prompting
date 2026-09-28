import React from 'react';
import { guidanceData } from '../data/portfolio-data';

export default function Guidance() {
  return (
    <section id="guidance" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Knowledge Sharing</div>
          <h2 className="section-title">AI Prompting <span>Guidance</span></h2>
          <p className="section-subtitle">
            Helping students, peers, and local businesses navigate the shift from vague conversational prompts to robust, evidence-driven AI workflows.
          </p>
        </div>

        <div className="guidance-grid">
          {guidanceData.offerings.map((item, idx) => (
            <div key={idx} className="guidance-card">
              <h4>{item.title}</h4>
              <p style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Transparent Disclaimer Box */}
        <div className="guidance-disclaimer-box">
          <strong>Transparency Notice:</strong> {guidanceData.disclaimer}
        </div>
      </div>
    </section>
  );
}
