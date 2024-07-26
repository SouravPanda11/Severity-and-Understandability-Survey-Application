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

    const cardStyle = {
        textAlign: 'left',
        maxWidth: '1100px',  // Adjust width as needed
        margin: '50px auto',  // Center horizontally
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
    };

    const mainStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
    };

    const hrStyle = {
        width: '100%',
        border: 'none',
        height: '2px',
        backgroundColor: '#ccc',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
    };

    return (
        <main className="Content" style={mainStyle}>
            <div className="card" style={cardStyle}>
                <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Welcome to the Study!</h1>
                <hr style={hrStyle} />
                
                {/* Study Introduction */}
                <p className="card-text" style={textStyle}>{studyIntro}</p>
                
                {/* Section 1 Intro */}
                <p className="card-text" style={textStyle}>{section1Intro}</p>
                
                {/* Section 2 Intro */}
                <p className="card-text" style={textStyle}>{section2Intro}</p>
                
                {/* Consent Statement */}
                <p className="card-text" style={textStyle}>{consent}</p>
                
                {/* Contact Info */}
                <p className="card-text" style={textStyle}>{contact}</p>
                
                <a href='#' style={{ textDecoration: 'none', color: 'blue', marginBottom: '20px' }}>Consent Form</a>
                
                {/* Navigation Button */}
                <Link to="/instruction">
                    <button style={nextButtonStyle}>Next</button>
                </Link>
            </div>
        </main>
    );
}

export default LandingPage;