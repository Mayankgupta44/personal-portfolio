// src/components/Footer.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#101c24] text-center py-6 mt-8 border-t">
      <div className="flex justify-center gap-6 text-xl mb-2">
        <a href="https://github.com/Mayankgupta44" target="_blank" rel="noreferrer">
          <FaGithub className="text-blue-400 hover:text-blue-500" />
        </a>
        <a href="https://www.linkedin.com/in/mayank-gupta04" target="_blank" rel="noreferrer">
          <FaLinkedin className="text-blue-400 hover:text-blue-500" />
        </a>
        <a href="mailto:your@email.com">
          <FaEnvelope className="text-blue-400 hover:text-blue-500" />
        </a>
      </div>
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Mayank Gupta. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
