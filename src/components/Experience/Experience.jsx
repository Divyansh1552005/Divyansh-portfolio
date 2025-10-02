import React from "react";
import { experiences } from "../../constants"; // Import your data
import { FiExternalLink } from "react-icons/fi";
import { FiBriefcase } from "react-icons/fi";


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

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line - hidden on mobile, visible on desktop */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full hidden sm:block"></div>

        {/* Currently Looking for Opportunities */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-full max-w-2xl p-8 sm:p-12 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(59,130,246,0.3)] transition-all duration-300 hover:shadow-blue-500/50">

            {/* Icon/Visual Element */}
            
            <div className="flex justify-center">
              <FiBriefcase size={60} className="text-white-500 mb-4" />
            </div>

            {/* Title */}
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Open to New Opportunities
            </h3>

            {/* Subtitle */}
            <h4 className="text-xl sm:text-2xl text-blue-400 mb-6 font-semibold">
              Full-Stack and Gen AI Developer
            </h4>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              I am actively seeking exciting opportunities in <span className="text-blue-400 font-semibold">full-stack development</span>,
              <span className="text-blue-400 font-semibold"> generative AI</span>, and <span className="text-blue-400 font-semibold">cloud technologies</span>.
              Ready to contribute to innovative projects and collaborate with dynamic teams to build impactful solutions.
            </p>

            {/* Skills/Interests */}
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

            {/* Call to Action */}
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

        {/* Commented out previous experience data - uncomment when you have work experience */}
        {/* {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {experience.company}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-400">{experience.desc}</p>
              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </section>
  );
};

export default Experience;