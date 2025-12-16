import React from 'react';

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
                <div className="d-flex gap-3 mt-2">
                    <a href="https://github.com/JuanitoAcevedo" className="text-white">
                        <i className="bi bi-github fs-5"></i>
                    </a>
                    <a href="https://twitter.com/juan" className="text-white">
                        <i className="bi bi-twitter fs-5"></i>
                    </a>
                    <a href="https://linkedin.com/in/juan" className="text-white">
                        <i className="bi bi-linkedin fs-5"></i>
                    </a>
                </div>
            </div>

          {/* Colonne 2 */}
          <div className="col-md-4 mb-4">
                <h5 className="fw-bold">Liens utiles</h5>
                <ul className="list-unstyled">
                    <li><a href="#home" className="text-white text-decoration-none">Accueil</a></li>
                    <li><a href="#services" className="text-white text-decoration-none">Services</a></li>
                    <li><a href="#portfolio" className="text-white text-decoration-none">Portfolio</a></li>
                    <li><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
                    <li><a href="#legal" className="text-white text-decoration-none">Mentions légales</a></li>
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
          <small>&copy; {new Date().getFullYear()} Juan. Tous droits réservés.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;