
import React from "react";
import journeyAnalyticsImage from "../Assets/JA.jpg";
import checklistGenieImage from "../Assets/genie.jpg";
import manoharJewelryImage from "../Assets/rb.jpg";
import decisionCoachImage from "../Assets/decision.png";
import rbChainsImage from "../Assets/rb bg.jpg";
import jeevaImage from "../Assets/jeeva.jpg";

const projects = [
  {
    title: "Journey Analytics",
    description:
      "Journey Analytics Project is a data-driven solution aimed at tracking, analyzing, and visualizing customer journey data to optimize user experience and engagement. In this project, I contributed as part of a collaborative team, where I was involved in both frontend and backend development, ensuring seamless integration and delivery of the product. On the frontend, I worked on designing and implementing user-friendly interfaces, making it easier for stakeholders to interact with and visualize data. This involved using modern frontend technologies to display detailed customer journey data in an intuitive and accessible manner, leveraging interactive charts, graphs, and real-time data updates. On the backend, My work involved ensuring that data flows smoothly from the client to the server and is processed efficiently, leveraging technologies like Node.js and databases for storing and querying journey data. Additionally, I helped optimize performance, addressing any bottlenecks in both the frontend and backend, ensuring that the application ran smoothly even with large datasets. Throughout the project, I collaborated closely with cross-functional teams, ensuring that both the technical and business requirements were met while keeping user experience at the forefront of all decisions. My involvement in this end-to-end process allowed me to deepen my skills in both full-stack development and data-driven decision-making.",
    image: journeyAnalyticsImage,
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "Mysql",
      "Material UI",
    ],
  },
  {
    title: "Cheklist-Genie",
    description:
      "Checklist Genie is a web-based application that allows organizations to create, assign, and track checklist templates. It provides an efficient way for users to fill out and submit checklists, with automatic email notifications triggered upon submission. Built using Node.js and React.js, the backend utilizes Node mailer to send email notifications with the completed checklist details. Users can access their assigned checklists, fill them out, and submit them for review, while administrators can manage templates, assignments, and track progress via a dashboard. The platform enhances workflow, accountability, and communication by automating checklist management and submission processes. Future enhancements may include mobile app support, task reminders, and collaboration features.",
    image: checklistGenieImage,
    technologies: [
      "Javascript",
      "React",
      "Node",
      "Express.js",
      "Nodemailer",
      "JWT",
      "Bootstrap",
    ],
  },
  {
    title: "Manohar Jewelry",
    description:
      "Manohar Jewelry Project is a comprehensive solution designed to streamline various aspects of the jewelry business, including customer management, billing, and reporting. As a Full Stack Developer, I worked on the development of key features, such as the customer registration system, billing process, and report generation functionalities, using both frontend and backend technologies. The system also integrates webcam functionality, allowing users to capture clear images of jewelry items for better product visibility and enhanced catalog management. Additionally, I contributed to the company's branding by designing their official logo, ensuring it reflects their identity and values. A major highlight of the project was implementing a QR code generation feature, specifically for the jewelry products, which included bulk QR printing for easy inventory management and tracking. The QR codes linked directly to product details, making it easier for both the sales team and customers to access jewelry information quickly. Moreover, I provided on-site client support for the initial project setup, ensuring smooth deployment and addressing any technical requirements. This hands-on approach allowed me to optimize the system according to the client's needs, ensuring both functionality and user experience were top-notch.",
    image: manoharJewelryImage,
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "QR Code Generation",
      "Webcam API",
    ],
  },
  {
    title: "Decision-Coach",
    description:
      "Decision coach is a Web Application designed to help users make informed decisions by providing personalized recommendations and analytics based on user input. Designed and implemented responsive user interfaces using HTML,CSS and Javascript. Utilized frameworks such as ReactJS to build dynamic and interactive features. Also used various components such as Material UI , Bootstrap and React icons for better styling and for attractive user interface. Successfully developed and deployed Decision-coach to the render platform.",
    image: decisionCoachImage,
    technologies: [
      "React.js",
      "Material UI",
      "Bootstrap",
      "React Icons",
      "HTML5",
      "CSS3",
      "JavaScript (ES6)",
    ],
  },
  {
    title: "RB Chains",
    description:
      "RB Chains is a comprehensive Jewelry Management System designed to handle the end-to-end operations of a jewelry business. Developed using React.js for the frontend and Node.js for the backend, the system ensures seamless management of lot processing, customer details, billing, daily reports, lot-wise reports, customer transactions, and product details. The application provides a robust lot management system where each lot is assigned a unique identifier, allowing for efficient tracking and integration with various business operations, including product entries, invoicing, and reporting.\n\nThe system features a dedicated customer management module that maintains a detailed database of customers, tracking their purchase history and transactions with ease. The billing and invoicing functionality is designed to accommodate both customers and business parties, ensuring smooth and accurate financial transactions. The system follows a structured URL format to enhance navigation, enabling quick access to billing details based on date, bill number, and bill type. Additionally, the application supports the generation of detailed reports, including daily transaction summaries and lot-wise reports, which can be exported as PDFs for business analysis and record-keeping.\n\nProduct management is another critical aspect of the system, allowing businesses to maintain a catalog of jewelry products with all necessary specifications. The integration of barcode generation and scanning facilitates quick product lookup and inventory tracking. When a barcode is scanned, the system automatically fetches the corresponding product details, streamlining inventory management and reducing manual errors. The customer transaction module ensures that all purchases and payments are recorded in real time, providing transparency and easy retrieval of transaction history. Receipts and reports are generated to maintain an organized financial overview.\n\nThe application leverages a powerful tech stack, including React.js with Material-UI for an intuitive user interface, Node.js with Express.js for efficient API handling, and Prisma ORM for database management. Additional integrations, such as Chart.js for data visualization and PDF export capabilities, further enhance the functionality of the system. The UI is optimized with interactive components, making it easy to input data, filter reports, and navigate through various sections. By automating critical jewelry business workflows, RB Chains significantly reduces manual effort, improves accuracy, and enhances overall operational efficiency, making it a valuable tool for jewelry businesses.",
    image: rbChainsImage,
    technologies: [
      "MERN Stack",
      "Material UI",
      "Prisma ORM",
      "Chart.js",
      "PDF Generation",
      "Barcode Scanner Integration",
    ],
  },
  {
    title: "Jeeva Gold Coins",
    description:
      "As an independent project, I developed the Jeeva Gold Project, a comprehensive system designed to streamline and optimize the jewelry manufacturing and sales process for goldsmiths. This project encompasses job card design, stock management, billing, and report generation, incorporating complex mathematical calculations specific to the gold industry, such as weight, purity, and pricing. Utilizing skills in both Front end and Backend Development, I created a user-friendly interface for efficient data entry and retrieval, improving workflow and reducing manual errors. The system includes features like detailed job card creation, accurate inventory tracking of gold and stones, automated billing with material and labor calculations, and the generation of insightful sales and production reports. This project demonstrates my ability to analyze industry-specific needs, develop practical solutions, and apply mathematical principles to real-world scenarios, showcasing my proficiency in both development and business analysis within the specialized jewelry sector.",
    image: jeevaImage,
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "Prisma ORM",
      "Material UI",
      "Mathematical Calculation Modules",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" style={styles.container}>
      <h2 style={styles.heading}>My Projects</h2>
      <div style={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} style={styles.card}>
            <img src={project.image} alt={project.title} style={styles.image} />
            <h3 style={styles.title}>{project.title}</h3>
            <div style={styles.techContainer}>
              {project.technologies.map((tech, i) => (
                <span key={i} style={styles.techPill}>
                  {tech}
                </span>
              ))}
            </div>
            <p style={styles.description}>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
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
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    width: "100%",
    maxWidth: "1200px",
  },
  card: {
    background: "rgba(255, 255, 255, 0.1)",
    padding: "20px",
    borderRadius: "10px",
    transition: "transform 0.3s",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px 10px 0 0",
    marginBottom: "10px",
  },
  title: {
    fontSize: "1.5rem",
    marginBottom: "10px",
  },
  description: {
    fontSize: "1rem",
    marginTop: "10px",
  },
  techContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "10px",
  },
  techPill: {
    backgroundColor: "rgba(100, 255, 218, 0.2)",
    color: "#64ffda",
    padding: "4px 10px",
    borderRadius: "20px",
    fontSize: "0.8rem",
  },
};

export default Projects;