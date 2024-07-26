import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InformationPage = () => {
    const navigate = useNavigate();

    // Slider states for all questions
    const [sliderValues, setSliderValues] = useState({
        q1: 0, q2: 0, q3: 0, q4: 0, q5: 0, q6: 0, q7: 0, q8: 0, q9: 0, q10: 0, q11: 0, q12: 0
    });

    // Questions details
    const questions = [
        {
            id: 'q1',
            text: 'How motivated are you to read privacy policies before using an online service to make sure your information is safe?',
            description: '(1 means ‘Not motivated at all’ and 10 means ‘Extremely motivated’)'
        },
        {
            id: 'q2',
            text: 'How likely are you to invest time in understanding privacy policies to avoid potential privacy issues?',
            description: '(1 means ‘Very unlikely’ and 10 means ‘Very likely’)'
        },
        {
            id: 'q3',
            text: 'Assume you are reviewing a privacy policy, do you focus more on specific sections or a general overview?',
            description: '(1 means ‘Focus much more on specific sections’ and 10 means ‘Focus much more on general overview’)'
        },
        {
            id: 'q4',
            text: 'How confident are you in your ability to manage privacy settings on social media platforms?',
            description: '(1 means `Not confident at all’ and 10 means ‘Extremely confident’)'
        },
        {
            id: 'q5',
            text: 'How comfortable are you with using technologies that protect your privacy, such as virtual private networks (VPNs), or inspect your privacy hygiene, such as Ghostery?',
            description: '(1 means ‘Not comfortable at all’ and 10 means ‘Very comfortable’)'
        },
        {
            id: 'q6',
            text: 'How important is it for you to feel in control of your personal information online?',
            description: '(1 means ‘Not important at all’ and 10 means ‘Extremely important’)'
        },
        {
            id: 'q7',
            text: 'How proactive are you in updating your privacy settings regularly?',
            description: '(1 means ‘Never proactive’ and 10 means ‘Always proactive’)'
        },
        {
            id: 'q8',
            text: 'How comfortable are you with sharing personal information with online services you use regularly?',
            description: '(1 means ‘Not comfortable at all’ and 10 means ‘Very comfortable’)'
        },
        {
            id: 'q9',
            text: 'Despite the risks, how often do you accept terms and conditions before reading them?',
            description: '(1 means ‘Never’ and 5 means ‘Always’)'
        },
        {
            id: 'q10',
            text: 'How likely are you to take action (e.g., change settings, stop using a service) if you find a privacy policy concerning?',
            description: '(1 means ‘Very unlikely’ and 10 means ‘Very likely’)'
        },
        {
            id: 'q11',
            text: 'How likely are you to invest time in understanding privacy policies to avoid potential privacy issues?',
            description: '(1 means ‘Very unlikely’ and 10 means ‘Very likely’)'
        },
        {
            id: 'q12',
            text: 'Suppose educational resources or tools were available to help you better understand privacy policies, how much would you be interested to learn more about such resources?',
            description: '(1 means ‘Not interested at all’ and 10 means ‘Extremely interested’)'
        },
        // More questions can be added here
    ];

    // Function to handle slider change
    const handleSliderChange = (question, value) => {
        setSliderValues(prev => ({
            ...prev,
            [question]: Number(value)
        }));
    };


    const [checkboxValues, setCheckboxValues] = useState({
        accountHacked: false,
        dataBreach: false,
        receivedRecommendations: false,
        receivedAds: false,
        noRefund: false,
        unexpectedCharges: false,
        accountSuspended: false,
        rightsMisunderstood: false,
        dataMisused: false
    });
    
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckboxValues(prev => ({
            ...prev,
            [name]: checked
        }));
    };
    

    // Check if the next button should be enabled (all sliders must be greater than 0)
    const isNextButtonEnabled = Object.values(sliderValues).every(value => value > 0) &&
                            Object.values(checkboxValues).some(value => value === true);

    const nextButtonStyle = {
        backgroundColor: isNextButtonEnabled ? '#007bff' : '#ccc',
        cursor: isNextButtonEnabled ? 'pointer' : 'default',
        color: 'white',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        border: 'none',
        borderRadius: '8px',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        marginTop: '20px',
    };

    const textStyle = {
        fontSize: '20px',
        alignItems: 'left',
    };

    const italicStyle = {
        fontStyle: 'italic',
    };

    const boldStyle = {
        fontWeight: 'bold',
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
    
    // Navigate to next page with slider values
    // const handleNext = () => {
    //     if (isNextButtonEnabled) {
    //         navigate('/main', { state: { sliderValues, checkboxValues } });
    //     }
    // };

    const handleNext = () => {
        if (isNextButtonEnabled) {
            // Construct the final payload
            const payload = {
                sliderValues,
                checkboxValues
            };
    
            // Log the final payload
            console.log("Final Payload being sent to Main Page:", payload);
    
            // Navigate to the Main Page with the state
            navigate('/main', { state: payload });
        }
    };
    

    return (
        <div style={pageStyle}>
            <h1>Information Page</h1>
            {questions.map(({ id, text, description }) => (
                <div key={id} style={{ width: '100%' }}>
                    <p style={textStyle}>
                        <span style={boldStyle}>{`Question ${id.slice(1)}: `}</span>{text}<br />
                        <span style={italicStyle}>{description}</span>
                    </p>
                    <div style={sliderContainerStyle}>
                        <input 
                            type="range" 
                            min="0" 
                            max="10" 
                            value={sliderValues[id]} 
                            onChange={(e) => handleSliderChange(id, e.target.value)}
                            style={{ width: '50%', margin: '10px 0' }}
                        />
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%' }}>
                            {Array.from({ length: 11 }, (_, i) => i).map(mark => (
                                <span key={mark}>{mark}</span>
                            ))}
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <strong>Selected Value for Question {id.slice(1)}: </strong>
                            {sliderValues[id] === 0 ? 'No selection' : sliderValues[id]}
                        </div>
                    </div>
                </div>
            ))}

            <div>
                <p style={textStyle}>
                    <span style={boldStyle}>{`Question 13: `}</span>Have you ever had any of the following negative experiences due to not understanding or not reading a privacy policy?<br />
                    <span style={italicStyle}>(E.g., Account getting hacked, Data used elsewhere, Account discontinued, no refund, etc.)</span>
                </p>
                <label><input type="checkbox" name="accountHacked" checked={checkboxValues.accountHacked} onChange={handleCheckboxChange} /> Account Hacked</label><br/>
                <label><input type="checkbox" name="dataBreach" checked={checkboxValues.dataBreach} onChange={handleCheckboxChange} /> Data Breach</label><br/>
                <label><input type="checkbox" name="receivedRecommendations" checked={checkboxValues.receivedRecommendations} onChange={handleCheckboxChange} /> Received recommendations without opting-in</label><br/>
                <label><input type="checkbox" name="receivedAds" checked={checkboxValues.receivedAds} onChange={handleCheckboxChange} /> Received personalized ads without opting-in</label><br/>
                <label><input type="checkbox" name="noRefund" checked={checkboxValues.noRefund} onChange={handleCheckboxChange} /> Failed to obtain a refund</label><br/>
                <label><input type="checkbox" name="unexpectedCharges" checked={checkboxValues.unexpectedCharges} onChange={handleCheckboxChange} /> Observed unexpected charges</label><br/>
                <label><input type="checkbox" name="accountSuspended" checked={checkboxValues.accountSuspended} onChange={handleCheckboxChange} /> Account suspended/terminated</label><br/>
                <label><input type="checkbox" name="rightsMisunderstood" checked={checkboxValues.rightsMisunderstood} onChange={handleCheckboxChange} /> Misunderstood your rights or responsibilities</label><br/>
                <label><input type="checkbox" name="dataMisused" checked={checkboxValues.dataMisused} onChange={handleCheckboxChange} /> Data Misused in some other way</label><br/>
            </div>


            <button onClick={handleNext} style={nextButtonStyle} disabled={!isNextButtonEnabled}>
                Next
            </button>
        </div>
    );
};

export default InformationPage;
