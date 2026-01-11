'use client';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white relative overflow-hidden">
      {/* Background Glitch Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <h1 className="text-9xl font-bold text-white/5 font-mono">404</h1>
      
      <div className="z-10 text-center">
        <h2 className="text-3xl font-bold mb-4">System Malfunction</h2>
        <p className="text-white/50 mb-8 max-w-md mx-auto">
          The requested signal could not be traced. The page you are looking for has been moved or destroyed.
        </p>
        
        <Link 
          href="/"
          className="px-8 py-3 bg-white text-black font-bold rounded hover:bg-cyan-400 transition-colors inline-block"
        >
          Return to Base
        </Link>
      </div>
    </div>
  );
}