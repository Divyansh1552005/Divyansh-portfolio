import React from "react";
import { FiExternalLink, FiBriefcase } from "react-icons/fi";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 pb-16 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-blue-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Desktop View - Keep Original */}
      <div className="relative hidden sm:block">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {/* Currently Looking for Opportunities */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-full max-w-2xl p-8 sm:p-12 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(59,130,246,0.3)] transition-all duration-300 hover:shadow-blue-500/50">
            <div className="flex justify-center">
              <FiBriefcase size={60} className="text-white-500 mb-4" />
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Open to New Opportunities
            </h3>

            <h4 className="text-xl sm:text-2xl text-blue-400 mb-6 font-semibold">
              Full-Stack and Gen AI Developer
            </h4>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              I am actively seeking opportunities in <span className="text-blue-400 font-semibold">full-stack development</span>,
              <span className="text-blue-400 font-semibold"> generative AI</span>, and <span className="text-blue-400 font-semibold">cloud technologies</span>.
              Eager to contribute to real world projects and collaborate with teams.
            </p>

            <div className="mb-8">
              <h5 className="font-semibold text-white mb-4 text-lg">Areas of Interest:</h5>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'MERN Stack',
                  'Generative AI',
                  'Cloud Computing',
                  'System Design',
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue-600 to-sky-600 text-white px-4 py-2 text-sm rounded-full border border-blue-400 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:officialdslc1552005@gmail.com"
                className="inline-block text-white px-8 py-3 rounded-full font-bold transition duration-300 transform hover:scale-105 hover:shadow-lg"
                style={{
                  background: 'linear-gradient(90deg, #3b82f6, #1d4ed8)',
                }}
              >
                Let's Connect
              </a>
              <a
                href="https://drive.google.com/file/d/1BbydskQ4dldy-QOdRZt8rFbAJ4qBykAO/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white px-8 py-3 rounded-full font-bold transition duration-300 transform hover:scale-105 hover:shadow-lg"
                style={{
                  background: 'linear-gradient(90deg, #3b82f6, #1d4ed8)',
                }}
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View - Consistent with Desktop */}
      <div className="block sm:hidden">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-full max-w-md p-6 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(59,130,246,0.3)] transition-all duration-300 hover:shadow-blue-500/50">
            {/* Icon */}
            <div className="flex justify-center">
              <FiBriefcase size={50} className="text-white-500 mb-4" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-3">
              Open to New Opportunities
            </h3>

            {/* Subtitle */}
            <h4 className="text-lg text-blue-400 mb-4 font-semibold">
              Full-Stack and Gen AI Developer
            </h4>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-xs mx-auto">
              I am actively seeking opportunities in <span className="text-blue-400 font-semibold">full-stack development</span>,
              <span className="text-blue-400 font-semibold"> generative AI</span>, and <span className="text-blue-400 font-semibold">cloud technologies</span>.
              Eager to contribute to real world projects and collaborate with teams.
            </p>

            {/* Skills/Interests */}
            <div className="mb-6">
              <h5 className="font-semibold text-white mb-3 text-sm">Areas of Interest:</h5>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'MERN Stack',
                  'Generative AI',
                  'Cloud Computing',
                  'System Design',
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue-600 to-sky-600 text-white px-3 py-1.5 text-xs rounded-full border border-blue-400 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col gap-3 justify-center">
              <a
                href="mailto:officialdslc1552005@gmail.com"
                className="inline-block text-white px-6 py-2.5 rounded-full font-bold transition duration-300 transform hover:scale-105 hover:shadow-lg text-sm"
                style={{
                  background: 'linear-gradient(90deg, #3b82f6, #1d4ed8)',
                }}
              >
                Let's Connect
              </a>
              <a
                href="https://drive.google.com/file/d/1BbydskQ4dldy-QOdRZt8rFbAJ4qBykAO/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white px-6 py-2.5 rounded-full font-bold transition duration-300 transform hover:scale-105 hover:shadow-lg text-sm"
                style={{
                  background: 'linear-gradient(90deg, #3b82f6, #1d4ed8)',
                }}
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Commented experience cards remain the same */}
      {/* {experiences.map((experience, index) => (
        ...
      ))} */}
    </section>
  );
};

export default Experience;