"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Facebook } from "lucide-react";
import Link from "next/link";

const SocialIcon = () => {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/sanjida-akter-rimi711909",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/sanjidaRimi023",
      icon: Github,
      label: "GitHub",
    },

    {
      href: "https://www.facebook.com/sanjida.rimi.123653",
      icon: Facebook,
      label: "Facebook",
    },
  ];

  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="p-3 rounded-full hover:bg-slate-800 border border-slate-700/50 text-slate-300 transition-all duration-300 bg-violet-800 hover:text-white hover:border-violet-600 shadow-lg hover:shadow-indigo-600"
        >
          <link.icon className="h-5 w-5" />
        </Link>
      ))}
    </div>
  );
};

const useTypewriter = ({
  words,
  loop = true,
  typeSpeed = 80,
  deleteSpeed = 50,
  delaySpeed = 2000,
}) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      const updatedText = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), delaySpeed);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    loop,
    typeSpeed,
    deleteSpeed,
    delaySpeed,
  ]);

  return [text];
};

// Simple blinking cursor component
const Cursor = ({ cursorStyle = "_" }) => {
  return <span className="animate-ping">{cursorStyle}</span>;
};

// The main Hero Section component
export default function HeroSection() {
  const [text] = useTypewriter({
    words: [
      "Frontend Developer",
      "Web Designer",
      "Full Stack Developer",
      "MERN Stack Developer",
      "I build clean UI",
    ],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 80,
    deleteSpeed: 50,
  });

  return (
    <section className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 px-4 py-10">
      {/* Left side content */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 0.8 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
        className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-violet-900/80 border-violet-700 dark:border-violet-600 rounded-full text-sm animate-pulse backdrop-blur-sm hover:bg-violet-800 dark:hover:bg-white/20 transition-all duration-300 text-white">
          Welcome to my universe
        </div>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
          Hi, I am
        </h1>

        <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-700">
          Sanjida Akter Rimi
        </span>

        <h2 className="mt-4 text-lg sm:text-xl md:text-2xl font-medium text-violet-600 dark:text-violet-400 flex justify-center md:justify-start items-center h-8">
          <span className="mr-2">{text}</span>
          <Cursor cursorStyle="..." />
        </h2>

        <p className="mt-3 text-lg sm:text-base text-white">
          I’m a{" "}
          <span className="bg-indigo-600 font-semibold rounded-2xl px-2">
            problem-driven developer
          </span>{" "}
          who turns{" "}
          <span className="bg-indigo-600 font-semibold rounded-2xl px-2">
            unclear ideas
          </span>{" "}
          into structured solutions .I work by breaking tasks into clear steps,
          staying focused on the{" "}
          <span className="bg-indigo-600 font-semibold rounded-2xl px-2">
            user experience{" "}
          </span>
          and keeping things simple and reliable. In a team, I add value by
          communicating clearly and taking{" "}
          <span className="bg-indigo-600 font-semibold rounded-2xl px-2">
            ownership
          </span>
          , improving features step by step so the product gets better, not just
          bigger.
          <br />
          <span className="block mt-2 text-indigo-500 font-medium not-italic">
            Learned by building, sharpened by real problems. Now I turn ideas
            into products that actually work.
          </span>
        </p>

        <div className="mt-6">
          <SocialIcon />
        </div>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2 mt-8 bg-violet-700 border border-violet-900 rounded-full text-sm sm:text-base text-white backdrop-blur-sm hover:bg-violet-800 transition-all duration-300"
        >
          Download Resume <Download size={20} />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        className="lg:col-span-2 justify-center items-center  hidden md:block"
      >
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-violet-500/50"
            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-2 rounded-full border-2 border-indigo-500/40"
            animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.img
            src="/profilepic.png"
            alt="Sanjida Akter Rimi"
            className="w-full h-full object-cover rounded-full p-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
