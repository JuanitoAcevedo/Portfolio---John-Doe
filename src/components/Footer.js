import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          {/* Colonne 1 */}
          <div className="col-md-4 mb-4">
            <h3 className="fw-bold">John Doe</h3>
            <ul className="list-unstyled">
              <li><i className="bi bi-house me-2"></i> 40 rue Laure Diebold</li>
              <li><i className="bi bi-geo-alt me-2"></i> 69000 Lyon, France</li>
              <li><i className="bi bi-telephone me-2"></i> +33 10 20 30 40 50</li>
              <li><i className="bi bi-envelope me-2"></i> JohnDoe@gmail.com</li>
            </ul>

            {/* Icônes réseaux sociaux */}
            <div className="d-flex gap-3 mt-2 footer-icons">
              <a 
                href="https://github.com/JuanitoAcevedo" 
                className="text-white"
                target="_blank" 
                rel="noopener noreferrer nofollow"
              >
                <i className="bi bi-github fs-5"></i>
              </a>
              <a 
                href="https://twitter.com/juan" 
                className="text-white"
                target="_blank" 
                rel="noopener noreferrer nofollow"
              >
                <i className="bi bi-twitter fs-5"></i>
              </a>
              <a 
                href="https://linkedin.com/in/juan" 
                className="text-white"
                target="_blank" 
                rel="noopener noreferrer nofollow"
              >
                <i className="bi bi-linkedin fs-5"></i>
              </a>
            </div>
          </div>

          {/* Colonne 2 */}
          <div className="col-md-4 mb-4">
            <h3 className="fw-bold">Liens utiles</h3>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none" rel='nofollow'>Accueil</Link></li>
              <li><Link to="/services" className="text-white text-decoration-none" rel='nofollow'>Services</Link></li>
              <li><Link to="/portfolio" className="text-white text-decoration-none" rel='nofollow'>Portfolio</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none" rel='nofollow'>Contact</Link></li>
              <li><Link to="/mentions-legales" className="text-white text-decoration-none" rel='nofollow'>Mentions légales</Link></li>
            </ul>
          </div>

          {/* Colonne 3 */}
          <div className="col-md-4 mb-4">
            <h3 className="fw-bold">Mes dernières réalisations</h3>
            <ul className="list-unstyled">
              <li><Link to="#" className="text-white text-decoration-none" rel='nofollow'>Portfolio React 2025</Link></li>
              <li><Link to="#" className="text-white text-decoration-none" rel='nofollow'>Reproduction d'un site fictif Probeats</Link></li>
              <li><Link to="#" className="text-white text-decoration-none" rel='nofollow'>Mon Curriculum Vitae</Link></li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-4">
          <small>&copy; {new Date().getFullYear()} Tous droits réservés.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;