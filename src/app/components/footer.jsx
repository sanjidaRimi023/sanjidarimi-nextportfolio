"use client"; // Add this directive for Next.js App Router

import React from 'react';
import Link from 'next/link'; // Import the Next.js Link component
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const yourName = "Sanjida Akter Rimi";

  const navLinks = [
    { name: 'About', href: '/more-about-me' },
    { name: 'Projects', href: '/projects' },
    { 
      name: 'Resume', 
      href: 'https://drive.google.com/file/d/1M1RfucTlKgUAMXu7klbjF237QGNIJ3C2/view?usp=sharing',
      isExternal: true 
    },
  ];

  const socialLinks = [
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
  ];
  return (
    <footer className=" bg-black/50 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col items-center gap-6">

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-slate-300">
            {navLinks.map((link) => (
              link.isExternal ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="capitalize hover:text-violet-400 transition-colors duration-300"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="capitalize hover:text-violet-400 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              )
            ))}
          </nav>

          {/* Social Media Icons */}
          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <a 
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-slate-400 transition-all duration-300 hover:text-violet-400 hover:scale-110"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>

          {/* Copyright Information */}
          <div className="w-full pt-6 border-t border-slate-800 text-center">
            <p className="text-sm text-slate-400">
              &copy; {currentYear} {yourName}. All Rights Reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;