// FILE: src/data/projects.ts

// 1. THE INTERFACE (The Rulebook)
export interface Project {
  id: string;
  title: string;
  tagline: string;
  status: 'Production' | 'In Development' | 'Prototype';
  description: string;
  techStack: string[];
  
  // This is the CRITICAL field causing the error
  orientation: 'landscape' | 'portrait'; 
  
  media: {
    image: string;
    video: string;
  };
  links: {
    github?: string;
    live?: string;
  };
}

// 2. THE DATA (The Content)
export const projects: Project[] = [
  {
    id: 'desi-hustle',
    title: 'Desi Hustle',
    tagline: 'Open-World Survival RPG',
    status: 'In Development',
    description: 'A chaotic, satirical open-world survival game set in a vibrant Indian city. Features advanced AI traffic systems, "Desi Physics" ragdoll mechanics, and a dynamic economy.',
    techStack: ['Unity 6', 'C#', 'HLSL Shaders', 'NavMesh AI'],
    orientation: 'landscape',
    media: {
      image: '/images/projects/desi-hustle.jpg',
      video: '/videos/projects/desi-hustle.mp4',
    },
    links: {
      github: 'https://github.com/vivekTiw120303',
    }
  },
  {
    id: 'naam-jaap',
    title: 'Naam Jaap',
    tagline: 'Offline-First Spiritual Platform',
    status: 'Production',
    description: 'A production-grade app serving thousands of users. Features a custom "Bodhi Tree" growth visualization engine, Hive database for offline capability, and 20+ language localization.',
    techStack: ['Flutter', 'Firebase', 'Hive DB', 'Riverpod'],
    orientation: 'portrait',
    media: {
      image: '/images/projects/naam-jaap.jpg',
      video: '/videos/projects/naam-jaap.mp4',
    },
    links: {
      live: 'https://play.google.com/store/apps/details?id=com.vivek.naamjaap',
      github: 'https://github.com/vivekTiw120303' 
    }
  },
  {
    id: 'dev-overflow',
    title: 'DevOverflow',
    tagline: 'StackOverflow Clone',
    status: 'Prototype',
    description: 'A robust Q&A platform with reputation systems, voting logic, and AI-powered recommendations. Built with a scalable Node.js backend and Dockerized architecture.',
    techStack: ['Node.js', 'Express', 'MongoDB', 'Docker', 'JWT'],
    orientation: 'landscape',
    media: {
      image: '/images/projects/dev-overflow.jpg',
      video: '/videos/projects/dev-overflow.mp4',
    },
    links: {
      github: 'https://github.com/vivekTiw120303/DevOverflow',
    }
  },
  {
    id: 'color-drift',
    title: 'Color Drift',
    tagline: 'Liquid Sorting Puzzle',
    status: 'Production',
    description: 'A polished 2D puzzle game focusing on fluid dynamics logic and satisfying ASMR visual feedback. Optimized for mobile performance with custom shader graphs.',
    techStack: ['Unity 2D', 'C#', 'Shader Graph', 'WebGL'],
    orientation: 'portrait',
    media: {
      image: '/images/projects/color-drift.jpg',
      video: '/videos/projects/color-drift.mp4',
    },
    links: {
      github: 'https://github.com/vivekTiw120303',
    }
  },
  {
    id: 'social-bay',
    title: 'Social Bay',
    tagline: 'Real-time Chat Ecosystem',
    status: 'Prototype',
    description: 'High-performance chat architecture featuring OAuth 2.0, instantaneous message sync via WebSockets, and media compression algorithms.',
    techStack: ['Flutter', 'Node.js', 'Socket.io', 'REST API'],
    orientation: 'portrait',
    media: {
      image: '/images/projects/social-bay.jpg',
      video: '/videos/projects/social-bay.mp4',
    },
    links: {
      github: 'https://github.com/vivekTiw120303/Social_Bay-ChatApp',
    }
  }
];