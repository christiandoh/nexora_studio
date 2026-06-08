import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Zap, Globe } from 'lucide-react';
import FloatingBadge from './FloatingBadge';
import { useCounter, useCountersObserver } from '../hooks/useCounter';

function StatItem({ target, label, suffix, started }) {
  const { count, start } = useCounter(target, suffix || '');

  const ref = useCallback((node) => {
    if (node && started) start();
  }, [started, start]);

  const display = suffix === 'sem.' ? '6sem.' : started ? count : '0';

  return (
    <div className="stat-item">
      <span className="stat-num" ref={ref}>{display}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function Hero() {
  const { ref: statsRef, triggered } = useCountersObserver();

  return (
    <section className="hero" id="hero">
      <div className="hero-grid"></div>
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>
      <div className="hero-orb hero-orb-3"></div>

      <FloatingBadge icon={<Rocket size={16} />} label="Dernier projet" value="Lancé en 6 sem." className="fb-1" />
      <FloatingBadge icon={<Zap size={16} />} label="Automatisation" value="−80% de tâches" className="fb-2" />
      <FloatingBadge icon={<Globe size={16} />} label="Présence" value="Abidjan & Beyond" className="fb-3" />

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Studio digital basé à Abidjan
        </div>

        <h1>
          On construit des<br />
          <span className="hero-gradient-text">actifs digitaux</span><br />
          qui rapportent.
        </h1>

        <p className="hero-slogan">Avec nous, chaque ligne de code est une histoire.</p>

        <p className="hero-sub">
          Des sites web, apps mobiles, et automatisations IA conçus avec les méthodes
          des meilleurs studios de la Silicon Valley — pour le marché africain.
        </p>

        <div className="hero-actions">
          <Link to="/contact" className="btn-cta-lg">
            Audit gratuit offert →
          </Link>
          <Link to="/method" className="btn-ghost-lg">
            Notre méthode ↓
          </Link>
        </div>

        <div className="hero-stats" ref={statsRef}>
          <StatItem target={47} label="Projets livrés" started={triggered} />
          <div className="stat-divider"></div>
          <StatItem target={98} label="% clients satisfaits" suffix="%" started={triggered} />
          <div className="stat-divider"></div>
          <StatItem target={6} label="Délai moyen MVP" suffix="sem." started={triggered} />
          <div className="stat-divider"></div>
          <StatItem target={5} label="Pays en Afrique" started={triggered} />
        </div>
      </div>
    </section>
  );
}
