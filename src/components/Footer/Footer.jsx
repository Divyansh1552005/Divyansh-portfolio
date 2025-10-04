import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Separator Line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      
      <footer className="bg-[#0a0a0a] text-white py-12 px-[12vw] md:px-[7vw] lg:px-[20vw]">
        <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="text-center">
          {/* Name / Logo */}
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Divyansh Sharma
          </h2>
          <p className="text-gray-500 mt-2 text-sm">Full Stack and Gen AI Developer</p>
          
          {/* Navigation Links - Responsive */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6">
            {[
              { name: "About", id: "about" },
              { name: "Skills", id: "skills" },
              { name: "Experience", id: "experience" },
              { name: "Projects", id: "work" },
              { name: "Education", id: "education" },
              { name: "Contact", id: "contact" },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => handleScroll(item.id)}
                className="cursor-pointer hover:text-blue-400 text-sm sm:text-base transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>
          
          {/* Social Media Icons - Responsive */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {[
              { icon: <FaGithub />, link: "https://github.com/Divyansh1552005", label: "GitHub", hoverClass: "hover:bg-gray-800 hover:text-white hover:shadow-lg hover:shadow-gray-500/25" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/divyansh-sharma-b05897286/", label: "LinkedIn", hoverClass: "hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/25" },
              { icon: <FaTwitter />, link: "https://twitter.com/Divyansh1552005", label: "Twitter", hoverClass: "hover:bg-black hover:text-white hover:shadow-lg hover:shadow-gray-400/25" },
              { icon: <FaInstagram />, link: "https://instagram.com/divyanshsharma1552005", label: "Instagram", hoverClass: "hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white hover:shadow-lg hover:shadow-pink-500/25" },
              { icon: <FaEnvelope />, link: "mailto:officialdslc1552005@gmail.com", label: "Email", hoverClass: "hover:bg-red-600 hover:text-white hover:shadow-lg hover:shadow-red-500/25" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-3 rounded-full bg-[#1a1a1a] transition-all duration-300 transform hover:scale-110 text-gray-300 ${item.hoverClass}`}
                aria-label={item.label}
              >
                <span className="text-xl">{item.icon}</span>
                {/* Tooltip */}
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#1a1a1a] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col sm:flex-row justify-center items-center text-sm text-gray-500">
            {/* Copyright */}
            <p className="mb-2 sm:mb-0 text-center">
              © 2025 Divyansh Sharma. All rights reserved.
            </p>
            
            {/* Additional Links */}
            {/* <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors duration-300">
                Terms of Service
              </a>
            </div> */}
          </div>
        </div>
        </div>
      </footer>
    </div>
  );
};export default Footer;