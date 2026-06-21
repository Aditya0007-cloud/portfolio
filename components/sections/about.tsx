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
            </Card>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.label} delay={index * 0.08}>
                  <Card className="group h-full p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-300/40">
                    <div className="mb-5 grid h-12 w-12 place-items-center rounded-[8px] bg-blue-500/12 text-blue-200 ring-1 ring-blue-300/15 transition group-hover:bg-blue-400/20">
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
