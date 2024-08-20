import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const InformationPage = () => {
  const navigate = useNavigate();

  // State to store Prolific ID and other URL parameters
  const [prolificId, setProlificId] = useState("");
  const [sessionId, setSessionId] = useState("");
  const [studyId, setStudyId] = useState("");

  // Extract URL parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const prolificIdFromUrl = urlParams.get("PROLIFIC_PID") || "DefaultProlificID";
    const sessionIdFromUrl = urlParams.get("SESSION_ID") || "";
    const studyIdFromUrl = urlParams.get("STUDY_ID") || "";
    
    console.log("Prolific ID from URL:", prolificIdFromUrl); // Debugging log
    console.log("Session ID from URL:", sessionIdFromUrl); // Debugging log
    console.log("Study ID from URL:", studyIdFromUrl); // Debugging log
    
    setProlificId(prolificIdFromUrl);
    setSessionId(sessionIdFromUrl);
    setStudyId(studyIdFromUrl);
  }, []);


  // Slider states for all questions
  const [sliderValues, setSliderValues] = useState({
    q1: 0,
    q2: 0,
    q3: 0,
    q4: 0,
    q5: 0,
    q6: 0,
    q7: 0,
    q8: 0,
    q9: 0,
    q10: 0,
    q11: 0,
  });
  const [ageRange, setAgeRange] = useState("");
  const [occupation, setOccupation] = useState("");
  const [customOccupation, setCustomOccupation] = useState("");
  const [nationality, setNationality] = useState("");
  const [customNationality, setCustomNationality] = useState("");
  const [checkboxValues, setCheckboxValues] = useState({
    accountHacked: false,
    dataBreach: false,
    receivedRecommendations: false,
    receivedAds: false,
    noRefund: false,
    unexpectedCharges: false,
    accountSuspended: false,
    rightsMisunderstood: false,
    dataMisused: false,
  });
  const [otherCheckbox, setOtherCheckbox] = useState(false);
  const [customResponse, setCustomResponse] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Age range details
  const AGE_RANGES = [
    "18-24",
    "25-34",
    "35-44",
    "45-54",
    "55-64",
    "65-74",
    "75 and above",
  ];

  // Occupation details
  const occupations = [
    {
      category: "Management",
      details: "Managers (all types, like sales, marketing, operations)",
    },
    {
      category: "Business and Finance",
      details: "Accountants, financial analysts, HR specialists",
    },
    {
      category: "Computer and Mathematical",
      details: "Software developers, IT support, data analysts",
    },
    {
      category: "Architecture and Engineering",
      details: "Engineers (civil, mechanical, electrical), architects",
    },
    {
      category: "Science",
      details: "Biologists, chemists, environmental scientists",
    },
    {
      category: "Community and Social Services",
      details: "Social workers, counselors, religious workers",
    },
    { category: "Legal", details: "Lawyers, paralegals, legal assistants" },
    { category: "Education", details: "Teachers, professors, librarians" },
    {
      category: "Arts and Media",
      details: "Artists, writers, designers, journalists",
    },
    {
      category: "Healthcare Practitioners and Technicians",
      details: "Doctors, nurses, pharmacists, lab technicians",
    },
    {
      category: "Protective Services",
      details: "Police officers, firefighters, security guards",
    },
    {
      category: "Food Preparation and Serving",
      details: "Chefs, waiters, bartenders",
    },
    {
      category: "Office and Administrative Support",
      details: "Secretaries, office clerks, customer service representatives",
    },
    {
      category: "Farming, Fishing, and Forestry",
      details: "Farmers, fishers, logging workers",
    },
    {
      category: "Construction and Extraction",
      details: "Construction workers, electricians, plumbers",
    },
    {
      category: "Installation, Maintenance, and Repair",
      details: "Mechanics, electricians, repair workers",
    },
    {
      category: "Transportation and Material Moving",
      details: "Truck drivers, delivery drivers, warehouse workers",
    },
    {
      category: "Sales",
      details: "Retail salespersons, real estate agents, sales representatives",
    },
  ];

  // Nationality options
  const nationalities = [
    "United States",
    "Canada",
    "Mexico",
    "United Kingdom",
    "China",
    "India",
    "Philippines",
    "Germany",
    "Argentina",
    "Brazil",
    "France",
    "Italy",
    "Spain",
  ];

  // Questions details
  const questions = [
    {
      id: "q1",
      text: "How motivated are you to read privacy policies before using an online service to make sure your information is safe?",
      description:
        "(1 means ‘Not motivated at all’ and 10 means ‘Extremely motivated’)",
    },
    {
      id: "q2",
      text: "How likely are you to invest time in understanding privacy policies to avoid potential privacy issues?",
      description: "(1 means ‘Very unlikely’ and 10 means ‘Very likely’)",
    },
    {
      id: "q3",
      text: "Assume you are reviewing a privacy policy, do you focus more on specific sections or a general overview?",
      description:
        "(1 means ‘Focus much more on specific sections’ and 10 means ‘Focus much more on general overview’)",
    },
    {
      id: "q4",
      text: "How confident are you in your ability to manage privacy settings on social media platforms?",
      description:
        "(1 means `Not confident at all’ and 10 means ‘Extremely confident’)",
    },
    {
      id: "q5",
      text: "How comfortable are you with using technologies that protect your privacy, such as virtual private networks (VPNs), or inspect your privacy hygiene, such as Ghostery?",
      description:
        "(1 means ‘Not comfortable at all’ and 10 means ‘Very comfortable’)",
    },
    {
      id: "q6",
      text: "How important is it for you to feel in control of your personal information online?",
      description:
        "(1 means ‘Not important at all’ and 10 means ‘Extremely important’)",
    },
    {
      id: "q7",
      text: "How proactive are you in updating your privacy settings regularly?",
      description:
        "(1 means ‘Never proactive’ and 10 means ‘Always proactive’)",
    },
    {
      id: "q8",
      text: "How comfortable are you with sharing personal information with online services you use regularly?",
      description:
        "(1 means ‘Not comfortable at all’ and 10 means ‘Very comfortable’)",
    },
    {
      id: "q9",
      text: "Despite the risks, how often do you accept terms and conditions before reading them?",
      description: "(1 means ‘Never’ and 10 means ‘Always’)",
    },
    {
      id: "q10",
      text: "How likely are you to take action (e.g., change settings, stop using a service) if you find a privacy policy concerning?",
      description: "(1 means ‘Very unlikely’ and 10 means ‘Very likely’)",
    },
    {
      id: "q11",
      text: "Suppose educational resources or tools were available to help you better understand privacy policies, how much would you be interested to learn more about such resources?",
      description:
        "(1 means ‘Not interested at all’ and 10 means ‘Extremely interested’)",
    },
    // More questions can be added here
  ];

  // Dynamic last question based on the number of questions
  const fixedQuestionCount = 3; // Age, Occupation, and Nationality
  const totalQuestionCount = fixedQuestionCount + questions.length; // Total including dynamic questions

  // Handle changes in sliders, checkboxes, age, and occupation
  const handleSliderChange = (question, value) => {
    setSliderValues((prev) => ({ ...prev, [question]: Number(value) }));
  };
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxValues((prev) => ({ ...prev, [name]: checked }));
  };
  const handleAgeRangeChange = (event) => {
    setAgeRange(event.target.value);
  };
  const handleOccupationChange = (event) => {
    setOccupation(event.target.value);
    if (event.target.value !== "other") {
      setCustomOccupation(""); // Reset custom occupation when changing dropdown
    }
  };

  // Check if next button should be enabled
  const isNextButtonEnabled = () => {
    // Check for age, occupation, and nationality selection
    const basicInfoFilled = ageRange && occupation && nationality &&
      (occupation !== "other" || customOccupation.trim() !== "") &&
      (nationality !== "other" || customNationality.trim() !== "");
  
    // Check if all sliders have been adjusted from the initial position
    const slidersAdjusted = Object.values(sliderValues).every(value => value > 0);
  
    // Check if any checkbox is checked, and handle the case for 'other' checkbox with custom response
    const checkboxesValid = Object.values(checkboxValues).some(value => value) ||
      (otherCheckbox && customResponse.trim() !== "");
  
    // If "Other" checkbox is selected, ensure that the customResponse is not empty
    if (otherCheckbox && customResponse.trim() === "") {
      return false; // Disable button if "Other" is selected but no response is provided
    }
  
    return basicInfoFilled && slidersAdjusted && checkboxesValid;
  };
  

  const handleNext = () => {
    if (isNextButtonEnabled()) {
      let filteredCheckboxValues = {};
      
      // Include all selected checkboxes in the payload
      Object.keys(checkboxValues).forEach(key => {
        if (checkboxValues[key]) {
          filteredCheckboxValues[key] = true;
        }
      });
  
      // Add the custom "other" issue if it is selected and has a non-empty custom response
      if (otherCheckbox && customResponse.trim() !== "") {
        filteredCheckboxValues.otherIssue = customResponse;
      }
      const informationPageResponses = {
        ageRange,
        occupation: occupation !== "other" ? occupation : customOccupation,
        nationality: nationality !== "other" ? nationality : customNationality,
        sliderValues,
        checkboxValues: filteredCheckboxValues,
      };
  
      const payload = {
        informationPageResponses,
        prolificId,
        sessionId,
        studyId,
      };
      console.log("Final Payload being sent to Instruction Page:", payload);
      navigate("/instruction", { state: payload });
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
    fontStyle: "italic",
  };

  const boldStyle = {
    fontWeight: "bold",
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

  return (
    <div style={pageStyle}>
      <h1>Demographic Information</h1>
      <ul style={{ ...textStyle, textAlign: "center" }}>
        Please answer the following questions to help us understand your demographic information.<br />
        All questions are mandatory, and your responses will be kept confidential.
      </ul>
      <ul style={textStyle}>
        <li>This survey is not optimized for mobile view. We recommend both not refreshing the page and viewing it on a desktop or laptop.</li>
        <li>For the slider questions, you can adjust the slider by dragging the slider button or clicking on the slider bar. The slider is initially set to 0, indicating no interaction.</li>
        <li>For the age question, you can select only one option from the dropdown menu.</li>
        <li>For the occupation question, you can select only one option from the dropdown menu. If you select the 'Other' option, you must provide a brief description of your occupation in the text box.</li>
        <li>For the nationality question you can select only one option from the dropdown menu. If you select the 'Other' option, you must provide a brief description</li> 
        <li>For the last question, you can select multiple checkboxes if you have experienced more than one issue. If you select the 'Other' checkbox, you must provide a brief description of your experience(s) in the text box.</li>
        <li>The ProlificIDs are saved for payment purposes.</li>
        <li style={highlightStyle}>To move on to the next page, you have to interact with each question. <span style={italicStyle}>(i.e., Choose appropriate options, adjust the sliders, and select appropriate checkboxes)</span></li>
      </ul>
      <hr style={hrStyle} />

      {/* Prolific ID Question */}
      <div style={boxStyle}>
        <label style={textStyle}>
          <strong>Is this your Prolific ID?</strong>
        </label>
        <input
          type="text"
          value={prolificId}
          readOnly
          style={{ width: "100%", padding: "8px", marginTop: "10px" }}
        />
      </div>

      {/* Age Question */}
      <div style={boxStyle}>
        <p style={textStyle}>
          <span style={boldStyle}>Question 1: </span>What is your age?
        </p>
        {AGE_RANGES.map((range) => (
          <div key={range} style={{ margin: "5px 0" }}>
            <label style={textStyle}>
              <input
                type="radio"
                name="ageRange"
                value={range}
                checked={ageRange === range}
                onChange={handleAgeRangeChange}
              />
              {range}
            </label>
          </div>
        ))}
      </div>

      {/* Occupation Question */}
      <div style={boxStyle}>
        <p style={textStyle}>
          <span style={boldStyle}>Question 2: </span>What is your occupation?
        </p>
        <select
          name="occupation"
          value={occupation}
          onChange={handleOccupationChange}
          style={{ width: "100%", padding: "8px", margin: "10px 0" }}
        >
          <option value="" style={textStyle}>Select your occupation</option>
          {occupations.map((occ, index) => (
            <option key={index} value={occ.category} style={textStyle}>
              {`${occ.category} - ${occ.details}`}
            </option>
          ))}
          <option value="other" style={textStyle}>Other (Please specify)</option>
        </select>
        {occupation === "other" && (
          <input
            type="text"
            value={customOccupation}
            onChange={(e) => setCustomOccupation(e.target.value)}
            placeholder="Describe your occupation"
            style={{ width: "100%", padding: "8px" }}
          />
        )}
      </div>

      {/* Nationality Question */}
      <div style={boxStyle}>
        <p style={textStyle}>
          <span style={boldStyle}>Question 3:</span>What is your Nationality?
        </p>
        <select
          name="nationality"
          value={nationality}
          onChange={(e) => {
            setNationality(e.target.value);
            setCustomNationality(""); // Reset custom nationality when changing dropdown
          }}
          style={{ width: "100%", padding: "8px", margin: "10px 0" }}
        >
          <option value="" style={textStyle}>
            Select your nationality
          </option>
          {nationalities.map((nation, index) => (
            <option key={index} value={nation} style={textStyle}>
              {nation}
            </option>
          ))}
          <option value="other" style={textStyle}>
            If none of the above, self-describe
          </option>
        </select>
        {nationality === "other" && (
          <input
            type="text"
            value={customNationality}
            onChange={(e) => setCustomNationality(e.target.value)}
            placeholder="Describe your nationality"
            style={{ width: "100%", padding: "8px" }}
          />
        )}
      </div>

      {/* Slider Questions */}
      {questions.map(({ id, text, description }) => (
        <div key={id} style={boxStyle}>
          <p style={textStyle}>
            <span style={boldStyle}>{`Question ${
              parseInt(id.slice(1)) + 3
            }: `}</span>
            {text}
            <br />
            <span style={italicStyle}>{description}</span>
          </p>
          <div style={sliderContainerStyle}>
            <input
              type="range"
              min="0"
              max="10"
              value={sliderValues[id]}
              onChange={(e) => handleSliderChange(id, e.target.value)}
              style={{ width: "50%", margin: "10px 0" }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "50%",
              }}
            >
              {Array.from({ length: 11 }, (_, i) => i).map((mark) => (
                <span key={mark}>{mark}</span>
              ))}
            </div>
            <div style={{ marginBottom: "10px" }}>
              <strong>
                Selected Value for Question {parseInt(id.slice(1)) + 3}:{" "}
              </strong>
              {sliderValues[id] === 0 ? "No selection" : sliderValues[id]}
            </div>
          </div>
        </div>
      ))}

      {/* Checkbox Question */}
      <div style={boxStyle}>
        <div style={textStyle}>
          <p>
            <span style={boldStyle}>Question {totalQuestionCount + 1}: </span>
            Have you ever had any of the following negative experiences due to
            not understanding or not reading a privacy policy?
            <br />
            <span style={italicStyle}>
              (E.g., Account getting hacked, Data used elsewhere, Account
              discontinued, no refund, etc.)
            </span>
          </p>
          <label>
            <input
              type="checkbox"
              name="accountHacked"
              checked={checkboxValues.accountHacked}
              onChange={handleCheckboxChange}
            />{" "}
            Account Hacked
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="dataBreach"
              checked={checkboxValues.dataBreach}
              onChange={handleCheckboxChange}
            />{" "}
            Data Breach
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="receivedRecommendations"
              checked={checkboxValues.receivedRecommendations}
              onChange={handleCheckboxChange}
            />{" "}
            Received recommendations without opting-in
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="receivedAds"
              checked={checkboxValues.receivedAds}
              onChange={handleCheckboxChange}
            />{" "}
            Received personalized ads without opting-in
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="noRefund"
              checked={checkboxValues.noRefund}
              onChange={handleCheckboxChange}
            />{" "}
            Failed to obtain a refund
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="unexpectedCharges"
              checked={checkboxValues.unexpectedCharges}
              onChange={handleCheckboxChange}
            />{" "}
            Observed unexpected charges
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="accountSuspended"
              checked={checkboxValues.accountSuspended}
              onChange={handleCheckboxChange}
            />{" "}
            Account suspended/terminated
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="rightsMisunderstood"
              checked={checkboxValues.rightsMisunderstood}
              onChange={handleCheckboxChange}
            />{" "}
            Misunderstood your rights or responsibilities
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="dataMisused"
              checked={checkboxValues.dataMisused}
              onChange={handleCheckboxChange}
            />{" "}
            Data Misused in some other way
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="other"
              checked={otherCheckbox}
              onChange={(e) => setOtherCheckbox(e.target.checked)}
            />{" "}
            Other (Please specify)
          </label>
          <br />
          {otherCheckbox && (
            <input
              type="text"
              value={customResponse}
              onChange={(e) => setCustomResponse(e.target.value)}
              placeholder="Describe your experience"
              style={{ width: "100%", padding: "8px" }}
            />
          )}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        style={nextButtonStyle}
        disabled={!isNextButtonEnabled()}
      >
        Next
      </button>
    </div>
  );
};

export default InformationPage;
