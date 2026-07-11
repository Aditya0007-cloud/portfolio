"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorGlow() {
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 90, damping: 28 });
  const springY = useSpring(y, { stiffness: 90, damping: 28 });

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      setVisible(event.pointerType === "mouse");
      x.set(event.clientX - 190);
      y.set(event.clientY - 190);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[5] hidden h-96 w-96 rounded-full bg-teal-300/[0.055] blur-3xl lg:block"
      style={{ x: springX, y: springY, opacity: visible ? 1 : 0 }}
    />
  );
}
