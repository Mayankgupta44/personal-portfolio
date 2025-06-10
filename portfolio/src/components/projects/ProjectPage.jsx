import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "TradeVerse - Full-Stack Stock Trading Platform",
    description:
      "TradeVerse is a full-stack stock trading platform with a secure backend and real-time dashboard. Built with React.js, Node.js, and Express.js, it uses MongoDB Atlas for cloud data storage. Real-time charts are visualized using Chart.js. Unit testing was performed with Jest, and the application is deployed on AWS for scalable performance. It provides an intuitive experience for stock trading and market analysis.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Render",
      "Chart.js",
      "Jest",
    ],
    image: "./assets/tradeverselogo.png",
    liveDemo: "#",
    githubRepo: "https://github.com/Mayankgupta44/tradeverse",
  },
  {
    title: "Wanderlust - Rental Listing Web Application",
    description:
      "Wanderlust is a rental listing platform supporting property listings and bookings. Built using Node.js, Express.js, and EJS with the MVC architecture. MongoDB Atlas is integrated for database storage, and Cloudinary for media hosting. Deployed on Render, Wanderlust ensures stability and public accessibility. It offers a streamlined experience for both property owners and renters.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Cloudinary", "Render"],
    image: "./assets/wanderlustlogo.png",
    liveDemo: "https://backend-project-inks.onrender.com/listings",
    githubRepo: "https://github.com/Mayankgupta44/my-project",
  },
  {
    title: "Personal Portfolio",
    description:
      "Built with React and styled with Tailwind CSS, this portfolio is a showcase of my front-end development skills. It is deployed on Render for optimal performance. The site highlights my proficiency in creating responsive and visually appealing user interfaces.",
    tech: ["React.js", "Tailwind CSS", "Render", "Node.js"],
    image: "./assets/portfolio.png",
    liveDemo: "#",
    githubRepo: "#",
  },
];

const techIcons = {
  React: "./assets/react-svgrepo-com.svg",
  "React.js": "./assets/react-svgrepo-com.svg",
  "Node.js": "./assets/nodejs-icon-svgrepo-com.svg",
  Express: "./assets/express-svgrepo-com.svg",
  "Express.js": "./assets/express-svgrepo-com.svg",
  MongoDB: "./assets/mongodb-icon.svg",
  Render: "/assets/render.svg",
  "Chart.js": "/assets/chartjs.png",
  Jest: "/assets/jest.png",
  Cloudinary: "/assets/cloudinary-svgrepo-com.svg",
  "Tailwind CSS": "./assets/tailwind-css-icon.svg",
};

const VISIBLE_CARDS = 3;
const fanPositions = [
  {
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    zIndex: 3,
    opacity: 1,
    filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.12))",
  },
  {
    x: -50,
    y: 25,
    scale: 0.9,
    rotate: -7,
    zIndex: 2,
    opacity: 0.8,
    filter: "drop-shadow(0 5px 12px rgba(0,0,0,0.08))",
  },
  {
    x: -90,
    y: 55,
    scale: 0.82,
    rotate: -10,
    zIndex: 1,
    opacity: 0.6,
    filter: "drop-shadow(0 3px 8px rgba(0,0,0,0.05))",
  },
];

