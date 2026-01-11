'use client';
import { motion } from 'framer-motion';
import HyperText from '@/components/ui/HyperText';

export default function Hero() {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden bg-black">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center z-10 px-6 max-w-5xl"
      >
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors cursor-pointer">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm font-mono text-white/70 tracking-wide uppercase">Available for Hire</span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tighter mix-blend-difference">
          <HyperText text="VIVEK TIWARI" />
        </h1>
        
        <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          I build <span className="text-cyan-400 font-medium">scalable systems</span> and <span className="text-cyan-400 font-medium">immersive games</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth'})}
            className="px-8 py-4 bg-white text-black text-lg font-bold rounded-lg hover:bg-cyan-400 transition-all active:scale-95 min-w-[180px]"
          >
            View Projects
          </button>
          
          {/* UPDATED GMAIL LINK */}
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=vivek120303@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-transparent border border-white/20 text-white text-lg font-medium rounded-lg hover:bg-white/10 hover:border-white/40 transition-all min-w-[180px]"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}