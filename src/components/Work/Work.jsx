import React, { useState } from "react";
import { projects } from "../../constants";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("webdev");

  const categories = [
    { id: "webdev", label: "Development" },
    { id: "genai", label: "Generative AI" },
    { id: "misc", label: "Others" },
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
          <div className="mb-16 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Projects
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 mt-4 rounded-full mx-auto" />
          </div>

          {/* Category Filter Bar */}
          <div className="mb-16">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0b0b0b] hover:scale-105 active:scale-95 ${activeCategory === category.id
                    ? "text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-500/20"
                    : "text-gray-400 bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 hover:text-white hover:bg-gray-800/70"
                    }`}
                >
                  <span className="relative z-10">{category.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Projects List */}
          <div key={activeCategory} className="space-y-8">
            {filteredProjects.map((project) => (
              <article key={project.id} className="group">
                {/* Horizontal Card */}
                <div className="relative bg-[#111111] backdrop-blur-sm rounded-2xl border border-gray-800/50 overflow-hidden transition-all duration-300">
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
                      <div className="flex flex-row items-center justify-between gap-3 sm:gap-4 mb-3 w-full">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight flex-1">
                          {project.title}
                        </h3>

                        {/* Action Buttons */}
                        <div className="flex flex-row items-center gap-2 sm:gap-3 flex-shrink-0">
                          {project.github !== "#" && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 sm:px-4 py-1.5 sm:py-2 flex items-center justify-center gap-2 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-400 hover:text-white hover:bg-gray-700 hover:border-gray-600 hover:-translate-y-0.5 hover:scale-105 active:scale-95 transition-all duration-300 text-xs sm:text-sm font-medium"
                              aria-label="View GitHub Repository"
                            >
                              <FiGithub size={16} /> GitHub
                            </a>
                          )}
                          {project.webapp !== "#" && (
                            <a
                              href={project.webapp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 sm:px-4 py-1.5 sm:py-2 flex items-center justify-center gap-2 rounded-lg bg-blue-600 border border-blue-500 text-white hover:bg-blue-500 hover:border-blue-400 hover:-translate-y-0.5 hover:scale-105 active:scale-95 transition-all duration-300 text-xs sm:text-sm font-medium"
                              aria-label="View Live Demo"
                            >
                              <FiExternalLink size={16} /> Live
                            </a>
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
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
