import React, { useState, useEffect } from "react";
import casesData from "../Cases.json";
import { useLocation, useNavigate } from "react-router-dom";

const MainPage = () => {
  // Function to get 5 random cases
  const getRandomCases = () => {
    let randomCases = [];
    while (randomCases.length < 5) {
      const randomIndex = Math.floor(Math.random() * casesData.length);
      const selectedCase = casesData[randomIndex];
      if (!randomCases.some((c) => c.Key === selectedCase.Key)) {
        randomCases.push({ ...selectedCase, id: randomCases.length + 1 });
      }
    }
    return randomCases;
  };

  // Define a list of cases with descriptions
  const [cases, setCases] = useState([]);

  // State to store slider values for each question of each case
  const [sliderValues, setSliderValues] = useState([]);

  // State for checkbox values for each question of each case
  const [checkboxValues, setCheckboxValues] = useState([]);

  // State for rewriting the last case
  const [rewriteText, setRewriteText] = useState("");

  // State for the special question slider value
  const [specialSliderValue, setSpecialSliderValue] = useState(-1);

  // Use the navigate hook to redirect to the thank you page
  const navigate = useNavigate();
  const location = useLocation();

  const textStyle = {
    fontSize: "20px",
    alignItems: "left",
  };

  // Fetching random cases on component mount
  useEffect(() => {
    const randomCases = getRandomCases();
    setCases(randomCases);
    setSliderValues(randomCases.map(() => ({ q2: -1 })));
    // Initialize checkboxValues to have a 'q1' property for each case
    setCheckboxValues(randomCases.map(() => ({ q1: null })));
    window.scrollTo(0, 0);
  }, []);  

  // Slider marks
  const sliderMarks = Array.from({ length: 12 }, (_, i) => i - 1); // Creates an array from -1 to 10

  // Handler to update slider values
  const handleSliderChange = (caseId, question, value) => {
    setSliderValues((prev) => {
      const updatedValues = [...prev];
      updatedValues[caseId - 1][question] = value;
      return updatedValues;
    });
  };

  // Handler to update checkbox values
  const handleCheckboxChange = (index, value) => {
    setCheckboxValues(prev => {
      const updatedValues = [...prev];
      // Update the checkbox state based on the provided index and value.
      // This toggles the checkbox value correctly to allow only one selection at a time or to deselect if the same option is clicked again.
      updatedValues[index] = {
        q1: updatedValues[index].q1 === value ? null : value
      };
      return updatedValues;
    });
  }; 

  // Handler for changes in the special question slider
  const handleSpecialSliderChange = (value) => {
    setSpecialSliderValue(value);
  };

  // Handler to check if all sliders are interacted with, all checkboxes are selected, and the text area has enough input
  const isNextButtonEnabled = () => {
    const allSlidersMoved = sliderValues.every((sv) => sv.q2 !== -1);
    const allCheckboxesSelected = checkboxValues.every((cv) => cv.q1 !== null);
    const textAreaFilled = rewriteText.length >= 11;
    return allSlidersMoved && allCheckboxesSelected && textAreaFilled && specialSliderValue !== -1;
  };

  // Define the Next button style
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

  // Function to send data to backend in production server
  const sendDataToBackend = async () => {
    const mainPageResponses = cases.map((c, index) => ({
      caseDetails: c,
      checkboxValue: checkboxValues[index],
      sliderValue: sliderValues[index],
    }));

    const payload = {
        ...location.state, // Include the payload from InformationPage
        mainPageResponses,
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

  // // Use this when running in local Function to send data to backend
  // const sendDataToBackend = async () => {
  //   // Construct an array of objects, each containing case details, checkbox value, and slider values
  //   const mainPageResponses = cases.map((c, index) => ({
  //     caseDetails: c,
  //     checkboxValue: checkboxValues[index],
  //     sliderValue: sliderValues[index],
  //   }));

  //   // Construct payload with cases, slider values, special slider, and rewrite case
  //   const payload = {
  //     ...location.state, // Include the payload from InformationPage
  //     mainPageResponses,
  //     specialSlider: specialSliderValue,
  //     rewriteCase: rewriteText,
  //   };

  //   try {
  //     const response = await fetch("http://localhost:5000/slider_values", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(payload),
  //     });

  //     if (!response.ok) throw new Error("Network response was not ok");
  //     const data = await response.json();
  //     console.log(data.message);
  //   } catch (error) {
  //     console.error("There was a problem with the fetch operation:", error);
  //   }
  // };

  // Handler for Next button click
  const handleNextButtonClick = async () => {
    if (isNextButtonEnabled()) {
      await sendDataToBackend(); // Send the data to backend
      navigate("/thankyou"); // Use navigate to redirect
    }
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

  const caseContainerStyle = {
    width: "100%",
    padding: "20px",
    margin: "0 auto 20px auto",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#fff9e6",
    boxSizing: "border-box",
  };

  const checkboxStyle = {
    width: "20px",
    height: "20px",
    marginRight: "10px",
  };

  return (
    <div style={pageStyle}>
      <h1>Survey Page</h1>
      <hr style={hrStyle} />
      <h1>Section 1: Cases and Questions</h1>

      {/* Display the first 3 cases */}
      {cases.slice(0, 3).map((c, index) => (
        <div key={c.id} style={boxStyle}>
          <div style={caseContainerStyle}>
            <h2>
              Case {c.id}: {c.case}
            </h2>
            <p style={textStyle}>
              <span style={italicStyle}>
                <span style={boldStyle}>Description :</span> {c.definition || "No definition provided."}
              </span>
            </p>
          </div>
          <p style={textStyle}>
            <span style={boldStyle}>Q1:</span> Which party does this case tend to favor?
          </p>
          <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <label style={{ display: "inline-block", marginRight: "10px" }}>
              <input
                type="checkbox"
                checked={checkboxValues[index]?.q1 === "User"}
                onChange={() => handleCheckboxChange(index, "User")}
                style={checkboxStyle}
              />
              <span style={textStyle}>User</span>
            </label>
            <label style={{ display: "inline-block", marginRight: "10px" }}>
              <input
                type="checkbox"
                checked={checkboxValues[index]?.q1 === "Service Provider"}
                onChange={() => handleCheckboxChange(index, "Service Provider")}
                style={checkboxStyle}
              />
              <span style={textStyle}>Service Provider</span>
            </label>
            <label style={{ display: "inline-block", marginRight: "10px" }}>
              <input
                type="checkbox"
                checked={checkboxValues[index]?.q1 === "Neither"}
                onChange={() => handleCheckboxChange(index, "Neither")}
                style={checkboxStyle}
              />
              <span style={textStyle}>Neither</span>
            </label>
          </div>
          <hr style={hrStyle} />

          <p style={textStyle}>
            <span style={boldStyle}>Question 2 :</span> How severe is the benefit/empowerment/favoritism that party gains from this case?
            <br />
            <span style={italicStyle}>
              (1 means ‘Not severe at all’ and 10 means ‘Very severe’)
            </span>
          </p>

          <div style={sliderContainerStyle}>
            {/* Slider 2 for each case */}
            <input
              type="range"
              min="-1"
              max="10"
              value={sliderValues[c.id - 1]?.q2}
              onChange={(e) =>
                handleSliderChange(c.id, "q2", Number(e.target.value))
              }
              style={{ width: "50%", margin: "10px 0" }}
            />
            {/* Slider 2 Marks */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "50%",
                margin: "0",
              }}
            >
              {sliderMarks.map((mark) => (
                <span key={mark}>{mark}</span>
              ))}
            </div>

            {/* Slider 2 Value Display */}
            <div style={{ marginBottom: "10px" }}>
              <strong>Selected Value for Q2: </strong>
              {sliderValues[c.id - 1]?.q2 !== -1
                ? sliderValues[c.id - 1].q2
                : "No selection"}
            </div>
          </div>
        </div>
      ))}

      {/* Special Question Box */}
      <div style={boxStyle}>
        <p style={textStyle}>
          <span style={boldStyle}>Special Question: </span>Set the slider to
          position 7 <br />
          <span style={italicStyle}>
            (This is a special question not related to any case.)
          </span>
        </p>
        <div style={sliderContainerStyle}>
          <input
            type="range"
            min="-1"
            max="10"
            value={specialSliderValue}
            onChange={(e) => handleSpecialSliderChange(Number(e.target.value))}
            style={{ width: "50%", margin: "10px 0" }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "50%",
              margin: "0",
            }}
          >
            {sliderMarks.map((mark) => (
              <span key={mark} style={{ textAlign: "center" }}>
                {mark}
              </span>
            ))}
          </div>
          <div style={{ marginBottom: "10px" }}>
            <strong>Selected Value for Special Question: </strong>
            {specialSliderValue !== -1 ? specialSliderValue : "No selection"}
          </div>
        </div>
      </div>

      {/* Cases 4 and 5 */}
      {cases.slice(3, 5).map((c, index) => (
        <div key={c.id} style={boxStyle}>
          <div style={caseContainerStyle}>
            <h2>
              Case {c.id}: {c.case}
            </h2>
            <p style={textStyle}>
              <span style={italicStyle}>
                <span style={boldStyle}>Description :</span> {c.definition || "No definition provided."}
              </span>
            </p>
          </div>
          <p style={textStyle}>
            <span style={boldStyle}>Q1:</span> Which party does this case tend to favor?
          </p>
          <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <label style={{ display: "inline-block", marginRight: "10px" }}>
              <input
                type="checkbox"
                checked={checkboxValues[index + 3]?.q1 === "User"} // Adjust index to match the correct range
                onChange={() => handleCheckboxChange(index + 3, "User")} // Adjust index to match the correct range
                style={checkboxStyle}
              />
              User
            </label>
            <label style={{ display: "inline-block", marginRight: "10px" }}>
              <input
                type="checkbox"
                checked={checkboxValues[index + 3]?.q1 === "Service Provider"} // Adjust index to match the correct range
                onChange={() => handleCheckboxChange(index + 3, "Service Provider")} // Adjust index to match the correct range
                style={checkboxStyle}
              />
              Service Provider
            </label>
            <label style={{ display: "inline-block", marginRight: "10px" }}>
              <input
                type="checkbox"
                checked={checkboxValues[index + 3]?.q1 === "Neither"} // Adjust index to match the correct range
                onChange={() => handleCheckboxChange(index + 3, "Neither")} // Adjust index to match the correct range
                style={checkboxStyle}
              />
              Neither
            </label>
          </div>
          <hr style={hrStyle} />

          <p style={textStyle}>
            <span style={boldStyle}>Q2:</span> According to you, how would you rate the severity of this case?<br />
            <span style={italicStyle}>(1 means ‘Very critical and Infringing the user's privacy’ and 10 means ‘Completely in favor of the user's privacy’)</span>
          </p>

          <div style={sliderContainerStyle}>
            {/* Slider 2 for each case */}
            <input
              type="range"
              min="-1"
              max="10"
              value={sliderValues[c.id - 1]?.q2}
              onChange={(e) =>
                handleSliderChange(c.id, "q2", Number(e.target.value))
              }
              style={{ width: "50%", margin: "10px 0" }}
            />
            {/* Slider 2 Marks */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "50%",
                margin: "0",
              }}
            >
              {sliderMarks.map((mark) => (
                <span key={mark}>{mark}</span>
              ))}
            </div>

            {/* Slider 2 Value Display */}
            <div style={{ marginBottom: "10px" }}>
              <strong>Selected Value for Q2: </strong>
              {sliderValues[c.id - 1]?.q2 !== -1
                ? sliderValues[c.id - 1].q2
                : "No selection"}
            </div>
          </div>
        </div>
      ))}

      {/* Rewrite Text */}
      <h1>Section 2: Rewrite Case</h1>
      {cases[4] && (
        <div style={boxStyle}>
          <div style={caseContainerStyle}>
            <h2>
              Case {cases[4].id}: {cases[4].case}
            </h2>
            <p style={textStyle}>
              <span style={italicStyle}>
                <span style={boldStyle}>Description :</span> {cases[4].definition || "No definition provided."}
              </span>
            </p>
          </div>
          <div>
            <p style={textStyle}>
              <span style={boldStyle}>Task :</span> Rewrite the last case (Case 5) in your own words.
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
      )}

      {/* Next button at the bottom */}
      <div>
        {isNextButtonEnabled() ? (
          <button style={nextButtonStyle} onClick={handleNextButtonClick}>
            Next
          </button>
        ) : (
          <button style={nextButtonStyle} disabled>
            Next
          </button>
        )}
      </div>
    </div>
  );
};
export default MainPage;
