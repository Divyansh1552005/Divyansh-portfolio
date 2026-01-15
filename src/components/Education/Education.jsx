import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { education } from "../../constants";

const Education = () => {
  // Set all education items as collapsed by default
  const [expandedIds, setExpandedIds] = useState([]);

  const toggleExpand = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((expId) => expId !== id) : [...prev, id],
    );
  };

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

          {/* Education Cards */}
          <div className="space-y-4">
            {[...education].reverse().map((edu, index) => (
              <React.Fragment key={edu.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="group"
                >
                  {/* Main Card */}
                  <div
                    onClick={() => toggleExpand(edu.id)}
                    className="cursor-pointer py-6 px-4 sm:px-6 hover:bg-gray-900/30 transition-all duration-300 rounded-lg border border-gray-800/50 hover:border-gray-700 hover:shadow-lg hover:shadow-blue-500/5"
                    role="button"
                    aria-expanded={expandedIds.includes(edu.id)}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleExpand(edu.id);
                      }
                    }}
                  >
                    <div className="flex items-start gap-4 sm:gap-6">
                      {/* School Logo */}
                      <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14">
                        <img
                          src={edu.img}
                          alt={`${edu.school} logo`}
                          className="w-full h-full object-cover rounded-full"
                          loading="lazy"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-grow min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                          <div className="flex-grow min-w-0">
                            {/* School Name / Degree */}
                            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white">
                              {edu.school}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-500 font-normal mt-1">
                              {edu.degree}
                            </p>
                          </div>

                          {/* Date & Chevron */}
                          <div className="flex items-center gap-3 flex-shrink-0 justify-between sm:justify-start">
                            <span className="text-xs sm:text-sm text-gray-500 font-medium whitespace-nowrap">
                              {edu.date}
                            </span>
                            <div className="text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                              {expandedIds.includes(edu.id) ? (
                                <FiChevronUp size={20} />
                              ) : (
                                <FiChevronDown size={20} />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {expandedIds.includes(edu.id) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="mt-6 ml-0 sm:ml-20 space-y-4">
                            {/* Grade */}
                            <p className="text-xs sm:text-sm text-gray-500">
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
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
