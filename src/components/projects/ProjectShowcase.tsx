// FILE: src/components/projects/ProjectShowcase.tsx
'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { Project } from '@/data/projects'; // <--- This now has 'orientation'

export default function ProjectShowcase({ projects }: { projects: Project[] }) {
  const [activeProject, setActiveProject] = useState(0);
  
  return (
    <div className="relative w-full bg-black">
      
      {/* --- DESKTOP LAYOUT --- */}
      <div className="hidden lg:flex">
        
        {/* LEFT: THE CINEMA SCREEN (Sticky) */}
        <div className="w-2/3 h-screen sticky top-0 flex items-center justify-center p-12 bg-[#050505]">
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(34,211,238,0.1)] bg-neutral-900">
            {projects.map((project, index) => (
              <ProjectVideo 
                key={project.id} 
                project={project} 
                isActive={index === activeProject} 
              />
            ))}
          </div>
        </div>

        {/* RIGHT: THE SCROLLING SCRIPT */}
        <div className="w-1/3 relative z-10">
          <div className="h-[50vh]" /> {/* Spacer top */}
          {projects.map((project, index) => (
            <ProjectDescription 
              key={project.id} 
              project={project} 
              index={index} 
              onInView={() => setActiveProject(index)} 
            />
          ))}
          <div className="h-[50vh]" /> {/* Spacer bottom */}
        </div>
      </div>

      {/* --- MOBILE LAYOUT --- */}
      <div className="lg:hidden flex flex-col gap-24 px-6 py-20">
        {projects.map((project) => (
             <div key={project.id} className="flex flex-col gap-6">
                <div className={`relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 ${project.orientation === 'portrait' ? 'aspect-[9/16]' : 'aspect-video'}`}>
                    <ProjectVideo project={project} isActive={true} />
                </div>
                <div>
                   <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                   <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map(t => <span key={t} className="text-xs border border-white/20 px-2 py-1 rounded text-white/60">{t}</span>)}
                   </div>
                   <p className="text-white/60 leading-relaxed">{project.description}</p>
                </div>
             </div>
        ))}
      </div>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function ProjectVideo({ project, isActive }: { project: Project, isActive: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isActive && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [isActive]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.7 }}
      className="absolute inset-0 w-full h-full bg-black"
    >
      {project.orientation === 'portrait' ? (
        <>
          {/* LAYER 1: Ambient Background (Blurred & Zoomed) */}
          <video
            src={project.media.video}
            loop muted playsInline
            className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-125 pointer-events-none"
          />
          {/* LAYER 2: Actual Content (Fully Visible) */}
          <video
            ref={videoRef}
            src={project.media.video}
            loop muted playsInline
            className="absolute inset-0 w-full h-full object-contain p-4 z-10"
          />
        </>
      ) : (
        /* Landscape Mode */
        <video
          ref={videoRef}
          src={project.media.video}
          loop muted playsInline
          className="w-full h-full object-cover"
        />
      )}
    </motion.div>
  );
}

function ProjectDescription({ project, index, onInView }: { project: Project, index: number, onInView: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) onInView();
  }, [isInView, onInView]);

  return (
    <div ref={ref} className="h-screen flex flex-col justify-center px-8 opacity-30 transition-all duration-500 hover:opacity-100 data-[active=true]:opacity-100 data-[active=true]:translate-x-2" data-active={isInView}>
      <span className="text-cyan-400 font-mono text-sm mb-4 tracking-widest">0{index + 1}</span>
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">{project.title}</h2>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {project.status === 'Production' && (
            <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-bold rounded-full border border-green-500/20 uppercase tracking-wider">Production</span>
        )}
        {project.techStack.map(t => (
            <span key={t} className="px-3 py-1 border border-white/10 bg-white/5 text-zinc-400 text-xs rounded-full font-mono">{t}</span>
        ))}
      </div>

      <p className="text-lg text-zinc-400 leading-relaxed mb-8">{project.description}</p>
      
      <div className="flex gap-4">
        {project.links.live && (
            <a href={project.links.live} target="_blank" className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded hover:bg-cyan-400 transition-colors">
                VIEW APP <ArrowUpRightIcon className="w-4 h-4" />
            </a>
        )}
        {project.links.github && (
            <a href={project.links.github} target="_blank" className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-medium rounded hover:bg-white/10 transition-colors">
                GITHUB
            </a>
        )}
      </div>
    </div>
  );
}