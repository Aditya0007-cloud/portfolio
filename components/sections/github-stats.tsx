import { Activity, BarChart3, CheckCircle2, GitPullRequestArrow, Target } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/motion/section-heading";
import { Card } from "@/components/ui/card";
import { githubStats } from "@/lib/data";
import { cn } from "@/lib/utils";

const graphCells = Array.from({ length: 84 }, (_, index) => ({
  id: index,
  opacity: [0.14, 0.28, 0.46, 0.76][(index * 7) % 4]
}));

const languages = [
  { name: "Java", value: "32%", width: "32%", color: "bg-amber-300", text: "text-amber-200" },
  {
    name: "JavaScript",
    value: "28%",
    width: "28%",
    color: "bg-teal-300",
    text: "text-teal-200"
  },
  { name: "Python", value: "20%", width: "20%", color: "bg-sky-300", text: "text-sky-200" },
  { name: "SQL", value: "12%", width: "12%", color: "bg-stone-300", text: "text-stone-200" },
  { name: "C++", value: "8%", width: "8%", color: "bg-emerald-300", text: "text-emerald-200" }
];

const dsaTopics = [
  "Arrays",
  "Graphs",
  "Dynamic Programming",
  "Trees",
  "Greedy",
  "Binary Search",
  "Hashing",
  "Recursion"
];

const signalCards = [
  {
    title: "Interview Core",
    value: "Java + DSA",
    detail: "450+ solved problems",
    icon: Target,
    accent: "from-amber-300 to-teal-300"
  },
  {
    title: "Competitive Signal",
    value: "Top 12%",
    detail: "1700+ contest rating",
    icon: Activity,
    accent: "from-teal-300 to-stone-200"
  },
  {
    title: "Open Source",
    value: "GSSoC '26",
    detail: "Features, fixes, PRs",
    icon: GitPullRequestArrow,
    accent: "from-sky-300 to-teal-300"
  }
];

function languageNote(index: number) {
  if (index === 0) return "Primary language for DSA and interview preparation.";
  if (index === 1) return "Used across React, Next.js, and full stack product work.";
  if (index === 2) return "Supports ML, TF-IDF workflows, and backend scripting.";
  if (index === 3) return "Used for database design, analytics, and persistence.";
  return "Foundation for systems and algorithmic reasoning.";
}

export function GithubStats() {
  return (
    <section id="github" className="relative overflow-hidden py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Coding Profile"
          title="Coding Strength, Open Source Signal, and Academic Momentum."
          description="A cleaner view of resume-backed proof points: LeetCode consistency, contest performance, GSSoC 2026, GPA, and language depth."
        />

        <Reveal className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {githubStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="lift-card group relative overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl hover:border-teal-200/35"
              >
                <div className="relative mb-5 flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-[8px] bg-teal-300/10 text-teal-200 ring-1 ring-teal-200/15">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    0{index + 1}
                  </span>
                </div>
                <p className="relative font-display text-3xl font-semibold text-white">
                  {stat.value}
                </p>
                <p className="relative mt-1 text-sm text-slate-400">{stat.label}</p>
              </div>
            );
          })}
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.92fr]">
          <Reveal>
            <Card className="h-full overflow-hidden p-6">
              <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">
                    Competitive Programming
                  </p>
                  <h3 className="font-display text-3xl font-semibold text-white">
                    Problem-Solving System
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
                    Java-first DSA practice across core interview patterns, backed by a 1700+
                    LeetCode contest rating and steady problem-solving volume.
                  </p>
                </div>
                <div className="rounded-[8px] border border-white/10 bg-white/[0.04] px-4 py-3 text-right">
                  <p className="font-display text-2xl font-semibold text-white">Top 12%</p>
                  <p className="text-xs text-slate-400">Contest rating band</p>
                </div>
              </div>

              <div className="grid gap-5 xl:grid-cols-[0.85fr_1.15fr]">
                <div className="rounded-[8px] border border-white/10 bg-slate-950/35 p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-300">Activity Map</span>
                    <Activity className="h-5 w-5 text-teal-300" />
                  </div>
                  <div className="grid grid-cols-12 gap-1.5" aria-hidden>
                    {graphCells.map((cell) => (
                      <span
                        key={cell.id}
                        className="aspect-square rounded-[3px] bg-teal-300"
                        style={{ opacity: cell.opacity }}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid gap-3">
                  {signalCards.map((signal) => {
                    const Icon = signal.icon;
                    return (
                      <div
                        key={signal.title}
                        className="rounded-[8px] border border-white/10 bg-white/[0.035] p-4"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={cn(
                              "grid h-10 w-10 shrink-0 place-items-center rounded-[8px] bg-gradient-to-br text-slate-950",
                              signal.accent
                            )}
                          >
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                              {signal.title}
                            </p>
                            <p className="font-display text-xl font-semibold text-white">
                              {signal.value}
                            </p>
                            <p className="text-sm text-slate-400">{signal.detail}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {dsaTopics.map((topic, index) => (
                  <span
                    key={topic}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-[8px] border px-3 py-1.5 text-sm",
                      index < 3
                        ? "border-teal-200/25 bg-teal-300/10 text-teal-50"
                        : "border-white/10 bg-white/[0.035] text-slate-300"
                    )}
                  >
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {topic}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.12}>
            <Card className="h-full overflow-hidden p-6">
              <div className="mb-7 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
                    Language Distribution
                  </p>
                  <h3 className="font-display text-3xl font-semibold text-white">
                    Built Around Java, Web, and AI Workflows
                  </h3>
                </div>
                <BarChart3 className="h-6 w-6 shrink-0 text-amber-200" />
              </div>

              <div className="mb-7 flex h-3 overflow-hidden rounded-full bg-white/8">
                {languages.map((language) => (
                  <span
                    key={language.name}
                    className={language.color}
                    style={{ width: language.width }}
                    aria-label={`${language.name} ${language.value}`}
                  />
                ))}
              </div>

              <div className="space-y-4">
                {languages.map((language, index) => (
                  <div
                    key={language.name}
                    className="rounded-[8px] border border-white/10 bg-white/[0.035] p-4"
                  >
                    <div className="mb-3 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className={cn("h-3 w-3 rounded-full", language.color)} />
                        <span className="font-semibold text-slate-100">{language.name}</span>
                      </div>
                      <span className={cn("font-display text-lg font-semibold", language.text)}>
                        {language.value}
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/8">
                      <div
                        className={cn("h-full rounded-full", language.color)}
                        style={{ width: language.width }}
                      />
                    </div>
                    <p className="mt-3 text-xs text-slate-500">{languageNote(index)}</p>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
