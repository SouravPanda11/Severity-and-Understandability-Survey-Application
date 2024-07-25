import React, { useState, useEffect } from 'react';
import casesData from '../Cases.json';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    // Function to get 5 random cases
    const getRandomCases = () => {
        let randomCases = [];
        while (randomCases.length < 5) {
            const randomIndex = Math.floor(Math.random() * casesData.length);
            const selectedCase = casesData[randomIndex];
            if (!randomCases.some(c => c.Key === selectedCase.Key)) {
                randomCases.push({ ...selectedCase, id: randomCases.length + 1 });
            }
        }
        return randomCases;
    };

    // Define a list of cases with descriptions
    const [cases, setCases] = useState([]);

    // State to store slider values for each question of each case
    const [sliderValues, setSliderValues] = useState([]);

    // State for rewriting the last case
    const [rewriteText, setRewriteText] = useState('');

    // State for the special question slider value
    const [specialSliderValue, setSpecialSliderValue] = useState(-1);

    // Use the navigate hook to redirect to the thank you page
    const navigate = useNavigate(); 

    const textStyle = {
        fontSize: '20px',
        alignItems: 'left',
    };
    
    // Fetching random cases on component mount
    useEffect(() => {
        const randomCases = getRandomCases();
        setCases(randomCases);
        setSliderValues(randomCases.map(() => ({ q1: -1, q2: -1 })));
    }, []);

    // Slider marks
    const sliderMarks = Array.from({ length: 12 }, (_, i) => i - 1); // Creates an array from -1 to 10

    // Handler to update slider values
    const handleSliderChange = (caseId, question, value) => {
        setSliderValues(prev => {
            const updatedValues = [...prev];
            updatedValues[caseId - 1][question] = value;
            return updatedValues;
        });
    };

    // Handler for changes in the special question slider
    const handleSpecialSliderChange = (value) => {
        setSpecialSliderValue(value);
    };

    // Handler to check if all sliders are interacted with and the text area has enough input
    const isNextButtonEnabled = () => {
        const allSlidersMoved = sliderValues.every(sv => sv.q1 !== -1 && sv.q2 !== -1);
        const textAreaFilled = rewriteText.length >=21;
        return allSlidersMoved && textAreaFilled && specialSliderValue !== -1;
    };

    // Define the Next button style
    const nextButtonStyle = {
        backgroundColor: isNextButtonEnabled() ? '#007bff' : '#ccc',  // Blue when enabled, grey when disabled
        cursor: isNextButtonEnabled() ? 'pointer' : 'default',        // Pointer cursor when enabled, default cursor when disabled
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

    // Function to send data to backend in production server
    const sendDataToBackend = async () => {
        const casesWithSliderValues = cases.map((c, index) => ({
            caseDetails: c,
            sliderValues: sliderValues[index],
        }));

        const payload = {
            casesWithSliderValues,
            specialSlider: specialSliderValue,
            rewriteCase: rewriteText
        };

        try {
            const response = await fetch('https://severityandunderstandability.ist.psu.edu/slider_values', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            console.log(data.message);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    // Use this when running in local Function to send data to backend
    // const sendDataToBackend = async () => {
    //     // Construct an array of objects, each containing case details and slider values
    //     const casesWithSliderValues = cases.map((c, index) => ({
    //         caseDetails: c,
    //         sliderValues: sliderValues[index],
    //     }));

    //     // Construct payload with cases, slider values, special slider, and rewrite case
    //     const payload = {
    //         casesWithSliderValues,
    //         specialSlider: specialSliderValue,
    //         rewriteCase: rewriteText
    //     };

    //     try {
    //         const response = await fetch('http://localhost:5000/slider_values', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify(payload),
    //         });

    //         if (!response.ok) throw new Error('Network response was not ok');
    //         const data = await response.json();
    //         console.log(data.message);
    //     } catch (error) {
    //         console.error('There was a problem with the fetch operation:', error);
    //     }
    // };

    // Handler for Next button click
    const handleNextButtonClick = async () => {
        if (isNextButtonEnabled()) {
            await sendDataToBackend(); // Send the data to backend
            navigate('/thankyou'); // Use navigate to redirect
        }
    };
    

    return (
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column'}}>
            <h1>Main Page</h1>
            {cases.map((c, index) => (
                <div key={c.id} style={{ marginBottom: '40px', width: '100%' }}>
                    <h2>
                        Case {c.id}: {c.case}
                    </h2>
                    
                    {/* Slider 1 for each case */}
                    <p style={textStyle}>
                        Question 1 : On a scale of 1-10, how well do you understand this statement?<br />
                        (1 - not understanding the statement at all, and 10 -  understanding the statement completely)<br />
                    </p>
                    <input 
                        type="range" 
                        min="-1" 
                        max="10" 
                        value={sliderValues[c.id - 1]?.q1}
                        onChange={(e) => handleSliderChange(c.id, 'q1', Number(e.target.value))}
                        style={{ width: '50%', margin: '10px 0' }}
                    />
                    {/* Slider 1 Marks */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%', margin: '0' }}>
                        {sliderMarks.map(mark => (
                            <span key={mark}>{mark}</span>
                        ))}
                    </div>

                    {/* Slider 1 Value Display */}
                    <div style={{ marginBottom: '10px' }}>
                        <strong>Selected Value for Question 1: </strong>
                        {sliderValues[c.id - 1]?.q1 !== -1 ? sliderValues[c.id - 1].q1 : 'No selection'}
                    </div>

                    <br/>

                    {/* Slider 2 for each case */}
                    <p style={textStyle}>
                        Question 2: According to you, how would you rate the severity of this case?<br />
                        (1 being very critical and infringing the user's privacy, and 10 being completely in favor of the user's privacy.)
                    </p>
                    <input 
                        type="range" 
                        min="-1" 
                        max="10" 
                        value={sliderValues[c.id - 1]?.q2}
                        onChange={(e) => handleSliderChange(c.id, 'q2', Number(e.target.value))}
                        style={{ width: '50%', margin: '10px 0' }}
                    />
                    {/* Slider 2 Marks */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%', margin: '0' }}>
                        {sliderMarks.map(mark => (
                            <span key={mark}>{mark}</span>
                        ))}
                    </div>

                    {/* Slider 2 Value Display */}
                    <div style={{ marginBottom: '10px' }}>
                        <strong>Selected Value for Question 2: </strong>
                        {sliderValues[c.id - 1]?.q2 !== -1 ? sliderValues[c.id - 1].q2 : 'No selection'}
                    </div>

                    {/* If it's the third case, add the special section */}
                    {index === 2 && (
                        <div>
                            <p style={textStyle}>Special Question: Please set the slider to position 7</p>
                            <input 
                                type="range" 
                                min="-1" 
                                max="10" 
                                value={specialSliderValue}
                                onChange={(e) => handleSpecialSliderChange(Number(e.target.value))}
                                style={{ width: '50%', margin: '10px 0' }}
                            />
                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%', margin: '0' }}>
                        {sliderMarks.map(mark => (
                            <span key={mark} style={{ textAlign: 'center' }}>{mark}</span>
                        ))}
                    </div>
                            <div style={{ marginBottom: '10px' }}>
                                <strong>Selected Value: </strong>
                                {specialSliderValue !== -1 ? specialSliderValue : 'No selection'}
                            </div>
                        </div>
                    )}

                    {/* If it's the last case, show the text box for rewriting */}
                    {index === cases.length - 1 && (
                        <div>
                            <h2>Rewrite Section:</h2>
                            <p style={textStyle}>
                                Write the last case(Case 5) in your own words. (The text should be at least 21 characters long.)
                            </p>
                            <textarea 
                                value={rewriteText} 
                                onChange={(e) => setRewriteText(e.target.value)}
                                style={{ width: '75%', minHeight: '100px', margin: '10px 0' }}
                            />
                        </div>
                    )}
                </div>
            ))}

            {/* Next button at the bottom */}
            <div>
                {isNextButtonEnabled() ? 
                    <button style={nextButtonStyle} onClick={handleNextButtonClick}>Next</button> :
                    <button style={nextButtonStyle} disabled>Next</button>
                }
            </div>

        </div>
    );
};

export default MainPage;
