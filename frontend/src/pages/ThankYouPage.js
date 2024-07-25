import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouPage = () => {
    const thanks = "Thank you for your participation!";
    const compensationCode = "*Insert Code*";
    const compensationDirections = "Use this code on *website* to redeem your payment. Email *email* if you have issues.";
    const sendoff = "Your responses have been collected. You may now close this window.";

    const textStyle = { textAlign: 'center', fontSize: '20px' };

    const ButtonStyle = {
        backgroundColor: '#007bff',  // Blue when enabled 
        cursor: 'pointer',        // Pointer cursor when enabled, default cursor when disabled
        color: 'white',           // White text
        padding: '15px 32px',     // Padding for larger button size
        textAlign: 'center',      // Center text inside button
        textDecoration: 'none',   // Remove underline
        display: 'inline-block',  // Proper button alignment
        fontSize: '16px',         // Larger font size
        border: 'none',           // Remove border
        borderRadius: '8px',      // Rounded corners
        transition: '0.3s',       // Smooth transition for hover effect
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', // Subtle shadow for depth
        marginTop: '20px',        // Margin space on top
    };

    return (
        <main className="Content" style={{ padding: '20px' }}>

            <h1 style={{ textAlign: 'center' }}>{thanks}</h1>
            
            {/* Upper Section */}
            <div className="card" style={{ textAlign: 'center', width: '100%', marginBottom: '50px' }}>
                <div className="card-body">
                    <div className='card-section'>
                        <p className="card-text" style={textStyle}>Your responses have been recorded.</p>
                    </div>
                </div>
            </div>
            
            {/* Middle Section */}
            <div className="card" style={{ textAlign: 'center', width: '100%', marginBottom: '50px' }}>
                <div className="card-body">
                    <div className='card-section'>
                        <p className="card-text" style={textStyle}>{compensationCode}</p>
                        <p className="card-text" style={textStyle}>{compensationDirections}</p>
                    </div>                   
                </div>
            </div>

            {/* Lower Section */}
            <div className="card" style={{ textAlign: 'center', width: '100%' }}>
                <div className="card-body">
                    <div className='card-section'>
                        <p className="card-text" style={textStyle}>{sendoff}</p>
                        <Link to="/">
                            <button style={ButtonStyle}>Close Window</button>
                        </Link>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default ThankYouPage;
