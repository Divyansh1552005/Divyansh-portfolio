import React, { useState, useEffect } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { FaHashnode } from "react-icons/fa6";
import profileImage from '../../assets/profile.png';

const About = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const texts = [
    'Fullstack Developer',
    'Gen AI Developer',
    'Cloud Architect',
    'Linux fan'
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
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
            Divyansh Sharma
          </h2>

          {/* Skills Heading with Custom Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#3b82f6] leading-tight">
            <span className="text-white">I am a </span>
            <span className="text-[#3b82f6]">
              {currentText}
              <span className="animate-pulse text-[#3b82f6]">|</span>
            </span>
          </h3>

          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed text-justify">
         I love creating things which can be helpful for either me or others. Mostly a JS full-stack dev (I like working on the backend more heh!) and exploring cloud and Devops stuff like AWS, Docker & K8s. I also like Linux — it’s made me more tech-savvy, and now I actually enjoy using the terminal over GUI. Lately exploring Generative AI and making useful RAG chatbots for my web applications.
          </p>

          {/* Resume and Blog Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-5 items-center sm:items-start">
            <a
              href="https://drive.google.com/file/d/1BbydskQ4dldy-QOdRZt8rFbAJ4qBykAO/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-auto"
              style={{
                background: 'linear-gradient(90deg, #3b82f6, #1d4ed8)',
              }}
            >
              View My Resume
              <FiExternalLink size={20} />
            </a>
            
            <a
              href="https://divyanshblogs.hashnode.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-white py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-blue-500 hover:border-blue-400 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 w-full sm:w-auto relative overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(29, 78, 216, 0.1))',
                backdropFilter: 'blur(10px)',
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Read My Blog
                <FaHashnode className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
              </span>
              {/* Subtle background animation on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-blue-600 rounded-full">
            {/* Profile Image */}
            <img
              src={profileImage}
              alt="Divyansh Sharma"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(59,130,246,0.5)]"
            />
          </div>
        </div>
      </div>

      
    </section>
     

     
    
  );
};

export default About;