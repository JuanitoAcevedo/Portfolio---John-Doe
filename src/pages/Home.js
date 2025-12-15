import React, { useState, useEffect } from 'react';
import SkillBar from '../components/SkillBar';
import profileImg from '../assets/images/john-doe-about.jpg';
import headerBg from '../assets/images/hero-bg.jpg';
import { Button, Modal } from 'react-bootstrap';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [githubData, setGithubData] = useState(null);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Charger les données GitHub de John Doe
  useEffect(() => {
    if (showModal) {
      fetch("https://api.github.com/users/github-john-doe")
        .then(response => response.json())
        .then(data => setGithubData(data))
        .catch(error => console.error(error));
    }
  }, [showModal]);

  return (
    <div>
      <header
        className="text-white text-center d-flex flex-column justify-content-center align-items-center"
        style={{
          backgroundImage: `url(${headerBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          textShadow: '1px 1px 2px black',
        }}
      >
        <h1 className="display-4 fw-bold">Bonjour, je suis Juan</h1>
        <h3 className="mt-3">Développeur web full stack</h3>
        
        {/* Bouton qui ouvre la modale */}
        <Button
          variant="danger"
          className="mt-4 px-4 py-2 rounded-pill"
          onClick={handleShow}
        >
          En savoir plus
        </Button>
      </header>

      {/* Fenêtre modale GitHub */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Profil GitHub de John Doe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {githubData ? (
            <div>
              <p><strong>Nom :</strong> {githubData.name}</p>
              <p><strong>Bio :</strong> {githubData.bio}</p>
              <p><strong>Repos publics :</strong> {githubData.public_repos}</p>
              <p><strong>Followers :</strong> {githubData.followers}</p>
              <p>
                <strong>Profil :</strong>{" "}
                <a
                  href={githubData.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {githubData.html_url}
                </a>
              </p>
            </div>
          ) : (
            <p>Chargement des données...</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Section compétences */}
      <section className="container my-5" id="about-skills">
        <div className="row">
          {/* À propos */}
          <div className="col-md-6 mb-4">
            <h2>À propos</h2>
            <hr style={{ height: '4px', backgroundColor: '#007bff', border: 'none' }} />
            <div className="text-center">
              <img
                src={profileImg}
                alt="Juan"
                className="img-fluid w-100 rounded mb-3"
                style={{ maxWidth: '100%' }}
              />
              <p>
                Développeur passionné basé à Lyon, spécialisé en React, Bootstrap et JavaScript.
                J’aime structurer mes projets pour qu’ils soient clairs, modulaires et évolutifs.
              </p>
            </div>
          </div>

          {/* Compétences */}
          <div className="col-md-6 mb-4">
            <h2>Mes compétences</h2>
            <hr style={{ height: '4px', backgroundColor: '#007bff', border: 'none' }} />
            <SkillBar skill="HTML5" level={90} color="red" />
            <SkillBar skill="CSS3" level={80} color="cyan" />
            <SkillBar skill="JavaScript" level={70} color="#ffc107" />
            <SkillBar skill="PHP" level={60} color="green" />
            <SkillBar skill="React" level={50} color="blue" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;