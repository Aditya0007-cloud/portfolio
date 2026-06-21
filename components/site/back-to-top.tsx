"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.a
          href="#home"
          aria-label="Back to top"
          className="fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-full border border-white/12 bg-slate-950/80 text-white shadow-glow backdrop-blur-xl transition hover:border-blue-300/60"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 18 }}
        >
          <ArrowUp className="h-5 w-5" />
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}
