import React from "react";
import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiMail,
  FiFileText,
  FiArrowRight,
  FiCalendar,
  FiExternalLink,
} from "react-icons/fi";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-16 xl:px-32 font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-3">EXPERIENCE</h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="h-1 bg-blue-500 mx-auto mb-4"
        />
        <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4 leading-relaxed">
          Professional experience and contributions to real-world projects
        </p>
      </motion.div>

      {/* Experience Cards */}
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 mb-12 sm:mb-16">
        {experiences.map((experience, index) => (
          <motion.article
            key={experience.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="group"
          >
            <div className="relative bg-[#0f0f0f] rounded-2xl sm:rounded-3xl border border-gray-800 overflow-hidden transition-all duration-300 hover:border-gray-700">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/3 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-5 sm:p-8 lg:p-10">
                {/* Mobile: Vertical Stack | Desktop: Horizontal Layout */}
                <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 mb-6">
                  {/* Company Logo */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex-shrink-0 self-start sm:self-center"
                  >
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full border border-gray-700 flex items-center justify-center p-3 sm:p-4 transition-all duration-300 group-hover:border-blue-500/30">
                        <img
                          src={experience.img}
                          alt={`${experience.company} logo`}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Role, Company, and Date */}
                  <div className="flex-grow min-w-0">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      {/* Role Title */}
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                        {experience.role}
                      </h3>

                      {/* Company and Date */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-1">
                        <div className="flex items-center gap-2 min-h-[44px] sm:min-h-0">
                          <FiBriefcase
                            className="text-blue-400 flex-shrink-0"
                            size={18}
                            aria-hidden="true"
                          />
                          <span className="text-base sm:text-lg font-semibold text-gray-300">
                            {experience.company}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-lg w-fit">
                          <FiCalendar
                            className="text-blue-400 flex-shrink-0"
                            size={14}
                            aria-hidden="true"
                          />
                          <span className="text-xs sm:text-sm text-blue-400 font-medium">
                            {experience.date}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mb-6"
                >
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-3xl">
                    {experience.desc}
                  </p>
                </motion.div>

                {/* Skills Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {experience.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.6 + skillIndex * 0.03,
                        }}
                        viewport={{ once: true }}
                        className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-xs sm:text-sm font-medium text-gray-300 hover:bg-gray-800 hover:border-gray-600 hover:text-white transition-all duration-200 min-h-[44px] sm:min-h-0"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Website Link */}
                {experience.id === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-6 pt-6 border-t border-gray-800"
                  >
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href="https://philauncher.site/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base"
                      aria-label="Visit Phi Launcher website"
                    >
                      <span>Visit Website</span>
                      <FiExternalLink
                        className="text-base sm:text-lg"
                        aria-hidden="true"
                      />
                    </motion.a>
                  </motion.div>
                )}

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Open to Opportunities Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden p-8 sm:p-10 lg:p-12 shadow-xl border border-gray-800">
          {/* Subtle glow effect */}
          <div className="absolute -inset-px bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/10 rounded-2xl sm:rounded-3xl opacity-50 blur-xl" />

          <div className="relative text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                className="mx-auto sm:mx-0 flex-shrink-0"
              >
                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl">
                  <FiBriefcase size={28} className="text-white" />
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-grow">
                {/* Heading */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 leading-tight">
                  Open to Opportunities
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto sm:mx-0">
                  Actively seeking roles in{" "}
                  <span className="text-blue-300 font-semibold">
                    full-stack development
                  </span>
                  ,{" "}
                  <span className="text-blue-300 font-semibold">
                    generative AI
                  </span>
                  , and{" "}
                  <span className="text-blue-300 font-semibold">
                    cloud technologies
                  </span>
                  . Let's build something impactful together.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
                  {/* Primary CTA */}
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="mailto:officialdslc1552005@gmail.com"
                    className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold rounded-xl transition-all duration-300 min-h-[48px] overflow-hidden"
                    aria-label="Send email to discuss opportunities"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/10 to-blue-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    <FiMail
                      className="text-lg sm:text-xl relative z-10"
                      aria-hidden="true"
                    />
                    <span className="text-sm sm:text-base relative z-10">
                      Let's Connect
                    </span>
                    <FiArrowRight
                      className="text-base sm:text-lg group-hover:translate-x-1 transition-transform duration-300 relative z-10"
                      aria-hidden="true"
                    />
                  </motion.a>

                  {/* Secondary CTA */}
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://drive.google.com/file/d/1BbydskQ4dldy-QOdRZt8rFbAJ4qBykAO/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 bg-gray-800/50 hover:bg-gray-700/70 text-gray-300 hover:text-white font-semibold rounded-xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300 min-h-[48px] backdrop-blur-sm"
                    aria-label="View resume in new tab"
                  >
                    <FiFileText
                      className="text-lg sm:text-xl"
                      aria-hidden="true"
                    />
                    <span className="text-sm sm:text-base">View Resume</span>
                    <FiArrowRight
                      className="text-base sm:text-lg group-hover:translate-x-1 transition-transform duration-300"
                      aria-hidden="true"
                    />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
