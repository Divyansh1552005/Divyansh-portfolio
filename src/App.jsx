import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <>
      <div className="bg-[#0d0d0d] text-white min-h-screen">

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a2e_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        
        {/* Separator Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        
        <Experience />
        
        {/* Separator Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        
        <Work />
        
        {/* Separator Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        
        <Education />
        
        {/* Separator Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        
        <Contact />
        <Footer />
      </div>

    </div>
    </>
  )
}

export default App
