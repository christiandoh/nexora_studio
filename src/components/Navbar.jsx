import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', to: '/services' },
    { label: 'Processus', to: '/method' },
    { label: 'Offres', to: '/offres' },
    { label: 'Clients', to: '/' },
  ];

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="logo">
          <span className="logo-mark"><img src={`${import.meta.env.BASE_URL}LOGO_NEXORA.png`} alt="" /></span>
          <span className="logo-script">exora</span>
        </Link>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.to}>
              <Link to={link.to} className={pathname === link.to ? 'active' : ''}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <ThemeToggle />
          <Link to="/contact" className="btn-cta">
            Démarrer un projet →
          </Link>
          <div className={`hamburger${menuOpen ? ' active' : ''}`} onClick={() => setMenuOpen(v => !v)}>
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>
    </nav>
  );
}
