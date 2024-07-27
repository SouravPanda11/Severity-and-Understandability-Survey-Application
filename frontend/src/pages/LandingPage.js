import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  // rephrased sections
  const studyIntro =
    "This survey is a component of a research project conducted by the PlainText laboratory at Penn State's College of IST. It involves examining authentic excerpts from Terms and Conditions documents.";
  const section1Intro =
    "The first section requires you to evaluate your comprehension and assess the seriousness of these scenarios.";
  const section2Intro =
    "In the second section, you'll be asked to paraphrase one of these scenarios using your own words.";
  const consent =
    "Clicking the 'Next' button indicates your agreement to participate in this study and permits the collection of data based on your responses.";
  const contact =
    "If you have any inquiries, please feel free to reach out to us at ";
  const contactEmail = "Dr. Jonathan Dodge - dodge@psu.edu";
  const contactEmail2 = "Shikha Narendra Soneji - sxs7000@psu.edu";

  const textStyle = {
    fontSize: "20px",
  };

  const nextButtonStyle = {
    backgroundColor: "blue", // Blue background
    color: "white", // White text
    padding: "15px 32px", // Padding for larger button size
    textAlign: "center", // Center text inside button
    textDecoration: "none", // Remove underline
    display: "inline-block", // Proper button alignment
    fontSize: "16px", // Larger font size
    border: "none", // Remove border
    borderRadius: "8px", // Rounded corners
    cursor: "pointer", // Cursor pointer on hover
    transition: "0.3s", // Smooth transition for hover effect
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", // Subtle shadow for depth
    marginTop: "20px", // Margin space on top
  };

  const cardStyle = {
    textAlign: "left",
    maxWidth: "1100px", // Adjust width as needed
    margin: "50px auto", // Center horizontally
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
  };

  const mainStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const hrStyle = {
    width: "100%",
    border: "none",
    height: "2px",
    backgroundColor: "#ccc",
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
  };

  // New Style for button container
  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center', // This will center the button in the flex container
    width: '100%', // Take full width to center content properly
  };

  return (
    <main className="Content" style={mainStyle}>
      <div className="card" style={cardStyle}>
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
          Welcome to the Study!
        </h1>
        <hr style={hrStyle} />

        {/* Study Introduction */}
        <p className="card-text" style={textStyle}>
          {studyIntro}
        </p>
        
        {/* Section 1 Intro */}
        <li className="card-text" style={textStyle}>
          {section1Intro}
        </li>

        {/* Section 2 Intro */}
        <li className="card-text" style={textStyle}>
          {section2Intro}
        </li>

        {/* Consent Statement */}
        <p className="card-text" style={textStyle}>
          {consent}
        </p>

        {/* Contact Info */}
        <p className="card-text" style={textStyle}>
          {contact}
          <ul>
            <li><a href="mailto:dodge@psu.edu">{contactEmail}</a></li>
            <li><a href="mailto:sxs7000@psu.edu">{contactEmail2}</a></li>
          </ul>
        </p>

        {/* Consent Form */}
        <p className="card-text" style={textStyle}>
          <a href="#">Consent Form...TODO</a>
        </p>

        {/* Navigation Button */}
        <div style={buttonContainerStyle}>
          <Link to="/instruction">
            <button style={nextButtonStyle}>Next</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
