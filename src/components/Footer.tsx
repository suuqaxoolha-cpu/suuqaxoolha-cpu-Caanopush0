import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-purple-200 dark:border-purple-500/20 bg-white/50 dark:bg-black/40 backdrop-blur-md mt-20 relative z-10 w-full transition-colors duration-500">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="#" className="text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-6 w-6" />
          </a>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-sm font-medium text-gray-500 dark:text-purple-200/50">
            &copy; {new Date().getFullYear()} DevPort. Designed & Built with passion.
          </p>
        </div>
      </div>
    </footer>
  );
}
