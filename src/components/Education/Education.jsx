import React from "react";
import { education } from "../../constants"; // Import the education data
import { motion } from 'framer-motion';


const Education = () => {
  return (
    <section
      id="education"
      className="py-16 pb-16 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-blue-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Desktop: Horizontal Layout */}
        <div className="hidden md:flex md:space-x-8 lg:space-x-12 justify-center items-stretch">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="flex-1 max-w-sm flex"
              initial={{ opacity: 0, x: -80 }} // start hidden & left
              whileInView={{ opacity: 1, x: 0 }} // animate to visible & normal position
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2, // staggered animation for each card
              }}
              viewport={{ once: false, amount: 0.3 }} // animate when 30% visible (once)
            >
              {/* Content Section */}
              <div className="w-full p-4 sm:p-6 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(59,130,246,0.3)] transform transition-transform duration-300 hover:scale-105 flex flex-col h-full">
                {/* Flex container for image and text */}
                <div className="flex flex-col items-center text-center space-y-4 flex-shrink-0">
                  <div className="w-16 h-16 bg-white rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm text-gray-300 mb-2">
                      {edu.school}
                    </h4>
                    <p className="text-sm text-gray-500 mb-2">{edu.date}</p>
                    <p className="text-gray-400 font-bold">
                      Grade: <span className="text-blue-400">{edu.grade}</span>
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-400 text-sm leading-relaxed flex-grow">{edu.desc}</p>
              </div>
            </motion.div>
          ))}

        </div>

        {/* Mobile: Vertical Layout (Original) */}
        <div className="md:hidden">
          {/* Vertical line - hidden on mobile */}
          <div className="absolute left-0 transform -translate-x-1/2 w-1 bg-white h-full hidden"></div>

          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="flex flex-col items-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              {/* Content Section */}
              <div className="w-full max-w-md p-4 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(59,130,246,0.3)] mx-auto transform transition-transform duration-300 hover:scale-105">
                {/* Flex container for image and text */}
                <div className="flex items-center space-x-6">
                  {/* School Logo/Image */}
                  <div className="w-16 h-16 bg-white rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>

                  {/* Degree, School Name, and Date */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {edu.degree}
                      </h3>
                      <h4 className="text-sm text-gray-300 mb-2">
                        {edu.school}
                      </h4>
                    </div>
                    {/* Date at the bottom */}
                    <p className="text-sm text-gray-500 mb-2">{edu.date}</p>
                    <p className="text-gray-400 font-bold">Grade: <span className="text-blue-400">{edu.grade}</span></p>
                  </div>
                </div>

                <p className="mt-4 text-gray-400 text-sm leading-relaxed">{edu.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;