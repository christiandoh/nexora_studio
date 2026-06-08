import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './Card';
import Modal from './Modal';
import SectionReveal from '../SectionReveal';

const projects = [
  {
    id: 1,
    img: '/opencode.jpg',
    imgFull: '/opencode.jpg',
    title: 'OpenCode — Agent de codage IA',
    desc: 'Assistant de codage open source qui comprend votre codebase et vous aide à coder plus vite depuis le terminal. 160K stars GitHub, 7,5M devs/mois.',
    stats: '160K ★ · 7,5M devs · Open source',
    tags: ['OpenCode', 'Coding Agent', 'Terminal'],
  },
  {
    id: 2,
    img: '/hermes_agent.jpg',
    imgFull: '/hermes_agent.jpg',
    title: 'Hermes Agent — Automation intelligente',
    desc: 'Agent IA multi-tâches pour l\'automatisation des processus métier. Planification, exécution et reporting automatisés pour entreprises et PME.',
    stats: 'Multi-agent · Workflow · Cloud',
    tags: ['Hermes', 'Agent', 'Automation'],
  },
  {
    id: 3,
    img: '/openclaw.jpg',
    imgFull: '/openclaw.jpg',
    title: 'OpenClaw — Assistant IA personnel',
    desc: 'IA qui agit vraiment : gère vos emails, calendrier, réservations. Depuis WhatsApp, Telegram ou tout chat. 24/7, persistant, privé.',
    stats: 'WhatsApp · Telegram · 24/7',
    tags: ['OpenClaw', 'Assistant', 'Chat'],
  },
  {
    id: 4,
    img: '/configuration_IA_SUR_MESUR.jpg',
    imgFull: '/configuration_IA_SUR_MESUR.jpg',
    title: 'Configuration IA sur mesure',
    desc: 'Déploiement et configuration d\'agents IA pour entreprises : OpenClaw, Hermes, OpenCode, n8n. Automatisation complète des flux de travail.',
    stats: 'Déploiement · Sur mesure · Support',
    tags: ['Configuration', 'Déploiement', 'IA'],
  },
  {
    id: 5,
    img: '/AUTOMATISATION_IA.jpg',
    imgFull: '/AUTOMATISATION_IA.jpg',
    title: 'Automatisation pour particuliers',
    desc: 'Agents IA pour particuliers : gestion des emails, planification, rappels, recherches web, automatisation des tâches quotidiennes.',
    stats: 'Personnel · 24/7 · Privé',
    tags: ['Particuliers', 'Automatisation', 'Daily'],
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80',
    imgFull: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80',
    title: 'Formation & Accompagnement IA',
    desc: 'Ateliers pratiques pour équipes et dirigeants. Maîtrisez les agents IA, l\'automatisation et l\'IA générative avec des cas concrets.',
    stats: 'Ateliers · Bootcamps · Playbooks',
    tags: ['Formation', 'Accompagnement', 'IA'],
  },
];

export default function FeaturedGrid() {
  const [activeId, setActiveId] = useState(null);
  const [modalId, setModalId] = useState(null);

  const active = projects.find(p => p.id === activeId);

  const handleClose = useCallback(() => setModalId(null), []);

  return (
    <section className="featured-section">
      <div className="featured-bg">
        <AnimatePresence>
          {active && (
            <motion.div
              key={active.id}
              className="featured-bg-image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ backgroundImage: `url(${active.imgFull})` }}
            />
          )}
        </AnimatePresence>
        <div className="featured-bg-overlay" />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <SectionReveal>
          <div className="section-eyebrow">Projets phares</div>
        </SectionReveal>
        <SectionReveal delay={1}>
          <h2 className="section-title">Nos agents IA en action.</h2>
        </SectionReveal>

        <div className="featured-grid">
          {projects.map((project, i) => {
            const isActive = activeId === project.id;
            const hasActive = activeId !== null;

            return (
              <Card
                key={project.id}
                project={project}
                isActive={isActive}
                hasActive={hasActive}
                index={i}
                onHover={setActiveId}
                onClick={setModalId}
              />
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {modalId && (
          <Modal
            project={projects.find(p => p.id === modalId)}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
