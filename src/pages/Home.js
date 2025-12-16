import React, { useState, useEffect } from 'react';
import SkillBar from '../components/SkillBar';
import profileImg from '../assets/images/john-doe-about.jpg';
import headerBg from '../assets/images/hero-bg.jpg';

const Home = () => {
  const [githubData, setGithubData] = useState(null);

  // Charger les données quand la modale est ouverte
  useEffect(() => {
    const modal = document.getElementById('githubModal');
    modal.addEventListener('show.bs.modal', () => {
      fetch('https://api.github.com/users/github-john-doe')
        .then(res => res.json())
        .then(data => setGithubData(data))
        .catch(err => console.error(err));
    });
  }, []);

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
        <h1 className="display-4 fw-bold">Bonjour, je suis John Doe</h1>
        <h3 className="mt-3">Développeur web full stack</h3>

        {/* Bouton qui ouvre la modale */}
        <button
          type="button"
          className="btn btn-danger mt-4 px-4 py-2 rounded-pill"
          data-bs-toggle="modal"
          data-bs-target="#githubModal"
        >
          En savoir plus
        </button>
      </header>

      {/* Section existante */}
      <section className="container my-5" id="about-skills">
        <div className="row">
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

      {/* Fenêtre modale Bootstrap */}
      <div
        className="modal fade"
        id="githubModal"
        tabIndex="-1"
        aria-labelledby="githubModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            
            <div className="modal-header">
              <h5 className="modal-title" id="githubModalLabel">Profil GitHub - John Doe</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Fermer"></button>
            </div>
            
            <div className="modal-body">
              {githubData ? (
                <>
                  <p><strong>Nom d’utilisateur :</strong> {githubData.login}</p>
                  <p><strong>Nom complet :</strong> {githubData.name}</p>
                  <p><strong>Bio :</strong> {githubData.bio}</p>
                  <p><strong>Repos publics :</strong> {githubData.public_repos}</p>
                  <p><strong>Followers :</strong> {githubData.followers}</p>
                  <p><strong>Following :</strong> {githubData.following}</p>
                  <a
                    href={githubData.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mt-2"
                  >
                    Voir le profil complet
                  </a>
                </>
              ) : (
                <p>Chargement des données GitHub...</p>
              )}
            </div>
            
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;