import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import LearningJourney from './components/LearningJourney';
import PromptEvolution from './components/PromptEvolution';
import Skills from './components/Skills';
import AIAssistants from './components/AIAssistants';
import GameShowcase from './components/GameShowcase';
import Certification from './components/Certification';
import Guidance from './components/Guidance';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-layout">
      {/* 1. Navbar */}
      <Navbar />

      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Me Section */}
        <About />

        {/* 4. AI Learning Journey Section */}
        <LearningJourney />

        {/* 5. AI Prompting in 2026 Official Curriculum Spotlight */}
        <section id="ai-prompting-curriculum" className="section" style={{ padding: '40px 0' }}>
          <div className="container">
            <div className="curriculum-banner">
              <div className="curriculum-text">
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#c084fc', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                  <span>📘</span> OFFICIAL CURRICULUM FOUNDATION
                </div>
                <h3>AI Prompting in 2026</h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  This personal website is grounded in the core principles of the <strong>AI Prompting in 2026</strong> curriculum from Panaversity's Agent Factory. Moving far beyond simplistic prompt templates, it emphasizes <strong>context engineering, multi-turn human review, and anchoring outputs to verifiable artifacts</strong>.
                </p>

                <div className="curriculum-pills">
                  <span className="curriculum-pill">Context Engineering</span>
                  <span className="curriculum-pill">Instruction Hierarchy</span>
                  <span className="curriculum-pill">System Prompts</span>
                  <span className="curriculum-pill">Multi-Model Orchestration</span>
                  <span className="curriculum-pill">Evidence Verification</span>
                </div>

                <a
                  href="https://agentfactory.panaversity.org/docs/ai-prompting-2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Explore AI Prompting 2026 ↗
                </a>
              </div>

              <div style={{ textAlign: 'center', background: 'rgba(15, 23, 42, 0.7)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(168, 85, 247, 0.25)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🤖</div>
                <div style={{ fontWeight: 800, fontSize: '1.2rem', color: '#f8fafc' }}>Panaversity Agent Factory</div>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8', marginTop: '4px' }}>Official Documentation Reference</div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Prompt Evolution Visualization */}
        <PromptEvolution />

        {/* 7. Skills Section */}
        <Skills />

        {/* 8. AI Assistants Section */}
        <AIAssistants />

        {/* 9. Web Game Showcase */}
        <GameShowcase />

        {/* 10. Certification Section */}
        <Certification />

        {/* 11. Professional Guidance Section */}
        <Guidance />

        {/* 12. Contact Section */}
        <Contact />
      </main>

      {/* 13. Footer */}
      <Footer />
    </div>
  );
}
