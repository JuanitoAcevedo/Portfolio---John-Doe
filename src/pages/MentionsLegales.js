import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import BlueDivider from '../components/BlueDivider';

const MentionsLegales = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Mentions légales</h2>
      <BlueDivider centered width='50%' />

      <Accordion flush>
        {/* Éditeur du site */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>Éditeur du site</Accordion.Header>
          <Accordion.Body>
            John Doe<br />
            40 rue Laure Diebold<br />
            69009 Lyon, France<br />
            Téléphone : 01 02 03 04 05<br />
            Email : john.doe@gmail.com
          </Accordion.Body>
        </Accordion.Item>

        {/* Hébergeur */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>Hébergeur</Accordion.Header>
          <Accordion.Body>
            alwaysdata<br />
            91 rue du Faubourg Saint-Honoré<br />
            75008 Paris<br />
            Site : <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">www.alwaysdata.com</a>
          </Accordion.Body>
        </Accordion.Item>

        {/* Crédits */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>Crédits</Accordion.Header>
          <Accordion.Body>
            Ce site a été réalisé par John Doe, étudiant de Cauffrie Expérience de formation.<br /><br />
            Les images utilisées sur ce site sont issues des sites suivants et sont libres de droit :
            <ul>
              <li>Pixabay</li>
              <li>Pexels</li>
            </ul>
            La favico de ce site a été créée sur le site John Doe Icon Maker avec l'option « Polices ».
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default MentionsLegales;