import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../themeContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [menuOpen]);

  const base = import.meta.env.BASE_URL || '/';
  const navLinks = [
    { label: 'Services', to: '/services', icon: `${base}icone/service.png` },
    { label: 'Processus', to: '/method', icon: `${base}icone/processus.png` },
    { label: 'Offres', to: '/offres', icon: `${base}icone/offre.png` },
    { label: 'Clients', to: '/', icon: `${base}icone/clients.png` },
  ];

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="logo">
          <span className="logo-mark"><img src={`${import.meta.env.BASE_URL}LOGO_NEXORA.png`} alt="" /></span>
          <span className="logo-script">exora</span>
        </Link>

        <ul className="nav-links">
          {navLinks.map(link => (
            <li key={link.to}>
              <Link to={link.to} className={pathname === link.to ? 'active' : ''}>
                <img src={link.icon} alt="" className="nav-icon" />
                {link.label}
              </Link>
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

      <div className={`nav-backdrop${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(false)} />

      <div className={`nav-drawer${menuOpen ? ' open' : ''}`}>
        <div className="nav-drawer-header">
          <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
            <span className="logo-mark"><img src={`${import.meta.env.BASE_URL}LOGO_NEXORA.png`} alt="" /></span>
            <span className="logo-script">exora</span>
          </Link>
          <div className={`hamburger active`} onClick={() => setMenuOpen(false)}>
            <span></span><span></span><span></span>
          </div>
        </div>

        <ul className="nav-drawer-links">
          {navLinks.map(link => (
            <li key={link.to}>
              <Link to={link.to} className={pathname === link.to ? 'active' : ''}>
                <img src={link.icon} alt="" className="nav-icon" />
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-drawer-footer">
          <div className="theme-row">
            <span>Mode {theme === 'light' ? 'clair' : 'sombre'}</span>
            <ThemeToggle />
          </div>
          <Link to="/contact" className="btn-cta" onClick={() => setMenuOpen(false)}>
            Démarrer un projet →
          </Link>
        </div>
      </div>
    </nav>
  );
}
