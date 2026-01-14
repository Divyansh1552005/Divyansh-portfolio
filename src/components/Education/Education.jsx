import React from "react";
import { education } from "../../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      <section
        id="education"
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#0b0b0b] font-sans"
        aria-labelledby="education-heading"
      >
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="mb-16 text-center"
          >
            <h2
              id="education-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight"
            >
              Education
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
              className="h-1.5 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 mt-4 rounded-full mx-auto"
            />
          </motion.div>

          {/* Education List */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="group"
              >
                <div className="flex gap-4 sm:gap-6">
                  {/* School Logo */}
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center p-2">
                    <img
                      src={edu.img}
                      alt={`${edu.school} logo`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Title and Date */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-bold text-white">
                          {edu.degree}
                        </h3>
                        <p className="text-sm text-gray-400 font-medium">
                          {edu.school}
                        </p>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-500 font-medium whitespace-nowrap">
                        {edu.date}
                      </span>
                    </div>

                    {/* Grade */}
                    <p className="text-xs sm:text-sm text-gray-500 mb-2">
                      Grade:{" "}
                      <span className="text-blue-400 font-medium">
                        {edu.grade}
                      </span>
                    </p>

                    {/* Description as bullet points */}
                    <ul className="space-y-2 text-sm sm:text-base text-gray-400 leading-relaxed">
                      {edu.desc
                        .split(". ")
                        .filter((point) => point.trim())
                        .map((point, idx) => (
                          <li key={idx} className="flex gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                            <span>
                              {point.trim()}
                              {point.endsWith(".") ? "" : "."}
                            </span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>

                {/* Divider */}
                {index < education.length - 1 && (
                  <div className="mt-8 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
