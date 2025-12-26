import React, { useState } from "react";
import { projects } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("webdev");
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const categories = [
    { id: "webdev", label: "Web Dev" },
    { id: "genai", label: "Gen AI" },
    { id: "misc", label: "Miscellaneous" },
  ];

  // Filter projects based on active category
  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory,
  );

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-16 pb-16 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="h-1 bg-blue-600 mx-auto mt-4"
        />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </motion.div>

      {/* Category Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: false }}
        className="mb-12"
      >
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                activeCategory === category.id
                  ? "text-white"
                  : "text-gray-400 bg-transparent border border-gray-700 hover:border-blue-500 hover:text-white"
              }`}
              style={
                activeCategory === category.id
                  ? {
                      background: "linear-gradient(90deg, #2563eb, #1d4ed8)",
                    }
                  : {}
              }
            >
              {category.label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid gap-8 grid-cols-1 lg:grid-cols-2"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              onClick={() => handleOpenModal(project)}
              initial={{
                opacity: 0,
                y: isMobile ? 30 : 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: isMobile ? 0.4 : 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={
                !isMobile
                  ? {
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }
                  : {}
              }
              whileTap={{ scale: 0.98 }}
              className="border border-white bg-[#0d0d0d] backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-white/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 sm:h-60 object-cover rounded-xl"
                />
              </div>
              <div className="px-6 pb-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-500 mb-4 pt-2 line-clamp-3 text-base leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block text-xs font-semibold text-blue-300 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-xl px-3 py-1.5 mr-2 mb-2 hover:border-blue-400/50 hover:bg-blue-500/20 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Enhanced Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{
                duration: 0.3,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="bg-[#0d0d0d] border border-gray-800/50 rounded-3xl shadow-2xl w-full max-w-5xl overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header with close button */}
              <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center p-6 bg-gradient-to-b from-gray-900 to-transparent">
                <div className="flex-1"></div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  onClick={handleCloseModal}
                  className="w-12 h-12 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 text-gray-400 hover:text-white hover:bg-gray-700 hover:border-gray-600 transition-colors duration-300 flex items-center justify-center"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>

              <div className="flex flex-col max-h-[90vh] overflow-y-auto">
                {/* Hero Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative w-full h-[300px] md:h-[400px] overflow-hidden bg-gray-950"
                >
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="p-6 md:p-10"
                >
                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                    {selectedProject.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                    {selectedProject.description}
                  </p>

                  {/* Tech Stack Section */}
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                      Tech Stack
                    </h4>
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.05,
                            delayChildren: 0.3,
                          },
                        },
                      }}
                      className="flex flex-wrap gap-3"
                    >
                      {selectedProject.tags.map((tag, index) => (
                        <motion.span
                          key={index}
                          variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 },
                          }}
                          whileHover={{ scale: 1.05 }}
                          className="text-sm font-semibold text-blue-300 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-xl px-4 py-2.5 hover:border-blue-400/50 hover:bg-blue-500/20 transition-all duration-300"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <motion.a
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 group relative overflow-hidden bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:border-gray-600 hover:shadow-lg hover:shadow-gray-800/50"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        View Source Code
                      </span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                        <motion.svg
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </motion.svg>
                        View Live Demo
                      </span>
                    </motion.a>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
