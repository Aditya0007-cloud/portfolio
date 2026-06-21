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
  { name: "Java", value: "32%", width: "32%", color: "bg-orange-300", text: "text-orange-200" },
  {
    name: "JavaScript",
    value: "28%",
    width: "28%",
    color: "bg-yellow-300",
    text: "text-yellow-200"
  },
  { name: "Python", value: "20%", width: "20%", color: "bg-blue-300", text: "text-blue-200" },
  { name: "SQL", value: "12%", width: "12%", color: "bg-violet-300", text: "text-violet-200" },
  { name: "C++", value: "8%", width: "8%", color: "bg-cyan-300", text: "text-cyan-200" }
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
    accent: "from-orange-300 to-blue-400"
  },
  {
    title: "Competitive Signal",
    value: "Top 12%",
    detail: "1700+ contest rating",
    icon: Activity,
    accent: "from-blue-300 to-cyan-300"
  },
  {
    title: "Open Source",
    value: "GSSoC '26",
    detail: "Features, fixes, PRs",
    icon: GitPullRequestArrow,
    accent: "from-violet-300 to-fuchsia-300"
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
      <div className="absolute right-[8%] top-24 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
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
                className="group relative overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-300/40"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-400/10 blur-2xl transition group-hover:bg-violet-400/15" />
                <div className="relative mb-5 flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-[8px] bg-blue-500/12 text-blue-200 ring-1 ring-blue-300/15">
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
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
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
                    <Activity className="h-5 w-5 text-cyan-300" />
                  </div>
                  <div className="grid grid-cols-12 gap-1.5" aria-hidden>
                    {graphCells.map((cell) => (
                      <span
                        key={cell.id}
                        className="aspect-square rounded-[3px] bg-cyan-300"
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
                      "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm",
                      index < 3
                        ? "border-blue-300/25 bg-blue-400/10 text-blue-100"
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
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
                    Language Distribution
                  </p>
                  <h3 className="font-display text-3xl font-semibold text-white">
                    Built Around Java, Web, and AI Workflows
                  </h3>
                </div>
                <BarChart3 className="h-6 w-6 shrink-0 text-violet-300" />
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
