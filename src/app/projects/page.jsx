"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, FileCode2 } from "lucide-react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projectData.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error loading projects:", err));
  }, []);

  return (
    <section className="container mx-auto py-24 px-6 lg:px-24" aria-labelledby="projects-heading">
      {/* Section Heading */}
      <header className="text-center mb-16">
        <motion.h2
          id="projects-heading"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-white leading-tight"
        >
          My Digital <span className="text-violet-500">Creations</span>
        </motion.h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto"
        >
          A selection of projects where I've turned complex problems into elegant, user-friendly solutions.
        </motion.p>
      </header>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
        {projects.map((project, index) => (
          <motion.article
            key={project._id}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="group relative"
            aria-labelledby={`project-title-${project._id}`}
          >
            {/* The Glassmorphism Card Body */}
            <div className="relative z-10 bg-slate-800/70 backdrop-blur-lg border border-slate-700 rounded-2xl shadow-lg transition-all duration-300 group-hover:border-violet-500 group-hover:shadow-2xl group-hover:shadow-violet-800/20 pt-20 p-6 text-center">
              {/* Project Content */}
              <div className="space-y-3">
                <h3
                  id={`project-title-${project._id}`}
                  className="text-2xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent"
                >
                  {project.projectName}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">{project.slogan}</p>
              </div>

              {/* Links */}
              <div className="flex justify-center gap-4 mt-6 pt-5 border-t border-slate-700">
                <Link
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Visit ${project.projectName} Live Site`}
                  className="flex items-center gap-2 rounded-full border-2 border-violet-600 px-4 py-2 text-sm font-semibold text-violet-400 transition-all duration-300 hover:scale-105 hover:bg-violet-600/20 hover:text-white"
                >
                  <ExternalLink size={16} /> Live
                </Link>
                <Link
                  href={`/projects/${project._id}`}
                  aria-label={`View details of ${project.projectName}`}
                  className="flex items-center gap-2 rounded-full border-2 border-transparent bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-violet-600 hover:to-purple-600"
                >
                  <FileCode2 size={16} /> Details
                </Link>
              </div>
            </div>

            {/* Floating Project Image */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-10/12 z-20 transition-all duration-500 ease-in-out group-hover:-translate-y-2 group-hover:scale-105">
              <img
                src={project.projectImage}
                alt={`Screenshot of ${project.projectName}`}
                className="aspect-video w-full object-cover rounded-lg shadow-2xl shadow-slate-900/80 border-2 border-slate-700"
              />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}