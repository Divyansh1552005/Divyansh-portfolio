import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled ? "bg-[#0a0f1c] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="text-lg font-semibold cursor-pointer hover:opacity-80 transition-opacity duration-300"
          onClick={() => handleMenuItemClick('about')}
        >
          <span className="text-[#3b82f6]">&lt;</span>
          <span className="text-white">Divyansh </span>
          <span className="text-[#3b82f6]">/</span>
          <span className="text-white">Sharma</span>
          <span className="text-[#3b82f6]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#3b82f6] transition-colors duration-300 relative group ${
                activeSection === item.id ? "text-[#3b82f6]" : ""
              }`}
            >
              <button 
                onClick={() => handleMenuItemClick(item.id)}
                className="cursor-pointer relative"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3b82f6] transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/Divyansh1552005"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(156,163,175,0.8)] transition-all duration-300 cursor-pointer"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="mailto:officialdslc1552005@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-red-400 hover:drop-shadow-[0_0_8px_rgba(248,113,113,0.8)] transition-all duration-300 cursor-pointer"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/divyansh-sharma-b05897286/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300 cursor-pointer"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://divyanshblogs.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.8)] transition-all duration-300 cursor-pointer"
          >
            <SiHashnode size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Mobile Social Icons - Left of menu icon */}
          <div className="flex space-x-3">
            <a
              href="https://github.com/Divyansh1552005"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white hover:drop-shadow-[0_0_6px_rgba(156,163,175,0.8)] transition-all duration-300 cursor-pointer"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="mailto:officialdslc1552005@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-red-400 hover:drop-shadow-[0_0_6px_rgba(248,113,113,0.8)] transition-all duration-300 cursor-pointer"
            >
              <FaEnvelope size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/divyansh-sharma-b05897286/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.8)] transition-all duration-300 cursor-pointer"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://divyanshblogs.hashnode.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 hover:drop-shadow-[0_0_6px_rgba(96,165,250,0.8)] transition-all duration-300 cursor-pointer"
            >
              <SiHashnode size={20} />
            </a>
          </div>
          
          {/* Menu Toggle Icon */}
          {isOpen ? (
            <FiX
              className="text-3xl text-[#3b82f6] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#3b82f6] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#0a0f1c] bg-opacity-90 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-xl border border-gray-700/30 md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-6 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#3b82f6] transition-colors duration-300 w-full text-center relative group ${
                  activeSection === item.id ? "text-[#3b82f6]" : ""
                }`}
              >
                <button 
                  onClick={() => handleMenuItemClick(item.id)}
                  className="cursor-pointer w-full py-2 px-4 rounded-md hover:bg-[#3b82f6]/10 relative"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#3b82f6] transition-all duration-300 group-hover:w-1/2"></span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )} 
    </nav>
  );
};

export default Navbar;
