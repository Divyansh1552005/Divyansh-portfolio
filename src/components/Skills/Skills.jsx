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
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      <section
        id="skills"
        className="relative py-16 px-4 sm:px-6 lg:px-8 font-sans"
        aria-labelledby="skills-heading"
      >
        <div className="max-w-7xl mx-auto">
          {/* TITLE - SKILLS & TECHNOLOGIES */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-12"
          >
            <h2
              id="skills-heading"
              className="text-3xl sm:text-4xl font-bold text-white mb-3"
            >
              SKILLS & TECHNOLOGIES
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 128 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false }}
                className="h-1 bg-blue-500 mx-auto mt-4"
              />
            </h2>

            <p className="text-gray-400 mt-4 text-lg font-semibold">
              A comprehensive showcase of my technical proficiencies and domain
              knowledge
            </p>
          </motion.div>

          {/* FILTER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: false }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                    activeCategory === category.id
                      ? "text-white"
                      : "text-gray-400 bg-transparent border border-gray-700 hover:border-blue-500 hover:text-white"
                  }`}
                  style={
                    activeCategory === category.id
                      ? {
                          background:
                            "linear-gradient(135deg, #2563eb, #1d4ed8)",
                        }
                      : {}
                  }
                >
                  {category.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {activeCategoryData && (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-8 md:gap-10"
                >
                  {activeCategoryData.skills.map((skill) => (
                    <motion.a
                      key={skill.name}
                      variants={skillItemVariants}
                      whileHover={
                        !isMobile
                          ? {
                              scale: 1.15,
                              y: -12,
                              transition: { duration: 0.3, ease: "easeOut" },
                            }
                          : {}
                      }
                      whileTap={{ scale: 0.95 }}
                      href={skill.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex flex-col items-center justify-center gap-4 focus:outline-none"
                      aria-label={`Learn more about ${skill.name}`}
                    >
                      
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-3 sm:p-4 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300">
                        {skill.logo && (
                          <img
                            src={skill.logo}
                            alt=""
                            className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                            loading="lazy"
                          />
                        )}
                      </div>

                      
                      <motion.span
                        className="text-gray-400 group-hover:text-white font-semibold transition-colors duration-300 text-center leading-tight text-sm sm:text-base"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {skill.name}
                      </motion.span>
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
