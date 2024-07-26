import React from 'react';
import logo from "./lapel_shield.png";
import '../global.css';

const Header = () => {
    const headerStyle = {
        width: '100%',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
    };

    const topRowStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#001e44',
        padding: '20px 40px',
        fontfamily:'Roboto',
    };

    const bottomRowStyle = {
        backgroundColor: '#003366',
        color: '#ffffff',
        textAlign: 'center',
        padding: '10px 0',
        fontfamily:'Roboto',
    };

    const logoContainerStyle = {
        display: 'flex',
        alignItems: 'center',
    };

    const imgStyle = {
        maxWidth: '80px',
        height: 'auto',
    };

    const headerTextStyle = {
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        textAlign: 'center',
    };

    const h1Style = {
        fontSize: '2rem',
        margin: '0',
    };

    const h2Style = {
        fontSize: '1.2rem',
        margin: '0',
    };

    const smallTextStyle = {
        fontSize: '1.2rem',
        marginLeft: '20px',
        color: '#ffffff',
    };

    return (
        <header style={headerStyle}>
            <div style={topRowStyle}>
                <div style={logoContainerStyle}>
                    <img src={logo} alt="Penn State Logo" style={imgStyle} />
                    <span style={smallTextStyle}>
                      Penn State <br/>
                      College of Information <br/>
                      Sciences and Technology</span>
                </div>
                <div style={headerTextStyle}>
                    <span style={h1Style}>PLAINTEXT: PSU Lab for AI that is Interpretable, Explainable, and Testable</span>
                </div>
            </div>
            <div style={bottomRowStyle}>
                <span style={h2Style}>Severity and Understandability Study</span>
            </div>
        </header>
    );
};

export default Header;
