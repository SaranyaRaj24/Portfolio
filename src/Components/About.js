
import React from "react";

const About = () => {
  return (
    <section id="about" style={styles.container}>
      <h2 style={styles.heading}>About Me</h2>
      <p style={styles.text}>
        As a passionate{" "}
        <span style={styles.highlight}>Full Stack Developer</span>, I specialize
        in building dynamic and responsive web applications that provide
        seamless user experiences. With a solid foundation in both
        <span style={styles.sectionHighlight}>Front-end</span> and
        <span style={styles.sectionHighlight}>Back-end</span> technologies, I
        thrive on turning complex problems into elegant solutions.
      </p>

      <h3 style={styles.subHeading}>Technical Skills:</h3>
      <ul style={styles.list}>
        <li>
          <span style={styles.sectionHighlight}>Front-end:</span> Proficient in
          HTML, CSS, and JavaScript, with extensive experience using frameworks
          like ReactJS to create interactive user interfaces.
        </li>
        <li>
          <strong>Styling:</strong> Skilled in responsive design frameworks such
          as Bootstrap and Tailwind CSS, ensuring applications are both visually
          appealing and accessible across devices.
        </li>
        <li>
          <span style={styles.sectionHighlight}>Back-end Development:</span>{" "}
          Experienced in Node.js, developing robust server-side applications
          that drive functionality and performance. Knowledgeable in Express.js
          for building RESTful APIs and managing server-side routing.
        </li>
        <li>
          <strong>Version Control:</strong> Familiar with Git for version
          control, facilitating collaborative development and effective project
          management.
        </li>
        <li>
          <strong>Deployment :</strong> Experience with platforms
          such as Render and Netlify.
        </li>
      </ul>

      <p style={styles.text}>
        I am committed to continuous learning and staying up-to-date with the
        latest industry trends. My collaborative approach and attention to
        detail enable me to work effectively in diverse teams, delivering
        high-quality products that meet client needs.
      </p>
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
    marginBottom: "20px",
  },
  subHeading: {
    fontSize: "2rem",
    color: "#64ffda",
    marginTop: "20px",
    marginBottom: "10px",
  },
  text: {
    fontSize: "1.2rem",
    maxWidth: "800px",
    textAlign: "center",
    lineHeight: "1.8",
    marginBottom: "20px",
  },
  list: {
    fontSize: "1.2rem",
    maxWidth: "800px",
    textAlign: "left",
    lineHeight: "1.8",
    paddingLeft: "20px",
    marginBottom: "20px",
  },
  highlight: {
    color: "#64ffda",
    fontWeight: "bold",
  },
  sectionHighlight: {
    color: "#64ffda",
    fontWeight: "bold",
    fontSize: "1.3rem",
  },
};

export default About;
