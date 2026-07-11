import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/motion/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something worth shipping."
          description="For full stack roles, AI platform work, open-source collaboration, or recruiter conversations, send a message."
        />
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            <Card className="h-full p-6">
              <h3 className="font-display text-2xl font-semibold text-white">Contact Details</h3>
              <div className="mt-8 space-y-5">
                <a
                  href="mailto:pareekaditya0007@gmail.com"
                  className="flex items-center gap-4 rounded-[8px] border border-white/10 bg-white/[0.03] p-4 text-slate-300 transition hover:border-teal-200/40 hover:text-white"
                >
                  <Mail className="h-5 w-5 text-teal-200" />
                  pareekaditya0007@gmail.com
                </a>
                <a
                  href="tel:+917002175645"
                  className="flex items-center gap-4 rounded-[8px] border border-white/10 bg-white/[0.03] p-4 text-slate-300 transition hover:border-teal-200/40 hover:text-white"
                >
                  <Phone className="h-5 w-5 text-amber-200" />
                  +91 70021 75645
                </a>
                <div className="flex items-center gap-4 rounded-[8px] border border-white/10 bg-white/[0.03] p-4 text-slate-300">
                  <MapPin className="h-5 w-5 text-teal-200" />
                  Amaravati, India
                </div>
              </div>
            </Card>
          </Reveal>
          <Reveal delay={0.12}>
            <Card className="p-6">
              <form className="space-y-5" action="mailto:pareekaditya0007@gmail.com" method="post">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-sm font-medium text-slate-300">Name</span>
                    <Input name="name" placeholder="Your name" required />
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm font-medium text-slate-300">Email</span>
                    <Input name="email" type="email" placeholder="you@example.com" required />
                  </label>
                </div>
                <label className="block space-y-2">
                  <span className="text-sm font-medium text-slate-300">Message</span>
                  <Textarea name="message" placeholder="Tell me about the opportunity..." required />
                </label>
                <Button type="submit" variant="gradient" size="lg">
                  <Send className="h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
