"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Code2, Layers3, Sparkles } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/motion/section-heading";
import { Card } from "@/components/ui/card";
import { skillGroups } from "@/lib/data";
import { cn } from "@/lib/utils";

const skillMetrics = [
  { label: "Core Language", value: "Java", icon: Code2 },
  { label: "DSA Practice", value: "450+", icon: BrainCircuit },
  { label: "Web Stack", value: "MERN + Next", icon: Layers3 },
  { label: "AI Focus", value: "TF-IDF + LLMs", icon: Sparkles }
];

const accents = [
  "from-teal-300 to-emerald-300",
  "from-amber-200 to-teal-300",
  "from-sky-300 to-teal-300",
  "from-emerald-300 to-cyan-300",
  "from-amber-200 to-stone-200",
  "from-teal-200 to-slate-200",
  "from-cyan-200 to-amber-200"
];

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="Engineering Stack Built for Product, Scale, and AI."
          description="A recruiter-friendly snapshot of the tools I use to move from data structures and backend APIs to polished web interfaces and AI-powered workflows."
        />
        <Reveal className="mb-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className="lift-card group rounded-[8px] border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl hover:border-teal-200/40"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-[8px] bg-teal-300/10 text-teal-200 ring-1 ring-teal-200/15">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span
                    className={cn(
                      "h-2 w-12 rounded-full bg-gradient-to-r opacity-80",
                      accents[index]
                    )}
                  />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {metric.label}
                </p>
                <p className="mt-1 font-display text-xl font-semibold text-white">{metric.value}</p>
              </div>
            );
          })}
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            const accent = accents[index % accents.length];
            return (
              <Reveal key={group.title} delay={index * 0.05}>
                <Card className="lift-card group relative h-full overflow-hidden p-6 hover:border-teal-200/35">
                  <div className={cn("absolute inset-x-0 top-0 h-1 bg-gradient-to-r", accent)} />
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="grid h-12 w-12 place-items-center rounded-[8px] bg-teal-300/10 text-teal-100 ring-1 ring-teal-200/15 transition group-hover:bg-teal-300/15">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-semibold text-white">
                          {group.title}
                        </h3>
                        <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                          Capability
                        </p>
                      </div>
                    </div>
                    <span className="rounded-[8px] border border-amber-200/20 bg-amber-200/10 px-3 py-1 text-sm font-semibold text-amber-100">
                      {group.level}%
                    </span>
                  </div>
                  <p className="mb-5 min-h-12 text-sm leading-6 text-slate-400">{group.focus}</p>
                  <div className="mb-5 h-2.5 overflow-hidden rounded-full bg-white/8">
                    <motion.div
                      className={cn("h-full rounded-full bg-gradient-to-r", accent)}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${group.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: 0.1 + index * 0.05 }}
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className={cn(
                          "rounded-full border px-3 py-1.5 text-sm font-medium transition",
                          skillIndex < 2
                            ? "border-teal-200/25 bg-teal-300/10 text-teal-50"
                            : "border-white/10 bg-white/[0.04] text-slate-300 group-hover:border-teal-200/25"
                        )}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
