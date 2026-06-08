import { memo } from 'react';
import SectionReveal from './SectionReveal';

const base = import.meta.env.BASE_URL;
const img = (file) => `${base}temoignage/${file}`;

const testimonials = [
  { img: img('femme1.jpg'), name: 'Awa Koné', role: 'DG, Onesime BTP — Abidjan',
    quote: 'Nexora a transformé notre processus de gestion des commandes. Ce qui prenait 3h par jour est maintenant automatisé. ROI atteint en 6 semaines.' },
  { img: img('homme1.jpg'), name: 'Moussa Bamba', role: 'CEO, FinTech CI — Abidjan',
    quote: 'L\'app Flutter livrée en 7 semaines. Intégration Wave parfaite. Nos utilisateurs adorent l\'interface — on a 4.8/5 sur le Play Store.' },
  { img: img('femme2.jpg'), name: 'Fatou Sanogo', role: 'DRH, Groupe Industriel Dakar',
    quote: 'La formation IA pour nos managers a changé notre façon de travailler. Les playbooks livrés sont utilisés chaque jour. Un investissement qui en vaut vraiment la peine.' },
  { img: img('Homme2.jpg'), name: 'Kofi Dramé', role: 'Fondateur, Marketplace GH',
    quote: 'Notre boutique e-commerce avec paiement Orange Money tourne parfaitement. Les ventes ont augmenté de 40% le premier mois après le lancement.' },
  { img: img('femme3.jpg'), name: 'Nadia Touré', role: 'CTO, Assurtech Abidjan',
    quote: 'Le chatbot WhatsApp gère 80% de nos questions clients sans intervention humaine. Notre équipe support peut enfin se concentrer sur les cas complexes.' },
  { img: img('hommes3.jpg'), name: 'Olivier Assi', role: 'Product Manager, ONG Tech4Africa',
    quote: 'Processus rigoureux, communication parfaite, livrables impeccables. Nexora pense produit, pas prestataire. C\'est exactement ce qu\'on cherchait.' },
  { img: img('femme4.jpg'), name: 'Aminata Diallo', role: 'Fondatrice, WomenInTech Abidjan',
    quote: 'L\'accompagnement de Nexora sur notre transformation digitale a été un vrai accélérateur. Leur approche pédagogique et leur expertise IA ont conquis toute l\'équipe.' },
];

function TestimonialCard({ img, quote, name, role }) {
  return (
    <div className="testimonial-card">
      <div className="t-stars">★★★★★</div>
      <p className="t-quote">« {quote} »</p>
      <div className="t-author">
        <img src={img} alt={name} className="t-avatar-img" />
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
            <TestimonialCardMemo key={`${t.name}-${i}`} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
