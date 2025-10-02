import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-blue-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-blue-500/50 hover:-translate-y-2 transition-transform duration-300"
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
                    className="inline-block bg-[#1e3a5f] text-xs font-semibold text-blue-400 rounded-full px-3 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

       {/* Enhanced Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-300"
          onClick={handleCloseModal}
        >
          <div 
            className="bg-gray-900 border border-gray-800/50 rounded-3xl shadow-2xl w-full max-w-5xl overflow-hidden relative animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header with close button */}
            <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center p-6 bg-gradient-to-b from-gray-900 to-transparent">
              <div className="flex-1"></div>
              <button
                onClick={handleCloseModal}
                className="w-12 h-12 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 text-gray-400 hover:text-white hover:bg-gray-700 hover:border-gray-600 transition-all duration-300 flex items-center justify-center group"
              >
                <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col max-h-[90vh] overflow-y-auto">
              {/* Hero Image */}
              <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden bg-gray-950">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-10">
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
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-sm font-semibold text-blue-300 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-xl px-4 py-2.5 hover:border-blue-400/50 hover:bg-blue-500/20 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 group relative overflow-hidden bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:border-gray-600 hover:shadow-lg hover:shadow-gray-800/50"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      View Source Code
                    </span>
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                      <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View Live Demo
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;