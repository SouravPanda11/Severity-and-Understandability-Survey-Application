import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const contactEmail = "Dr. Jonathan E. Dodge - dodge@psu.edu";
  const contactEmail2 = "Shikha Narendra Soneji - sxs7000@psu.edu";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const textStyle = {
    fontSize: "20px",
  };

  const nextButtonStyle = {
    backgroundColor: "blue",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    marginTop: "20px",
  };

  const cardStyle = {
    textAlign: "left",
    maxWidth: "1100px",
    margin: "50px auto",
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

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  };

  return (
    <main className="Content" style={mainStyle}>
      <div className="card" style={cardStyle}>
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
          Consent for Exempt Research
        </h1>
        <hr style={hrStyle} />

        <p className="card-text" style={{ ...textStyle, textAlign: "center" }}>
          <strong>The Pennsylvania State University</strong>
        </p>

        <p className="card-text" style={textStyle}>
          <strong>Title of Project:</strong> Severity and Understandability: Determining the Usefulness a Taxonomy from "Terms of Service; Didn't Read"
        </p>

        <p className="card-text" style={textStyle}>
          <strong>Principal Investigator:</strong> Jonathan E. Dodge
        </p>

        <p className="card-text" style={textStyle}>
          <strong>Telephone Numbers:</strong> Weekdays: 8:00 a.m. to 5:00 p.m. (814) 865-2260.
        </p>

        <p className="card-text" style={textStyle}>
          You are being invited to volunteer to participate in a research study. This summary explains information about this research.
          <ul>
            <li>This research study is being done to find out how to measure the agency people feel in different situations such as in normal occurrences and/or with a specified technology. We are looking to validate the scales we developed.</li>
            <li>
              Research Study Procedure
              <ul>
                <li>The screening criteria is that you be 18 years or older.</li>
                <li>After this criterion is fulfilled and you accepted consent, you will receive a link to our website.</li>
                <li>At our website, we will randomly provide 5 "cases" to rate severity and understandability.</li>
                <li>We will also ask you to rewrite one of the cases to make it more understandable.</li>
                <li>All questions must have an answer before submitting.</li>
                <li>Filling the survey should take you at most 15 minutes.</li>
                <li>This study will take place through Prolific and our website link, with no direct contact with any study member.</li>
                <li>You may be able to contact a study owner via the Prolific messaging platform.</li>
              </ul>
            </li>
            <li>There is a risk of loss of confidentiality if your information or your identity is obtained by someone other than the investigators, but precautions will be taken to prevent this from happening. The confidentiality of your electronic data created by you or by the researchers will be maintained as required by applicable law and to the degree permitted by the technology used. Absolute confidentiality cannot be guaranteed.</li>
            <li>Information collected in this project may be shared with other researchers, but we will not share any information that could identify you.</li>
            <li>You will receive $3 per 15 minutes for your participation in this research study. If you do not complete the study for any reason, you will be paid for the questionnaires you have completed. If you answer any attention checks incorrectly, you will not receive any payment.</li>
          </ul>
        </p>

        <p className="card-text" style={textStyle}>
          If you have questions, complaints, or concerns about the research, you should contact 
          <ul>
            <li><a href="mailto:dodge@psu.edu">{contactEmail}</a> at (814) 865-2260.</li>
            <li><a href="mailto:sxs7000@psu.edu">{contactEmail2}</a></li>
          </ul> 
          If you have questions regarding your rights as a research subject or concerns regarding your privacy, you may contact the Human Research Protection Program at 814-865-1775.
        </p>
        <p className="card-text" style={textStyle}>
          Your participation is voluntary, and you may decide to stop at any time.<br />
          Your participation implies your voluntary consent to participate in the research.
        </p>

        {/* Navigation Button */}
        <div style={buttonContainerStyle}>
          <Link to="/information">
            <button style={nextButtonStyle}>Next</button>
          </Link>
        </div>

        <p className="card-text" style={{ ...textStyle, textAlign: "center" }}>
          (v.02/08/2023)
        </p>

      </div>
    </main>
  );
};

export default LandingPage;
