"use client";

import { motion } from "framer-motion";
import { ExternalLink, Globe, X } from "lucide-react";
import Link from "next/link";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  // Define transition for a modern, snappy feel
  const transition = { type: "spring", stiffness: 200, damping: 25 };

  // Gradient for Technology Badges (more stylish)
  const techGradient =
    "bg-gradient-to-br from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600";

  return (
    <motion.div
      className="fixed inset-0 bg-black/85 flex justify-center items-start z-50 overflow-auto py-10 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="bg-black rounded-2xl max-w-4xl w-full relative shadow-2xl shadow-violet-900/50 my-auto border border-gray-700/50"
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 50, opacity: 0, scale: 0.95 }}
        transition={transition}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 p-2 rounded-full bg-gray-700 hover:bg-violet-600 hover:text-white transition duration-200 z-10"
          aria-label="Close Project Modal"
        >
          <X size={20} />
        </button>

        {/* Content Area */}
        <div className="p-6 sm:p-8">
          {/* Header */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
            {project.projectName}
          </h1>
          <p className="text-gray-400 mt-1 mb-4 text-lg font-light italic">
            {project.slogan}
          </p>

          <div className="overflow-hidden rounded-xl mb-6 border border-gray-700 shadow-xl">
            <img
              src={project.projectImage}
              alt={project.projectName}
              className="w-full h-auto object-cover max-h-[400px]"
            />
          </div>

          <div className="mb-6">
            <h2 className="text-violet-400 uppercase font-bold text-sm tracking-widest mb-2">
              Overview
            </h2>
            <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
             {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <div>
                <h2 className="text-violet-400 uppercase font-bold text-sm tracking-widest mb-2">
                  Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className={`px-4 py-1 text-sm font-semibold rounded-full ${techGradient} text-white shadow-md transition duration-200`}
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {project.features && project.features.length > 0 && (
              <div>
                <h2 className="text-violet-400 uppercase font-bold text-sm tracking-widest mb-2">
                  Key Features
                </h2>
                <ul className="list-none space-y-2 text-gray-200">
                  {project.features?.map((f, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-violet-400 mr-2 text-xl">•</span>
                      <span className="pt-0.5">{f.trim()}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

           
          </div>
{/* projects links */}
          <div className="mt-8 pt-4 border-t border-white/10">
            <h2 className="text-violet-400 uppercase font-bold text-sm tracking-widest mb-3">
              Links
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-white bg-violet-600 hover:bg-violet-500 transition duration-200 shadow-lg shadow-violet-600/30"
                >
                  <Globe size={18} /> Live Site
                </a>
              )}
              {project.clientLink && (
                <a
                  href={project.clientLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-white bg-purple-600 hover:bg-purple-500 transition duration-200 shadow-lg shadow-purple-600/30"
                >
                  <ExternalLink size={18} /> Client Code
                </a>
              )}
              {project.serverLink && (
                <Link
                  href={project.serverLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-white border-2 border-purple-600 transition duration-200 shadow-lg shadow-pink-600/30"
                >
                  <ExternalLink size={18} /> Server Code
                </Link>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
