import { Link } from 'react-router-dom';
import SectionReveal from './SectionReveal';

const plans = [
  {
    name: 'Starter',
    price: 'Dès 350k',
    unit: 'FCFA/mois',
    hours: '10h de design ou développement',
    features: [
      '10h/mois de dev ou design',
      'Reporting mensuel',
      'Corrections de bugs prioritaires',
      'Support email sous 24h',
    ],
    cta: 'Commencer →',
    ctaClass: 'btn-outline',
  },
  {
    name: 'Growth',
    price: 'Dès 900k',
    unit: 'FCFA/mois',
    hours: '30h/mois + réunion OKR mensuelle',
    featured: true,
    features: [
      '30h/mois de prod continue',
      'Priorisation backlog dédiée',
      'Itérations & nouvelles features',
      'Réunion OKR mensuelle',
      'Support prioritaire sous 4h',
    ],
    cta: 'Commencer →',
    ctaClass: 'btn-cta',
  },
  {
    name: 'Scale',
    price: 'Dès 2,5M',
    unit: 'FCFA/mois',
    hours: '80h/mois — squad dédiée complète',
    features: [
      '80h/mois — dev + design + PM',
      'Rituels agiles hebdomadaires',
      'Revue stratégique bi-mensuelle',
      'SLA garantis contractuellement',
      'Hotline dédiée 7j/7',
    ],
    cta: 'Nous contacter →',
    ctaClass: 'btn-outline',
  },
];

export default function Plans() {
  return (
    <section className="retainer-section" id="plans">
      <div className="container">
        <SectionReveal><div className="section-eyebrow">Engagement continu</div></SectionReveal>
        <SectionReveal delay={1}>
          <h2 className="section-title">Votre partenaire tech<br />à temps plein.</h2>
        </SectionReveal>
        <SectionReveal delay={2}>
          <p className="section-sub">
            Plus qu'un projet one-shot — un studio dédié à votre croissance.
            Nos formules mensuelles stabilisent votre roadmap et votre budget.
          </p>
        </SectionReveal>

        <div className="plans-grid">
          {plans.map((plan, i) => (
            <div key={plan.name} className={`plan-card${plan.featured ? ' featured' : ''}`} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="plan-name">{plan.name}</div>
              <div className="plan-price">{plan.price} <span>{plan.unit}</span></div>
              <div className="plan-hours">{plan.hours}</div>
              <div className="plan-divider"></div>
              <ul className="plan-features">
                {plan.features.map(f => (
                  <li key={f}><span className="check">✓</span>{f}</li>
                ))}
              </ul>
              <Link to="/contact" className={plan.ctaClass} style={{ width: '100%', justifyContent: 'center', padding: plan.featured ? '0.75rem' : '0.55rem 1.25rem', fontSize: plan.featured ? '0.9rem' : '0.875rem' }}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
