"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ParticleText = ({
  text = " Transforming ideas into elegant web solutions with precision and creativity.",
  className = "",
  particleCount = 80,
  particleColor = "rgba(255, 255, 255, 0.4)",
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className =
        "absolute w-1.5 h-1.5 rounded-full pointer-events-none";
      particle.style.backgroundColor = particleColor;
      particle.style.opacity = Math.random().toString();
      const x = Math.random() * container.offsetWidth;
      const y = Math.random() * container.offsetHeight;
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      container.appendChild(particle);
      particles.push(particle);
    }

    const animateParticles = () => {
      particles.forEach((particle, index) => {
        const time = Date.now() * 0.001 + index;
        const x = Math.sin(time * 0.5) * 20 + Math.cos(time * 0.3) * 30;
        const y = Math.cos(time * 0.4) * 15 + Math.sin(time * 0.6) * 25;
        particle.style.transform = `translate(${x}px, ${y}px)`;
        particle.style.opacity = (Math.sin(time * 2) * 0.5 + 0.5).toString();
      });
      requestAnimationFrame(animateParticles);
    };

    animateParticles();

    return () => {
      particles.forEach((particle) => {
        if (particle.parentNode) particle.parentNode.removeChild(particle);
      });
    };
  }, [particleCount, particleColor]);

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center text-center overflow-hidden p-16 w-full bg-gray-950/70 mt-10 {className}`}
      style={{ minHeight: "200px" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="sm:text-2xl text-4xl text-white font-bold relative z-10 max-w-3xl"
      >
        {text}
      </motion.div>
    </div>
  );
};

export default function QuoteSection() {
  return <ParticleText />;
}
