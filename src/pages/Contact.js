import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="mt-5 mb-5">
      <h2 className="text-center mb-4">Contact</h2>
      <p className="text-center mb-5">
        Pour me contacter en vue d’un entretien ou d’une future collaboration, merci de remplir le formulaire de contact.
      </p>

      <Row>
        {/* Formulaire */}
        <Col md={6}>
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
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Mes coordonnées</Card.Title>
              <Card.Text>
                <strong>Nom :</strong> John Doe<br />
                <strong>Adresse :</strong> 42 rue Laux Delozid, 69003 Lyon<br />
                <strong>Téléphone :</strong> 06 00 00 00 00<br />
                <strong>Email :</strong> john.doe@gmail.com
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Google Maps */}
          <div style={{ border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.123456789!2d4.850000!3d45.750000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea123456789%3A0xabcdef123456789!2s42%20Rue%20Laux%20Delozid%2C%2069003%20Lyon!5e0!3m2!1sfr!2sfr!4v1234567890"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
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