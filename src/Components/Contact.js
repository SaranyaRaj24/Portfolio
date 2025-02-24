import React from "react";

const Contact = () => {
  return (
    <section id="contact" style={styles.container}>
      <h2 style={styles.heading}>Get in Touch</h2>

      <p style={styles.text}>
        Have a question or want to connect? Feel free to reach out to me via
        email, phone, or WhatsApp.
      </p>

      <div style={styles.contactInfo}>
        <p>
          📧 <strong>Email:</strong>
          <a href="mailto:saranyaraj243@gmail.com" style={styles.link}>
            {" "}
            saranyaraj243@gmail.com
          </a>
        </p>
        <p>
          📱 <strong>Phone:</strong>
          <a href="tel:+919500676768" style={styles.link}>
            {" "}
            +91 9500676768
          </a>
        </p>
        <p>
          💬 <strong>WhatsApp:</strong>
          <a
            href="https://wa.me/919500676768?text=Hello,%20I%20would%20like%20to%20connect!"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            Chat Now
          </a>
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
    textAlign: "center",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
    color: "#64ffda",
  },
  text: {
    fontSize: "1.2rem",
    marginBottom: "1.5rem",
    maxWidth: "600px",
  },
  contactInfo: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
  },
  link: {
    color: "#64ffda",
    textDecoration: "none",
    fontWeight: "bold",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    maxWidth: "500px",
    width: "100%",
  },
  input: {
    padding: "1rem",
    borderRadius: "5px",
    border: "1px solid #64ffda",
    backgroundColor: "#112240",
    color: "#fff",
  },
  textarea: {
    padding: "1rem",
    borderRadius: "5px",
    border: "1px solid #64ffda",
    backgroundColor: "#112240",
    color: "#fff",
  },
  button: {
    padding: "1rem",
    backgroundColor: "#64ffda",
    color: "#0a192f",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background 0.3s ease",
  },
};

export default Contact;
