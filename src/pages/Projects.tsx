import { Github, ExternalLink } from 'lucide-react';

const MOCK_PROJECTS = [
  {
    id: 1,
    title: 'E-commerce Dashboard',
    description: 'A comprehensive admin dashboard for managing products, orders, and customer analytics. Built with React, Tailwind, and Recharts for data visualization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Tailwind CSS', 'TypeScript', 'Vite'],
    demoUrl: '#',
    sourceUrl: '#'
  },
  {
    id: 2,
    title: 'AI Code Assistant',
    description: 'An AI-powered web editor that helps developers write better code with real-time suggestions and refactoring capabilities.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    tags: ['Next.js', 'OpenAI', 'Tailwind'],
    demoUrl: '#',
    sourceUrl: '#'
  },
  {
    id: 3,
    title: 'FinTech Mobile App',
    description: 'A cross-platform personal finance tracker helping users manage their budgets and analyze spending habits efficiently.',
    image: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&q=80&w=800',
    tags: ['React Native', 'Node.js', 'PostgreSQL'],
    demoUrl: '#',
    sourceUrl: '#'
  }
];

export default function Projects() {
  return (
    <div className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-in fade-in duration-500">
      <div className="mb-12 md:mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4 transition-colors">
          Featured Projects
        </h1>
        <p className="text-xl text-gray-600 dark:text-purple-200/80 max-w-2xl font-light">
          A showcase of my recent coding projects, including open-source contributions and professional work.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_PROJECTS.map((project) => (
          <div key={project.id} className="group bg-white/70 dark:bg-white/5 backdrop-blur-md rounded-[2rem] overflow-hidden border border-purple-200 dark:border-purple-500/20 hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:border-purple-300 dark:hover:border-purple-500/50 transition-all duration-500 flex flex-col">
            <div className="aspect-video w-full overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 dark:from-black/80 to-transparent opacity-80" />
            </div>
            
            <div className="p-8 flex flex-col flex-grow relative z-10 -mt-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 bg-white/90 dark:bg-transparent rounded-lg px-2 -mx-2 dark:mx-0 dark:px-0 w-fit backdrop-blur-sm dark:backdrop-blur-none">{project.title}</h3>
              <p className="text-gray-600 dark:text-purple-200/70 mb-6 flex-grow font-light leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30 text-xs font-semibold rounded-full shadow-sm dark:shadow-[0_0_10px_rgba(147,51,234,0.1)]">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-6 pt-6 border-t border-purple-200 dark:border-purple-500/20">
                <a 
                  href={project.demoUrl}
                  className="flex items-center text-sm font-bold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-1.5" />
                  Live Demo
                </a>
                <a 
                  href={project.sourceUrl}
                  className="flex items-center text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4 mr-1.5" />
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}