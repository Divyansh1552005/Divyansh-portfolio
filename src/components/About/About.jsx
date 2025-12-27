import React, { useState, useEffect } from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaHashnode } from "react-icons/fa6";
import profileImage from "../../assets/profile.png";

const About = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const texts = [
    "Fullstack Developer",
    "Gen AI Developer",
    "Cloud Architect",
    "Linux Enthusiast",
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentFullText = texts[currentIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentFullText.length) {
        setCurrentText(currentFullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText(currentFullText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentFullText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % texts.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, charIndex, texts]);

  return (
    <section
      id="about"
      className="pt-4 pb-16 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-8 md:mt-12 lg:mt-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-10 lg:gap-16">
          {/* Left Side - Content */}
          <div className="flex-1 text-center md:text-left mt-8 md:mt-0 w-full md:max-w-xl lg:max-w-2xl">
            {/* Greeting */}
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight">
              Hi, I am
            </h1>

            {/* Name */}
            <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
              Divyansh Sharma
            </h2>

            {/* Skills Heading with Custom Typing Effect */}
            <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold mb-6 lg:mb-8 leading-tight">
              <span className="text-white">I am a </span>
              <span className="text-[#3b82f6]">
                {currentText}
                <span className="animate-pulse text-[#3b82f6]">|</span>
              </span>
            </h3>

            {/* About Me Paragraph */}
            <p className="text-base sm:text-lg md:text-base lg:text-lg text-gray-400 mb-8 leading-relaxed">
              I love creating things which can be helpful for either me or
              others. Mostly a JS full-stack dev (I like working on the backend
              more heh!) and exploring cloud and DevOps stuff like AWS, Docker.
              I also like Linux as it's made me more tech-savvy, and now I
              actually enjoy using the terminal over GUI. Lately exploring
              Generative AI and making useful RAG chatbots for my web
              applications.
            </p>

            {/* Resume and Blog Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
              <a
                href="https://drive.google.com/file/d/1BbydskQ4dldy-QOdRZt8rFbAJ4qBykAO/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-white py-3 px-8 rounded-full text-base lg:text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700"
              >
                View My Resume
                <FiExternalLink size={20} />
              </a>

              <a
                href="https://divyanshblogs.hashnode.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-white py-3 px-8 rounded-full text-base lg:text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-blue-500 hover:border-blue-400 hover:bg-blue-600/10 w-full sm:w-auto relative overflow-hidden group bg-blue-500/5 backdrop-blur-sm"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Read My Blog
                  <FaHashnode className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] border-4 border-blue-600 rounded-full overflow-hidden bg-gray-900">
              <img
                src={profileImage}
                alt="Divyansh Sharma"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
