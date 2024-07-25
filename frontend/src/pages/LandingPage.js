import React from 'react';
import { Link } from 'react-router-dom';


const LandingPage = () => {
    
    // rephrased sections
    const studyIntro = "This survey is a component of a research project conducted by the PlainText laboratory at Penn State's College of IST. It involves examining authentic excerpts from Terms and Conditions documents.";
    const section1Intro = 'The first section requires you to evaluate your comprehension and assess the seriousness of these scenarios.';
    const section2Intro = "In the second section, you'll be asked to paraphrase one of these scenarios using your own words.";
    const consent = "Clicking the 'Next' button indicates your agreement to participate in this study and permits the collection of data based on your responses.";
    const contact = "If you have any inquiries, please feel free to reach out to us at [insert contact information here].";

    const textStyle = {
        fontSize: '20px',
    };

    const nextButtonStyle = {
        backgroundColor: 'blue',  // Blue background
        color: 'white',           // White text
        padding: '15px 32px',     // Padding for larger button size
        textAlign: 'center',      // Center text inside button
        textDecoration: 'none',   // Remove underline
        display: 'inline-block',  // Proper button alignment
        fontSize: '16px',         // Larger font size
        border: 'none',           // Remove border
        borderRadius: '8px',      // Rounded corners
        cursor: 'pointer',        // Cursor pointer on hover
        transition: '0.3s',       // Smooth transition for hover effect
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', // Subtle shadow for depth
        marginTop: '20px',        // Margin space on top
    }

    return (
        <main className="Content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', padding: '20px' }}>
            <h1 style={{ textAlign: 'center' }}>Welcome to the Study!</h1>
            
            {/* Upper Section */}
            <div className="card" style={{ textAlign: 'left', width: '100%', marginBottom: '50px' }}>
                <div className="card-body">
                    <div className='card-section'>
                        <p className="card-text" style={textStyle}>{studyIntro}</p>
                    </div>
                    <div className='card-section'>
                        <p className="card-text" style={textStyle}>{section1Intro}</p>
                    </div>
                    <div className='card-section'>
                        <p className="card-text" style={textStyle}>{section2Intro}</p>
                    </div>
                </div>
            </div>
            
            {/* Middle Section */}
            <div className="card" style={{ textAlign: 'left', width: '100%', marginBottom: '50px' }}>
                <div className="card-body">
                    <div className='card-section'>
                        <p className="card-text" style={textStyle}>{consent}</p>
                    </div>                   
                </div>
            </div>

            {/* Lower Section */}
            <div className="card" style={{ textAlign: 'left', width: '100%' }}>
                <div className="card-body">
                    <div className='card-section'>
                        
                        {/* Contact Info */}
                        <p className="card-text" style={textStyle}>{contact}</p>
                        
                        {/* Consent Form */}
                        <a href='#'>Consent Form</a> 
                    
                    </div>
                    <Link to="/instruction">
                        <button style={nextButtonStyle}>Next</button>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default LandingPage;
