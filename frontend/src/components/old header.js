import React from 'react';
import logo from "./lapel_shield.png";

const Header = () => {
    const headerStyle = {
      top: 0,
      left: 0,
      width: '100%',
      backgroundColor: '#001e44',
      padding: '10px',
      boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
    };
  
    const imgStyle = {
      maxWidth: '100px',
      height: 'auto',
      marginRight: '10px',
    };
  
    const headerTextStyle = {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      color: '#ffffff', // White for better contrast
    };
  
    return (
      <header style={headerStyle}>
        <img src={logo} alt="Header" className="img" style={imgStyle} />
        <div className="header-text" style={headerTextStyle}>
            <h1>PLAINTEXT: PSU Lab for AI that is Interpretable, Explainable, and Testable</h1>
            <h2>Severity and Understandability Study</h2>
        </div>
      </header>
    );
  };  

export default Header;
