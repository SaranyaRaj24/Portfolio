
import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.navLinks}>
        <li>
          <Link to="home" smooth={true} duration={500} style={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} style={styles.link}>
            About
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} style={styles.link}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="Skills" smooth={true} duration={500} style={styles.link}>
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            style={styles.link}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            to="certificate"
            smooth={true}
            duration={500}
            style={styles.link}
          >
            Certificate
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} style={styles.link}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem 2rem", 
    width: "97%",
    height: "75px",
    top: "20px",
    borderRadius: "12px",
    backdropFilter: "blur(15px)",
    background:
      "linear-gradient(135deg, rgba(29, 29, 31, 0.8), rgba(45, 45, 49, 0.8))",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    zIndex: 1000,
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.5)",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "2rem",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "1.3rem",
    cursor: "pointer",
    position: "relative",
    transition: "all 0.3s ease-in-out",
    borderRadius: "8px",
    background: "rgba(255, 255, 255, 0.05)",
    padding: "0.5rem 1rem",
  },
};


const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `
nav ul li a:hover {
  background: rgba(255, 107, 107, 0.2);
  color: #ff6b6b;
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
}
`,
  styleSheet.cssRules.length
);

export default Navbar;




