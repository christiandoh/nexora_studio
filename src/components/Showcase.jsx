import { Globe, Smartphone, Zap, GraduationCap } from 'lucide-react';
import SectionReveal from './SectionReveal';

const projects = [
  {
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    icon: <Globe size={20} />,
    title: 'Site e-commerce & Web app',
    desc: 'Plateforme complète avec paiement mobile money, dashboard analytics et gestion des stocks en temps réel.',
    tags: ['Next.js', 'E-commerce', 'Wave'],
  },
  {
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
    icon: <Smartphone size={20} />,
    title: 'Application mobile Flutter',
    desc: 'MVP livré en 7 semaines avec intégration Wave, Orange Money et MTN MoMo. 4.8/5 sur les stores.',
    tags: ['Flutter', 'Mobile', 'MVP'],
  },
  {
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
    icon: <Zap size={20} />,
    title: 'Automatisation IA & Chatbots',
    desc: 'Chatbot WhatsApp traitant 80% des requêtes clients sans intervention humaine. Workflows n8n sur-mesure.',
    tags: ['n8n', 'Chatbot', 'LLM'],
  },
  {
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
    icon: <GraduationCap size={20} />,
    title: 'Formation & Transformation',
    desc: 'Ateliers pour 40 managers, bootcamp technique pour 12 développeurs. Playbooks et prompt kits livrés.',
    tags: ['Formation', 'Playbook', 'Mentorat'],
  },
];

export default function Showcase() {
  return (
    <section className="showcase-section" id="showcase">
      <div className="container">
        <SectionReveal>
          <div className="section-eyebrow">Nos réalisations</div>
        </SectionReveal>
        <SectionReveal delay={1}>
          <h2 className="section-title">Des projets qui parlent d'eux-mêmes.</h2>
        </SectionReveal>

        <div className="showcase-grid">
          {projects.map((p, i) => (
            <div key={i} className={`showcase-card${i % 2 === 1 ? ' reverse' : ''}`}>
              <div className="showcase-image">
                <img src={p.img} alt={p.title} loading="lazy" />
              </div>
              <div className="showcase-content">
                <div className="showcase-icon">{p.icon}</div>
                <h3 className="showcase-title">{p.title}</h3>
                <p className="showcase-desc">{p.desc}</p>
                <div className="showcase-tags">
                  {p.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
