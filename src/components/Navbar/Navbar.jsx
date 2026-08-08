import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { flushSync } from "react-dom";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import { useTheme } from "../../hooks/useTheme";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useTheme();
  const navListRef = useRef(null);
  const navItemRefs = useRef({});
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [themeRipple, setThemeRipple] = useState(null);

  // Toggle theme with a circular reveal spreading from the click point
  const toggleTheme = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const nextIsDark = !isDark;

    document.documentElement.style.setProperty("--x", `${x}px`);
    document.documentElement.style.setProperty("--y", `${y}px`);

    setThemeRipple({ x, y, icon: nextIsDark ? "moon" : "sun" });
    setTimeout(() => setThemeRipple(null), 600);

    if (!document.startViewTransition) {
      setIsDark(nextIsDark);
      return;
    }

    document.startViewTransition(() => {
      flushSync(() => setIsDark(nextIsDark));
    });
  };

  // Change navbar style on scroll ie animation style sa laga diya uspe
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle menu item click ie scroll to section and close mobile menu
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Update active section on scroll in the page
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sections = document.querySelectorAll("section"); // all your page sections
  //     let current = "";

  //     sections.forEach((section) => {
  //       const sectionTop = section.offsetTop;
  //       const sectionHeight = section.clientHeight;

  //       if (window.scrollY >= sectionTop - sectionHeight / 3){
  //         current = section.getAttribute("id");
  //       }
  //     });

  //     if (current && current !== activeSection){
  //       setActiveSection(current);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [activeSection]);

  // better and optimized way using Intersection Observer API
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = { threshold: 0.5, rootMargin: "-100px 0px -100px 0px" }; // 50% visible hote hi trigger hoga with margin adjustment

    const observer = new IntersectionObserver((entries) => {
      // looping entries to find which section is in viewport since we are observing multiple sections
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // isIntersecting means visible in viewport
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Move the sliding pill background to match the active nav item
  useLayoutEffect(() => {
    const updatePillPosition = () => {
      const activeItem = navItemRefs.current[activeSection];
      const list = navListRef.current;
      if (activeItem && list) {
        const listRect = list.getBoundingClientRect();
        const itemRect = activeItem.getBoundingClientRect();
        setPillStyle({
          left: itemRect.left - listRect.left,
          width: itemRect.width,
          opacity: 1,
        });
      } else {
        setPillStyle((prev) => ({ ...prev, opacity: 0 }));
      }
    };

    updatePillPosition();
    window.addEventListener("resize", updatePillPosition);
    return () => window.removeEventListener("resize", updatePillPosition);
  }, [activeSection]);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b border-gray-200 dark:border-white/10 transition-all duration-500 ${isScrolled ? "" : "px-[6vw] md:px-[6vw] lg:px-[8vw] xl:px-[12vw] 2xl:px-[20vw]"
        }`}
    >
      <div
        className={`text-gray-900 dark:text-white flex justify-between items-center transition-all duration-500 ${isScrolled
          ? "bg-white/80 dark:bg-[#0d0d0d]/80 backdrop-blur-xl shadow-2xl px-[6vw] md:px-[6vw] lg:px-[8vw] xl:px-[12vw] 2xl:px-[20vw] py-3"
          : "px-0 py-4"
          }`}
      >
        {/* Logo */}
        <div
          className="text-lg font-bold cursor-pointer hover:opacity-80 transition-opacity duration-300 flex-shrink-0 whitespace-nowrap"
          onClick={() => handleMenuItemClick("about")}
        >
          <span className="text-[#3b82f6]">&lt;</span>
          <span className="text-gray-900 dark:text-white">Divyansh </span>
          <span className="text-[#3b82f6]">/</span>
          <span className="text-gray-900 dark:text-white">Sharma</span>
          <span className="text-[#3b82f6]">&gt;</span>
        </div>

        {/* Desktop Menu - Pill Style */}
        <div className="hidden lg:flex items-center bg-gray-100 dark:bg-[#0d0d0d]/60 backdrop-blur-md rounded-full px-2 py-2 border border-gray-200 dark:border-white/10 shadow-lg">
          <ul
            ref={navListRef}
            className="relative flex space-x-1 text-gray-600 dark:text-gray-300"
          >
            <span
              className="absolute top-0 h-full bg-[#1e50d6] rounded-full transition-all duration-300 ease-out pointer-events-none"
              style={{
                left: `${pillStyle.left}px`,
                width: `${pillStyle.width}px`,
                opacity: pillStyle.opacity,
              }}
            />
            {menuItems.map((item) => (
              <li
                key={item.id}
                ref={(el) => (navItemRefs.current[item.id] = el)}
                className={`relative z-10 cursor-pointer transition-all duration-300 ${activeSection === item.id ? "text-gray-900 dark:text-white" : ""
                  }`}
              >
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`px-5 py-2 rounded-full transition-all duration-300 font-medium text-sm ${activeSection === item.id
                    ? "text-white"
                    : "hover:bg-gray-200 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white"
                    }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex items-center space-x-2">
          <button
            onClick={toggleTheme}
            className="p-2.5 bg-gray-100 dark:bg-[#1e1e1e] border border-gray-200 dark:border-white/10 rounded-full hover:bg-gray-200 dark:hover:bg-[#2a2a2a] transition-all duration-300"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <FiSun className="text-white text-xl" />
            ) : (
              <FiMoon className="text-gray-900 text-xl" />
            )}
          </button>
          <a
            href="https://github.com/Divyansh1552005"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-gray-100 dark:bg-[#1e1e1e] border border-gray-200 dark:border-white/10 rounded-full hover:bg-gray-200 dark:hover:bg-[#2a2a2a] transition-all duration-300"
          >
            <FaGithub className="text-gray-900 dark:text-white text-xl" />
          </a>
          <a
            href="mailto:officialdslc1552005@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-red-600 rounded-full hover:bg-red-700 transition-all duration-300"
          >
            <FaEnvelope className="text-white text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/divyansh-sharma-b05897286/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-[#0A66C2] rounded-full hover:bg-[#084e96] transition-all duration-300"
          >
            <FaLinkedin className="text-white text-xl" />
          </a>
        </div>

        <div className="lg:hidden flex items-center space-x-3">
          <div className="hidden sm:flex space-x-2">
            <a
              href="https://github.com/Divyansh1552005"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-gray-100 dark:bg-[#1e1e1e] border border-gray-200 dark:border-white/10 rounded-full hover:bg-gray-200 dark:hover:bg-[#2a2a2a] transition-all duration-300"
            >
              <FaGithub className="text-gray-900 dark:text-white text-xl" />
            </a>
            <a
              href="mailto:officialdslc1552005@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-red-600 rounded-full hover:bg-red-700 transition-all duration-300"
            >
              <FaEnvelope className="text-white text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/divyansh-sharma-b05897286/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#0A66C2] rounded-full hover:bg-[#084e96] transition-all duration-300"
            >
              <FaLinkedin className="text-white text-xl" />
            </a>
          </div>

          <button
            className="p-2 rounded-full bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/20 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <FiX className="text-2xl text-gray-900 dark:text-white" />
            ) : (
              <FiMenu className="text-2xl text-gray-900 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-[70px] left-1/2 transform -translate-x-1/2 w-[85%] bg-white/95 dark:bg-[#0d0d0d]/95 backdrop-blur-xl z-50 rounded-2xl shadow-2xl border border-gray-200 dark:border-white/10 lg:hidden overflow-hidden">
          <ul className="flex flex-col items-center space-y-1 py-3 text-gray-600 dark:text-gray-300">
            {menuItems.map((item) => (
              <li key={item.id} className="w-[90%]">
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`w-full py-3 px-6 rounded-xl transition-all duration-300 font-medium ${activeSection === item.id
                    ? "bg-[#1e50d6] text-white"
                    : "hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white text-center"
                    }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <div className="flex justify-center py-3 border-t border-gray-200 dark:border-white/10">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-5 py-2 bg-gray-100 dark:bg-[#1e1e1e] border border-gray-200 dark:border-white/10 rounded-full hover:bg-gray-200 dark:hover:bg-[#2a2a2a] transition-all duration-300 font-medium text-sm"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <>
                  <FiSun className="text-white text-xl" />
                  <span className="text-white">Light Mode</span>
                </>
              ) : (
                <>
                  <FiMoon className="text-gray-900 text-xl" />
                  <span className="text-gray-900">Dark Mode</span>
                </>
              )}
            </button>
          </div>

          {/* Social Icons for Small Screens */}
          <div className="sm:hidden flex justify-center space-x-3 py-4 border-t border-gray-200 dark:border-white/10">
            <a
              href="https://github.com/Divyansh1552005"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-[#1e1e1e] border border-gray-200 dark:border-white/10 rounded-full hover:bg-gray-200 dark:hover:bg-[#2a2a2a] transition-all duration-300"
            >
              <FaGithub className="text-gray-900 dark:text-white text-xl" />
            </a>
            <a
              href="mailto:officialdslc1552005@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-red-600 rounded-full hover:bg-red-700 transition-all duration-300"
            >
              <FaEnvelope className="text-white text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/divyansh-sharma-b05897286/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#0A66C2] rounded-full hover:bg-[#084e96] transition-all duration-300"
            >
              <FaLinkedin className="text-white text-xl" />
            </a>
          </div>
        </div>
      )}

      {/* Icon that pops from the toggle button and spreads outward */}
      {themeRipple && (
        <div
          className="fixed z-[100] pointer-events-none theme-icon-ripple"
          style={{ left: themeRipple.x, top: themeRipple.y }}
        >
          <div className="w-16 h-16 rounded-full bg-white dark:bg-[#0d0d0d] shadow-2xl border border-gray-200 dark:border-white/10 flex items-center justify-center">
            {themeRipple.icon === "moon" ? (
              <FiMoon className="text-gray-900 dark:text-white text-3xl" />
            ) : (
              <FiSun className="text-yellow-400 text-3xl" />
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
