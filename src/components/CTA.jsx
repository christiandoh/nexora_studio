import { Phone } from 'lucide-react';
import SectionReveal from './SectionReveal';

export default function CTA() {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-glow"></div>
      <div className="container">
        <div className="cta-content">
          <SectionReveal><div className="section-eyebrow" style={{ justifyContent: 'center' }}>Prêt à démarrer ?</div></SectionReveal>
          <SectionReveal delay={1}>
            <h2 className="cta-title">
              Votre projet commence<br />
              <span className="hero-gradient-text">par un audit offert.</span>
            </h2>
          </SectionReveal>
          <SectionReveal delay={2}>
            <p className="cta-sub">
              Un appel de 30 minutes pour analyser votre situation, identifier les opportunités,
              et vous proposer une roadmap claire — sans engagement.
            </p>
          </SectionReveal>
          <SectionReveal delay={3}>
            <div className="cta-actions">
              <a href="mailto:christiandoh29@gmail.com" className="btn-cta-lg">Demander l'audit gratuit →</a>
              <a href="tel:+2250103961828" className="btn-ghost-lg"><Phone size={16} /> Nous appeler</a>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
