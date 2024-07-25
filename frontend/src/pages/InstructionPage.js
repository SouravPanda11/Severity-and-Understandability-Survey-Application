import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const InstructionPage = () => {
    const [sliderValue1, setSliderValue1] = useState(-1);
    const [sliderValue2, setSliderValue2] = useState(-1);
    const [rewriteText, setRewriteText] = useState('');

    const sliderMarks = Array.from({ length: 12 }, (_, i) => i - 1); // Creates an array from -1 to 10
    
    const isNextButtonEnabled = sliderValue1 !== -1 && sliderValue2 !== -1 && rewriteText.trim() !== '';

    const nextButtonStyle = {
        backgroundColor: isNextButtonEnabled ? '#007bff' : '#ccc',  // Blue when enabled, grey when disabled
        cursor: isNextButtonEnabled ? 'pointer' : 'default',        // Pointer cursor when enabled, default cursor when disabled
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

    const textStyle = {
        fontSize: '20px',
        alignItems: 'left',
    };

    const pageStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        padding: '20px',
        textAlign: 'left',
    };

    return (
        <div style={pageStyle}>
            <h1>Instructions</h1>
            {/* Instructions Paragraph */}
            <p style={textStyle}>
                The following page contains a sample case with 2 questions and a text box.<br/><br/>

                Each question is accompanied by a slider. Users can adjust the slider by either dragging it or clicking on the slider bar.<br/> 
                The sliders are initially set at a value of -1, which signifies no interaction.<br/><br/>

                A text box is provided where users are required to rephrase the case in their own words.<br/><br/>

                To move on to the next page, users must interact with both the slider and the text box, adjusting the slider and providing a rewritten case in the text box.<br/><br/>
            </p>
            
            {/* Section 1 */}
            <h2>Section 1 : Sample Case and Questions</h2>
            
            <h3>Sample Case 1: " You will be presented with a sample case statement "</h3>

            {/* Question 1 */}
            <p style={textStyle}>
                Question 1 : On a scale of 1-10, how well do you understand this statement?<br />
                (1 - not understanding the statement at all, and 10 -  understanding the statement completely)<br />
            </p>

            {/* Slider 1 */}
            <input 
                type="range" 
                min="-1" 
                max="10" 
                value={sliderValue1} 
                onChange={(e) => setSliderValue1(Number(e.target.value))}
                style={{ width: '50%', margin: '10px 0' }}
            />
            {/* Slider 1 Marks */}
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%' }}>
                {sliderMarks.map(mark => (
                    <span key={mark}>{mark}</span>
                ))}
            </div>
            
            <br/>

            {/* Slider 1 Value */}
            <div style={{ marginBottom: '10px' }}>
                <strong>Selected Value for Question 1: </strong> {sliderValue1 !== -1 ? sliderValue1 : 'No selection'}
            </div>
            
            {/* Question 2 */}
            <p style={textStyle}>
                Question 2: According to you, how would you rate the severity of this case?<br />
                (1 being very critical and infringing the user's privacy, and 10 being completely in favor of the user's privacy.)
            </p>
            {/* Slider 2 */}
            <input 
                type="range" 
                min="-1" 
                max="10" 
                value={sliderValue2} 
                onChange={(e) => setSliderValue2(Number(e.target.value))}
                style={{ width: '50%', margin: '10px 0' }}
            />
            {/* Slider 2 Marks */}
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%' }}>
                {sliderMarks.map(mark => (
                    <span key={mark}>{mark}</span>
                ))}
            </div>

            <br/>
            {/* Slider 2 Value */}
            <div style={{ marginBottom: '10px' }}>
                <strong>Selected Value for Question 2: </strong> {sliderValue2 !== -1 ? sliderValue2 : 'No selection'}
            </div>

            {/* Section 2 */}
            <h2>Section 2 : Rewrite Section</h2>
            <p style={textStyle}>
                Rewrite the case statement in your own words. (Minimum character limit is 2 characters for this page.)
            </p>

            {/* Rewrite Text */}
            <textarea
                value={rewriteText}
                onChange={(e) => setRewriteText(e.target.value)}
                style={{ width: '70%', height: '100px', margin: '10px 0' }}
                placeholder="Write your response here"
            />

            <div style={{ marginTop: '20px' }}>
                {isNextButtonEnabled ? 
                    <Link to="/main">
                        <button style={nextButtonStyle}>Next</button>
                    </Link> :
                    <button style={nextButtonStyle} disabled>Next</button>
                }
            </div>
        </div>
    );
};

export default InstructionPage;
