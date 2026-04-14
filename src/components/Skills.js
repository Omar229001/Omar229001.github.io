/**
 * Skills — Compétences techniques
 * Badges groupés par catégorie, pas de barres de progression
 */
import React from 'react';
import useInView from '../hooks/useInView';

const SKILL_GROUPS = [
  {
    label: 'Cloud & Infrastructure',
    skills: [
      'Azure', 'Terraform', 'Docker', 'Kubernetes',
      'Nginx', 'Cloudflare', 'Linux', 'Tailscale',
    ],
  },
  {
    label: 'CI/CD & Automatisation',
    skills: [
      'GitHub Actions', 'Git', 'n8n', 'Make.com',
      'Pipelines CI/CD', 'Bash Scripts',
    ],
  },
  {
    label: 'Langages',
    skills: [
      'Python', 'Java / Spring', 'Node.js', 'TypeScript',
      'C', 'Bash', 'SQL',
    ],
  },
  {
    label: 'Data & Intégrations',
    skills: [
      'PostgreSQL', 'API REST', 'Airtable', 'HubSpot',
      'Neo4j', 'MinIO', 'FastAPI',
    ],
  },
  {
    label: 'Sécurité & Réseau',
    skills: [
      'UFW', 'Fail2Ban', 'Tailscale VPN', 'DNS-over-HTTPS',
      'Vaultwarden', 'Cloudflare Tunnel',
    ],
  },
  {
    label: 'Frontend & Outils',
    skills: [
      'React', 'Next.js', 'Medusa v2', 'Prisma',
      'Stripe', 'Postman', 'VS Code',
    ],
  },
];

const Skills = () => {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="competences" className="skills-section section">
      <div className="container">
        {/* En-tête */}
        <div
          ref={ref}
          className={`fade-in${inView ? ' visible' : ''}`}
          style={{ marginBottom: 52 }}
        >
          <span className="section-label">03 — Compétences</span>
          <h2 className="section-title">Stack technique</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            De l'infra à la prod — outils maîtrisés, pas juste listés.
          </p>
        </div>

        {/* Groupes de badges */}
        <div className={`skills-grid stagger${inView ? ' visible' : ''}`}>
          {SKILL_GROUPS.map((group, gi) => (
            <div key={gi} className="skill-group">
              <div className="skill-group-header">{group.label}</div>
              <div className="skill-badges">
                {group.skills.map((skill, si) => (
                  <span key={si} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
