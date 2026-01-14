import React, { useState } from "react";
import { projects } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Work = () => {
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

  return (
    <>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      <section
        id="work"
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#0b0b0b] font-sans"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="mb-16 text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Projects
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
              className="h-1.5 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 mt-4 rounded-full mx-auto"
            />
          </motion.div>

          {/* Category Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: false }}
            className="mb-16"
          >
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0b0b0b] ${
                    activeCategory === category.id
                      ? "text-white"
                      : "text-gray-400 bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 hover:text-white hover:bg-gray-800/70"
                  }`}
                  style={
                    activeCategory === category.id
                      ? {
                          background:
                            "linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%)",
                        }
                      : {}
                  }
                >
                  <span className="relative z-10">{category.label}</span>
                  {activeCategory === category.id && (
                    <motion.div
                      layoutId="activeProjectTab"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500"
                      style={{ borderRadius: 9999 }}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects List */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="group"
                >
                  {/* Horizontal Card */}
                  <div className="relative bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-800/50 overflow-hidden transition-all duration-300">
                    <div className="relative flex flex-col md:flex-row">
                      {/* Project Image - Left */}
                      <div className="relative md:w-2/5 lg:w-1/3 flex-shrink-0 p-4 sm:p-6 flex items-center justify-center">
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-950/50 border border-gray-800/30">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      {/* Project Content - Right */}
                      <div className="flex-1 p-4 sm:p-6 flex flex-col">
                        {/* Title and Action Buttons */}
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight flex-1">
                            {project.title}
                          </h3>

                          {/* Action Buttons */}
                          <div className="flex items-center gap-2 flex-shrink-0">
                            {project.github !== "#" && (
                              <motion.a
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-800/50 border border-gray-700 text-gray-400 hover:text-white hover:bg-gray-700 hover:border-gray-600 transition-all duration-300"
                                aria-label="View GitHub Repository"
                              >
                                <FiGithub size={16} />
                              </motion.a>
                            )}
                            {project.webapp !== "#" && (
                              <motion.a
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                href={project.webapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-600 border border-blue-500 text-white hover:bg-blue-500 hover:border-blue-400 transition-all duration-300"
                                aria-label="View Live Demo"
                              >
                                <FiExternalLink size={16} />
                              </motion.a>
                            )}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                          {project.description}
                        </p>

                        {/* Tech Stack Badges */}
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="text-xs px-2.5 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 font-medium hover:border-blue-400/50 hover:bg-blue-500/20 transition-all duration-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default Work;
