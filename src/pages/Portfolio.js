import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import BlueDivider from '../components/BlueDivider';

const projects = [
  {
    title: 'Fresh Food',
    description: 'Site de vente de produits frais en ligne',
    tech: 'Site réalisé avec PHP et MySQL',
    image: '/images/fresh-food.jpg',
    link: '#'
  },
  {
    title: 'Restaurant Akira',
    description: 'Site de vente de produits frais en ligne',
    tech: 'Site réalisé avec WordPress',
    image: '/images/restaurant-japonais.jpg',
    link: '#'
  },
  {
    title: 'Espace bien-être',
    description: 'Site de vente de produits frais en ligne',
    tech: 'Site réalisé avec LARAVEL',
    image: '/images/espace-bien-etre.jpg',
    link: '#'
  },
  {
    title: 'SEO',
    description: 'Amélioration du référencement d’un site e-commerce',
    tech: 'Utilisation des outils SEO',
    image: '/images/seo.jpg',
    link: '#'
  },
  {
    title: 'Création d’une API',
    description: 'Création d’une API RESTFUL publique',
    tech: 'PHP - SYMFONY',
    image: '/images/coder.jpg',
    link: '#'
  },
  {
    title: 'Maquette d’un site web',
    description: 'Création du prototype d’un site',
    tech: 'Réalisé avec FIGMA',
    image: '/images/screens.jpg',
    link: '#'
  }
];

const Portfolio = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-2">Portfolio</h2>
      <p className="text-center text-muted mb-4">Voici quelques-unes de mes réalisations.</p>
      <BlueDivider />

      <Row className="g-4 mt-4">
        {projects.map((project, index) => (
          <Col xs={12} md={6} lg={4} key={index}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Img variant="top" src={project.image} alt={project.title} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Card.Text className="text-muted"><em>{project.tech}</em></Card.Text>
                <Button variant="primary" href={project.link} target="_blank">Voir le site</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Portfolio;