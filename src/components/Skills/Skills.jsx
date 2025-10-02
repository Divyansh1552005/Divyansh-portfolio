import React from "react";
import { SkillsInfo } from "../../constants";

const Skills = () => {
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
        <div className="text-center mb-12">
          <h2 id="skills-heading" className="text-3xl sm:text-4xl font-bold text-white mb-3">
            SKILLS & TECHNOLOGIES
            <div className="w-32 h-1 bg-blue-500 mx-auto mt-4"></div>
          </h2>
          
          <p className="text-gray-400 mt-4 text-lg font-semibold">
            A comprehensive showcase of my technical proficiencies and domain knowledge
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SkillsInfo.map((category) => {
            const isCoreSubjects = category.title === 'Core Subjects';
            const gridCols = isCoreSubjects 
              ? 'grid-cols-2 sm:grid-cols-3' 
              : 'grid-cols-3 sm:grid-cols-4';

            return (
              <article
                key={category.title}
                className="bg-gray-900 rounded-2xl p-6 border border-gray-700"
              >
                {/* Category Header */}
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 text-center">
                  {category.title}
                </h3>

                {/* Skills Grid */}
                <div className={`grid gap-3 ${gridCols}`}>
                  {category.skills.map((skill) => (
                    <a
                      key={skill.name}
                      href={skill.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center justify-center gap-2 bg-[#0f1629] rounded-xl p-3 border border-[#1e2749] hover:border-[#3b82f6] transition-all duration-300 hover:bg-[#141b3a] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 focus:ring-offset-[#0a0e27]"
                      aria-label={`Learn more about ${skill.name}`}
                    >
                      {/* Skill Logo */}
                      {!isCoreSubjects && skill.logo && (
                        <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                          <img
                            src={skill.logo}
                            alt=""
                            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                            loading="lazy"
                          />
                        </div>
                      )}
                      
                      {/* Skill Name */}
                      <span className={`text-gray-300 group-hover:text-white font-medium transition-colors duration-300 text-center leading-tight ${
                        isCoreSubjects ? 'text-xs sm:text-sm' : 'text-xs'
                      }`}>
                        {skill.name}
                      </span>
                    </a>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>

    

    </>
  );
};

export default Skills;