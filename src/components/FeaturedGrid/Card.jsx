import { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

export default function Card({ project, isActive, hasActive, onHover, onClick }) {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    if (cardRef.current) {
      cardRef.current.style.transform =
        `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) scale(${isActive ? 1.12 : 1})`;
    }
  }, [isActive]);

  const handleMouseLeave = useCallback(() => {
    if (cardRef.current) {
      cardRef.current.style.transform =
        `perspective(800px) rotateY(0deg) rotateX(0deg) scale(${hasActive && !isActive ? 0.92 : 1})`;
    }
    onHover(null);
  }, [hasActive, isActive, onHover]);

  return (
    <motion.div
      className={`featured-card${isActive ? ' active' : ''}${hasActive && !isActive ? ' dimmed' : ''}`}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(project.id)}
      layout
      transition={{ layout: { duration: 0.4 } }}
    >
      <div className="featured-card-img">
        <img src={project.img} alt={project.title} loading="lazy" />
      </div>

      <div className="featured-card-glow" />

      <motion.div
        className="featured-card-overlay"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="featured-card-title">{project.title}</h3>
        <p className="featured-card-desc">{project.desc}</p>
        <div className="featured-card-tags">
          {project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
