import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', path: '/home' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/70 dark:bg-black/30 backdrop-blur-xl border-b border-purple-200 dark:border-purple-500/20 sticky top-0 z-50 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/home" className="flex items-center gap-2 group">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white p-1.5 rounded-lg group-hover:from-purple-500 group-hover:to-indigo-500 transition-all shadow-[0_0_15px_rgba(147,51,234,0.3)] dark:shadow-[0_0_15px_rgba(147,51,234,0.5)]">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white transition-colors duration-500">DevPort</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-all hover:text-purple-600 dark:hover:text-purple-400 ${
                    isActive(link.path) 
                      ? 'text-purple-600 dark:text-purple-400 dark:drop-shadow-[0_0_8px_rgba(147,51,234,0.5)]' 
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="w-px h-6 bg-purple-200 dark:bg-purple-500/30 transition-colors duration-500" />
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleTheme}
                className="p-2 text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-white transition-colors rounded-full hover:bg-purple-100 dark:hover:bg-purple-500/20"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <Link
                to="/"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
              >
                Log in
              </Link>
              <Link
                to="/register"
                className="text-sm font-medium bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-500 transition-all shadow-[0_0_10px_rgba(147,51,234,0.2)] dark:shadow-[0_0_15px_rgba(147,51,234,0.4)] hover:shadow-[0_0_15px_rgba(147,51,234,0.4)] dark:hover:shadow-[0_0_25px_rgba(147,51,234,0.6)]"
              >
                Sign up
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button 
              onClick={toggleTheme}
              className="p-2 text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-white"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 dark:bg-black/90 border-b border-purple-200 dark:border-purple-500/20 backdrop-blur-xl xl:hidden max-h-[calc(100vh-4rem)] overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-xl text-base font-medium transition-all ${
                isActive(link.path)
                  ? 'bg-purple-100 dark:bg-purple-600/20 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-500/20'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-purple-100 dark:border-purple-500/20 flex flex-col gap-3 px-3">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-2.5 text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white rounded-xl transition-all"
            >
              Log in
            </Link>
            <Link
              to="/register"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-2.5 text-base font-medium bg-purple-600 text-white rounded-xl hover:bg-purple-500 shadow-[0_0_10px_rgba(147,51,234,0.2)] dark:shadow-[0_0_15px_rgba(147,51,234,0.4)] transition-all"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
