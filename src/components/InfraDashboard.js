/**
 * InfraDashboard — Statut live des services
 * Ping réel via fetch (no-cors) avec refresh auto toutes les 30s
 */
import React, { useState, useEffect, useCallback } from 'react';
import useInView from '../hooks/useInView';

const SERVICES = [
  {
    name: 'oumorouzibo.me',
    label: 'Portfolio principal',
    url: 'https://oumorouzibo.me',
    displayUrl: 'oumorouzibo.me',
  },
  {
    name: 'blog.oumorouzibo.me',
    label: 'Blog technique',
    url: 'https://blog.oumorouzibo.me',
    displayUrl: 'blog.oumorouzibo.me',
  },
  {
    name: 'Homelab Bunker',
    label: 'Serveur auto-hébergé',
    url: null, // URL privée via Tailscale — statut manuel
    displayUrl: 'homelab.local',
    staticStatus: 'online', // statut statique si pas d'URL publique
  },
];

/* Timeout fetch : 5s */
const checkUrl = async (url) => {
  if (!url) return null; // sera géré statiquement
  try {
    const controller = new AbortController();
    const tid = setTimeout(() => controller.abort(), 5000);
    await fetch(url, { mode: 'no-cors', signal: controller.signal });
    clearTimeout(tid);
    return 'online';
  } catch (err) {
    if (err.name === 'AbortError') return 'timeout';
    return 'offline';
  }
};

const StatusDot = ({ status }) => (
  <span className={`status-dot ${status}`} title={status} />
);

const StatusLabel = ({ status }) => {
  const labels = { online: 'En ligne', offline: 'Hors ligne', checking: 'Vérification...', timeout: 'Timeout' };
  return <span className={`service-status-label ${status}`}>{labels[status] || status}</span>;
};

const InfraDashboard = () => {
  const [statuses, setStatuses] = useState(
    SERVICES.reduce((acc, s) => ({ ...acc, [s.name]: 'checking' }), {})
  );
  const [lastUpdate, setLastUpdate] = useState(null);
  const [ref, inView] = useInView(0.1);

  const refresh = useCallback(async () => {
    const results = await Promise.all(
      SERVICES.map(async s => ({
        name: s.name,
        status: s.staticStatus ?? await checkUrl(s.url),
      }))
    );
    setStatuses(prev => {
      const next = { ...prev };
      results.forEach(r => { next[r.name] = r.status; });
      return next;
    });
    setLastUpdate(new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
  }, []);

  /* Premier check au chargement */
  useEffect(() => {
    refresh();
  }, [refresh]);

  /* Refresh automatique toutes les 30s */
  useEffect(() => {
    const interval = setInterval(refresh, 30000);
    return () => clearInterval(interval);
  }, [refresh]);

  return (
    <section id="dashboard" className="dashboard-section section">
      <div className="container">
        {/* En-tête */}
        <div
          ref={ref}
          className={`fade-in${inView ? ' visible' : ''}`}
          style={{ marginBottom: 48 }}
        >
          <span className="section-label">05 — Infrastructure</span>
          <h2 className="section-title">Statut des services</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Monitoring en temps réel — actualisation automatique toutes les 30 secondes.
          </p>
        </div>

        {/* Dashboard card */}
        <div className={`dashboard-card fade-in${inView ? ' visible' : ''}`}>
          <div className="dashboard-header">
            <span className="dashboard-title">{'// services.status'}</span>
            {lastUpdate && (
              <span className="dashboard-refresh">
                Mis à jour : {lastUpdate}
                {' '}
                <button
                  onClick={refresh}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--accent-cyan)',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    padding: '2px 6px',
                    letterSpacing: '0.08em',
                  }}
                  title="Actualiser"
                >
                  ↻
                </button>
              </span>
            )}
          </div>

          <div className="service-list">
            {SERVICES.map(s => {
              const status = statuses[s.name] || 'checking';
              return (
                <div key={s.name} className="service-row">
                  <StatusDot status={status} />
                  <div style={{ flexGrow: 1 }}>
                    <div className="service-name">{s.name}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                      {s.label}
                    </div>
                  </div>
                  <span className="service-url">{s.displayUrl}</span>
                  <StatusLabel status={status} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfraDashboard;
