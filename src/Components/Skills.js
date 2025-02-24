
// import React from "react";
// import {
//   SiHtml5,
//   SiCss3,
//   SiJavascript,
//   SiReact,
//   SiNodedotjs,
//   SiExpress,
//   SiMysql,
//   SiMongodb,
//   SiPrisma, 
//   SiBootstrap,
//   SiTailwindcss,
//   SiChakraui,
//   SiPostman,
//   SiJsonwebtokens,
// } from "react-icons/si";
// import { MdDesignServices } from "react-icons/md";
// import { FaChartBar } from "react-icons/fa"; // For Tableau icon

// // Custom Power BI SVG Icon
// const PowerBiIcon = (props) => (
//   <svg
//     {...props}
//     viewBox="0 0 24 24"
//     fill="#F2C811"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path d="M3 4V20H5V4H3ZM8 8V20H10V8H8ZM13 12V20H15V12H13ZM18 2V20H20V2H18Z" />
//   </svg>
// );

// const Skills = () => {
//   return (
//     <section id="skills" style={styles.container}>
//       <h2 style={styles.heading}>My Skills</h2>

//       {/* Frontend Skills */}
//       <div style={styles.category}>
//         <h3 style={styles.subHeading}>Frontend</h3>
//         <div style={styles.skillsGrid}>
//           <SkillCard icon={<SiHtml5 style={styles.icon} />} name="HTML5" />
//           <SkillCard icon={<SiCss3 style={styles.icon} />} name="CSS3" />
//           <SkillCard
//             icon={<SiJavascript style={styles.icon} />}
//             name="JavaScript"
//           />
//           <SkillCard icon={<SiReact style={styles.icon} />} name="ReactJS" />
//         </div>
//       </div>

//       {/* Backend Skills */}
//       <div style={styles.category}>
//         <h3 style={styles.subHeading}>Backend</h3>
//         <div style={styles.skillsGrid}>
//           <SkillCard
//             icon={<SiNodedotjs style={styles.icon} />}
//             name="Node.js"
//           />
//           <SkillCard
//             icon={<SiExpress style={styles.icon} />}
//             name="Express.js"
//           />
//         </div>
//       </div>

//       {/* Database Skills */}
//       <div style={styles.category}>
//         <h3 style={styles.subHeading}>Database</h3>
//         <div style={styles.skillsGrid}>
//           <SkillCard icon={<SiMysql style={styles.icon} />} name="MySQL" />
//           <SkillCard icon={<SiMongodb style={styles.icon} />} name="MongoDB" />
//           <SkillCard
//             icon={<SiPrisma style={styles.icon} />}
//             name="Prisma"
//           />{" "}
//           {/* Prisma added here */}
//         </div>
//       </div>

//       {/* Libraries & Frameworks */}
//       <div style={styles.category}>
//         <h3 style={styles.subHeading}>Libraries & Frameworks</h3>
//         <div style={styles.skillsGrid}>
//           <SkillCard
//             icon={<MdDesignServices style={styles.icon} />}
//             name="Material UI"
//           />
//           <SkillCard
//             icon={<SiBootstrap style={styles.icon} />}
//             name="Bootstrap"
//           />
//           <SkillCard
//             icon={<SiTailwindcss style={styles.icon} />}
//             name="Tailwind CSS"
//           />
//           <SkillCard
//             icon={<SiChakraui style={styles.icon} />}
//             name="Chakra UI"
//           />
//         </div>
//       </div>

//       {/* Tools & Technologies */}
//       <div style={styles.category}>
//         <h3 style={styles.subHeading}>Tools & Technologies</h3>
//         <div style={styles.skillsGrid}>
//           <SkillCard icon={<SiPostman style={styles.icon} />} name="Postman" />
//           <SkillCard
//             icon={<SiJsonwebtokens style={styles.icon} />}
//             name="JWT"
//           />
//         </div>
//       </div>

//       {/* Data Analysis */}
//       <div style={styles.category}>
//         <h3 style={styles.subHeading}>Data Analysis</h3>
//         <div style={styles.skillsGrid}>
//           <SkillCard
//             icon={<PowerBiIcon style={styles.icon} />}
//             name="Power BI"
//           />
//           <SkillCard icon={<FaChartBar style={styles.icon} />} name="Tableau" />
//         </div>
//       </div>
//     </section>
//   );
// };

// const SkillCard = ({ icon, name }) => (
//   <div style={styles.skillCard}>
//     {icon}
//     <p style={styles.skillName}>{name}</p>
//   </div>
// );

// const styles = {
//   container: {
//     minHeight: "100vh",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     background: "rgba(0, 0, 0, 0.6)",
//     backdropFilter: "blur(10px)",
//     color: "#fff",
//     margin: "20px",
//     borderRadius: "15px",
//     padding: "40px",
//   },
//   heading: {
//     fontSize: "2.5rem",
//     color: "#64ffda",
//     marginBottom: "20px",
//   },
//   subHeading: {
//     fontSize: "2rem",
//     margin: "20px 0",
//     color: "#a8dadc",
//   },
//   category: {
//     width: "100%",
//     maxWidth: "800px",
//     marginBottom: "30px",
//   },
//   skillsGrid: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "center",
//     gap: "20px",
//   },
//   skillCard: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     backgroundColor: "#112240",
//     padding: "15px",
//     borderRadius: "10px",
//     width: "120px",
//     textAlign: "center",
//     transition: "transform 0.3s ease",
//   },
//   icon: {
//     fontSize: "3rem",
//     marginBottom: "10px",
//     color: "#64ffda",
//   },
//   skillName: {
//     fontSize: "1rem",
//     color: "#fff",
//   },
// };

