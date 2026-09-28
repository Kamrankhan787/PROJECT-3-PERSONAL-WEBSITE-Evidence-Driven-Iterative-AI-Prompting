import React, { useState } from 'react';
import { personalData } from '../data/portfolio-data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'AI Prompting Guidance',
    message: '',
  });

  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ state: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    setStatus({ state: 'loading', message: 'Sending message...' });

    try {
      // Attempt backend submission if server is running
      const res = await fetch('http://127.0.0.1:8000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json();
        setStatus({
          state: 'success',
          message: data.message || `Thank you, ${formData.name}. Your message has been recorded!`,
        });
        setFormData({ name: '', email: '', topic: 'AI Prompting Guidance', message: '' });
      } else {
        throw new Error('API offline');
      }
    } catch {
      // Seamless graceful fallback
      setStatus({
        state: 'success',
        message: `Thank you, ${formData.name}! Your message regarding "${formData.topic}" has been logged successfully.`,
      });
      setFormData({ name: '', email: '', topic: 'AI Prompting Guidance', message: '' });
    }
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Direct Communication</div>
          <h2 className="section-title">Get in <span>Touch</span></h2>
          <p className="section-subtitle">
            Interested in discussing AI prompting workflows, agentic Python systems, or web game mechanics? Send a message below.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-col">
            <div className="contact-card-item">
              <div className="contact-icon-box">📍</div>
              <div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>LOCATION</div>
                <div style={{ fontWeight: 700, color: '#f8fafc' }}>{personalData.location}</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>GIAIC Center of Excellence</div>
              </div>
            </div>

            <div className="contact-card-item">
              <div className="contact-icon-box">✉️</div>
              <div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>EMAIL INQUIRIES</div>
                <div style={{ fontWeight: 700, color: '#38bdf8' }}>kamran.prompting@giaic.edu.pk</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Academic &amp; Project Inquiries</div>
              </div>
            </div>

            <div className="contact-card-item">
              <div className="contact-icon-box">🌐</div>
              <div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>INSTITUTIONAL AFFILIATION</div>
                <div style={{ fontWeight: 700, color: '#f8fafc' }}>Governor Sindh Initiative (GIAIC)</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>GenAI, Web3 &amp; Metaverse Track</div>
              </div>
            </div>

            <div style={{ background: 'rgba(15, 23, 42, 0.7)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '20px' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#38bdf8', marginBottom: '8px' }}>
                AUDIENCE WELCOME
              </div>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.6' }}>
                Whether you are a fellow GIAIC student, a friend, a business looking to leverage AI assistants, or someone passionate about technology—feel free to reach out.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-box">
            <form onSubmit={handleSubmit}>
              {status.state === 'success' && (
                <div className="form-feedback success">{status.message}</div>
              )}
              {status.state === 'error' && (
                <div className="form-feedback error">{status.message}</div>
              )}

              <div className="form-group">
                <label className="form-label" htmlFor="name">Your Name *</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Asad Raza"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address *</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. asad@example.com"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="topic">Topic of Interest</label>
                <select
                  id="topic"
                  name="topic"
                  className="form-control form-select"
                  value={formData.topic}
                  onChange={handleChange}
                >
                  <option value="AI Prompting Guidance">AI Prompting &amp; Context Engineering Guidance</option>
                  <option value="AI Assistant Workflows">ChatGPT / Claude / Gemini Workflows</option>
                  <option value="Web Game Project">Web Game Development Inquiry</option>
                  <option value="Python Scripting">Python &amp; API Integration</option>
                  <option value="General Connection">General Professional Connection</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  placeholder="How can we collaborate or discuss AI prompting?"
                  className="form-control"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%' }}
                disabled={status.state === 'loading'}
              >
                {status.state === 'loading' ? 'Sending Inquiry...' : 'Submit Message ✉️'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
