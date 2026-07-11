import { BriefcaseBusiness } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/motion/section-heading";
import { Card } from "@/components/ui/card";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Hands-on development and technical community leadership."
          description="Full stack internship experience at Decode Labs plus technical team work with Microsoft Student Chapter, VIT-AP."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {experiences.map((item, index) => (
            <Reveal key={item.role} delay={index * 0.08}>
              <Card className="lift-card group h-full p-6 hover:border-teal-200/35">
                <div className="mb-5 flex items-start justify-between gap-5">
                  <div className="grid h-12 w-12 place-items-center rounded-[8px] bg-teal-300/10 text-teal-200 ring-1 ring-teal-200/15">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>
                  <span className="rounded-[8px] border border-white/10 px-3 py-1 text-xs font-semibold text-slate-300">
                    {item.period}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-white">{item.role}</h3>
                <p className="mt-2 text-sm font-semibold text-teal-200">
                  {item.organization} · {item.location}
                </p>
                <p className="mt-4 leading-8 text-slate-300">{item.description}</p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
