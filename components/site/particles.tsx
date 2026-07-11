"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 53) % 100}%`,
  size: 2 + (index % 4),
  delay: (index % 9) * 0.35,
  duration: 7 + (index % 6)
}));

const lightTrails = Array.from({ length: 5 }, (_, index) => ({
  id: index,
  top: `${18 + index * 16}%`,
  delay: index * 0.8,
  width: `${22 + index * 8}rem`
}));

export function Particles() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {lightTrails.map((trail) => (
        <motion.span
          key={trail.id}
          className="absolute h-px rotate-[-18deg] bg-gradient-to-r from-transparent via-cyan-200/24 to-transparent"
          style={{ top: trail.top, left: "-32rem", width: trail.width }}
          animate={{ x: ["0vw", "140vw"], opacity: [0, 0.85, 0] }}
          transition={{
            duration: 10 + trail.id * 1.2,
            delay: trail.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-blue-200/60"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size
          }}
          animate={{ y: [-12, 18, -12], opacity: [0.18, 0.75, 0.18] }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
