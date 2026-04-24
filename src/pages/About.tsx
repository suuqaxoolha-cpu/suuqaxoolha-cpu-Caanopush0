import { Mail, MapPin, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <div className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-in fade-in duration-500">
      <div className="bg-white/70 dark:bg-black/40 backdrop-blur-xl rounded-[2.5rem] p-8 sm:p-14 shadow-xl dark:shadow-2xl border border-purple-200 dark:border-purple-500/20 transition-colors duration-500">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/3">
            <div className="aspect-square rounded-[2rem] overflow-hidden bg-purple-100 dark:bg-purple-900/20 mb-8 border border-purple-200 dark:border-purple-500/30 shadow-md dark:shadow-[0_0_30px_rgba(147,51,234,0.2)]">
              <img 
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80&w=800" 
                alt="Profile Workspace"
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 mix-blend-luminosity hover:mix-blend-normal"
              />
            </div>
            
            <div className="flex flex-col gap-5 text-gray-600 dark:text-purple-200/80 font-medium">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span>Senior Engineer</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <a href="mailto:hello@example.com" className="hover:text-purple-500 dark:hover:text-purple-300 transition-colors">
                  hello@example.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-8 leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">Alex.</span><br /> Let's build something amazing together.
            </h1>
            <div className="prose prose-lg text-gray-600 dark:text-purple-100/70 space-y-6 font-light leading-relaxed">
              <p>
                I'm a passionate Software Engineer with over 5 years of experience building modern web applications. 
                My focus is on creating exceptional user experiences that are backed by scalable, maintainable code.
              </p>
              <p>
                Currently, I specialize in the React ecosystem (Next.js, Tailwind CSS) and Node.js backends. 
                I deeply care about performance, accessibility, and design systems.
              </p>
            </div>
            
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                Core Skills
                <div className="h-px bg-purple-200 dark:bg-purple-500/30 flex-grow ml-4"></div>
              </h2>
              <div className="flex flex-wrap gap-3">
                {['TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind', 'PostgreSQL', 'AWS', 'GraphQL', 'Docker'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 rounded-xl text-sm font-semibold border border-purple-200 dark:border-purple-500/20 hover:bg-purple-200 dark:hover:bg-purple-500/20 transition-all cursor-default shadow-sm dark:shadow-[0_0_10px_rgba(147,51,234,0.05)]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}