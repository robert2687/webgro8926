import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero, StatsBar } from "@/components/hero";
import { Projects } from "@/components/projects";
import { SiteShell } from "@/components/site-shell";
import { Skills } from "@/components/skills";
import { Thesis } from "@/components/thesis";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <SiteShell>
      <Hero />
      <StatsBar />
      <Projects />
      <Thesis />
      <Experience />
      <Skills />
      <About />
      <Contact />
    </SiteShell>
  );
}
