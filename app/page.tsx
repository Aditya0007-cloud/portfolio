import { About } from "@/components/sections/about";
import { Achievements } from "@/components/sections/achievements";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { GithubStats } from "@/components/sections/github-stats";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Resume } from "@/components/sections/resume";
import { Skills } from "@/components/sections/skills";
import { BackToTop } from "@/components/site/back-to-top";
import { CursorGlow } from "@/components/site/cursor-glow";
import { Footer } from "@/components/site/footer";
import { LoadingScreen } from "@/components/site/loading-screen";
import { Navbar } from "@/components/site/navbar";
import { Particles } from "@/components/site/particles";
import { ScrollProgress } from "@/components/site/scroll-progress";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <CursorGlow />
      <Particles />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <GithubStats />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
