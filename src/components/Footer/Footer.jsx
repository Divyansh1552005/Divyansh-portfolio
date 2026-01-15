import React from "react";

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

      <footer className="bg-[#0d0d0d] text-white py-12 px-[12vw] md:px-[7vw] lg:px-[20vw]">
        <div className="container mx-auto">
          {/* Main Footer Content */}
          <div className="text-center">
            {/* Name / Logo */}
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Divyansh Sharma
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Full Stack and Gen AI Developer
            </p>

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
};
export default Footer;
