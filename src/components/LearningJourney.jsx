import React from 'react';
import { learningJourney } from '../data/portfolio-data';

export default function LearningJourney() {
  return (
    <section id="journey" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Chronological Progression</div>
          <h2 className="section-title">My AI <span>Learning Journey</span></h2>
          <p className="section-subtitle">
            From foundational Python programming at GIAIC to applied Generative AI Summer Camp and official curriculum examination.
          </p>
        </div>

        <div className="timeline">
          {learningJourney.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-meta">
                  <span className="timeline-phase">{item.phase}</span>
                  <span className="timeline-period">{item.period}</span>
                </div>
                <h3 className="timeline-title">{item.title}</h3>
                <div className="timeline-inst">📍 {item.institution}</div>
                <p className="timeline-desc">{item.description}</p>
                <div className="timeline-tags">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="timeline-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
