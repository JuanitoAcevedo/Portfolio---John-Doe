import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './PortfolioCard.css';

const PortfolioCard = ({ title, description, tech, image, link, hoverColor }) => {
  return (
    <Card 
      className="portfolio-card h-100 border-0 shadow-sm text-center"
      style={{ '--hover-bg': hoverColor || '#f9f9f9' }}
    >
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text className="text-muted"><em>{tech}</em></Card.Text>
        <Button variant="primary" href={link} target="_blank">Voir le site</Button>
      </Card.Body>
    </Card>
  );
};

export default PortfolioCard;