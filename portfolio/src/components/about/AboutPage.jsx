import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import social icons
import { useInView } from "react-intersection-observer"; // For scroll progress

function AboutPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [homeRef, homeInView] = useInView({ threshold: 0.9 }); // Adjust threshold as needed
  const [skillsRef, skillsInView] = useInView({ threshold: 0.9 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.9 });
  const [contactRef, contactInView] = useInView({ threshold: 0.9 });

  useEffect(() => {
    if (contactInView) {
      setScrollProgress(100);
    } else if (projectsInView) {
      setScrollProgress(66);
    } else if (skillsInView) {
      setScrollProgress(33);
    } else {
      setScrollProgress(0); // Or keep it at 0 if you want it hidden
    }
  }, [homeInView, skillsInView, projectsInView, contactInView]);

  const email = "mayankagarwal.ma35@gmail.com";

  return (
    <div ref={homeRef} className="relative">
      {/* Progress Bar */}
      <div
        className={`fixed top-0 left-0 h-1 bg-blue-500 z-50 transition-all duration-300 ${
          scrollProgress === 0 ? "w-0" : "w-full"
        }`}
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Left Vertical Line and Social Icons */}
      <div className="absolute left-4 flex flex-col items-center">
        {/* Blue vertical line */}
        <div
          className="h-45 w-[2px] bg-blue-500"
          style={{ color: "#4bbcdc" }}
        />

        {/* Icons below the line */}
        <div className="flex flex-col items-center mt-4 space-y-4">
          <a
            href="https://www.linkedin.com/in/mayank-gupta04"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              className="text-3xl text-blue-500 hover:text-blue-300 transition-transform hover:scale-110"
              style={{ color: "#4bbcdc" }}
            />
          </a>
          <a
            href="https://github.com/Mayankgupta44"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              className="text-3xl text-blue-500 hover:text-blue-300 transition-transform hover:scale-110"
              style={{ color: "#4bbcdc" }}
            />
          </a>
        </div>
      </div>

      {/* Right Vertical Line and Email */}
      <div
        className="absolute right-4 top-0 h-full flex flex-col items-center justify-start"
        style={{ color: "#4bbcdc" }}
      >
        <div className="flex flex-col items-center mt-2">
          {email.split("").map((char, index) => (
            <span
              key={index}
              style={{
                writingMode: "vertical-rl",
                color: "#4bbcdc",
                fontSize: "20px",
                fontWeight: "7rem",
              }}
            >
              {char}
            </span>
          ))}
        </div>
        <div className="border-r-2 border-blue-500 h-full mt-2"></div>
      </div>

      {/* Content */}
      <div
        className="max-w-4xl mx-auto text-center px-4 py-12 relative"
        style={{ color: "white" }}
      >
        <h1 className="text-5xl font-heading font-bold mb-4 tracking-tight text-center">
          Hi, I'm Mayank Gupta{" "}
          <span
            className="inline-block animate-wave origin-[70%_70%] text-7xl"
            role="img"
            aria-label="waving hand"
          >
            👋🏽
          </span>
        </h1>

        <h2 className="text-3xl font-heading font-semibold mb-6 text-center">
          Software Engineer
        </h2>

        <p className="text-lg font-semibold font-body leading-relaxed text-gray-300 max-w-2xl text-center mx-auto mb-10">
          I'm a final year CSE student passionate about building smart,
          responsive websites and crafting clean, efficient code. I enjoy
          bringing ideas to life with modern web technologies, learning new
          tools, and improving user experiences. When I'm not coding, you'll
          find me exploring tech trends, collaborating on side projects, or
          helping fellow learners grow.
        </p>

        <div className="flex items-center justify-center gap-6 flex-wrap">
          <a href="#contact" className="no-underline">
            <button
              className="text-white bg-blue-600 hover:bg-blue-700 drop-shadow-xl py-3 px-6 rounded-lg text-lg flex items-center gap-3 transition-all duration-200"
              style={{ backgroundColor: "#4bbcdc" }}
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Contact Me
            </button>
          </a>

          <a href="#projects" className="no-underline">
            <button
              className="text-white bg-gray-800 hover:bg-gray-900 drop-shadow-xl py-3 px-6 rounded-lg text-lg flex items-center gap-3 transition-all duration-200"
              style={{ backgroundColor: "black" }}
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 
                5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1
                A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7
                A3.37 3.37 0 0 0 9 18.13V22"
                ></path>
              </svg>
              My Projects
            </button>
          </a>
        </div>
        <div className="scroll-down-container flex justify-center items-center mt-12 animate-bounce">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            className="text-[2.6rem]"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