const TechLogo = ({ name, src, showName }) => {
  return (
    <div className="relative flex flex-col items-center cursor-pointer select-none">
      <motion.img
        src={src}
        alt={name}
        title={name}
        className="h-9 w-9 grayscale hover:grayscale-0 transition duration-300"
        draggable={false}
        layout
      />
      {/* Tooltip with blue box above the icon */}
      <AnimatePresence>
        {showName && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-full mb-2 px-2 py-1 rounded-md bg-blue-600 text-white text-xs font-semibold whitespace-nowrap pointer-events-none"
          >
            {name}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProjectCard = ({ project, style, onTap }) => {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <motion.div
      className="bg-[#101c24] w-[80%] h-full border-lighttur border-[0.4rem] rounded-3xl shadow-md cursor-pointer select-none overflow-hidden max-w-md "
      style={{
        color: "#4bbcdc",
        ...style,
        WebkitTapHighlightColor: "transparent",
      }}
      layout
      onClick={onTap}
      whileHover={{ scale: 1.04, boxShadow: "0 24px 48px rgba(0,0,0,0.15)" }}
      whileTap={{ scale: 0.96 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      role="button"
      aria-label={`View project: ${project.title}`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") onTap();
      }}
    >
      <div className="flex items-center gap-2 p-2 border-b border-[#296073]">
        {project.image && (
          <img
            src={project.image}
            alt={`${project.title} icon`}
            className="w-[8rem] h-[8rem] object-contain select-none"
            draggable={false}
          />
        )}
        <h3 className="text-2xl font-extrabold text-white">{project.title}</h3>
      </div>
      <div className="px-8 py-6 flex flex-col justify-between h-[calc(100%-170px)]">
        <p className="text-[#6b7280] text-base text-white leading-relaxed mb-6 max-lg:text-3xl">
          {project.description}
        </p>
        <div>
          <h4 className="text-[#a0aec0] text-center text-white font-semibold mb-3">
            Technologies
          </h4>

          <div className="flex flex-wrap gap-6">
            {project.tech.map((tech, i) => (
              <div
                key={tech + i}
                onMouseEnter={() => setHoveredTech(tech)}
                onMouseLeave={() => setHoveredTech(null)}
                onFocus={() => setHoveredTech(tech)}
                onBlur={() => setHoveredTech(null)}
                className="outline-none"
                tabIndex={0}
              >
                <TechLogo
                  name={tech}
                  src={techIcons[tech] || techIcons["React"]} // fallback icon if missing
                  showName={hoveredTech === tech}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between mt-8">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-600 rounded-lg px-6 py-3 text-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
            style={{ backgroundColor: "#4bbcdc" }}
          >
            <i class="fa-solid fa-link"></i> Live Demo
          </a>
          <a
            href={project.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-600 rounded-lg px-6 py-3 text-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
            style={{ backgroundColor: "#4bbcdc" }}
          >
            <i class="fa-brands fa-github"></i> Github Repo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectPage = () => {
  const [startIndex, setStartIndex] = useState(0);

  const fanCards = [];
  for (let i = 0; i < VISIBLE_CARDS; i++) {
    const idx = (startIndex + i) % projects.length;
    fanCards.push({ ...projects[idx], posIndex: i, idx });
  }

  const nextProject = () => {
    setStartIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setStartIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleCardTap = (posIndex) => {
    if (posIndex === 0) {
      nextProject();
    } else if (posIndex > 0) {
      setStartIndex((startIndex + posIndex) % projects.length);
    }
  };

  return (
    <section
      aria-label="Projects fan card gallery"
      className="bg-[#153341] min-h-screen flex flex-col justify-center items-center py-20 px-6"
      style={{
        fontFamily: "'Poppins', sans-serif",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div className="text-center opacity-100 transform-none">
        <p className="text-white mt-16 mb-6 text-xl font-mono">
          <span className="text-cyan-400">&lt;</span>Projects
          <span className="text-cyan-400">/&gt;</span>
        </p>
        <h2 className="text-white text-3xl font-bold mb-16">My Projects</h2>
      </div>

      <div
        className="relative w-full h-[700px] touch-none select-none"
        style={{ maxWidth: "720px" }}
      >
        <AnimatePresence initial={false}>
          {fanCards
            .slice()
            .reverse()
            .map(
              ({
                title,
                description,
                tech,
                image,
                liveDemo,
                githubRepo,
                posIndex,
                idx,
              }) => {
                const style = {
                  x: fanPositions[posIndex]?.x,
                  y: fanPositions[posIndex]?.y,
                  scale: fanPositions[posIndex]?.scale,
                  rotate: fanPositions[posIndex]?.rotate,
                  zIndex: fanPositions[posIndex]?.zIndex,
                  opacity: fanPositions[posIndex]?.opacity,
                  filter: fanPositions[posIndex]?.filter,
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  translate: "-50% 0",
                  cursor: posIndex === 0 ? "grab" : "pointer",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                };

                // We need to center horizontally: we set left 50% and transformX -50%
                return (
                  <ProjectCard
                    key={idx}
                    project={{
                      title,
                      description,
                      tech,
                      image,
                      liveDemo,
                      githubRepo,
                    }}
                    style={{
                      ...style,
                      left: "50%",
                      transform: `translate(calc(-50% + ${style.x}px), ${style.y}px) scale(${style.scale}) rotate(${style.rotate}deg)`,
                    }}
                    onTap={() => handleCardTap(posIndex)}
                  />
                );
              }
            )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectPage;
