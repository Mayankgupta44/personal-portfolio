import React, { useState, useEffect } from "react";

function Navbar() {
  const [active, setActive] = useState("Home");
  const [hovered, setHovered] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    { name: "Home", href: "/#home" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`max-lg:hidden fixed left-0 right-0 mx-auto w-max z-50 flex justify-center items-center gap-16 font-semibold px-12 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0c202a]/80 border border-white/20 rounded-full shadow-lg backdrop-blur-md mt-4 py-2 text-lg"
          : "bg-transparent py-4 text-base"
      }`}
      style={{
        top: isScrolled ? "1rem" : "0",
      }}
    >
      {links.map((item) => {
        const isActive = active === item.name;
        const isHovered = hovered === item.name;

        return (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setActive(item.name)}
            onMouseEnter={() => setHovered(item.name)}
            onMouseLeave={() => setHovered(null)}
            className={`relative transition-all duration-300 cursor-pointer ${
              isActive ? "text-white" : "text-white/60"
            }`}
          >
            {/* Render logic */}
            {isActive ? (
              // Active: <Name/>
              <span>
                <span className="text-turquoise">&lt;</span>
                {item.name}
                <span className="text-turquoise">/&gt;</span>
              </span>
            ) : isHovered ? (
              // Hovered (not active): <Name/>
              <span>
                <span className="text-turquoise">&lt;</span>
                {item.name}
                <span className="text-turquoise">/&gt;</span>{" "}
                {/* Add slash here */}
              </span>
            ) : (
              // Normal
              <span>{item.name}</span>
            )}
          </a>
        );
      })}
    </nav>
  );
}

export default Navbar;
