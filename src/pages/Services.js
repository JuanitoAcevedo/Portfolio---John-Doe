import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaPaintBrush, FaCode, FaSearch } from 'react-icons/fa';
import headerImage from '../assets/images/banner.jpg';
import BlueDivider from '../components/BlueDivider';

const Services = () => {
  return (
     <>
      {/* Image en haut de page */}
      <div style={{ width: '100%', overflow: 'hidden' }}>
        <img
          src={headerImage}
          alt="Visuel abstrait bleu"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover'
          }}
        />
      </div>

      <Container className="py-5">
        <h2 className="text-center mb-4">Mon offre de services</h2>
        <p className="text-center text-muted mb-5">
          Voici les prestations sur lesquelles je peux intervenir
        </p>
        <BlueDivider centered width= "50%" />

        <Row className="g-4">
          <Col xs={12} md={4}>
            <Card className="h-100 border-0 shadow-sm text-center">
              <Card.Body>
                <FaPaintBrush size={40} color="#003d99" className="mb-3" />
                <Card.Title>UX Design</Card.Title>
                <Card.Text className="text-muted">
                  UX Design est une discipline centrée sur la conception d’interfaces digitales. Elle vise à rendre l’expérience utilisateur la plus agréable et la plus intuitive possible.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card className="h-100 border-0 shadow-sm text-center">
              <Card.Body>
                <FaCode size={40} color="#003d99" className="mb-3" />
                <Card.Title>Développement web</Card.Title>
                <Card.Text className="text-muted">
                  Le développement web s’appuie sur la connaissance des différents langages de programmation (HTML, CSS, JS, etc.) et des frameworks (Bootstrap, React, Angular, etc.).
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card className="h-100 border-0 shadow-sm text-center">
              <Card.Body>
                <FaSearch size={40} color="#003d99" className="mb-3" />
                <Card.Title>Référencement</Card.Title>
                <Card.Text className="text-muted">
                  Le référencement naturel (SEO) est un concept fondamental pour améliorer la visibilité de votre site sur les moteurs de recherche. Il est basé sur la qualité du contenu et la structure du site.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Services;