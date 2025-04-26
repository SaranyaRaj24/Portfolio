import React from "react";

const Experience = () => {
  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>Professional Experience</h2>

      <div style={styles.experienceSection}>
        <h3 style={styles.companyName}>
          I-Bacus Tech Solutions Private Ltd, Coimbatore
        </h3>
        <p style={styles.duration}>May 2024 – Present</p>

        <p style={styles.text}>
          As a <span style={styles.highlight}>Full Stack Developer</span> at
          I-Bacus Tech, I have had the opportunity to work on multiple client
          and independent projects, contributing to both the{" "}
          <span style={styles.highlight}>frontend</span> and{" "}
          <span style={styles.highlight}>backend</span> development. My role
          involves collaborating with cross-functional teams to deliver
          high-quality, scalable applications that meet diverse business needs.
        </p>

        <h4 style={styles.subHeading}>Client Projects:</h4>
        <ul style={styles.list}>
          <li>
            <strong>Careersheets:</strong> Developed features that streamline
            career management processes and enhanced user experience.
          </li>
          <li>
            <strong>Journey Analytics:</strong> Journey Analytics Project is a
            data-driven solution aimed at tracking, analyzing, and visualizing
            customer journey data to optimize user experience and engagement. In
            this project, I contributed as part of a collaborative team, where I
            was involved in both frontend and backend development, ensuring
            seamless integration and delivery of the product.
          </li>
          <li>
            <strong>Tech Coach:</strong> Decision coach is a Web Application
            designed to help users make informed decisions by providing
            personalized recommendations and analytics based on user input.
          </li>
        </ul>

        <h4 style={styles.subHeading}>Independent Projects:</h4>
        <ul style={styles.list}>
          <li>
            <strong>Checklist-Genie:</strong> Designed and implemented a robust
            checklist management system with features like template handling and
            real-time updates.
          </li>
          <li>
            <strong>Manohar Jewelry:</strong> Developed a comprehensive
            inventory and billing system tailored to the specific needs of
            jewelry businesses.
          </li>
          <li>
            <strong>RB Chains:</strong> Created custom solutions for supply
            chain management, enhancing operational efficiency.
          </li>
          <li>
            <strong>Jeeva Gold Coins:</strong>As an independent project, I
            developed the Jeeva Gold Project, a comprehensive system designed to
            streamline and optimize the jewelry manufacturing and sales process
            for goldsmiths.
          </li>
        </ul>

        <h4 style={styles.subHeading}>Training & Workshops:</h4>
        <ul style={styles.list}>
          <li>
            Conducted a <strong>Full Stack Development</strong> training at{" "}
            <strong>Christ the King College of Engineering</strong>, Coimbatore,
            training over <span style={styles.highlight}>150+ students</span>.
            The sessions focused on modern web development technologies,
            including React, Node.js, and database management.
          </li>
          <li>
            Delivered training on <strong>Data Analysis</strong> at{" "}
            <strong>Nehru College of Technology</strong>, focusing on tools like{" "}
            <strong>Power BI</strong> and <strong>Tableau</strong>, empowering
            students with data visualization and analytical skills.
          </li>
        </ul>

        <p style={styles.text}>
          Through these experiences, I have honed my skills in both frontend and
          backend development, as well as in mentoring and guiding aspiring
          developers. My work reflects a commitment to building efficient,
          user-friendly applications while fostering a collaborative and
          growth-oriented environment.
        </p>
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
    marginBottom: "30px",
  },
  experienceSection: {
    maxWidth: "800px",
    textAlign: "left",
    lineHeight: "1.8",
  },
  companyName: {
    fontSize: "2rem",
    color: "#64ffda",
    marginBottom: "5px",
  },
  duration: {
    fontSize: "1.2rem",
    color: "#aaa",
    marginBottom: "20px",
  },
  text: {
    fontSize: "1.2rem",
    marginBottom: "20px",
  },
  subHeading: {
    fontSize: "1.5rem",
    color: "#64ffda",
    marginTop: "20px",
    marginBottom: "10px",
  },
  list: {
    fontSize: "1.2rem",
    paddingLeft: "20px",
    marginBottom: "20px",
  },
  highlight: {
    color: "#64ffda",
    fontWeight: "bold",
  },
};

export default Experience;
