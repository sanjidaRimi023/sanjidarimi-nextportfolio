"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

// A simple, self-contained component for social media icons
const SocialIcon = () => {
  const socialLinks = [
    {
      href: "https://github.com",
      icon: <Github size={24} />,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com",
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
    },
    {
      href: "https://twitter.com",
      icon: <Twitter size={24} />,
      label: "Twitter",
    },
  ];

  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="text-gray-400 hover:text-violet-400 transition-colors duration-300"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

// Custom hook to replicate the typewriter effect
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
      "MERN Stack Developer",
      "I build clean UI",
    ],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 80,
    deleteSpeed: 50,
  });

  return (
    <section className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-20 px-4 lg:px-20 my-12 lg:my-20">
      {/* Left side content */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 0.8 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
        className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-violet-900/80 border border-violet-700 dark:border-violet-600 rounded-full text-xs sm:text-sm text-violet-200 dark:text-violet-300 backdrop-blur-sm hover:bg-violet-800 dark:hover:bg-white/20 transition-all duration-300">
          Welcome to my universe
        </div>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
          Hi, I am
        </h1>

        <span className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-violet-500 ml-0 md:ml-10">
          Sanjida Akter Rimi
        </span>

        <h2 className="mt-4 text-lg sm:text-xl md:text-2xl font-medium text-violet-600 dark:text-violet-400 flex justify-center md:justify-start items-center h-8">
          <span className="mr-2">{text}</span>
          <Cursor cursorStyle="_" />
        </h2>

        <p className="mt-3 max-w-xl text-lg sm:text-base italic">
          “ I'm a Frontend-focused MERN Stack Developer passionate about
          building fast, responsive, and scalable web applications. Skilled in
          React.js, Next.js, Express.js, MongoDB, and Firebase, I craft
          intuitive UIs with Tailwind CSS, Shadcn UI, and Bootstrap while
          developing secure, efficient backends. Curious about modern UI/UX and
          performance optimization, I aim to contribute by delivering clean,
          impactful solutions and collaborating effectively in a team
          environment. ”
        </p>
        <div className="mt-6">
          <SocialIcon />
        </div>
        <a
          href="https://drive.google.com/file/d/1M1RfucTlKgUAMXu7klbjF237QGNIJ3C2/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2 mt-8 bg-violet-700 border border-violet-900 rounded-full text-sm sm:text-base text-white backdrop-blur-sm hover:bg-violet-800 transition-all duration-300"
        >
          Download Resume <Download size={20} />
        </a>
      </motion.div>

      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="flex-1 flex justify-center md:justify-end"
      >
        <Image
          src="/profilepic.png"
          alt="Sanjida Akter Rimi"
          width={400}
          height={400}
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 object-cover rounded-full shadow-lg border-4 border-violet-600"
        />
      </motion.div>
    </section>
  );
}
