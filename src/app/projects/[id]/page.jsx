"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";

export default function ProjectDetail() {
  const params = useParams();
  const id = params.id;

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/projectData.json")
      .then((res) => res.json())
      .then((data) => {
        const foundProject = data.find((p) => p._id.toString() === id);
        if (!foundProject) setError("Project not found");
        else setProject(foundProject);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-lg text-white px-4">
        Loading Details...
      </div>
    );

  if (error)
    return (
      <div className="text-center mt-10 text-red-500 bg-gray-900 px-4 py-6 rounded-lg shadow-lg">
        Error: {error}
      </div>
    );

  return (
    <main className="container mx-auto px-4 sm:px-6 py-12">
      <motion.article
        className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 items-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left: Image + Overview + Links */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col gap-6"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={project.projectImage}
            alt={project.projectName}
            className="w-full rounded-xl shadow-2xl border border-gray-700 object-cover"
          />

          {/* Project Overview */}
          <section aria-labelledby="overview-title" className="mt-4">
            <h2
              id="overview-title"
              className="text-2xl sm:text-3xl font-bold text-white mb-2"
            >
              Project Overview
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed whitespace-pre-wrap">
              {project.description}
            </p>
          </section>

          {/* Links */}
          <section aria-labelledby="links-title" className="mt-4">
            <h2
              id="links-title"
              className="text-xs font-semibold text-violet-500 uppercase mb-2"
            >
              Links
            </h2>
            <div className="flex flex-wrap gap-3">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-500 shadow-md hover:scale-105 transition-transform duration-300"
              >
                <Globe size={16} /> Live Site
              </a>
              <a
                href={project.clientLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-500 shadow-md hover:scale-105 transition-transform duration-300"
              >
                <ExternalLink size={16} /> Client
              </a>
              {project.serverLink && (
                <a
                  href={project.serverLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-500 shadow-md hover:scale-105 transition-transform duration-300"
                >
                  <ExternalLink size={16} /> Server
                </a>
              )}
            </div>
          </section>
        </motion.div>

        {/* Right: Project Info */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <motion.header
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">
              {project.projectName}
            </h1>
            <p className="mt-2 italic text-sm sm:text-base text-gray-300">
              {project.slogan}
            </p>
          </motion.header>

          {/* Features */}
          <section aria-labelledby="features-title">
            <h2
              id="features-title"
              className="text-xs font-semibold text-violet-500 uppercase mb-2"
            >
              Features
            </h2>
            <ul className="space-y-2">
              {project.features?.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-2 text-sm sm:text-base text-gray-200"
                >
                  <span className="text-blue-500 mt-0.5">&#10003;</span>
                  <span>{feature.trim()}</span>
                </motion.li>
              ))}
            </ul>
          </section>

          {/* Technologies */}
          <section aria-labelledby="technologies-title">
            <h2
              id="technologies-title"
              className="text-xs font-semibold text-violet-500 uppercase mb-2"
            >
              Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-gradient-to-r from-violet-600 via-purple-500 to-pink-500 text-white"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </section>
        </div>
      </motion.article>
    </main>
  );
}
