import React, { useState } from 'react';

export default function Certification() {
  const [modalOpen, setModalOpen] = useState(false);
  const certSrc = '/assets/certificate/sample-certificate.svg';

  return (
    <section id="certificate" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Verifiable Credential</div>
          <h2 className="section-title">Summer Camp <span>Certification</span></h2>
          <p className="section-subtitle">
            Awarded upon successful completion of the intensive June 2026 AI Summer Camp and official end-of-program examination.
          </p>
        </div>

        <div className="cert-card">
          <div className="cert-info">
            <div style={{ display: 'inline-block', background: 'rgba(245, 158, 11, 0.12)', border: '1px solid rgba(245, 158, 11, 0.3)', color: '#fbbf24', padding: '4px 12px', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 700, marginBottom: '14px' }}>
              OFFICIAL EXAMINATION CREDENTIAL
            </div>

            <h3 style={{ fontSize: '1.9rem', marginBottom: '12px' }}>
              Certificate of Achievement: Applied Generative AI
            </h3>

            <p style={{ color: '#cbd5e1', marginBottom: '18px', fontSize: '0.98rem' }}>
              Awarded to <strong>Kamran Khan</strong> in recognition of passing the formal examination covering Generative AI systems, Prompt Architecture, Context Engineering, and Python automation.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px', marginBottom: '24px' }}>
              <div style={{ background: 'rgba(15, 23, 42, 0.7)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>ISSUING INITIATIVE</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#f8fafc' }}>GIAIC Examination Board</div>
              </div>
              <div style={{ background: 'rgba(15, 23, 42, 0.7)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>DATE OF ISSUE</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#f8fafc' }}>June 2026</div>
              </div>
            </div>

            {/* Certificate Placement Guidance Notice */}
            <div style={{ background: 'rgba(15, 23, 42, 0.8)', borderLeft: '3px solid #f59e0b', padding: '14px 18px', borderRadius: '0 8px 8px 0', marginBottom: '24px', fontSize: '0.82rem', color: '#94a3b8' }}>
              <strong style={{ color: '#fbbf24' }}>Custom File Replacement:</strong> To display your personal scanned certificate, drop <code>certificate.png</code>, <code>certificate.jpg</code>, or <code>certificate.pdf</code> into <code>public/assets/certificate/</code> as instructed in <code>PLACE-CERTIFICATE-HERE.txt</code>.
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button
                className="btn btn-primary"
                onClick={() => setModalOpen(true)}
              >
                Inspect Certificate (Full Lightbox) 🔍
              </button>
              <a
                href={certSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Open Raw Vector SVG ↗
              </a>
            </div>
          </div>

          {/* Certificate Thumbnail Preview */}
          <div className="cert-preview-wrapper" onClick={() => setModalOpen(true)}>
            <img
              src={certSrc}
              alt="Kamran Khan Summer Camp 2026 Certificate of Achievement"
              className="cert-preview-img"
            />
            <div className="cert-badge-floating">
              <span>★</span> Click to Enlarge
            </div>
          </div>
        </div>

        {/* Fullscreen Lightbox Modal */}
        {modalOpen && (
          <div className="modal-overlay" onClick={() => setModalOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="modal-close-btn"
                onClick={() => setModalOpen(false)}
                aria-label="Close modal"
              >
                ✕
              </button>

              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '1.4rem', color: '#f8fafc' }}>
                  Official Summer Camp Certificate — Kamran Khan
                </h3>
                <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                  Governor Sindh Initiative for GenAI, Web3 &amp; Metaverse (GIAIC)
                </span>
              </div>

              <div style={{ border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '12px', overflow: 'hidden', background: '#0a0f1d' }}>
                <img
                  src={certSrc}
                  alt="Full Certificate Preview"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', flexWrap: 'wrap', gap: '12px' }}>
                <span style={{ fontSize: '0.82rem', color: '#64748b' }}>
                  Credential ID: GIAIC-SC2026-KK • Examination Verified
                </span>
                <a
                  href={certSrc}
                  download="Kamran-Khan-Summer-Camp-Certificate.svg"
                  className="btn btn-primary"
                  style={{ padding: '8px 18px', fontSize: '0.85rem' }}
                >
                  Download Certificate ↓
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
