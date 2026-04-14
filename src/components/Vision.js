/**
 * Vision — Section manifeste
 * Sobre, impactante, typographie large
 */
import React from 'react';
import useInView from '../hooks/useInView';

const Vision = () => {
  const [ref, inView] = useInView(0.15);

  return (
    <section id="vision" className="vision-section section">
      <div className="container">
        <div
          ref={ref}
          className={`vision-content fade-in${inView ? ' visible' : ''}`}
        >
          <div className="vision-quote-mark">"</div>
          <span className="section-label" style={{ justifyContent: 'center', display: 'flex', marginBottom: 32 }}>
            06 — Vision
          </span>

          <p className="vision-text">
            Au-delà du code et de l'infrastructure, je crois que la tech est un{' '}
            <span className="vision-highlight">levier de transformation</span>.
          </p>
          <p className="vision-text">
            Mon ambition : contribuer à construire une{' '}
            <span className="vision-highlight">infrastructure numérique solide et souveraine en Afrique</span>{' '}
            — des outils adaptés aux réalités locales, des plateformes qui créent de la valeur
            pour les populations du continent.
          </p>

          <div className="vision-badges">
            <span className="vision-badge">Souveraineté numérique</span>
            <span className="vision-badge">Afrique &amp; Europe</span>
            <span className="vision-badge">Tech qui compte</span>
            <span className="vision-badge">Impact réel</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
