"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <nav
        className={cn(
          "mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border px-4 py-3 transition",
          scrolled
            ? "border-white/12 bg-slate-950/72 shadow-2xl shadow-black/30 backdrop-blur-xl"
            : "border-white/8 bg-slate-950/30 backdrop-blur-md"
        )}
        aria-label="Primary navigation"
      >
        <a href="#home" className="font-display text-lg font-bold text-white sm:text-xl">
          Aditya Pareek<span className="text-blue-300">.</span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="outline" size="sm">
            <a href="/Aditya-Pareek-Resume.pdf" download>
              <Download className="h-4 w-4" />
              Resume
            </a>
          </Button>
        </div>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-auto mt-3 max-w-6xl rounded-[8px] border border-white/10 bg-slate-950/92 p-3 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-[8px] px-4 py-3 text-sm font-medium text-slate-200 hover:bg-white/[0.06]"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
