/**
 * Projects — Grille filtrée de projets
 * Filtres: Tous | Infra | Dev | Entrepreneuriat
 */
import React, { useState } from 'react';
import useInView from '../hooks/useInView';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const CATEGORIES = ['Tous', 'Infra', 'Dev', 'Entrepreneuriat'];

const PROJECTS = [
  {
    id: 1,
    title: 'Homelab "le Bunker"',
    categories: ['Infra'],
    desc:
      'Serveur bare metal Ubuntu 24.04 auto-hébergé. Docker, n8n, Nextcloud, Vaultwarden, Gitea, Cloudflare Tunnel, Tailscale. Sécurisation complète UFW + Fail2Ban.',
    stack: ['Ubuntu 24.04', 'Docker', 'n8n', 'Nextcloud', 'Cloudflare Tunnel', 'Tailscale'],
    github: 'https://github.com/Omar229001',
    live: null,
  },
  {
    id: 2,
    title: 'Lab Azure',
    categories: ['Infra'],
    desc:
      'VM Azure provisionnée avec Terraform, CI/CD GitHub Actions entièrement automatisé. Ghost + Nginx déployés en production avec certificat SSL.',
    stack: ['Azure', 'Terraform', 'GitHub Actions', 'Ghost', 'Nginx'],
    github: 'https://github.com/Omar229001',
    live: 'https://blog.oumorouzibo.me',
  },
  {
    id: 3,
    title: 'RadHaus',
    categories: ['Dev', 'Entrepreneuriat'],
    desc:
      'E-commerce e-bikes allemands. Stack headless Medusa v2 + Next.js, PostgreSQL, automatisation commandes via n8n, paiement SEPA intégré.',
    stack: ['Medusa v2', 'Next.js', 'PostgreSQL', 'n8n', 'SEPA', 'Stripe'],
    github: 'https://github.com/Omar229001',
    live: null,
  },
  {
    id: 4,
    title: 'Zibridge',
    categories: ['Dev', 'Entrepreneuriat'],
    desc:
      'Git pour la data et le CRM — versionning de jeux de données, graphe de relations Neo4j, stockage objet MinIO, API FastAPI, CLI custom.',
    stack: ['FastAPI', 'Neo4j', 'MinIO', 'PostgreSQL', 'CLI Python'],
    github: 'https://github.com/Omar229001',
    live: null,
  },
  {
    id: 5,
    title: 'ZiboConnect',
    categories: ['Dev', 'Entrepreneuriat'],
    desc:
      'Plateforme de billetterie événementielle. Node.js, Prisma ORM, Stripe, génération de QR codes, dashboard organisateurs en temps réel.',
    stack: ['Node.js', 'Prisma', 'Stripe', 'QR Code', 'Dashboard'],
    github: 'https://github.com/Omar229001',
    live: null,
  },
  {
    id: 6,
    title: 'oumorouzibo.me',
    categories: ['Dev'],
    desc:
      'Ce portfolio — React.js, CI/CD GitHub Actions, déployé sur GitHub Pages. Identité visuelle terminal / infra / dark tech.',
    stack: ['React', 'GitHub Actions', 'GitHub Pages', 'CSS3'],
    github: 'https://github.com/Omar229001/oumorouzibo.me',
    live: 'https://oumorouzibo.me',
  },
];

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <div className="project-category">
      {project.categories.join(' · ')}
    </div>
    <h3 className="project-title">{project.title}</h3>
    <p className="project-desc">{project.desc}</p>
    <div className="project-stack">
      {project.stack.map(t => (
        <span key={t} className="stack-tag">{t}</span>
      ))}
    </div>
    <div className="project-links">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          <FiGithub /> GitHub
        </a>
      )}
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          <FiExternalLink /> Live
        </a>
      )}
    </div>
  </div>
);

const Projects = () => {
  const [active, setActive] = useState('Tous');
  const [ref, inView]       = useInView(0.08);

  const filtered =
    active === 'Tous'
      ? PROJECTS
      : PROJECTS.filter(p => p.categories.includes(active));

  return (
    <section id="projets" className="section">
      <div className="container">
        {/* En-tête */}
        <div
          ref={ref}
          className={`fade-in${inView ? ' visible' : ''}`}
          style={{ marginBottom: 40 }}
        >
          <span className="section-label">04 — Projets</span>
          <h2 className="section-title">Ce que j'ai construit</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Projets réels, en production ou en cours de développement.
          </p>
        </div>

        {/* Filtres */}
        <div className={`projects-filters fade-in${inView ? ' visible' : ''}`}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`filter-btn${active === cat ? ' active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grille */}
        <div className={`projects-grid stagger${inView ? ' visible' : ''}`}>
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
