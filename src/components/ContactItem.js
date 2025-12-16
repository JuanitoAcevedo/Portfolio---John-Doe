import React from 'react';

const ContactItem = ({ icon: Icon, children }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem'
  }}>
    <Icon style={{
      color: '#003d99',
      marginRight: '0.5rem',
      minWidth: '1.2rem',
      fontSize: '1.2rem'
    }} />
    <span>{children}</span>
  </div>
);

export default ContactItem;