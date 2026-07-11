"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, SlidersHorizontal, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/motion/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const filters = ["All", "AI", "Full Stack"] as const;

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const filteredProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter]
  );

  return (
    <section id="projects" className="py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Resume-backed products with measurable engineering outcomes."
          description="AI finance automation, ML-based resume screening, and config-driven app generation with clear stack and impact signals."
        />
        <Reveal className="mb-8 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
            <SlidersHorizontal className="h-4 w-4 text-blue-300" />
            Filter
          </span>
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition",
                activeFilter === filter
                  ? "border-blue-300/60 bg-blue-400/15 text-white shadow-glow"
                  : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/25 hover:text-white"
              )}
            >
              {filter}
            </button>
          ))}
        </Reveal>
        <motion.div layout className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, y: 26, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -18, scale: 0.96 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
              >
                <Card className="spotlight premium-panel group relative h-full overflow-hidden p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-300/40">
                  <div
                    className={cn(
                      "absolute inset-x-0 top-0 h-1 bg-gradient-to-r",
                      project.accent
                    )}
                  />
                  <div className="mb-8 flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-blue-200">
                        <Sparkles className="h-3.5 w-3.5" />
                        {project.category}
                      </span>
                      <h3 className="mt-4 font-display text-2xl font-semibold text-white">
                        {project.title}
                      </h3>
                    </div>
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-[8px] bg-white/[0.05] text-cyan-200 ring-1 ring-white/10 transition group-hover:scale-105">
                      <ExternalLink className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="min-h-32 leading-8 text-slate-300">{project.description}</p>
                  <div className="mt-5 rounded-[8px] border border-cyan-300/15 bg-cyan-300/[0.055] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                      Impact
                    </p>
                    <p className="mt-2 text-sm font-medium leading-6 text-cyan-50">
                      {project.impact}
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1.5 text-xs font-medium text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button asChild variant="outline" size="sm" className="group/btn">
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github className="h-4 w-4" />
                        View Code
                        <ArrowUpRight className="h-4 w-4 transition group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    </Button>
                  </div>
                </Card>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
