import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/motion/section-heading";
import { Card } from "@/components/ui/card";
import { achievements } from "@/lib/data";

export function Achievements() {
  return (
    <section id="achievements" className="py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Achievements"
          title="Certifications, open source, and competitive programming momentum."
          description="Resume-backed proof points across Oracle Java SE 21, Google AI, AWS Cloud, generative AI foundations, LeetCode, and GSSoC 2026."
        />
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-400 via-violet-400 to-transparent md:left-1/2" />
          <div className="space-y-6">
            {achievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.06}>
                  <div className="relative grid gap-5 pl-12 md:grid-cols-2 md:pl-0">
                    <div
                      className={
                        index % 2 === 0 ? "md:pr-10" : "md:col-start-2 md:pl-10"
                      }
                    >
                      <Card className="p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-300/40">
                        <div className="mb-4 flex items-center gap-3">
                          <div className="grid h-11 w-11 place-items-center rounded-[8px] bg-violet-500/12 text-violet-200 ring-1 ring-violet-300/15">
                            <Icon className="h-5 w-5" />
                          </div>
                          <span className="text-sm font-semibold text-blue-200">
                            Milestone {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <h3 className="font-display text-xl font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-3 leading-7 text-slate-300">{item.detail}</p>
                      </Card>
                    </div>
                    <span className="absolute left-1.5 top-7 h-5 w-5 rounded-full border-4 border-[#030711] bg-blue-300 shadow-glow md:left-1/2 md:-translate-x-1/2" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
