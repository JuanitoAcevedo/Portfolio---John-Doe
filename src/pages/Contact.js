import React from 'react';
import BlueDivider from '../components/BlueDivider';
import { FaUser, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import ContactItem from '../components/ContactItem';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="mt-5 mb-5">
      {/* Titre principal */}
      <h2 className="text-center mb-4">Contact</h2>
      <p className="text-center mb-5">
        Pour me contacter en vue d’un entretien ou d’une future collaboration, merci de remplir le formulaire de contact.
      </p>
      <BlueDivider centered width="50%" />

      <Row>
        {/* Formulaire */}
        <Col md={6}>
          <h3 className="mb-4">Formulaire de contact</h3>
          <BlueDivider />
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Votre nom</Form.Label>
              <Form.Control type="text" placeholder="Votre nom" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Votre adresse email</Form.Label>
              <Form.Control type="email" placeholder="Votre email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Votre numéro de téléphone</Form.Label>
              <Form.Control type="tel" placeholder="Votre téléphone" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Votre message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Votre message" required />
            </Form.Group>

            <Button variant="primary" type="submit">Envoyer</Button>
          </Form>
        </Col>

        {/* Coordonnées */}
        <Col md={6}>
          <h3 className="mb-4">Mes coordonnées</h3>
          <BlueDivider />
          <Card className="mb-3">
            <Card.Body>
              <Card.Text>
                <ContactItem icon={FaUser}>Juan Dupont</ContactItem>
                <ContactItem icon={FaMapMarkerAlt}>42 rue Laure Diebold, 69009 Lyon</ContactItem>
                <ContactItem icon={FaPhoneAlt}>
                  <a href="tel:0123456789">0123456789</a>
                </ContactItem>
                <ContactItem icon={FaEnvelope}>
                  <a href="mailto:juan.dupont@gmail.com">juan.dupont@gmail.com</a>
                </ContactItem>
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Google Maps */}
          <div style={{ border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
            <iframe
              title="Google Maps"
              src="https://maps.google.com/maps?hl=fr&q=42+rue+Laure+Diebold+69009+Lyon&z=16&output=embed"

              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;