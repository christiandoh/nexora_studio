import { useStaggeredReveal } from '../hooks/useScrollReveal';
import SectionReveal from './SectionReveal';

const steps = [
  { num: '01', title: 'Discovery', desc: 'Atelier stratégique, interviews, analyse concurrence, définition des KPIs et ROI attendu.' },
  { num: '02', title: 'Design Sprint', desc: 'Maquettes Figma haute fidélité, prototype cliquable, tests utilisateurs rapides.' },
  { num: '03', title: 'Build Agile', desc: 'Développement en cycles de 2 semaines. Le client voit l\'avancée à chaque sprint.' },
  { num: '04', title: 'QA & Lancement', desc: 'Tests rigoureux, mise en production, formation des équipes et documentation.' },
  { num: '05', title: 'Growth', desc: 'Analyse post-lancement, SEO, optimisation continue, nouvelles fonctionnalités.' },
];

export default function Process() {
  const stepsRef = useStaggeredReveal();

  return (
    <section className="process-section" id="process">
      <div className="container">
        <SectionReveal><div className="section-eyebrow">La méthode Nexora</div></SectionReveal>
        <SectionReveal delay={1}>
          <h2 className="section-title">Un processus transparent,<br />des résultats prévisibles.</h2>
        </SectionReveal>
        <SectionReveal delay={2}>
          <p className="section-sub">Inspiré des meilleurs studios californiens. Adapté aux réalités du marché ivoirien.</p>
        </SectionReveal>

        <div className="process-steps" ref={stepsRef}>
          {steps.map(step => (
            <div key={step.num} className="process-step">
              <div className="step-num">{step.num}</div>
              <h4 className="step-title">{step.title}</h4>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
