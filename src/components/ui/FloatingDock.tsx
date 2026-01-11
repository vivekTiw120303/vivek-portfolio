'use client';
import { 
  HomeIcon, 
  CodeBracketIcon, 
  DocumentTextIcon, 
  EnvelopeIcon 
} from '@heroicons/react/24/outline';

const navItems = [
  { id: 'home', icon: HomeIcon, label: 'Home' },
  { id: 'projects', icon: CodeBracketIcon, label: 'Work' },
  { id: 'resume', icon: DocumentTextIcon, label: 'Resume' },
  { 
    id: 'contact', 
    icon: EnvelopeIcon, 
    label: 'Contact', 
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=vivek120303gmail.com',
    target: '_blank' 
  },
];

export default function FloatingDock() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 px-4 py-3 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-black/50">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => item.href ? window.open(item.href, item.target || '_self') : scrollTo(item.id)}
            className="group relative p-3 rounded-xl hover:bg-white/10 transition-all active:scale-90"
          >
            <item.icon className="w-6 h-6 text-white/70 group-hover:text-cyan-400 transition-colors" />
            
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black border border-white/10 rounded text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}