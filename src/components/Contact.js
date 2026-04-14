/**
 * Contact — Formulaire + liens directs
 * Formulaire Formspree-ready (remplacer FORM_ID) + icônes réseaux
 */
import React, { useState } from 'react';
import useInView from '../hooks/useInView';
import { FiMail, FiLinkedin, FiGithub, FiBookOpen, FiSend } from 'react-icons/fi';

/* ── Remplacer par ton ID Formspree : https://formspree.io ── */
const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID';

const CONTACT_LINKS = [
  {
    icon: <FiMail />,
    label: 'Email',
    value: 'oumorou.zibo@epitech.eu',
    href: 'mailto:oumorou.zibo@epitech.eu',
  },
  {
    icon: <FiLinkedin />,
    label: 'LinkedIn',
    value: 'www.linkedin.com/in/oumorou-zibo-761747204',
    href: 'https://www.linkedin.com/in/oumorou-zibo-761747204',
  },
  {
    icon: <FiGithub />,
    label: 'GitHub',
    value: 'github.com/Omar229001',
    href: 'https://github.com/Omar229001',
  },
  {
    icon: <FiBookOpen />,
    label: 'Blog',
    value: 'blog.oumorouzibo.me',
    href: 'https://blog.oumorouzibo.me',
  },
];

const Contact = () => {
  const [ref, inView] = useInView(0.1);
  const [form, setForm]     = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        {/* En-tête */}
        <div
          ref={ref}
          className={`fade-in${inView ? ' visible' : ''}`}
          style={{ marginBottom: 52 }}
        >
          <span className="section-label">07 — Contact</span>
          <h2 className="section-title">Travaillons ensemble</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Un projet, une opportunité, une question technique ? Je réponds.
          </p>
        </div>

        <div className={`contact-grid fade-in${inView ? ' visible' : ''}`}>
          {/* Formulaire */}
          <div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Nom</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="Votre nom"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="votre@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Décrivez votre projet ou votre demande..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {status === 'success' ? (
                <div className="form-success">
                  ✓ Message envoyé — je vous répondrai sous 48h.
                </div>
              ) : (
                <button
                  type="submit"
                  className="btn-primary form-submit"
                  disabled={status === 'sending'}
                >
                  <FiSend />
                  {status === 'sending' ? 'Envoi...' : 'Envoyer'}
                </button>
              )}

              {status === 'error' && (
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#ff5f56', marginTop: 8 }}>
                  Erreur lors de l'envoi. Contactez-moi directement par email.
                </p>
              )}
            </form>
          </div>

          {/* Liens */}
          <div className="contact-info">
            <p className="contact-info-title">Retrouvez-moi sur</p>
            <div className="contact-links">
              {CONTACT_LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="contact-link-item"
                >
                  <span className="contact-link-icon">{link.icon}</span>
                  <div>
                    <div className="contact-link-label">{link.label}</div>
                    <div className="contact-link-value">{link.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div style={{
              padding: '18px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
            }}>
              <span style={{ color: 'var(--accent-cyan)' }}>{'// disponibilité'}</span><br />
              Ouvert aux opportunités : CDI, freelance, consulting.<br />
              Basé en France — remote possible.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
