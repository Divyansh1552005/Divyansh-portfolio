import { useState, useEffect } from "react";
import { FiExternalLink } from "react-icons/fi";
import { SiHashnode } from "react-icons/si";
import { motion } from "framer-motion";
import profileImage from "../../assets/profile.webp";

const texts = [
  "Fullstack Developer",
  "Gen AI Developer",
  "Linux Systems & DevOps",
];

const About = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

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
  }, [currentText, currentIndex, isDeleting, charIndex]);

  return (
    <>
      <section
        id="about"
        className="relative min-h-screen md:min-h-0 py-20 px-4 sm:px-6 lg:px-8 bg-[#0b0b0b] font-sans flex items-center"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-start">
            {/* Left Side - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex-shrink-0 mx-auto md:mx-0"
            >
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-gray-800/50 shadow-2xl shadow-blue-500/10">
                <img
                  src={profileImage}
                  alt="Divyansh Sharma"
                  className="w-full h-full object-cover"
                />
                {/* Subtle glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/5 to-transparent"></div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <div className="flex-1 text-center md:text-left flex flex-col justify-between md:block min-h-[calc(100vh-20rem)] md:min-h-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                {/* Name with verified icon */}
                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                    Divyansh Sharma
                  </h1>
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                {/* Meta line with typing animation */}
                <div className="mb-8">
                  <p className="text-base sm:text-lg text-gray-400 font-medium">
                    <span className="text-blue-400">{currentText}</span>
                    <span className="animate-pulse text-blue-400">|</span>
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Engineer • Developer • Builder
                  </p>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-8"></div>

                <h2 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  About
                </h2>

                <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0">
                  I love creating things which can be helpful for either me or
                  others. Mostly a JS full-stack dev (I like working on the
                  backend more heh!) and exploring cloud and DevOps stuff like
                  AWS, Docker. I also like Linux as it's made me more
                  tech-savvy, and now I actually enjoy using the terminal over
                  GUI. Lately exploring Generative AI and making useful RAG
                  chatbots for my web applications.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-auto pt-8 md:pt-0"
              >
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://drive.google.com/file/d/13XTyb6TSOhkb-Xoc8rIw-RtBnE1Yfu5m/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base"
                >
                  View Resume
                  <FiExternalLink size={18} />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://divyanshblogs.hashnode.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gray-800/50 hover:bg-gray-700/70 text-gray-300 hover:text-white py-3 px-6 rounded-lg border border-gray-700/50 hover:border-gray-600 font-semibold transition-all duration-300 text-sm sm:text-base"
                >
                  Read Blog
                  <SiHashnode size={18} />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
