import { useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function Modal({ project, onClose }) {
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  return (
    <motion.div
      className="featured-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <motion.div
        className="featured-modal"
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 40 }}
        transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
        onClick={e => e.stopPropagation()}
      >
        <button className="featured-modal-close" onClick={onClose} aria-label="Fermer">
          <X size={20} />
        </button>

        <div className="featured-modal-image">
          <img src={project.imgFull} alt={project.title} />
        </div>

        <div className="featured-modal-body">
          <h2 className="featured-modal-title">{project.title}</h2>
          <div className="featured-modal-stats">{project.stats}</div>
          <p className="featured-modal-desc">{project.desc}</p>
          <div className="featured-modal-tags">
            {project.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
