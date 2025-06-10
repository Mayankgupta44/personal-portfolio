import { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollY = window.scrollY;
      const buffer = 100;

      const skills = document.getElementById("skills");
      const projects = document.getElementById("projects");
      const contact = document.getElementById("contact");

      if (contact && scrollY + buffer >= contact.offsetTop) {
        setProgress(100);
      } else if (projects && scrollY + buffer >= projects.offsetTop) {
        setProgress(66);
      } else if (skills && scrollY + buffer >= skills.offsetTop) {
        setProgress(33);
      } else {
        setProgress(0); // About/Home section
      }
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div
        className={`h-2 bg-blue-400 transition-all duration-500 ${
          progress === 0 ? "opacity-0" : "opacity-100"
        }`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;
