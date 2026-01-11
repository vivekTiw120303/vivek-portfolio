import Hero from "@/components/hero/Hero";
import Stats from "@/components/stats/Stats";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import ResumeToggle from "@/components/resume/ResumeToggle";
import LinksHub from "@/components/links/LinksHub";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <Projects />
      <Skills />
      <ResumeToggle />
      <LinksHub />
      <Footer />
    </main>
  );
}
