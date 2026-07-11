"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = window.setTimeout(() => setLoading(false), 950);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-[#071016]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <motion.div
            className="relative h-16 w-16 rounded-full border border-teal-200/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          >
            <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-teal-300" />
            <span className="absolute inset-3 rounded-full bg-teal-300/50 blur-md" />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
