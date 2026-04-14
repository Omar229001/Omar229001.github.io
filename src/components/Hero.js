/**
 * Hero — Terminal animé + CTA
 * Tape automatiquement les commandes ligne par ligne avec effet machine
 */
import React, { useState, useEffect } from 'react';

/* Séquence du terminal */
const SEQUENCE = [
  { type: 'command', text: '> whoami' },
  { type: 'output',  text: 'Oumorou ZIBO — Ingénieur. Bâtisseur. Entrepreneur.' },
  { type: 'command', text: '> cat stack.txt' },
  { type: 'output',  text: 'Cloud · Infra · Data · IA · Web · Automatisation' },
  { type: 'command', text: '> ./mission.sh' },
  { type: 'output',  text: 'Construire la tech qui compte — en Europe et en Afrique' },
];

/* Vitesse de frappe */
const SPEED = {
  command: 55,   // ms par caractère (frappe humaine)
  output:  12,   // ms par caractère (sortie machine)
  pauseAfterCommand: 350,
  pauseAfterOutput:  120,
  initialDelay: 800,
};

const Hero = () => {
  const [lines, setLines] = useState([]);
  const [done, setDone]   = useState(false);

  useEffect(() => {
    let mounted = true;
    const sleep = ms => new Promise(r => setTimeout(r, ms));

    const run = async () => {
      await sleep(SPEED.initialDelay);

      for (let i = 0; i < SEQUENCE.length; i++) {
        if (!mounted) return;
        const seq = SEQUENCE[i];

        /* Ajoute une ligne vide */
        setLines(prev => [...prev, { type: seq.type, text: '' }]);

        if (seq.type === 'command') await sleep(SPEED.pauseAfterCommand);

        /* Tape caractère par caractère */
        for (let c = 0; c < seq.text.length; c++) {
          if (!mounted) return;
          await sleep(seq.type === 'command' ? SPEED.command : SPEED.output);
          const partial = seq.text.slice(0, c + 1);
          setLines(prev => {
            const updated = [...prev];
            updated[updated.length - 1] = { ...updated[updated.length - 1], text: partial };
            return updated;
          });
        }

        const pause = seq.type === 'command' ? SPEED.pauseAfterCommand : SPEED.pauseAfterOutput;
        await sleep(pause);
      }

      if (mounted) setDone(true);
    };

    run();
    return () => { mounted = false; };
  }, []);

  return (
    <section id="accueil" className="hero-section">
      {/* Arrière-plan */}
      <div className="hero-bg">
        <div className="hero-bg-grid" />
        <div className="hero-glow-1" />
        <div className="hero-glow-2" />
      </div>

      <div className="container">
        {/* Terminal */}
        <div className="terminal-wrapper fade-in visible">
          <div className="terminal">
            {/* Barre de titre */}
            <div className="terminal-header">
              <span className="terminal-dot dot-red" />
              <span className="terminal-dot dot-yellow" />
              <span className="terminal-dot dot-green" />
              <span className="terminal-title">oumorou@bunker:~</span>
            </div>

            {/* Corps du terminal */}
            <div className="terminal-body">
              {lines.map((line, i) => (
                <div
                  key={i}
                  className={`terminal-line ${
                    line.type === 'command' ? 'terminal-command' : 'terminal-output'
                  }`}
                >
                  {line.text}
                  {/* Curseur uniquement sur la dernière ligne en cours */}
                  {i === lines.length - 1 && !done && (
                    <span className="terminal-cursor" />
                  )}
                </div>
              ))}
              {/* Curseur final une fois l'animation terminée */}
              {done && <span className="terminal-cursor" style={{ display: 'inline-block' }} />}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="hero-cta fade-in visible" style={{ transitionDelay: '0.4s' }}>
          <a href="#projets" className="btn-primary">
            Voir mes projets
          </a>
          <a href="#contact" className="btn-outline">
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
