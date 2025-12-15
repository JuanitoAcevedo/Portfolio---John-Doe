// ServiceCard.js
import React from 'react';
import { Card } from 'react-bootstrap';
import './ServiceCard.css';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <Card className="service-card h-100 border-0 shadow-sm text-center">
      <Card.Body>
        {icon && <div className="mb-3">{icon}</div>}
        <Card.Title>{title}</Card.Title>
        <Card.Text className="text-muted">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;