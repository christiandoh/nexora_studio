import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="logo logo-img"><img src={`${import.meta.env.BASE_URL}LOGO_NEXORA.png`} alt="Nexora Studio" /></Link>
          <p>Studio digital basé à Abidjan. <em>Avec nous, chaque ligne de code est une histoire.</em></p>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services">Sites web & Web apps</Link></li>
            <li><Link to="/services">Applications mobiles</Link></li>
            <li><Link to="/services">Automatisation IA</Link></li>
            <li><Link to="/services">Formation & Conseil</Link></li>
            <li><Link to="/services">Product Studio</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Studio</h4>
          <ul>
            <li><Link to="/method">Notre processus</Link></li>
            <li><Link to="/">Études de cas</Link></li>
            <li><Link to="/">Blog</Link></li>
            <li><Link to="/">Carrières</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:hello@nexora.ci">hello@nexora.ci</a></li>
            <li><a href="tel:+2250103961828">+225 01 03 96 18 28</a></li>
            <li><a href="#">Abidjan, Côte d'Ivoire</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 Nexora Studio. Tous droits réservés.</span>
        <span>Avec nous, chaque ligne de code est une histoire.</span>
      </div>
    </footer>
  );
}
