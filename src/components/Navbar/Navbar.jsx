import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "" : "px-[7vw] md:px-[7vw] lg:px-[20vw]"
      }`}
    >
      <div className={`text-white flex justify-between items-center transition-all duration-500 ${
        isScrolled 
          ? "bg-[#0a0f1c]/80 backdrop-blur-xl shadow-2xl border-b border-white/5 px-[7vw] md:px-[7vw] lg:px-[20vw] py-3" 
          : "px-0 py-4"
      }`}>
        {/* Logo */}
        <div 
          className="text-lg font-bold cursor-pointer hover:opacity-80 transition-opacity duration-300"
          onClick={() => handleMenuItemClick('about')}
        >
          <span className="text-[#3b82f6]">&lt;</span>
          <span className="text-white">Divyansh </span>
          <span className="text-[#3b82f6]">/</span>
          <span className="text-white">Sharma</span>
          <span className="text-[#3b82f6]">&gt;</span>
        </div>

        {/* Desktop Menu - Pill Style */}
        <div className="hidden md:flex items-center bg-[#0a0f1c]/60 backdrop-blur-md rounded-full px-2 py-2 border border-white/10 shadow-lg">
          <ul className="flex space-x-1 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer transition-all duration-300 ${
                  activeSection === item.id ? "text-white" : ""
                }`}
              >
                <button 
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`px-5 py-2 rounded-full transition-all duration-300 font-medium text-sm ${
                    activeSection === item.id 
                      ? "bg-[#3b82f6] text-white shadow-lg shadow-[#3b82f6]/30" 
                      : "hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons - Pill Style */}
        <div className="hidden md:flex items-center space-x-1 bg-[#0a0f1c]/60 backdrop-blur-md rounded-full px-3 py-2 border border-white/10 shadow-lg">
          <a
            href="https://github.com/Divyansh1552005"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300 cursor-pointer"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="mailto:officialdslc1552005@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-gray-300 hover:text-red-400 hover:bg-red-400/10 hover:scale-110 transition-all duration-300 cursor-pointer"
          >
            <FaEnvelope size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/divyansh-sharma-b05897286/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-gray-300 hover:text-blue-500 hover:bg-blue-500/10 hover:scale-110 transition-all duration-300 cursor-pointer"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://divyanshblogs.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-gray-300 hover:text-blue-400 hover:bg-blue-400/10 hover:scale-110 transition-all duration-300 cursor-pointer"
          >
            <SiHashnode size={22} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center space-x-3">
          <div className="flex space-x-2 bg-[#0a0f1c]/60 backdrop-blur-md rounded-full px-2 py-1.5 border border-white/10">
            <a
              href="https://github.com/Divyansh1552005"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="mailto:officialdslc1552005@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full text-gray-300 hover:text-red-400 hover:bg-red-400/10 transition-all duration-300"
            >
              <FaEnvelope size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/divyansh-sharma-b05897286/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full text-gray-300 hover:text-blue-500 hover:bg-blue-500/10 transition-all duration-300"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://divyanshblogs.hashnode.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full text-gray-300 hover:text-blue-400 hover:bg-blue-400/10 transition-all duration-300"
            >
              <SiHashnode size={16} />
            </a>
          </div>
          
          <button 
            className="p-2 rounded-full bg-[#3b82f6]/20 border border-[#3b82f6]/30 hover:bg-[#3b82f6]/30 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <FiX className="text-2xl text-[#3b82f6]" />
            ) : (
              <FiMenu className="text-2xl text-[#3b82f6]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-[70px] left-1/2 transform -translate-x-1/2 w-[85%] bg-[#0a0f1c]/95 backdrop-blur-xl z-50 rounded-2xl shadow-2xl border border-white/10 md:hidden overflow-hidden">
          <ul className="flex flex-col items-center space-y-1 py-3 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="w-[90%]"
              >
                <button 
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`w-full py-3 px-6 rounded-xl transition-all duration-300 font-medium ${
                    activeSection === item.id 
                      ? "bg-[#3b82f6] text-white shadow-lg shadow-[#3b82f6]/30" 
                      : "hover:bg-white/5 hover:text-white text-center"
                  }`}
                >
                  {item.label}
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