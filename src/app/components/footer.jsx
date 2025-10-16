"use client";

import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

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
    <footer className="bg-black/50 backdrop-blur-md border-t border-white/20 mt-20 text-white">
      <div className="container mx-auto px-4 lg:px-20 py-10">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          {/* Left Side: Name and Nav Links */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <h3 className="text-xl font-semibold">{footerConfig.name}</h3>
            <p>Tech enthusiast with a passion for design, travel and creativity.</p>
          </div>

          {/* Right Side: Social Icons */}
          <div className="flex items-center gap-5">
            {footerConfig.socialLinks.map((social) => (
              <a 
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-slate-400 transition-all duration-300 hover:text-violet-400 hover:scale-110"
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom: Copyright Information */}
        <div className="mt-8 border-t border-slate-800 pt-6 text-center">
          <p className="text-sm text-slate-400">
            &copy; {currentYear} {footerConfig.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;