import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Github_heatmap from "./components/Github_heatmap/Github_heatmap";
import Terminal from "./components/Terminal/Terminal";

function App() {
  return (
    <>
      <div className="bg-white text-gray-900 dark:bg-[#0d0d0d] dark:text-white min-h-screen transition-colors duration-300">
        <div className="relative pt-20">
          <Navbar />
          <About />

          <Terminal />

          {/* Separator Line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>

          <Experience />

          {/* Separator Line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>

          <Work />

          {/* Separator Line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>

          <Github_heatmap />

          {/* Separator Line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>

          <Skills />

          {/* Separator Line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>

          <Education />

          {/* Separator Line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>

          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
