import React from "react";
import { motion } from "framer-motion";
import { SkillsInfo } from "../../constants";

const Skills = () => {
  // Detect if device is mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Category card variants
  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Skill item variants with stagger
  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      <section
        id="skills"
        className="relative py-16 px-4 sm:px-6 lg:px-8 font-sans"
        aria-labelledby="skills-heading"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-12"
          >
            <h2 id="skills-heading" className="text-3xl sm:text-4xl font-bold text-white mb-3">
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
              A comprehensive showcase of my technical proficiencies and domain knowledge
            </p>
          </motion.div>

          {/* Skill Categories Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: isMobile, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {SkillsInfo.map((category, categoryIndex) => {
              const isCoreSubjects = category.title === 'Core Subjects';
              const gridCols = isCoreSubjects 
                ? 'grid-cols-2 sm:grid-cols-3' 
                : 'grid-cols-3 sm:grid-cols-4';

              return (
                <motion.article
                  key={category.title}
                  variants={categoryVariants}
                  className="bg-gray-900 rounded-2xl p-6 border border-gray-700"
                >
                  {/* Category Header */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 text-center">
                    {category.title}
                  </h3>

                  {/* Skills Grid */}
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: isMobile, amount: 0.2 }}
                    className={`grid gap-3 ${gridCols}`}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.a
                        key={skill.name}
                        variants={skillItemVariants}
                        whileHover={!isMobile ? { 
                          scale: 1.1,
                          y: -4,
                          transition: { duration: 0.2 }
                        } : {}}
                        whileTap={{ scale: 0.95 }}
                        href={skill.docs}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center justify-center gap-2 bg-[#0f1629] rounded-xl p-3 border border-[#1e2749] hover:border-[#3b82f6] transition-colors duration-300 hover:bg-[#141b3a] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 focus:ring-offset-[#0a0e27]"
                        aria-label={`Learn more about ${skill.name}`}
                      >
                        {/* Skill Logo */}
                        {!isCoreSubjects && skill.logo && (
                          <motion.div
                            whileHover={!isMobile ? { rotate: 360 } : {}}
                            transition={{ duration: 0.6 }}
                            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
                          >
                            <img
                              src={skill.logo}
                              alt=""
                              className="w-full h-full object-contain"
                              loading="lazy"
                            />
                          </motion.div>
                        )}
                        
                        {/* Skill Name */}
                        <span className={`text-gray-300 group-hover:text-white font-medium transition-colors duration-300 text-center leading-tight ${
                          isCoreSubjects ? 'text-xs sm:text-sm' : 'text-xs'
                        }`}>
                          {skill.name}
                        </span>
                      </motion.a>
                    ))}
                  </motion.div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Skills;