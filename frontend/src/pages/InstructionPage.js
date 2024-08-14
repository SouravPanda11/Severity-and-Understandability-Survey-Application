import React, { useEffect, useState } from "react";
import { useLocation, useNavigate  } from "react-router-dom";

const InstructionPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const informationPageData = location.state;

  const [checkboxValue1, setCheckboxValue1] = useState(null);
  const [sliderValue1, setSliderValue1] = useState(0);
  const [sliderValue2, setSliderValue2] = useState(0);
  const [rewriteText, setRewriteText] = useState("");

  const sliderMarks = Array.from({ length: 11 }, (_, i) => i); // Creates an array from 0 to 10

  const handleCheckboxChange = (value) => {
    setCheckboxValue1(prevValue => prevValue === value ? null : value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // Log the information page data to console
    console.log("Received data from Information Page:", informationPageData);
  }, [informationPageData]);

  const isNextButtonEnabled = () => {
    return checkboxValue1 !== null && 
           sliderValue1 !== 0 && 
           sliderValue2 !== 0 && 
           rewriteText.trim().length >= 2;
  };
  
  // Function to handle button click
  const handleNext = () => {
    if (isNextButtonEnabled()) {
      console.log("Navigating to Main Page with data:", informationPageData);
      navigate('/main', { state: informationPageData });
    }
  };

  const nextButtonStyle = {
    backgroundColor: isNextButtonEnabled() ? "#007bff" : "#ccc", // Blue when enabled, grey when disabled
    cursor: isNextButtonEnabled() ? "pointer" : "default", // Pointer cursor when enabled, default cursor when disabled
    color: "white", // White text
    padding: "15px 32px", // Padding for larger button size
    textAlign: "center", // Center text inside button
    textDecoration: "none", // Remove underline
    display: "inline-block", // Proper button alignment
    fontSize: "16px", // Larger font size
    border: "none", // Remove border
    borderRadius: "8px", // Rounded corners
    transition: "0.3s", // Smooth transition for hover effect
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", // Subtle shadow for depth
    marginTop: "20px", // Margin space on top
  };

  const textStyle = {
    fontSize: "20px",
    alignItems: "left",
  };

  const italicStyle = {
    fontStyle: "italic", // This makes the text italic
  };

  const boldStyle = {
    fontWeight: "bold", // This makes the text bold
  };

  const pageStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    textAlign: "left",
    maxWidth: "1100px",
    margin: "auto",
    marginTop: "50px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
  };

  const sliderContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  };

  const boxStyle = {
    width: "100%",
    padding: "20px",
    marginTop: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    backgroundColor: "#f9f9f9",
  };

  const hrStyle = {
    width: "100%",
    border: "none",
    height: "2px",
    backgroundColor: "#ccc",
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
  };

  const highlightStyle = {
    fontWeight: "bold", // Bold text
    color: "#007bff", // Red text color
  };

  const caseContainerStyle = {
    width: "100%",
    padding: "20px",
    margin: "0 auto 20px auto",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#d1ecff", //Dodger Blue
    boxSizing: "border-box",
  };
  
  const checkboxStyle = {
    width: "20px",
    height: "20px",
    marginRight: "10px",
  };

  return (
    <div style={pageStyle}>
      <h1>Instructions</h1>
      <hr style={hrStyle} />

      {/* Instructions */}
      <ul style={textStyle}>
        <li>This survey is not optimized for mobile view. We recommend both not refreshing the page and viewing it on a desktop or laptop.</li>
        <li>The following page contains three sample questions and a text box.</li>
        <li>Question 1 and 3 includes a slider that you can manipulate by dragging or clicking on the slider bar. The slider is initially set to a value of 0, indicating no interaction.</li>
        <li>Question 2 includes checkboxes for selecting the party that the case favors. Initially, no checkboxes are selected, indicating no interaction. </li>
        <li>The last question includes a text box for you to restate the case using your own words.</li>
        <li>The values in this instructions page are for demonstrational purposes only and will not be stored anywhere. 
          <span style={italicStyle}> (For simplicity you can choose anything here. This is just a demo.)</span>
        </li>
        <li style={highlightStyle}>To move on to the next page, you must interact with the checkboxes, sliders, and the text box <span style={italicStyle}>(i.e. select a checkbox, adjust the sliders, and provide a rewritten case in the text box.)</span></li>
      </ul>
      <hr style={hrStyle} />

      <h1>Section 1: Sample Questions</h1>
      <div style={boxStyle}>
      <div style={caseContainerStyle}>
        <h2>
          Case 1: "Bla, Bla, Bla... " You will get a sample case here, which has 3 questions below
        </h2>
      </div>

      {/* Question 1 */}
      <div>
          <p style={textStyle}>
            <span style={boldStyle}>Question 1 :</span> On a scale of 1 to 10, how well do you understand this statement?
            <br />
            <span style={italicStyle}>
              (1 means ‘Not understanding at all’ and 10 means ‘Understanding the statement completely’)
            </span>
            <br />
            <span style={italicStyle}>
              (1 means ‘Not understanding at all’ and 10 means ‘Understanding the statement completely’)
            </span>
          </p>
          {/* Slider and its components container */}
          <div style={sliderContainerStyle}>
            {/* Slider 1 */}
            <input
              type="range"
              min="0"
              max="10"
              value={sliderValue1}
              onChange={(e) => setSliderValue1(Number(e.target.value))}
              style={{ width: "50%", margin: "10px 0" }}
            />
            {/* Slider 1 Marks */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "50%",
              }}
            >
              {sliderMarks.map((mark) => (
                <span key={mark}>{mark}</span>
              ))}
            </div>
            <br />
            {/* Slider 1 Value */}
            <div style={{ marginBottom: "10px" }}>
              <strong>Selected Value for Question 1: </strong>
              {sliderValue1 === 0 ? "No selection" : sliderValue1}
            </div>
          </div>
        </div>
        <hr style={hrStyle} />

        {/* Question 2 */}
        <div>
          <p style={textStyle}>
            <span style={boldStyle}>Question 2 :</span> Which party does this case tend to favor?
          </p>
          <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <label style={{ display: "inline-block", marginRight: "10px" }}>
              <input
                type="checkbox"
                checked={checkboxValue1 === "User"}
                onChange={() => handleCheckboxChange("User")}
                style={checkboxStyle}
              />
              <span style={textStyle}>User</span>
            </label>
            <label style={{ display: "inline-block", marginRight: "10px" }}>
              <input 
                type="checkbox"
                checked={checkboxValue1 === "Service Provider"}
                onChange={() => handleCheckboxChange("Service Provider")}
                style={checkboxStyle}
              />
              <span style={textStyle}>Service Provider</span>
            </label>
            <label style={{ display: "inline-block", marginRight: "10px" }}>
              <input
                type="checkbox"
                checked={checkboxValue1 === "Neither"}
                onChange={() => handleCheckboxChange("Neither")}
                style={checkboxStyle}
              />
              <span style={textStyle}>Neither</span>
            </label>
          </div>
        </div>
        <hr style={hrStyle} />

        {/* Question 3 */}
        <div>
          <p style={textStyle}>
            <span style={boldStyle}>Question 3 :</span> How severe is the favoritism that party gains from this case?
            <br />
            <span style={italicStyle}>
              (1 means ‘Not severe at all’ and 10 means ‘Very severe’)
            </span>
          </p>
          {/* Slider and its components container */}
          <div style={sliderContainerStyle}>
            {/* Slider 2 */}
            <input
              type="range"
              min="0"
              max="10"
              value={sliderValue2}
              onChange={(e) => setSliderValue2(Number(e.target.value))}
              style={{ width: "50%", margin: "10px 0" }}
            />
            {/* Slider 2 Marks */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "50%",
              }}
            >
              {sliderMarks.map((mark) => (
                <span key={mark}>{mark}</span>
              ))}
            </div>
            <br />
            {/* Slider 2 Value */}
            <div style={{ marginBottom: "10px" }}>
              <strong>Selected Value for Question 3: </strong>
              {sliderValue2 === 0 ? "No selection" : sliderValue2}
            </div>
          </div>
        </div>
      </div>

      <div style={boxStyle}>
      <div style={caseContainerStyle}>
        <h2>
          Case 2: "Bla, Bla ... Bla, Bla" You will get another sample case here, which has 2 questions like the previous one.
        </h2>
      </div>
        
        {/* Question 1 */}
        <div>
          <p style={textStyle}>
            <span style={boldStyle}>Question 1 :</span>...
            <br />
          </p>
          <div style={sliderContainerStyle}>
            <strong>Slider for Question 1: </strong>
          </div>
        </div>
        <hr style={hrStyle} />
        {/* Question 2 */}
        <div>
          <p style={textStyle}>
            <span style={boldStyle}>Question 2 :</span>...
            <br />
          </p>
          <div style={sliderContainerStyle}>
            <strong>Checkboxes for Question 2: </strong>
          </div>
        </div>
        <hr style={hrStyle} />
        {/* Question 2 */}
        <div>
          <p style={textStyle}>
            <span style={boldStyle}>Question 2 :</span>...
            <br />
          </p>
          {/* Slider and its components container */}
          <div style={sliderContainerStyle}>
            <strong>Slider for Question 3: </strong>
          </div>
        </div>
      </div>

      {/* Rewrite Text */}
      <h1>Section 2: Rewrite Section</h1>
      <div style={boxStyle}>
      <div style={caseContainerStyle}>
        <h2>
          Last Case: "Bla, Bla ... Bla, Bla" Another sample case here, which will be same as the last case.
        </h2>
        <p style={textStyle}>
          <span style={italicStyle}>
            <span style={boldStyle}>Description :</span> Description about the case goes here.
          </span>
        </p>
      </div>
        <div>
          <p style={textStyle}>
            <span style={boldStyle}>Task :</span> You will be asked to rewrite the last case in your own words. <br />
            <span style={italicStyle}>(For simplicity you can enter anything here. This is just a demo.)</span>
          </p>
          <div style={sliderContainerStyle}>
            <textarea
              value={rewriteText}
              onChange={(e) => setRewriteText(e.target.value)}
              style={{ width: "70%", height: "100px", margin: "10px 0" }}
              placeholder="Write your response here"
            />
          </div>
        </div>
      </div>

      <button
        style={nextButtonStyle}
        disabled={!isNextButtonEnabled()}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default InstructionPage;
