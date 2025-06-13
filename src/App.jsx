import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';

import ScrollProgressBar from "./components/ScrollProgressBar"; // ✅ New Import

import AboutPage from "./components/about/AboutPage";
import Skills from "./components/skills/Skills";
import ProjectPage from "./components/projects/ProjectPage";
import ContactPage from "./components/contact/ContactPage";

function App() {
  useEffect(() => {
    const spotlight = document.getElementById("spotlight");

    const updateSpotlight = (e) => {
      const x = `${e.clientX}px`;
      const y = `${e.clientY}px`;
      spotlight?.style.setProperty("--x", x);
      spotlight?.style.setProperty("--y", y);
    };

    window.addEventListener("mousemove", updateSpotlight);

    return () => window.removeEventListener("mousemove", updateSpotlight);
  }, []);

  return (
    <div className="App relative">
      <ScrollProgressBar /> {/* ✅ Add here */}

      <Navbar />

      <div className="pt-20 space-y-24">
        <section id="about">
          <AboutPage />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <ProjectPage />
        </section>

        <section id="contact">
          <ContactPage />
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default App;
