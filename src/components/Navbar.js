/**
 * Navbar — Fixed top navigation
 * Transparente → solide au scroll + menu mobile hamburger
 */
import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Accueil',     href: '#accueil' },
  { label: 'À propos',    href: '#apropos' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Projets',     href: '#projets' },
  { label: 'Vision',      href: '#vision' },
  { label: 'Contact',     href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive]     = useState('#accueil');

  /* Scroll listener — solidifie la navbar */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Active section via IntersectionObserver */
  useEffect(() => {
    const sectionIds = NAV_LINKS.map(l => l.href.replace('#', ''));
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive('#' + e.target.id);
        });
      },
      { threshold: 0.35 }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (href) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-inner">
          {/* Logo */}
          <a href="#accueil" className="navbar-logo" onClick={() => handleLinkClick('#accueil')}>
            OZ.
          </a>

          {/* Desktop links */}
          <ul className="navbar-links">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className={active === href ? 'active' : ''}
                  onClick={() => handleLinkClick(href)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className={`navbar-toggle${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile drawer */}
        <div className={`navbar-drawer${menuOpen ? ' open' : ''}`}>
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} onClick={() => handleLinkClick(href)}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
