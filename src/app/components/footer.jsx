"use client";

import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

// Centralized configuration for easier updates
const footerConfig = {
  name: "Sanjida Akter Rimi",

  socialLinks: [
    { 
      label: 'GitHub', 
      icon: Github, 
      href: 'https://github.com/sanjidaRimi023' 
    },
    { 
      label: 'LinkedIn', 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/sanjida-akter-rimi-711909/' 
    },
    { 
      label: 'Mail', 
      icon: Mail, 
      href: 'mailto:sanjidarimi023@gmail.com' 
    },
  ],
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (

    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true, amount: 0.5 }}
      className="bg-gray-950/70 backdrop-blur-xl border-t border-indigo-900/40 mt-16 text-white relative overflow-hidden"
    >
      

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" aria-hidden="true" />
      
      <div className="container mx-auto px-4 lg:px-20 py-12">
        
     
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:gap-8">

      
          <div className="flex flex-col items-center gap-2 md:items-start max-w-sm text-center md:text-left">
            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
              {footerConfig.name}
            </h3>
            <p className="text-sm text-slate-400 italic">
              Tech enthusiast with a passion for design, travel, and creativity.
            </p>
          </div>
          
          
          {/* Right Side: Social Icons - Modern button styling */}
          <div className="flex items-center gap-3">
            {footerConfig.socialLinks.map((social) => (
              <a 
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                // Unique, Modern Button Styling
                className="p-3 rounded-full bg-slate-800 border border-slate-700/50 text-slate-300 transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 shadow-lg hover:shadow-indigo-600/30"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-slate-800 my-10" />

        {/* Bottom: Copyright Information */}
        <div className="text-center">
          <p className="text-sm text-slate-500 font-light">
            &copy; {currentYear} {footerConfig.name}. All Rights Reserved.
          </p>
          <p className="text-xs text-slate-600 mt-1">
            Handcrafted and Coded with Frontend Technologies.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;