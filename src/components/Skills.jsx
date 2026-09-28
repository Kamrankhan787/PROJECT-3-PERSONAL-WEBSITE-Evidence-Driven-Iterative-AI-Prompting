import React from 'react';
import { skillsData } from '../data/portfolio-data';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Technical Competencies</div>
          <h2 className="section-title">Areas of <span>Learning &amp; Building</span></h2>
          <p className="section-subtitle">
            Categorized capabilities developed through GIAIC, applied summer camp training, and hands-on projects.
          </p>
        </div>

        <div className="skills-grid">
          {skillsData.map((category, idx) => (
            <div key={idx} className="skill-category-card">
              <div className="skill-cat-header">
                <div
                  className="skill-cat-icon"
                  style={{ background: `${category.color}22`, color: category.color }}
                >
                  {category.icon === 'brain' && '🧠'}
                  {category.icon === 'code' && '⚡'}
                  {category.icon === 'layout' && '🎮'}
                  {category.icon === 'globe' && '🌐'}
                </div>
                <h3 className="skill-cat-title">{category.category}</h3>
              </div>

              <div className="skill-items-list">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item-row">
                    <span className="skill-item-name">{skill.name}</span>
                    <span className="skill-item-desc">{skill.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
