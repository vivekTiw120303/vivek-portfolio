'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type RoleType = 'sde' | 'flutter' | 'game';

const roles: {id: RoleType, label: string, file: string}[] = [
  { id: 'sde', label: 'FULL STACK ENGINEER', file: '/resume/Vivek_Tiwari_SDE_Resume.pdf' },
  { id: 'flutter', label: 'MOBILE ARCHITECT', file: '/resume/Vivek_Tiwari_Flutter_Resume.pdf' },
  { id: 'game', label: 'GAME DEVELOPER', file: '/resume/Vivek_Tiwari_GameDev_Resume.pdf' },
];

export default function ResumeToggle() {
  const [activeRole, setActiveRole] = useState<RoleType>('sde');

  return (
    <div id="resume" className="py-24 px-6 border-t border-white/5 bg-black/40">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-2">Technical Documentation</h2>
            <p className="text-zinc-500 text-sm font-mono">SELECT PROFILE CONTEXT TO DOWNLOAD</p>
        </div>
        
        {/* Toggle Switch */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/5 p-1 rounded-lg flex gap-1 border border-white/10 backdrop-blur-sm overflow-x-auto">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => setActiveRole(role.id)}
                className={`px-5 py-2.5 rounded-md text-xs font-bold font-mono tracking-wider transition-all duration-300 ${
                  activeRole === role.id 
                    ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                    : 'text-zinc-500 hover:text-white hover:bg-white/5'
                }`}
              >
                {role.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Card */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeRole}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="bg-[#0e0e0e] border border-white/10 rounded-xl p-8 relative overflow-hidden group hover:border-white/20 transition-colors"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 font-black text-8xl select-none truncate max-w-full">
              {activeRole.toUpperCase()}
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                    <h3 className="text-xl font-bold text-white mb-2 font-mono">
                        CONFIDENTIAL // {roles.find(r => r.id === activeRole)?.label}
                    </h3>
                    <p className="text-zinc-400 text-sm max-w-lg leading-relaxed mb-6">
                        Detailed breakdown of production experience, tech stack proficiency, and architectural achievements in the {activeRole === 'game' ? 'gaming' : activeRole === 'flutter' ? 'mobile' : 'web'} domain.
                    </p>
                </div>

                <a 
                  href={roles.find(r => r.id === activeRole)?.file} 
                  target="_blank"
                  className="flex items-center gap-3 px-6 py-3 bg-white text-black font-bold text-sm rounded hover:bg-cyan-400 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  DOWNLOAD PDF
                </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}