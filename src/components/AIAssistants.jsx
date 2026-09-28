import React from 'react';
import { aiAssistantsData } from '../data/portfolio-data';

export default function AIAssistants() {
  return (
    <section id="assistants" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">AI Workflow Mastery</div>
          <h2 className="section-title">Professional <span>AI Assistants</span></h2>
          <p className="section-subtitle">
            How I professionally harness ChatGPT, Claude, and Gemini across daily development pipelines, context engineering, and output validation.
          </p>
        </div>

        <div className="assistants-grid">
          {aiAssistantsData.map((asst) => (
            <div key={asst.id} className="assistant-card">
              <div className="assistant-top">
                <div>
                  <h3 className="assistant-name">{asst.name}</h3>
                  <span className="assistant-creator">{asst.creator}</span>
                </div>
                <span
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: asst.color,
                    boxShadow: `0 0 10px ${asst.color}`,
                  }}
                />
              </div>

              <div
                className="assistant-badge"
                style={{
                  background: `${asst.color}20`,
                  color: asst.color,
                  border: `1px solid ${asst.color}40`,
                }}
              >
                {asst.badge}
              </div>

              <p className="assistant-desc">{asst.description}</p>

              <div className="assistant-workflows-title">Practical Engineering Workflows</div>

              <div>
                {asst.workflows.map((wf, wIdx) => (
                  <div key={wIdx} className="assistant-workflow-item">
                    <div className="aw-title">⚡ {wf.title}</div>
                    <div className="aw-desc">{wf.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Global Practical Use Matrix */}
        <div style={{ marginTop: '40px', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '32px' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '14px', color: '#38bdf8' }}>
            Comprehensive Practical Uses Across All Models:
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
            {[
              "Prompt Design & System Instructions",
              "Context Engineering & Layered Rulesets",
              "Iterative Prompt Refinement Loops",
              "AI-Assisted Python & Web Development",
              "Technical Research & Concept Synthesis",
              "Accelerated Skill & Framework Learning",
              "Multi-Step Automated Workflow Creation",
              "Auditing, Fact-Checking & Reviewing AI Output",
            ].map((useCase, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: '#cbd5e1' }}>
                <span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span>
                <span>{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
