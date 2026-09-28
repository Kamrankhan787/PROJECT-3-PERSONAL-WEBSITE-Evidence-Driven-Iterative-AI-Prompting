import React, { useState } from 'react';
import { promptEvolutionData } from '../data/portfolio-data';

export default function PromptEvolution() {
  const [activeStage, setActiveStage] = useState(1);
  const currentStageData = promptEvolutionData.find((s) => s.stage === activeStage) || promptEvolutionData[0];

  return (
    <section id="prompt-evolution" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Core Iteration Framework</div>
          <h2 className="section-title">Prompt <span>Evolution</span></h2>
          <p className="section-subtitle">
            Visualizing the 4-stage transformation from a generic novice prompt into an authentic, evidence-backed production web application.
          </p>
        </div>

        {/* Stage Selector Tabs */}
        <div className="evolution-tabs">
          {promptEvolutionData.map((stage) => (
            <button
              key={stage.stage}
              className={`evolution-tab-btn ${activeStage === stage.stage ? 'active' : ''}`}
              onClick={() => setActiveStage(stage.stage)}
            >
              <div className="tab-stage-num">Stage {stage.stage}</div>
              <div className="tab-stage-name">{stage.title}</div>
            </button>
          ))}
        </div>

        {/* Stage Content Display */}
        <div className="evolution-display">
          {/* Prompt Column */}
          <div className="prompt-box">
            <div className="prompt-box-header">
              <span className={`prompt-badge ${currentStageData.accent}`}>
                {currentStageData.badge}
              </span>
              <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Input Prompt Prompted to AI</span>
            </div>

            <div className="prompt-code-content">
              {currentStageData.promptText}
            </div>

            <div className="prompt-audit">
              <strong>Context &amp; Audit Analysis:</strong>
              <p style={{ marginTop: '6px', fontSize: '0.88rem' }}>{currentStageData.analysis}</p>
            </div>
          </div>

          {/* Result Column */}
          <div className="result-box">
            <h4>
              <span>AI System Output</span>
              <span className={`prompt-badge ${currentStageData.accent}`}>
                {currentStageData.resultType}
              </span>
            </h4>

            <p style={{ fontSize: '0.9rem', marginBottom: '18px', color: '#94a3b8' }}>
              Observed outputs and structural changes at this iteration stage:
            </p>

            <ul className="result-checklist">
              {currentStageData.outputItems.map((item, idx) => (
                <li key={idx} className="result-item">
                  <span
                    className="result-item-icon"
                    style={{
                      color:
                        currentStageData.stage === 1
                          ? '#ef4444'
                          : currentStageData.stage === 2
                          ? '#f59e0b'
                          : '#10b981',
                    }}
                  >
                    {currentStageData.stage === 1 ? '✕' : currentStageData.stage === 2 ? '•' : '✓'}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Stepper Navigation */}
            <div style={{ marginTop: '28px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button
                className="btn btn-secondary"
                style={{ padding: '8px 18px', fontSize: '0.82rem' }}
                disabled={activeStage === 1}
                onClick={() => setActiveStage(Math.max(1, activeStage - 1))}
              >
                ← Previous Stage
              </button>

              <span style={{ fontSize: '0.82rem', color: '#64748b' }}>
                Stage {activeStage} of 4
              </span>

              <button
                className="btn btn-secondary"
                style={{ padding: '8px 18px', fontSize: '0.82rem' }}
                disabled={activeStage === 4}
                onClick={() => setActiveStage(Math.min(4, activeStage + 1))}
              >
                Next Stage →
              </button>
            </div>
          </div>
        </div>

        {/* Visual Progression Banner */}
        <div style={{ marginTop: '40px', background: 'rgba(15, 23, 42, 0.7)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '24px', textAlign: 'center' }}>
          <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
            <strong>The Core Iteration Formula:</strong> Vague Idea → Specific Brief → First Website → Human Review → Personal Evidence → Update Plan → Improved Website → Final Review
          </span>
        </div>
      </div>
    </section>
  );
}