// export default Skills;


import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiPrisma,
  SiBootstrap,
  SiTailwindcss,
  SiChakraui,
  SiPostman,
  SiJsonwebtokens,
  SiGithub, // GitHub icon added here
} from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { FaChartBar } from "react-icons/fa"; // For Tableau icon

// Custom Power BI SVG Icon
const PowerBiIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="#F2C811"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 4V20H5V4H3ZM8 8V20H10V8H8ZM13 12V20H15V12H13ZM18 2V20H20V2H18Z" />
  </svg>
);

const Skills = () => {
  return (
    <section id="skills" style={styles.container}>
      <h2 style={styles.heading}>My Skills</h2>

      {/* Frontend Skills */}
      <div style={styles.category}>
        <h3 style={styles.subHeading}>Frontend</h3>
        <div style={styles.skillsGrid}>
          <SkillCard icon={<SiHtml5 style={styles.icon} />} name="HTML5" />
          <SkillCard icon={<SiCss3 style={styles.icon} />} name="CSS3" />
          <SkillCard
            icon={<SiJavascript style={styles.icon} />}
            name="JavaScript"
          />
          <SkillCard icon={<SiReact style={styles.icon} />} name="ReactJS" />
        </div>
      </div>

      {/* Backend Skills */}
      <div style={styles.category}>
        <h3 style={styles.subHeading}>Backend</h3>
        <div style={styles.skillsGrid}>
          <SkillCard
            icon={<SiNodedotjs style={styles.icon} />}
            name="Node.js"
          />
          <SkillCard
            icon={<SiExpress style={styles.icon} />}
            name="Express.js"
          />
        </div>
      </div>

      {/* Database Skills */}
      <div style={styles.category}>
        <h3 style={styles.subHeading}>Database</h3>
        <div style={styles.skillsGrid}>
          <SkillCard icon={<SiMysql style={styles.icon} />} name="MySQL" />
          <SkillCard icon={<SiMongodb style={styles.icon} />} name="MongoDB" />
          <SkillCard icon={<SiPrisma style={styles.icon} />} name="Prisma" />
        </div>
      </div>

      {/* Libraries & Frameworks */}
      <div style={styles.category}>
        <h3 style={styles.subHeading}>Libraries & Frameworks</h3>
        <div style={styles.skillsGrid}>
          <SkillCard
            icon={<MdDesignServices style={styles.icon} />}
            name="Material UI"
          />
          <SkillCard
            icon={<SiBootstrap style={styles.icon} />}
            name="Bootstrap"
          />
          <SkillCard
            icon={<SiTailwindcss style={styles.icon} />}
            name="Tailwind CSS"
          />
          <SkillCard
            icon={<SiChakraui style={styles.icon} />}
            name="Chakra UI"
          />
        </div>
      </div>

      {/* Tools & Technologies */}
      <div style={styles.category}>
        <h3 style={styles.subHeading}>Tools & Technologies</h3>
        <div style={styles.skillsGrid}>
          <SkillCard icon={<SiPostman style={styles.icon} />} name="Postman" />
          <SkillCard
            icon={<SiJsonwebtokens style={styles.icon} />}
            name="JWT"
          />
        </div>
      </div>

      {/* Data Analysis */}
      <div style={styles.category}>
        <h3 style={styles.subHeading}>Data Analysis</h3>
        <div style={styles.skillsGrid}>
          <SkillCard
            icon={<PowerBiIcon style={styles.icon} />}
            name="Power BI"
          />
          <SkillCard icon={<FaChartBar style={styles.icon} />} name="Tableau" />
        </div>
      </div>

      {/* Version Control */}
      <div style={styles.category}>
        <h3 style={styles.subHeading}>Version Control</h3>
        <div style={styles.skillsGrid}>
          <SkillCard icon={<SiGithub style={styles.icon} />} name="GitHub" />{" "}
          {/* GitHub section */}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ icon, name }) => (
  <div style={styles.skillCard}>
    {icon}
    <p style={styles.skillName}>{name}</p>
  </div>
);

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
    margin: "20px 0",
    color: "#a8dadc",
  },
  category: {
    width: "100%",
    maxWidth: "800px",
    marginBottom: "30px",
  },
  skillsGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  skillCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#112240",
    padding: "15px",
    borderRadius: "10px",
    width: "120px",
    textAlign: "center",
    transition: "transform 0.3s ease",
  },
  icon: {
    fontSize: "3rem",
    marginBottom: "10px",
    color: "#64ffda",
  },
  skillName: {
    fontSize: "1rem",
    color: "#fff",
  },
};

export default Skills;
