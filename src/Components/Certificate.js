
import React from "react";
import { SiUdemy } from "react-icons/si"; 

const Certificate = () => {
  return (
    <section id="certificate" style={styles.container}>
      <h2 style={styles.heading}>My Certifications</h2>

      <div style={styles.certificateCard}>
      
        <div style={styles.logoContainer}>
          <SiUdemy style={styles.logo} />
        </div>

        <div style={styles.details}>
          <h3 style={styles.title}>Full Stack Development Course</h3>
          <p style={styles.platform}>Issued by: Udemy</p>
          <p style={styles.date}>Date of Completion: January 26, 2025</p>
          <p style={styles.credential}>
            Credential ID: <span style={styles.credentialId}>0004</span>
          </p>

          <a
            href="https://www.udemy.com/certificate/UC-aa829f78-c68a-43e3-a604-8f80a56cbef5/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.button}
          >
            View Certificate
          </a>
        </div>
      </div>
    </section>
  );
};


const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(0, 0, 0, 0.6)",
    backdropFilter: "blur(10px)",
    color: "#fff",
    margin: "20px",
    borderRadius: "15px",
    padding: "40px",
  },
  heading: {
    fontSize: "2.5rem",
    color: "#64ffda",
    marginBottom: "13rem",
  },

  certificateCard: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#112240",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    maxWidth: "700px",
    width: "100%",
    marginBottom: "10rem",
    marginTop: "-80px",
  },

  logoContainer: {
    marginRight: "20px",
  },
  logo: {
    fontSize: "5rem",
    color: "#A435F0",
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: "1.8rem",
    marginBottom: "10px",
    color: "#64ffda",
  },
  platform: {
    fontSize: "1.2rem",
    marginBottom: "5px",
    color: "#a8dadc",
  },
  date: {
    fontSize: "1rem",
    marginBottom: "5px",
    color: "#8892b0",
  },
  credential: {
    fontSize: "1rem",
    color: "#ccd6f6",
  },
  credentialId: {
    fontWeight: "bold",
    color: "#64ffda",
  },
  button: {
    marginTop: "15px",
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#64ffda",
    color: "#0a192f",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
};

export default Certificate;
