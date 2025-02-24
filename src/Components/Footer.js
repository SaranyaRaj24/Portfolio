// src/Components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} MyPortfolio. All Rights Reserved.</p>
      <div style={styles.socialIcons}>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.icon}
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.icon}
        >
          LinkedIn
        </a>
       
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    padding: "2rem 1rem",
    backgroundColor: "#0a192f",
    color: "#fff",
    textAlign: "center",
    borderTop: "1px solid rgba(255, 255, 255, 0.2)",
  },
  socialIcons: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "center",
    gap: "1.5rem",
  },
  icon: {
    color: "#64ffda",
    textDecoration: "none",
    fontSize: "1.2rem",
    transition: "color 0.3s ease",
  },
};

export default Footer;
