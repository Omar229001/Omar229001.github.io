/**
 * Footer — Minimaliste, terminal style
 */
import React from 'react';
import { FiGithub, FiLinkedin, FiBookOpen } from 'react-icons/fi';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <span className="footer-logo">OZ.</span>

          <span className="footer-copy">
            © {year} Oumorou ZIBO — Construit avec React &amp; GitHub Pages
          </span>

          <div className="footer-links">
            <a href="https://github.com/Omar229001" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub size={16} />
            </a>
            <a href="https://www.linkedin.com/in/oumorou-zibo-761747204" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin size={16} />
            </a>
            <a href="https://blog.oumorouzibo.me" target="_blank" rel="noreferrer" aria-label="Blog">
              <FiBookOpen size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
