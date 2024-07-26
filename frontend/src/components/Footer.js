import React from "react";

const Footer = () => {
  const footerStyle = {
    width: "100%",
    backgroundColor: "#001e44",
    padding: "20px 40px",
    borderTop: "1px solid #ccc",
    textAlign: "center",
    color: "#ffffff", // White for better contrast
    marginTop: "auto", // Ensures footer sticks to the bottom
  };

  const textStyle = {
    fontSize: "1.2rem",
    margin: "0",
  };

  const h2Style = {
    fontSize: "1.5rem",
    margin: "0",
    fontfamily: "Roboto",
  };

  return (
    <footer style={footerStyle}>
      <div style={textStyle}>
        <span style={h2Style}>
          College of Information Sciences and Technology @ PSU 2024
        </span>
      </div>
    </footer>
  );
};

export default Footer;
