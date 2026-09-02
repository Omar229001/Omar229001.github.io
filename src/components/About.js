/**
 * About — Deux colonnes : photo circulaire animée + texte
 */
import React from 'react';
import useInView from '../hooks/useInView';
import aboutImg from '../Assets/about.jpg';

const About = () => {
  const [ref, inView]       = useInView(0.12);
  const [refRight, inRight] = useInView(0.12);

  return (
    <section id="apropos" className="about-section section">
      <div className="container">
        {/* En-tête section */}
        <div
          ref={ref}
          className={`fade-in${inView ? ' visible' : ''}`}
          style={{ marginBottom: 56 }}
        >
          <span className="section-label">01 — À propos</span>
          <h2 className="section-title">Qui suis-je ?</h2>
          <div className="section-divider" />
        </div>

        <div className="about-grid">
          {/* Photo */}
          <div className={`about-photo-wrapper slide-left${inView ? ' visible' : ''}`}>
            <div className="photo-frame">
              <div className="photo-border-ring" />
              <img
                src={aboutImg}
                alt="Oumorou ZIBO"
                className="photo-img"
                onError={e => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextSibling.style.display = 'flex';
                }}
              />
              <div className="photo-placeholder" style={{ display: 'none' }}>OZ</div>
            </div>
          </div>

          {/* Texte */}
          <div
            ref={refRight}
            className={`about-content slide-right${inRight ? ' visible' : ''}`}
          >
            <p className="about-text">
              Je suis un ingénieur <strong>DevOps & Cloud</strong>, spécialisé dans
              l'intégration applicative et la transformation digitale. J'interviens
              sur toute la chaîne technique — de l'infrastructure cloud aux APIs
              backend en <strong>Java Spring Boot</strong>, des pipelines CI/CD aux
              déploiements en production.
            </p>
            <p className="about-text">
              Je ne me spécialise pas dans une seule couche.{' '}
              <strong>Je maîtrise l'ensemble.</strong>
            </p>
            <p className="about-text">
              Diplômé d'un <strong>Master 2 — Expert en Ingénierie et Systèmes
              d'Information</strong> à <strong>Epitech Marseille</strong>, avec une{' '}
              <strong>Licence MIAGE de l'Université d'Aix-Marseille</strong>, je combine
              des bases académiques solides avec une expérience terrain réelle.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-dot" />
                <div>
                  <strong>Master 2 — Epitech Marseille</strong>
                  Expert en Ingénierie et Systèmes d'Information.
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-dot" />
                <div>
                  <strong>Licence MIAGE — Aix-Marseille Université</strong>
                  Méthodes informatiques appliquées à la gestion des entreprises.
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-dot" />
                <div>
                  <strong>Expérience terrain</strong>
                  DevOps, cloud, Java Spring Boot, intégration applicative — du code qui tourne en prod.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
