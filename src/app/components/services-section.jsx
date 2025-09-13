"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Smartphone,
  Code,
  PenTool,
  Server,
  Cloud,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: <Globe className="w-8 h-8 lg:w-12 lg:h-12" />,
    title: "Web Development",
    description:
      "Building full-stack applications with modern web standards for a seamless user experience.",
    points: [
      "Custom Web Apps",
      "Progressive Web Apps",
      "Single Page Applications",
    ],
    themeColor: "violet",
  },
  {
    icon: <Smartphone className="w-8 h-8 lg:w-12 lg:h-12" />,
    title: "Responsive Design",
    description:
      "Crafting mobile-first, adaptive layouts that work flawlessly on all devices and screen sizes.",
    points: [
      "Mobile Optimization",
      "Cross-Browser Compatibility",
      "Touch-Friendly Interfaces",
    ],
    themeColor: "pink",
  },
  {
    icon: <Code className="w-8 h-8 lg:w-12 lg:h-12" />,
    title: "Frontend Development",
    description:
      "Developing interactive and high-performance UIs using modern frontend frameworks.",
    points: [
      "React.js & Next.js",
      "Tailwind CSS & TypeScript",
      "API Integration",
    ],
    themeColor: "green",
  },
  {
    icon: <PenTool className="w-8 h-8 lg:w-12 lg:h-12" />,
    title: "UI/UX Implementation",
    description:
      "Translating modern Figma designs into pixel-perfect, responsive React components.",
    points: [
      "Figma to React",
      "Component Libraries",
      "Animations & Transitions",
    ],
    themeColor: "orange",
  },
  {
    icon: <Server className="w-8 h-8 lg:w-12 lg:h-12" />,
    title: "Backend Development",
    description:
      "Creating scalable backend solutions with Node.js, Express.js, and MongoDB.",
    points: [
      "RESTful API Development",
      "MongoDB Schema Design",
      "JWT Authentication",
    ],
    themeColor: "purple",
  },
  {
    icon: <Cloud className="w-8 h-8 lg:w-12 lg:h-12" />,
    title: "Cloud Deployment",
    description:
      "Seamless deployment and management of full-stack apps on modern cloud platforms.",
    points: ["Vercel & Netlify", "CI/CD Workflows", "Production Optimization"],
    themeColor: "red",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section className="overflow-hidden" aria-labelledby="services-title">
      <div className="container mx-auto px-4 lg:px-20">
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="w-[2px] h-12 bg-violet-500"></div>

            <h2
              id="services-title"
              className="text-4xl lg:text-5xl font-bold text-center"
            >
              My Expert <span className="text-violet-500"> Services</span>
            </h2>

            <div className="w-[2px] h-12 bg-violet-500"></div>
          </div>

          <p className="text-sm my-6 max-w-3xl mx-auto leading-relaxed">
            I provide a wide range of services to turn your ideas into reality.
            Here's how I can help you succeed.
          </p>
        </motion.header>

        <div className="hidden lg:flex flex-col lg:flex-row gap-10 lg:gap-16 min-h-[450px]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-3 lg:w-1/3"
          >
            {services.map((service, index) => (
              <button
                key={service.title}
                onClick={() => setActiveIndex(index)}
                className={`relative text-left w-full p-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 ${
                  activeIndex === index
                    ? `bg-gray-900/50 border border-${service.themeColor}-500/30 shadow-lg`
                    : "hover:bg-gray-800/60 border border-transparent"
                }`}
              >
                {activeIndex === index && (
                  <motion.div
                    layoutId="active-service-indicator"
                    className={`absolute left-0 top-0 bottom-0 w-1.5 rounded-l-xl bg-gradient-to-b from-${service.themeColor}-500 to-${service.themeColor}-400`}
                  />
                )}
                <span
                  className={`text-xl font-semibold transition-colors duration-300 pl-4 ${
                    activeIndex === index
                      ? `text-${service.themeColor}-400`
                      : "text-gray-300"
                  }`}
                >
                  {service.title}
                </span>
              </button>
            ))}
          </motion.div>

          <div className="lg:w-2/3 relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`w-full p-8 rounded-2xl border border-gray-700 shadow-xl backdrop-blur-md bg-${activeService.themeColor}-500/10`}
              >
                <div
                  className={`mb-6 inline-block p-4 rounded-full bg-gradient-to-br from-${activeService.themeColor}-500 to-${activeService.themeColor}-400 shadow-md border border-white/10`}
                >
                  {activeService.icon}
                </div>
                <h3 className="text-3xl font-extrabold mb-4 text-white">
                  {activeService.title}
                </h3>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  {activeService.description}
                </p>
                <ul className="space-y-4">
                  {activeService.points.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i + 0.3 }}
                      className="flex items-start gap-4"
                    >
                      <CheckCircle2
                        className={`w-6 h-6 flex-shrink-0 text-${activeService.themeColor}-400`}
                      />
                      <span className="text-lg text-gray-300">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative flex flex-col p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:border-violet-500 hover:shadow-2xl hover:shadow-violet-500/10 transform hover:-translate-y-2"
              variants={cardVariants}
            >
              <div
                className={`mb-5 p-4 rounded-xl inline-flex self-start text-white bg-gradient-to-br from-${service.themeColor}-500 to-${service.themeColor}-400 shadow-lg shadow-${service.themeColor}-500/20`}
              >
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-100 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6 flex-grow">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2
                      className={`w-5 h-5 flex-shrink-0 text-${service.themeColor}-400`}
                    />
                    <span className="text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
