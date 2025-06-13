import React, { useState } from "react";

function SkillCard({ name, img, borderColor }) {
  const [show, setShow] = useState(false);
  const [isVibrating, setIsVibrating] = useState(false);

  const handleClick = () => {
    setShow((prev) => !prev);
    setIsVibrating(true);
    setTimeout(() => setIsVibrating(false), 2800); // duration should match animation length
  };

  return (
    <div
      className={`w-32 h-32 max-lg:w-24 max-lg:h-24 relative flex flex-col items-center justify-center p-3 rounded-2xl bg-[--darkblue] border-[0.25rem] transition-transform duration-300 hover:scale-105
        ${isVibrating ? 'animate-shake animate-borderPulse' : ''}
      `}
      style={{ borderColor }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onClick={handleClick}
    >
      {show && (
        <div className="absolute -top-8 px-3 py-1 rounded-md bg-blue-600 text-white text-xs font-medium whitespace-nowrap z-10">
          {name}
        </div>
      )}

      <img
        src={img}
        alt={name}
        loading="lazy"
        className="w-16 h-16 max-lg:w-12 max-lg:h-12"
      />
    </div>
  );
}

export default SkillCard;
