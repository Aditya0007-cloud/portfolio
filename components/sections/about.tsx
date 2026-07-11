import { GraduationCap, Lightbulb, Rocket, Target } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/motion/section-heading";
import { Card } from "@/components/ui/card";

const highlights = [
  { label: "B.Tech CSE", detail: "VIT-AP · 2024-2028", icon: GraduationCap },
  { label: "GPA", detail: "8.73 / 10", icon: Target },
  { label: "Current Work", detail: "AI Hiring + Web Platforms", icon: Rocket },
  { label: "Core Strength", detail: "Java, DSA, Full Stack", icon: Lightbulb }
];

const coursework = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Database Management Systems",
  "Software Engineering",
  "Design & Analysis of Algorithms",
  "Web Technologies"
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About"
          title="Building AI-powered hiring tools and full stack web platforms."
          description="A project-driven CSE student focused on reliable backend systems, clean product interfaces, and practical AI workflows."
        />
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <Card className="h-full p-7">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
                Profile
              </p>
              <p className="text-lg leading-9 text-slate-300">
                I&apos;m Aditya Pareek, a B.Tech Computer Science and Engineering student at
                Vellore Institute of Technology, Amaravati (VIT-AP), currently maintaining an
                8.73/10 GPA. My work sits at the intersection of full stack development, AI
                applications, and rigorous problem solving.
              </p>
              <p className="mt-5 text-lg leading-9 text-slate-300">
                I&apos;ve built platforms for AI-powered finance tracking, resume screening, and
                config-driven app generation, with hands-on experience through a Full Stack
                Development Internship at Decode Labs and technical leadership work with the
                Microsoft Student Chapter at VIT-AP.
              </p>
              <div className="soft-divider my-7" />
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-amber-200">
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((course) => (
                    <span
                      key={course}
                      className="rounded-[8px] border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.label} delay={index * 0.08}>
                  <Card className="lift-card group h-full p-6 hover:border-teal-200/35">
                    <div className="mb-5 grid h-12 w-12 place-items-center rounded-[8px] bg-teal-300/10 text-teal-200 ring-1 ring-teal-200/15 transition group-hover:bg-teal-300/15">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-white">{item.label}</h3>
                    <p className="mt-2 text-slate-400">{item.detail}</p>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
