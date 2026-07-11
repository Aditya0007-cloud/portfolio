"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  BrainCircuit,
  Code2,
  Database,
  Download,
  Github,
  Globe2,
  Mail,
  Send,
  Server,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { Button } from "@/components/ui/button";
import { socials } from "@/lib/data";

const roles = ["Full-Stack Developer", "AI & Web Platforms", "Open Source Contributor"];
const techIcons = [
  { icon: Code2, label: "Next.js", className: "left-0 top-12" },
  { icon: Server, label: "Node", className: "right-2 top-20" },
  { icon: BrainCircuit, label: "AI", className: "bottom-20 left-2" },
  { icon: Database, label: "DB", className: "bottom-6 right-10" }
];

const heroStats = [
  { label: "LeetCode", value: "450+", icon: BrainCircuit },
  { label: "Contest Rating", value: "1700+", icon: Code2 },
  { label: "GPA", value: "8.73", icon: Sparkles }
];

const availability = [
  { label: "Open to", value: "Full-stack & AI internships", icon: Sparkles },
  { label: "Based in", value: "India · Remote friendly", icon: Globe2 },
  { label: "Strength", value: "Java, DSA, product APIs", icon: ShieldCheck }
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const currentRole = roles[roleIndex];
  const typedRole = useMemo(() => currentRole.slice(0, charIndex), [currentRole, charIndex]);

  useEffect(() => {
    const doneTyping = charIndex === currentRole.length;
    const timeout = window.setTimeout(
      () => {
        if (doneTyping) {
          setCharIndex(0);
          setRoleIndex((index) => (index + 1) % roles.length);
          return;
        }
        setCharIndex((index) => index + 1);
      },
      doneTyping ? 1600 : 72
    );
    return () => window.clearTimeout(timeout);
  }, [charIndex, currentRole.length]);

  return (
    <section id="home" className="section-band relative min-h-screen overflow-hidden pt-32 sm:pt-36">
      <div className="section-shell grid min-h-[calc(100vh-9rem)] items-center gap-14 pb-20 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-4 py-2 text-sm text-cyan-100 shadow-glow backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4 text-cyan-300" />
            <span className="truncate">Full-Stack Developer | AI & Web Platforms</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="mb-3 font-display text-2xl font-semibold text-slate-200"
          >
            Hi, I&apos;m
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.14 }}
            className="max-w-4xl font-display text-5xl font-bold leading-tight text-white sm:text-7xl lg:text-8xl"
          >
            <span className="gradient-text">Aditya Pareek</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-6 min-h-16 text-xl font-semibold text-slate-200 sm:text-2xl"
          >
            <span>{typedRole}</span>
            <span className="ml-1 inline-block h-7 w-[2px] translate-y-1 bg-blue-300" />
            <span className="mt-2 block text-base font-normal leading-8 text-slate-400 sm:text-lg">
              Java + DSA | Full Stack Development | AI Applications
            </span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.27 }}
            className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
          >
            I build reliable web platforms with clean interfaces, strong backend foundations,
            and AI workflows for finance, resume screening, and config-driven applications.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-9 grid gap-3 sm:inline-flex sm:flex-wrap"
          >
            <MagneticButton>
              <Button asChild variant="gradient" size="lg">
                <a href="#projects">
                  <Github className="h-5 w-5" />
                  View Projects
                </a>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button asChild variant="outline" size="lg">
                <a href="/Aditya-Pareek-Resume.pdf" download>
                  <Download className="h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">
                  <Send className="h-5 w-5" />
                  Contact Me
                </a>
              </Button>
            </MagneticButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.39 }}
            className="mt-7 grid gap-3 rounded-[8px] border border-white/10 bg-slate-950/35 p-3 backdrop-blur-xl sm:grid-cols-3"
          >
            {availability.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-3 rounded-[8px] px-2 py-2">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-[8px] bg-white/[0.055] text-cyan-200 ring-1 ring-white/10">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      {item.label}
                    </p>
                    <p className="truncate text-sm font-medium text-slate-200">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.46 }}
            className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3"
          >
            {heroStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="premium-panel lift-card rounded-[8px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl"
                >
                  <Icon className="mb-3 h-5 w-5 text-blue-200" />
                  <p className="font-display text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.54 }}
            className="mt-9 flex items-center gap-3"
          >
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={social.label}
                  className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-slate-200 transition hover:-translate-y-1 hover:border-blue-300/60 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
            <a
              href="mailto:pareekaditya0007@gmail.com"
              className="ml-2 hidden items-center gap-2 text-sm font-medium text-slate-400 hover:text-white sm:flex"
            >
              <Mail className="h-4 w-4" />
              pareekaditya0007@gmail.com
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 32 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[460px]"
        >
          <div className="aurora-border premium-panel relative overflow-hidden rounded-[8px] bg-slate-950/60 p-3 shadow-violet">
            <div className="absolute left-6 top-6 z-10 hidden max-w-[220px] rounded-[8px] border border-white/10 bg-slate-950/76 p-3 text-xs text-slate-300 shadow-2xl backdrop-blur-xl sm:block">
              <div className="mb-3 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-rose-300" />
                <span className="h-2 w-2 rounded-full bg-amber-300" />
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
              </div>
              <p className="font-mono text-cyan-200">build.status = ready</p>
              <p className="mt-1 font-mono text-slate-400">ship(ai + web)</p>
            </div>
            <Image
              src="/hero-profile.png"
              alt="Futuristic profile visual for Aditya Pareek"
              width={1024}
              height={1024}
              priority
              className="aspect-square rounded-[8px] object-cover"
            />
            <div className="pointer-events-none absolute inset-0 rounded-[8px] bg-gradient-to-t from-[#030711]/40 via-transparent to-white/5" />
            <div className="absolute bottom-5 left-5 right-5 rounded-[8px] border border-white/10 bg-slate-950/74 p-4 backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                    Current Focus
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold text-white">
                    AI products + full-stack systems
                  </p>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-[8px] bg-premium-gradient text-white shadow-glow">
                  <Code2 className="h-5 w-5" />
                </span>
              </div>
            </div>
          </div>
          {techIcons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                className={`absolute ${item.className} hidden items-center gap-2 rounded-full border border-white/12 bg-slate-950/78 px-4 py-3 text-sm font-semibold text-white shadow-glow backdrop-blur-xl sm:flex`}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
              >
                <Icon className="h-4 w-4 text-cyan-300" />
                {item.label}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/10 p-3 text-slate-300 transition hover:text-white md:block"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
