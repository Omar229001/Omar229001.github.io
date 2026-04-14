/**
 * Services — Ce que je fais
 * 4 cards avec icônes, hover animé, fond glassmorphisme
 */
import React from 'react';
import useInView from '../hooks/useInView';

const SERVICES = [
  {
    icon: '🖥️',
    title: 'Infrastructure & Cloud',
    desc:
      "Conception et déploiement d'infrastructures robustes — de la VM bare metal aux architectures cloud multi-couches. Sécurisation, monitoring et haute disponibilité.",
    tags: ['Azure', 'Terraform', 'Docker', 'Kubernetes', 'Bare Metal'],
  },
  {
    icon: '⚙️',
    title: 'Automatisation & DevOps',
    desc:
      "Pipelines CI/CD, automatisation de workflows complexes, orchestration de déploiements. Zéro friction entre le code et la production.",
    tags: ['CI/CD', 'GitHub Actions', 'n8n', 'Make.com', 'Bash'],
  },
  {
    icon: '📊',
    title: 'Data & IA',
    desc:
      "Construction de pipelines de données, intégrations API sur mesure, migration d'assets, prototypes machine learning. De la donnée brute à la valeur actionnable.",
    tags: ['Pipelines', 'API REST', 'PostgreSQL', 'Airtable', 'ML'],
  },
  {
    icon: '🚀',
    title: 'Produits & Startups',
    desc:
      "Du concept au déploiement — SaaS, e-commerce, plateformes. Vision produit, architecture évolutive et sens des priorités entrepreneuriales.",
    tags: ['SaaS', 'E-commerce', 'Next.js', 'Node.js', 'Medusa'],
  },
];

const Services = () => {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="services" className="section">
      <div className="container">
        {/* En-tête */}
        <div
          ref={ref}
          className={`fade-in${inView ? ' visible' : ''}`}
          style={{ marginBottom: 48 }}
        >
          <span className="section-label">02 — Services</span>
          <h2 className="section-title">Ce que je fais</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Ingénierie full-stack de l'infra — chaque couche, chaque outil, chaque pipeline.
          </p>
        </div>

        {/* Grid de cards */}
        <div className={`services-grid stagger${inView ? ' visible' : ''}`}>
          {SERVICES.map((s, i) => (
            <div key={i} className="service-card">
              <span className="service-icon">{s.icon}</span>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="service-tags">
                {s.tags.map(t => (
                  <span key={t} className="service-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
