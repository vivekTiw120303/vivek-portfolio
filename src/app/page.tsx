import Hero from '@/components/hero/Hero';
import ProjectShowcase from '@/components/projects/ProjectShowcase'; 
import ResumeToggle from '@/components/resume/ResumeToggle';
import FloatingDock from '@/components/ui/FloatingDock'; // Import New
import SkillsMarquee from '@/components/skills/SkillsMarquee'; // Import New
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <main className="bg-black min-h-screen relative selection:bg-cyan-500/30">

      {/* Navigation Dock */}
      <FloatingDock />

      <div id="home">
        <Hero />
      </div>

      {/* Skills Marquee - Breaker Section */}
      <SkillsMarquee />
      
      {/* No more "Grid". Now it is a "Section" */}
      <section id="projects" className="relative z-10">
        <div className="py-20 text-center">
            <h2 className="text-sm font-mono text-cyan-400 tracking-[0.2em] mb-4 uppercase">Selected Works</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white">Engineering in Motion</h3>
        </div>
        
        {/* The New Cinema Experience */}
        <ProjectShowcase projects={projects} />
      </section>

      {/* Game Demo Section - Keep this, it's cool */}
      <section className="py-32 bg-neutral-900 border-t border-white/5">
         <div className="max-w-4xl mx-auto px-6 text-center">
             <h2 className="text-4xl font-bold text-white mb-6">Interactive Playground</h2>
             <p className="text-white/50 mb-12">
                Want to see the raw engineering? Launch the WebGL instance of Color Drift.
             </p>
             <div className="w-full aspect-[21/9] bg-black rounded-xl border border-white/10 flex items-center justify-center relative overflow-hidden group cursor-pointer hover:border-cyan-500/50 transition-colors">
                 <div className="absolute inset-0 bg-[url('/images/projects/color-drift.jpg')] bg-cover bg-center opacity-20 group-hover:opacity-10 transition-opacity" />
                 <span className="relative z-10 px-8 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
                    LAUNCH DEMO
                 </span>
             </div>
         </div>
      </section>

      <ResumeToggle />

      <footer className="py-12 text-center bg-black border-t border-white/5">
        <p className="text-white/20 text-xs font-mono">ENGINEERED BY VIVEK TIWARI • 2026</p>
      </footer>
    </main>
  );
}