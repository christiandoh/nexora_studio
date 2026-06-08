import { memo } from 'react';
import SectionReveal from './SectionReveal';

const testimonials = [
  { quote: 'Nexora a transformé notre processus de gestion des commandes. Ce qui prenait 3h par jour est maintenant automatisé. ROI atteint en 6 semaines.', initials: 'AK', name: 'Awa Koné', role: 'DG, Onesime BTP — Abidjan', avatar: 'av1' },
  { quote: 'L\'app Flutter livrée en 7 semaines. Intégration Wave parfaite. Nos utilisateurs adorent l\'interface — on a 4.8/5 sur le Play Store.', initials: 'MB', name: 'Moussa Bamba', role: 'CEO, FinTech CI — Abidjan', avatar: 'av2' },
  { quote: 'La formation IA pour nos managers a changé notre façon de travailler. Les playbooks livrés sont utilisés chaque jour. Un investissement qui en vaut vraiment la peine.', initials: 'FS', name: 'Fatou Sanogo', role: 'DRH, Groupe Industriel Dakar', avatar: 'av3' },
  { quote: 'Notre boutique e-commerce avec paiement Orange Money tourne parfaitement. Les ventes ont augmenté de 40% le premier mois après le lancement.', initials: 'KD', name: 'Kofi Dramé', role: 'Fondateur, Marketplace GH', avatar: 'av4' },
  { quote: 'Le chatbot WhatsApp gère 80% de nos questions clients sans intervention humaine. Notre équipe support peut enfin se concentrer sur les cas complexes.', initials: 'NT', name: 'Nadia Touré', role: 'CTO, Assurtech Abidjan', avatar: 'av5' },
  { quote: 'Processus rigoureux, communication parfaite, livrables impeccables. Nexora pense produit, pas prestataire. C\'est exactement ce qu\'on cherchait.', initials: 'OA', name: 'Olivier Assi', role: 'Product Manager, ONG Tech4Africa', avatar: 'av6' },
];

function TestimonialCard({ quote, initials, name, role, avatar }) {
  return (
    <div className="testimonial-card">
      <div className="t-stars">★★★★★</div>
      <p className="t-quote">« {quote} »</p>
      <div className="t-author">
        <div className={`t-avatar ${avatar}`}>{initials}</div>
        <div>
          <div className="t-name">{name}</div>
          <div className="t-role">{role}</div>
        </div>
      </div>
    </div>
  );
}

const TestimonialCardMemo = memo(TestimonialCard);

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="temoignages">
      <div className="container">
        <SectionReveal><div className="section-eyebrow">Ils nous font confiance</div></SectionReveal>
        <SectionReveal delay={1}>
          <h2 className="section-title">Des résultats, pas des promesses.</h2>
        </SectionReveal>
      </div>

      <div style={{ overflow: 'hidden', marginTop: '3rem' }}>
        <div className="testimonials-track">
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCardMemo key={`${t.initials}-${i}`} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
