import { Link } from 'react-router-dom';
import { ArrowRight, Code, Terminal, Globe } from 'lucide-react';

export default function Home() {
  return (
    <div className="animate-in fade-in duration-500 relative">
      {/* Decorative blurred spots */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-purple-400/30 dark:bg-purple-600/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-40 right-0 w-72 h-72 bg-indigo-400/30 dark:bg-indigo-600/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-24 md:py-32 max-w-7xl mx-auto z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight mb-6">
            Building digital products that make a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">difference.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-purple-200/80 mb-10 leading-relaxed font-light">
            I'm a full-stack engineer specialized in building scalable UI and robust backend systems using React, TypeScript, and modern web tech.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              to="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl hover:from-purple-500 hover:to-indigo-500 transition-all shadow-[0_0_15px_rgba(147,51,234,0.3)] dark:shadow-[0_0_20px_rgba(147,51,234,0.4)] dark:hover:shadow-[0_0_30px_rgba(147,51,234,0.6)]"
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gray-900 dark:text-white bg-white/50 dark:bg-white/5 border border-purple-200 dark:border-purple-500/30 rounded-xl hover:bg-white/80 dark:hover:bg-white/10 transition-all dark:hover:border-purple-500/50 shadow-sm backdrop-blur-sm"
            >
              More About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services/Features */}
      <section className="relative py-24 border-t border-purple-200 dark:border-purple-500/20 bg-white/30 dark:bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
                title: 'Clean Code',
                description: 'Writing maintainable, robust, and clean code that scales with your business needs.'
              },
              {
                icon: <Globe className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
                title: 'Modern Tech Stack',
                description: 'Utilizing React, Next.js, Node.js, and modern CSS frameworks like Tailwind.'
              },
              {
                icon: <Terminal className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
                title: 'Full Lifecycle',
                description: 'Handling everything from initial design and architecture to deployment and DevOps.'
              }
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col p-6 rounded-3xl bg-white/60 dark:bg-white/5 border border-purple-100 dark:border-purple-500/10 hover:border-purple-300 dark:hover:border-purple-500/30 transition-all hover:bg-white/90 dark:hover:bg-white/10 shadow-sm dark:shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)]">
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 shadow-sm dark:shadow-[0_0_15px_rgba(147,51,234,0.2)]">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-purple-200/70 leading-relaxed font-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
