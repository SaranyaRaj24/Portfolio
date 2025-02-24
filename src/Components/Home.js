
import React from "react";
import profileImage from "../Assets/me.jpg";

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.photoWrapper}>
        <img src={profileImage} alt="Profile" style={styles.photo} />
      </div>

      <h1 style={styles.heading}>
        Hello, I'm <span style={{ color: "#64ffda" }}>Saranya S.P</span>
      </h1>

      <h4 style={styles.subHeading}>
        I'm a{" "}
        <span style={{ color: "#64ffda", fontWeight: "bold" }}>
          Full Stack Developer
        </span>{" "}
        passionate about building modern and responsive applications with clean
        design and interactive user experiences.
      </h4>

    
    </div>
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

  photoWrapper: {
    width: "270px",
    height: "330px",
    padding: "10px",
    borderRadius: "20px",
    background: "linear-gradient(45deg, #64ffda, #64aaff, #ff64da)",
    boxShadow:
      "0 0 20px rgba(100, 255, 218, 0.8), 0 0 40px rgba(100, 170, 255, 0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
  },

  photo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "15px",
  },

  heading: {
    fontSize: "3rem",
    marginBottom: "20px",
  },

  subHeading: {
    fontSize: "1.5rem",
    maxWidth: "600px",
    textAlign: "center",
    lineHeight: "1.8",
    marginBottom: "20px",
  },

  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#64ffda",
    color: "#000",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "transform 0.3s",
  },
};

export default Home;
