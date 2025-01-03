import React, { useEffect } from "react";

const ThankYouPage = () => {
  const thanks = "Thank you for your participation!";
  const sendoff = "Your responses have been collected. You may now close this window.";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ButtonStyle = {
    backgroundColor: "#007bff", // Blue when enabled
    cursor: "pointer", // Pointer cursor when enabled, default cursor when disabled
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
    padding: "20px",
  };

  const textStyle = {
    fontSize: "20px",
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

  // Function to handle redirection to Prolific
  const redirectToProlific = () => {
    window.location.href = "https://app.prolific.com/submissions/complete?cc=CHLM6V30";
  };

  return (
    <main className="Content" style={mainStyle}>
      <div className="card" style={cardStyle}>
        <h1 style={{ textAlign: "center" }}>{thanks}</h1>
        <hr style={hrStyle} />
        
        <p className="card-text" style={textStyle}>
          {sendoff}
        </p>
        <div style={buttonContainerStyle}>
        <button onClick={redirectToProlific} style={ButtonStyle}>
          Return back to Prolific
        </button>
        </div>
        
      </div>
    </main>
  );
};

export default ThankYouPage;
