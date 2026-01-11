'use client';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { Project } from '@/data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col h-[380px] w-full bg-[#0A0A0A] rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-900/10"
    >
      {/* --- MEDIA AREA (Top 55%) --- */}
      <div className="relative h-[55%] w-full overflow-hidden bg-gray-900">
        
        {/* Video Layer */}
        <video
          ref={videoRef}
          src={project.media.video}
          loop muted playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Image Layer */}
        <div className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
            <Image 
              src={project.media.image} 
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              unoptimized
            />
            {/* Gradient Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
        </div>

        {/* Floating Action Button (Only visible on hover) */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
                <ArrowUpRightIcon className="w-5 h-5" />
            </div>
        </div>
      </div>

      {/* --- CONTENT AREA (Bottom 45%) --- */}
      <div className="flex flex-col flex-grow p-6 relative z-10 bg-[#0A0A0A]">
        
        {/* Header: Title + Status */}
        <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                {project.title}
            </h3>
            <StatusBadge status={project.status} />
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed mb-6 font-light">
            {project.description}
        </p>

        {/* Tech Stack (Bottom Aligned) */}
        <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-2">
            {project.techStack.slice(0, 3).map(t => (
                <span key={t} className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 px-2 py-1 bg-white/5 rounded border border-white/5 group-hover:border-white/10 group-hover:text-zinc-300 transition-colors">
                    {t}
                </span>
            ))}
        </div>
      </div>
    </motion.div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const isProd = status === 'Production';
  return (
    <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-medium uppercase tracking-wider ${
        isProd 
        ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
        : 'bg-amber-500/10 border-amber-500/20 text-amber-400'
    }`}>
        <div className={`w-1.5 h-1.5 rounded-full ${isProd ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
        {status}
    </div>
  );
}