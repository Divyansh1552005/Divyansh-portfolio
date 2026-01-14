import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SkillsInfo } from "../../constants";

const Skills = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const categories = [
    { id: "frontend", label: "Frontend", dataKey: "Frontend" },
    { id: "backend", label: "Backend", dataKey: "Backend" },
    { id: "genai", label: "Gen AI", dataKey: "Generative AI" },
    { id: "devops", label: "DevOps & Tools", dataKey: "Tools & Cloud" },
  ];

  const [activeCategory, setActiveCategory] = useState("frontend");

  const getActiveCategoryData = () => {
    const categoryMap = {
      frontend: "Frontend",
      backend: "Backend",
      genai: "Generative AI",
      devops: "Tools & Cloud",
    };

    return SkillsInfo.find(
      (skill) => skill.title === categoryMap[activeCategory],
    );
  };

  const activeCategoryData = getActiveCategoryData();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.02,
        staggerDirection: -1,
      },
    },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      <section
        id="skills"
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#0b0b0b] font-sans"
        aria-labelledby="skills-heading"
      >
        <div className="max-w-7xl mx-auto">
          {/* TITLE - SKILLS & TECHNOLOGIES */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2
              id="skills-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
            >
              Skills
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
              className="h-1.5 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 mx-auto rounded-full"
            />
          </motion.div>

          {/* FILTER BUTTONS */}
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
                      layoutId="activeTab"
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

          {/* SKILLS GRID - HORIZONTAL COMPACT CARDS */}
          <AnimatePresence mode="wait">
            {activeCategoryData && (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex flex-wrap justify-center gap-3 sm:gap-4"
                >
                  {activeCategoryData.skills.map((skill) => (
                    <motion.a
                      key={skill.name}
                      variants={skillItemVariants}
                      whileHover={
                        !isMobile
                          ? {
                              scale: 1.05,
                              y: -4,
                              transition: { duration: 0.2, ease: "easeOut" },
                            }
                          : {}
                      }
                      whileTap={{ scale: 0.95 }}
                      href={skill.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center gap-3 px-4 py-2.5 bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-800/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0b0b0b]"
                      aria-label={`Learn more about ${skill.name}`}
                    >
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300" />

                      {/* SMALL ICON */}
                      <div className="relative z-10 w-8 h-8 flex items-center justify-center flex-shrink-0">
                        {skill.logo && (
                          <img
                            src={skill.logo}
                            alt=""
                            className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                            loading="lazy"
                          />
                        )}
                      </div>

                      {/* SKILL NAME */}
                      <span className="relative z-10 text-gray-400 group-hover:text-white font-medium transition-colors duration-300 text-sm whitespace-nowrap">
                        {skill.name}
                      </span>
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default Skills;
