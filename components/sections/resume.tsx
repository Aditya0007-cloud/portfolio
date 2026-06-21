import { Download, FileText } from "lucide-react";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/motion/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function Resume() {
  return (
    <section id="resume" className="py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Resume"
          title="A recruiter-ready snapshot of full stack and AI platform work."
          description="The current PDF resume with Decode Labs experience, Microsoft Student Chapter leadership, AI projects, certifications, and DSA achievements."
        />
        <Reveal>
          <Card className="aurora-border relative overflow-hidden p-8 sm:p-10">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-400/10 blur-3xl" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[auto_1fr_auto]">
              <div className="grid h-20 w-20 place-items-center rounded-[8px] bg-white/[0.05] text-blue-200 ring-1 ring-white/10">
                <FileText className="h-9 w-9" />
              </div>
              <div>
                <h3 className="font-display text-3xl font-semibold text-white">
                  Aditya Pareek · Full-Stack Developer Resume
                </h3>
                <p className="mt-3 max-w-2xl leading-8 text-slate-300">
                  Includes VIT-AP education, 8.73 GPA, Decode Labs internship, AI-powered
                  project work, Google/AWS certifications, and 450+ LeetCode problems.
                </p>
                <div className="mt-5 flex flex-wrap gap-2 text-sm text-slate-300">
                  <span className="rounded-full border border-white/10 px-3 py-1">ATS friendly</span>
                  <span className="rounded-full border border-white/10 px-3 py-1">Project-led</span>
                  <span className="rounded-full border border-white/10 px-3 py-1">
                    Big Tech focused
                  </span>
                </div>
              </div>
              <MagneticButton>
                <Button asChild variant="gradient" size="lg">
                  <a href="/Aditya-Pareek-Resume.pdf" download>
                    <Download className="h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
              </MagneticButton>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
