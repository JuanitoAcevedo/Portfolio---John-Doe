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
            <h5 className="fw-bold">John Doe</h5>
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
                href="https://twitter.com/johndoe" 
                className="text-white"
                target="_blank" 
                rel="noopener noreferrer nofollow"
              >
                <i className="bi bi-twitter fs-5"></i>
              </a>
              <a 
                href="https://linkedin.com/in/johndoe" 
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
            <h5 className="fw-bold">Liens utiles</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Accueil</Link></li>
              <li><Link to="services" className="text-white text-decoration-none">Services</Link></li>
              <li><Link to="portfolio" className="text-white text-decoration-none">Portfolio</Link></li>
              <li><Link to="contact" className="text-white text-decoration-none">Contact</Link></li>
              <li><Link to="Mentions-legales" className="text-white text-decoration-none">Mentions légales</Link></li>
            </ul>
          </div>

          {/* Colonne 3 */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li>Portfolio React 2025</li>
              <li>Reproduction d'un site fictif Probeats</li>
              <li>Mon Curriculum Vitae</li>
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