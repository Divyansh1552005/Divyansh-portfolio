import React, { useState, useEffect } from 'react';
import profileImage from '../../assets/profile.png';

const About = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const texts = [
    'Fullstack Developer',
    'Gen AI Developer', 
    'Cloud Architect'
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
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-8 md:mt-12 lg:mt-16"
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
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a Full-Stack Developer specializing in the MERN stack and modern web technologies. I enjoy building clean, functional applications with a focus on backend development and creating smooth user experiences. Currently exploring AI integration and cloud technologies to build scalable solutions.
          </p>
          
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1iWRlRQvPRE6LgJaNOQVpqk3_bpezbf3t/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105 hover:shadow-lg"
            style={{
              background: 'linear-gradient(90deg, #3b82f6, #1d4ed8)',
              boxShadow: '0 0 1px #3b82f6, 0 0 8px #3b82f6',
            }}
          >
            DOWNLOAD CV
          </a>
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