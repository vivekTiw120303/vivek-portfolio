'use client';

const skills = [
  "Flutter", "Unity 3D", "Next.js", "Node.js", "C#", "Dart", "TypeScript", 
  "Docker", "Firebase", "PostgreSQL", "System Design", "HLSL Shaders"
];

export default function SkillsMarquee() {
  return (
    <div className="w-full py-20 overflow-hidden bg-black border-y border-white/5">
      <div className="relative flex w-full">
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-black to-transparent" />
        <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-black to-transparent" />

        {/* The Moving Track */}
        <div className="flex animate-marquee gap-16 whitespace-nowrap">
          {/* We duplicate the list 4 times to ensure seamless looping */}
          {[...skills, ...skills, ...skills, ...skills].map((skill, i) => (
            <div key={i} className="flex items-center gap-2 group cursor-default">
              <span className="text-4xl md:text-6xl font-bold text-white/10 group-hover:text-cyan-400/50 transition-colors duration-500 font-mono">
                {skill}
              </span>
              <span className="text-xl text-cyan-500/20">●</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}