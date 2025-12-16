import React from "react";
import {
  Sparkles,
  Blocks,
  Zap,
  Code,
  Activity,
  Brain,
  Rocket,
  Feather,
  Cloud,
  Database,
  Figma,
} from "lucide-react";
const steps = [
  {
    title: "Planning & Strategy",
    description:
      "Understanding the requirements, breaking problems into smaller tasks, and defining a clear, efficient workflow before starting implementation.",
    icon: Rocket,
  },
  {
    title: "Designing the Flow",
    description:
      "Structuring the UI/UX and data flow logically, focusing on clarity, usability, and smooth user experience.",
    icon: Figma,
  },
  {
    title: "Implementation & Testing",
    description:
      "Writing clean, maintainable code, testing every piece for functionality, and iterating until it works reliably across scenarios.",
    icon: Database,
  },
  {
    title: "Review & Optimization",
    description:
      "Refining the code for readability, performance, and maintainability, and ensuring the final product meets the initial goals.",
    icon: Feather,
  },
];

const AboutMe = () => {
  const primaryColor = "text-indigo-400";
  const highlightBg = "bg-violet-900/10";

  const shadowClass = "shadow-lg shadow-indigo-500/10";

  return (
    // === Main Container with Unique Dark BG ===
    <section id="about" className="py-10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* === 1. Main Title/Hook === */}
        <header className="text-center mb-16 md:mb-20">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-white">
            WHO AM I?
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-[3px] h-12 bg-violet-500"></div>
            <p className="text-5xl font-bold mt-3">
              Code <span className="text-indigo-600">.</span> Create{" "}
              <span className="text-indigo-600">.</span> Innovate.
            </p>
            <div className="w-[2px] h-12 bg-violet-500"></div>
          </div>
        </header>

        <div>
          <div
            className={`p-8 rounded-2xl ${highlightBg} border border-indigo-700/50 ${shadowClass} flex flex-col md:flex-row gap-4`}
          >
            <div>
              <h3 className="text-3xl font-bold mb-4 flex items-center text-white">
                <Brain className={`w-8 h-8 mr-3 ${primaryColor}`} />
                My Development Mindset
              </h3>
              <blockquote className="text-lg text-gray-200 border-l-4 border-violet-500 pl-4">
                "I approach development as both a problem-solver and a
                creator.From planning the flow to polishing the UI, every line
                of code is written with purpose, clarity, and the end user in
                mind."
              </blockquote>
            </div>
            <div className="p-6 rounded-xl bg-indigo-900/30 border border-indigo-600/70">
              <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                <Activity className="w-7 h-7 mr-3 text-white" />
                My biggest dependency?
              </h3>
              <p className="text-gray-200 italic">
                "Curiosity and persistence. Whether it's backend logic, database
                queries, or frontend UI, I rely on clear thinking and strategic
                debugging to make everything work seamlessly."
              </p>
            </div>
          </div>
        </div>
        {/* 2B. How I Work: Step-by-Step */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold my-10 flex items-center text-white ">
            <Sparkles className={`w-6 h-6 mr-3 ${primaryColor}`} />
            How I Work:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col items-center p-6 sm:p-8 bg-gray-950/60 border-l-2 rounded-xl transition duration-300 hover:shadow-lg ${
                  index % 2 === 0
                    ? " border-purple-500/80 hover:shadow-purple-500/50"
                    : "border-violet-800/80 hover:shadow-violet-600/50"
                }`}
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-900/30 border-2 border-indigo-400 mb-4 transition-transform duration-700 ease-in-out hover:rotate-360">
                  {step.icon && (
                    <step.icon className="w-8 h-8 text-indigo-400" />
                  )}
                </div>
                {/* Title */}
                <h4
                  className={`font-bold text-lg sm:text-xl mb-2 text-center ${
                    index % 2 === 0 ? "text-indigo-300" : "text-violet-300"
                  }`}
                >
                  {step.title}
                </h4>
                {/* Description */}
                <p className="text-sm sm:text-base text-gray-400 text-center">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
