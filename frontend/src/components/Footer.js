import React from 'react';

const Footer = () => {
  const footerStyle = {
    width: '100%',
    backgroundColor: '#001e44',
    padding: '10px',
    borderTop: '1px solid #ccc',
    textAlign: 'center',
  };
  
  const textStyle = {
    fontSize: '14px',
    color: '#ffffff', // White for better contrast
  };  

  return (
    <footer style={footerStyle}>
      <div style={textStyle}>
        <h2>College of Information Sciences and Technology @ PSU 2024</h2>
      </div>
    </footer>
  );
};

export default Footer;