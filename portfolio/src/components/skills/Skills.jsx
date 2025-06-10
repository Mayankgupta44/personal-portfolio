import React from "react";
import SkillCard from "./SkillCard";

function Skills() {
  const techSkills = [
    {
      name: "React",
      img: "./assets/react-svgrepo-com.svg",
      borderColor: "rgb(97, 218, 251)",
    },
    {
      name: "Node.js",
      img: "./assets/nodejs-icon-svgrepo-com.svg",
      borderColor: "rgb(51, 153, 51)",
    },
    {
      name: "Express",
      img: "./assets/express-svgrepo-com.svg",
      borderColor: "rgb(255, 255, 255)",
    },
    {
      name: "Tailwind",
      img: "./assets/tailwind-css-icon.svg",
      borderColor: "rgb(56, 178, 172)",
    },
    {
      name: "AWS",
      img: "./assets/aws-svgrepo-com.svg",
      borderColor: "rgb(237, 185, 40)",
    },
    {
      name: "CSS",
      img: "./assets/css-icon.svg",
      borderColor: "rgb(21, 114, 182)",
    },
  ];

  const databases = [
    {
      name: "MySQL",
      img: "./assets/mysql-logo-svgrepo-com.svg",
      borderColor: "#00758f",
    },
    {
      name: "MongoDB",
      img: "./assets/mongodb-icon.svg",
      borderColor: "#4db33d",
    },
  ];

  const languages = [
    {
      name: "JavaScript",
      img: "./assets/javascript-logo-svgrepo-com.svg",
      borderColor: "#f0db4f",
    },
    {
      name: "Java",
      img: "./assets/java-svgrepo-com.svg",
      borderColor: "#007396",
    },
  ];

  return (
    <section
      aria-label="Skills Section"
      className="w-[90%] mx-auto px-4 min-h-[400px]"
    >
      {/* Title block outside the grid */}
      <div className="text-center opacity-100 transform-none">
        <p className="text-white mt-16 mb-6 text-xl font-mono">
          <span className="text-cyan-400">&lt;</span>Skills
          <span className="text-cyan-400">/&gt;</span>
        </p>
        <h2 className="text-white text-3xl font-bold mb-16">
          My Techstack & Skills
        </h2>
      </div>

      {/* Grid starts here */}
      <div className="grid grid-cols-2 gap-12 max-lg:grid-cols-1 max-lg:gap-6">
        {/* Left Column */}
        <div className="bg-[#101c24] rounded-2xl p-8 pb-12 flex flex-col custom-shadow">
          <p className="text-center font-black text-4xl text-white mb-10">
            <span className="text-blue-500">&lt;</span>Technologies
            <span className="text-blue-500">/&gt;</span>
          </p>
          <div className="grid grid-cols-3 gap-x-6 gap-y-10 max-lg:grid-cols-2 flex-grow">
            {techSkills.map((tech) => (
              <SkillCard key={tech.name} {...tech} />
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-12">
          {/* Databases */}
          <div className="bg-[#101c24] rounded-2xl p-8 flex flex-col flex-1 custom-shadow">
            <p className="text-center font-black text-4xl text-white mb-6">
              <span className="text-blue-500">&lt;</span>Databases
              <span className="text-blue-500">/&gt;</span>
            </p>
            <div className="grid grid-cols-2 gap-6 justify-items-center flex-grow">
              {databases.map((db) => (
                <SkillCard key={db.name} {...db} />
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="bg-[#101c24] rounded-2xl p-8 flex flex-col flex-1 custom-shadow">
            <p className="text-center font-black text-4xl text-white mb-6">
              <span className="text-blue-500">&lt;</span>Languages
              <span className="text-blue-500">/&gt;</span>
            </p>
            <div className="grid grid-cols-2 gap-6 justify-items-center flex-grow">
              {languages.map((lang) => (
                <SkillCard key={lang.name} {...lang} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
