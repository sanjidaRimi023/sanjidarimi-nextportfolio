"use client"
import React, { useEffect } from "react";

import OrbitingSkills from "./orbiting-skill";
import MarqueeSkills from "./marque-skill";

export default function SkillsSection() {
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
      @keyframes marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
      .animate-marquee {
        animation: marquee 30s linear infinite;
      }
    `;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-200">
          My Skills & Technologies
        </h2>
        <div className="flex flex-col items-center justify-center gap-12 lg:gap-8">
          {/* Left Side: Orbiting Skills */}
       
            <OrbitingSkills />
    
      
            <MarqueeSkills />
  
        </div>
      </div>
    </section>
  );
}
