"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Home,
  Info,
  Code,
  FolderGit2,
  Briefcase,
  FileText,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
   
    { name: "Skills", path: "/skill", icon: <Code size={18} /> },
    { name: "Projects", path: "/projects", icon: <FolderGit2 size={18} /> },
    { name: "Services", path: "/services", icon: <Briefcase size={18} /> },
    {
      name: "Resume",
      path: "https://drive.google.com/file/d/1M1RfucTlKgUAMXu7klbjF237QGNIJ3C2/view?usp=sharing",
      icon: <FileText size={18} />,
      external: true,
    },
  ];

  const socialLinks = [
    { name: "GitHub", path: "https://github.com/sanjidaRimi023", icon: <Github size={18} /> },
    { name: "LinkedIn", path: "https://www.linkedin.com/in/sanjida-akter-rimi711909", icon: <Linkedin size={18} /> },
    { name: "Email", path: "mailto:sanjidarimi023@gmail.com", icon: <Mail size={18} /> },
  ];

  return (
    <nav className="sticky top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/navbarlogo.png"
            width={150}
            height={40}
            alt="Logo"
            className="object-contain"
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          {/* Nav items */}
          <ul className="flex items-center gap-2">
            {menuItems.map((item) =>
              item.external ? (
                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm transition-colors ${
                    pathname === item.path
                      ? "bg-violet-500 text-white"
                      : "text-white hover:bg-violet-500"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm transition-colors ${
                    pathname === item.path
                      ? "bg-violet-500 text-white"
                      : "text-white hover:bg-violet-500"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              )
            )}
          </ul>

          {/* Divider */}
          <div className="h-6 w-px bg-white/30 mx-4"></div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((item) => (
              <motion.a
                whileHover={{ scale: 1.2 }}
                key={item.name}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-violet-400 transition-colors"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-black/70 backdrop-blur-lg border-t border-white/20 px-4 py-2"
      >
        <ul className="flex flex-col gap-2">
          {menuItems.map((item) =>
            item.external ? (
              <a
                key={item.name}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-white hover:bg-violet-500"
              >
                {item.icon}
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
                  pathname === item.path
                    ? "bg-violet-500 text-white"
                    : "text-white hover:bg-violet-500"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            )
          )}
        </ul>

        {/* Divider + Socials */}
        <div className="h-px bg-white/30 my-3"></div>
        <div className="flex items-center justify-center gap-6 pb-2">
          {socialLinks.map((item) => (
            <motion.a
              whileHover={{ scale: 1.2 }}
              key={item.name}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-violet-400 transition-colors"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
