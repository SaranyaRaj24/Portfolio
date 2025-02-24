import React from "react";
import Navbar from "./Components/Navbar";
import ParallaxBackground from "./Components/Animation";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer"
import Skills from "./Components/Skills"
import Experience from "./Components/Experience";
import Certificate from "./Components/Certificate";

const App = () => {
  return (
    <div>
      <Navbar />
      <ParallaxBackground />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="certificate">
        <Certificate />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default App;
