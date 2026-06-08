import { Globe, Smartphone, Zap, GraduationCap } from 'lucide-react';
import SectionReveal from './SectionReveal';

const iconMap = {
  web: <Globe size={24} />,
  mobile: <Smartphone size={24} />,
  ai: <Zap size={24} />,
  training: <GraduationCap size={24} />,
};

const services = [
  {
    num: '01',
    icon: 'web',
    iconClass: 'icon-web',
    title: 'Sites web & Applications web',
    desc: 'Du site vitrine premium à la web app métier sur-mesure. Chaque projet démarre par une phase Discovery pour garantir le ROI avant d\'écrire une ligne de code.',
    tags: ['Next.js', 'React', 'E-commerce', 'SEO'],
  },
  {
    num: '02',
    icon: 'mobile',
    iconClass: 'icon-mobile',
    title: 'Applications mobiles',
    desc: 'iOS & Android avec une seule codebase Flutter. On livre un MVP fonctionnel en 6 à 8 semaines, avec intégration Wave, Orange Money, MTN MoMo.',
    tags: ['Flutter', 'Wave', 'Orange Money', 'MVP'],
    tagStyle: 'teal',
  },
  {
    num: '03',
    icon: 'ai',
    iconClass: 'icon-ai',
    title: 'Automatisation IA',
    desc: 'Ce que vous faites en 3h, on le réduit à 3 minutes. Chatbots WhatsApp, traitement auto de documents, workflows intelligents, reporting automatisé.',
    tags: ['n8n / Make', 'Chatbots', 'OCR IA', 'LLM API'],
    tagStyle: 'gold',
  },
  {
    num: '04',
    icon: 'training',
    iconClass: 'icon-training',
    title: 'Formation & Transformation IA',
    desc: 'Ateliers stratégiques pour dirigeants, bootcamps techniques pour équipes. Chaque formation se termine par un playbook personnalisé et des prompt kits prêts à l\'emploi.',
    tags: ['Dirigeants', 'Bootcamp', 'Playbook', 'Mentorat'],
  },
];

export default function Services() {
  return (
    <section className="services-bg" id="services">
      <div className="container">
        <div className="services-header">
          <div>
            <SectionReveal><div className="section-eyebrow">Ce qu'on fait</div></SectionReveal>
            <SectionReveal delay={1}>
              <h2 className="section-title">Quatre piliers,<br />un seul objectif.</h2>
            </SectionReveal>
          </div>
          <div>
            <SectionReveal delay={2}>
              <p className="section-sub">
                On ne livre pas du code, on construit des actifs digitaux qui génèrent
                de la valeur — mesurable, documentée, durable.
              </p>
            </SectionReveal>
          </div>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div key={s.num} className="service-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <span className="service-num">{s.num}</span>
              <div className={`service-icon ${s.iconClass}`}>{iconMap[s.icon]}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="service-tags">
                {s.tags.map(tag => (
                  <span key={tag} className={`tag${s.tagStyle ? ` ${s.tagStyle}` : ''}`}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
