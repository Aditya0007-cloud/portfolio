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

export function Particles() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute left-[8%] top-[12%] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl animate-pulse-glow" />
      <div className="absolute right-[3%] top-[36%] h-80 w-80 rounded-full bg-violet-500/10 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-[6%] left-[40%] h-64 w-64 rounded-full bg-cyan-500/8 blur-3xl animate-pulse-glow" />
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
