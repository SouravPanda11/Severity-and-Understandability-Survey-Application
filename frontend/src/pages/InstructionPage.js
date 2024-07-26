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

    const italicStyle = {
        fontStyle: 'italic',  // This makes the text italic
    };

    const boldStyle = {
        fontWeight: 'bold',  // This makes the text bold
    };

    const pageStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        textAlign: 'left',
        maxWidth: '1100px',
        margin: 'auto',
        marginTop: '50px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
    };

    const sliderContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    };

    const boxStyle = {
        width: '100%',
        padding: '20px',
        marginTop: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        backgroundColor: '#f9f9f9',
    };

    const hrStyle = {
        width: '100%',
        border: 'none',
        height: '2px',
        backgroundColor: '#ccc',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
    };

    const highlightStyle = {
        fontWeight: 'bold', // Bold text
        color: '#007bff',       // Red text color
    };

    return (
        <div style={pageStyle}>
            <h1>Instructions</h1>
            <hr style={hrStyle} />

            {/* Instructions */}
            <ul style={textStyle}>
                <li>The following page contains two sample questions and a text box.</li>
                <li>Each question is accompanied by a slider. Users can adjust the slider by either dragging it or clicking on the slider bar.</li>
                <li>The sliders are initially set at a value of -1, which signifies no interaction.</li>
                <li>A text box is provided where users are required to rephrase the case in their own words.</li>
                <li style={highlightStyle}>To move on to the next page, users must interact with both the sliders and the text box, i.e. adjusting the slider and providing a rewritten case in the text box.</li>
            </ul>
            <hr style={hrStyle} />

            <h1>Section 1: Sample Questions</h1>
            <div style={boxStyle}>
            <h2>Case 1: "Bla, Bla, Bla... " You will get a sample case here, which has 2 question below </h2>

                {/* Question 1 */}
                <div>
                    <p style={textStyle}>
                        <span style={boldStyle}>Question 1 :</span> On a scale of 1-10, how well do you understand this statement?<br />
                        <span style={italicStyle}>
                            (1 means ‘Not understanding the statement at all’ and 10 means ‘Understanding the statement completely’)
                        </span>
                    </p>
                    {/* Slider and its components container */}
                    <div style={sliderContainerStyle}>
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
                            <strong>Selected Value for Question 1: </strong>
                            {sliderValue1 === -1 ? 'No selection' : sliderValue1}
                        </div>
                    </div>
                </div>
                <hr style={hrStyle} />


                {/* Question 2 */}
                <div>
                    <p style={textStyle}>
                        <span style={boldStyle}>Question 2 :</span> According to you, how would you rate the severity of this case?<br />
                        <span style={italicStyle}>
                            (1 means ‘Very critical and Infringing the user's privacy’ and 10 means ‘Completely in favor of the user's privacy’)
                        </span>
                    </p>
                    {/* Slider and its components container */}
                    <div style={sliderContainerStyle}>
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
                            <strong>Selected Value for Question 1: </strong>
                            {sliderValue2 === -1 ? 'No selection' : sliderValue2}
                        </div>
                    </div>
                </div>
            </div>

            <div style={boxStyle}>
                <h2>Case 2: "Bla, Bla,... Bla, Bla" You will get another sample case here, which has 2 questions like the previous one.</h2>
                {/* Question 1 */}
                <div>
                    <p style={textStyle}>
                        <span style={boldStyle}>Question 1 :</span>...<br />
                    </p>
                    {/* Slider and its components container */}
                    <div style={sliderContainerStyle}>
                        <strong>Slider for Question 1: </strong>
                    </div>    
                </div>
                <hr style={hrStyle} />    
                {/* Question 2 */}
                <div>
                    <p style={textStyle}>
                        <span style={boldStyle}>Question 2 :</span>...<br />
                    </p>
                    {/* Slider and its components container */}
                    <div style={sliderContainerStyle}>
                        <strong>Slider for Question 2: </strong>
                    </div>
                </div>
            </div>

            {/* Rewrite Text */}
            <h1>Section 2: Rewrite Section</h1>
            <div style={boxStyle}>
                <div>
                    <p style={textStyle}>
                        <span style={boldStyle}>Task :</span> Rewrite the last case in your own words.<br />
                        <span style={italicStyle}>
                            (For simplicity you can enter anything here. This is just a demo. The minimum character limit here is 2, but in the actual study, it will be 11.)
                        </span>
                    </p>
                    <div style={sliderContainerStyle}>
                        <textarea
                            value={rewriteText}
                            onChange={(e) => setRewriteText(e.target.value)}
                            style={{ width: '70%', height: '100px', margin: '10px 0' }}
                            placeholder="Write your response here"
                        />
                    </div>
                </div>
            </div>

            <div>
                {isNextButtonEnabled ? 
                    <Link to="/information">
                        <button style={nextButtonStyle}>Next</button>
                    </Link> :
                    <button style={nextButtonStyle} disabled>Next</button>
                }
            </div>
        </div>
    );
};




export default InstructionPage;
