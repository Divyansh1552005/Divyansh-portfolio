import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiMail, FiFileText, FiArrowRight } from "react-icons/fi";

const Experience = () => {
  const skills = [
    'MERN Stack',
    'Generative AI',
    'Cloud Computing',
    'System Design',
  ];

  return (
    <section
      id="experience"
      className="py-16 pb-16 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="h-1 bg-blue-500 mx-auto mt-4"
        />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </motion.div>

      {/* Main Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto"
      >
        <div className="relative bg-[#0d0d0d] rounded-3xl border border-gray-700/50 overflow-hidden shadow-2xl">
          {/* Background overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-600/5 via-transparent to-gray-500/5 pointer-events-none"></div>
          
          {/* Hover glow effect */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-gray-500/20 via-gray-400/20 to-gray-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>          <div className="relative p-8 sm:p-12 lg:p-16">
            {/* Icon with animated background */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              viewport={{ once: true }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gray-500/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-gray-600 to-gray-700 p-5 rounded-2xl">
                  <FiBriefcase size={48} className="text-white" />
                </div>
              </div>
            </motion.div>

            {/* Title Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Open to New Opportunities
              </h3>
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-gray-500/10 to-gray-600/10 border border-gray-500/30 rounded-full">
                <h4 className="text-lg sm:text-xl text-blue-400 font-semibold">
                  Full-Stack & Gen AI Developer
                </h4>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-300 text-base sm:text-lg leading-relaxed mb-10 max-w-3xl mx-auto text-center"
            >
              I am actively seeking opportunities in{" "}
              <span className="text-blue-400 font-semibold">full-stack development</span>,{" "}
              <span className="text-blue-400 font-semibold">generative AI</span>, and{" "}
              <span className="text-blue-400 font-semibold">cloud technologies</span>.
              Eager to contribute to real-world projects and collaborate with innovative teams.
            </motion.p>

            {/* Skills Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h5 className="font-semibold text-white mb-6 text-center text-lg">
                Areas of Interest
              </h5>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
                    <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 group-hover:border-gray-500/50 rounded-xl px-4 py-3 text-center transition-all duration-300">
                      <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                        {skill}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:officialdslc1552005@gmail.com"
                className="group relative overflow-hidden w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-r  rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center gap-2 text-white px-8 py-4 rounded-full font-bold">
                  <FiMail className="text-xl" />
                  <span>Let's Connect</span>
                  <FiArrowRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/file/d/1BbydskQ4dldy-QOdRZt8rFbAJ4qBykAO/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gray-800 rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center gap-2 text-white px-8 py-4 rounded-full font-bold border-2 border-gray-700 group-hover:border-gray-600">
                  <FiFileText className="text-xl" />
                  <span>View Resume</span>
                  <FiArrowRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.a>
            </motion.div>

            {/* Decorative bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-50"></div>
          </div>
        </div>
      </motion.div>

      {/* Optional: Timeline indicator for future experiences */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: true }}
        className="hidden sm:flex justify-center mt-12"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gray-500 animate-pulse"></div>
          <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;