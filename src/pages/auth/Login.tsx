import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Code2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLampOn, setIsLampOn] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Login attempt with:', { email, password });
  };

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center py-6 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-1000">
      
      {/* Ambient Darkness overlay when light is off */}
      <div className={`absolute inset-0 z-0 pointer-events-none transition-all duration-1000 ${isLampOn ? 'opacity-0 bg-transparent backdrop-blur-none' : 'opacity-100 bg-black/80 dark:bg-black/95 backdrop-blur-[2px]'}`} />

      {/* Decorative Lamp Component */}
      <div className="relative flex flex-col items-center group z-20 mb-8 mt-4 scale-75 sm:scale-100">
        
        {/* Light Beam */}
        <div 
          className={`absolute top-[90px] w-[350px] sm:w-[600px] h-[650px] pointer-events-none transition-all duration-1000 ease-in-out origin-top z-0
            bg-gradient-to-b from-yellow-300/40 via-yellow-300/10 to-transparent
            ${isLampOn ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}
          style={{ clipPath: 'polygon(40% 0, 60% 0, 100% 100%, 0 100%)' }}
        />

        {/* Lamp Shade & Mechanism */}
        <div className="relative flex justify-center z-10 w-32 sm:w-40 h-24 sm:h-28">
          {/* Lamp Shade */}
          <div 
            className={`absolute inset-0 w-full h-full rounded-t-3xl transition-all duration-500 flex items-center justify-center border-b-4 
              ${isLampOn 
                ? 'bg-gradient-to-b from-yellow-100 to-yellow-50 shadow-[0_0_50px_#fef08a] border-yellow-300' 
                : 'bg-gradient-to-b from-gray-700 to-gray-800 border-gray-900 shadow-xl'
              }`}
            style={{ clipPath: 'polygon(20% 0, 80% 0, 100% 100%, 0% 100%)' }}
          >
             {/* Inner Bulb Glow */}
             <div className={`absolute bottom-0 w-16 h-6 sm:h-8 rounded-t-full transition-all duration-300 ${isLampOn ? 'bg-yellow-200 shadow-[0_0_30px_#fef08a]' : 'bg-gray-600'}`} />
          </div>

          {/* Pull String (Filaria) - Attached neatly underneath the shade */}
          <div className="absolute bottom-0 right-4 sm:right-6 z-20 flex flex-col items-center translate-y-[2px]">
             {/* Mechanism base attached to the shade */}
             <div className={`w-3 h-2 rounded-b-sm shadow-md transition-colors duration-500 ${isLampOn ? 'bg-yellow-600' : 'bg-gray-900'}`} />
             
             <motion.div 
                drag="y"
                dragConstraints={{ top: 0, bottom: 40 }}
                dragElastic={0.2}
                onDragEnd={(e, info) => {
                  if (info.offset.y > 20) {
                    setIsLampOn((prev) => !prev);
                  }
                }}
                className="flex flex-col items-center group/string cursor-grab active:cursor-grabbing pb-4 -mt-1"
             >
                {/* String / Cord */}
                <div className={`w-[2px] transition-all duration-300 bg-gradient-to-b from-gray-500 to-gray-300 shadow-sm ${isLampOn ? 'h-16 sm:h-20' : 'h-12 sm:h-16'}`} />
                
                {/* Pull bobble - nicely decorated */}
                <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 shadow-lg transition-all duration-300 group-hover/string:scale-110 ${isLampOn ? 'bg-amber-400 border-amber-200 shadow-[0_0_15px_#facc15]' : 'bg-gray-300 border-gray-100'}`} />
             </motion.div>
          </div>
        </div>

        {/* Lamp Stand */}
        <div className={`relative z-0 w-3 h-20 sm:h-28 transition-colors duration-500 -mt-1 sm:-mt-2 ${isLampOn ? 'bg-gradient-to-r from-yellow-700 to-yellow-600' : 'bg-gradient-to-r from-gray-600 to-gray-500 dark:from-gray-700 dark:to-gray-600'}`} />

        {/* Lamp Base */}
        <div className={`relative z-10 w-24 sm:w-32 h-6 sm:h-8 rounded-t-xl border-b-4 shadow-xl transition-colors duration-500 ${isLampOn ? 'bg-gradient-to-t from-yellow-700 to-yellow-500 border-yellow-800' : 'bg-gradient-to-t from-gray-600 to-gray-400 dark:from-gray-800 dark:to-gray-600 border-gray-700 dark:border-gray-900'}`} />

        {/* Instruction tooltip */}
        <div className={`absolute top-1/2 left-[110%] tracking-wide text-xs sm:text-sm font-bold whitespace-nowrap px-4 py-2 rounded-xl transition-all duration-500 ${isLampOn ? 'opacity-0 translate-x-4 pointer-events-none' : 'opacity-100 translate-x-0 text-white bg-indigo-600/90 shadow-[0_0_15px_rgba(79,70,229,0.5)] animate-pulse'}`}>
          ← Jiid si aad u daarto
          <div className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-indigo-600/90 rotate-45" />
        </div>
      </div>

      {/* The Form */}
      <div className={`w-full max-w-sm sm:max-w-md transition-all duration-1000 ease-in-out relative z-10
        ${isLampOn ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 blur-[4px] pointer-events-none'}`}
      >
        <div className="bg-white/70 dark:bg-black/40 backdrop-blur-xl py-10 px-6 shadow-xl dark:shadow-2xl border border-purple-200 dark:border-purple-500/20 sm:rounded-[2rem] sm:px-12 transition-colors duration-500">
          <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-8">
            <div className="mx-auto bg-gradient-to-br from-purple-600 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(147,51,234,0.4)] dark:shadow-[0_0_30px_rgba(147,51,234,0.6)]">
              <Code2 className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Welcome back
            </h2>
            <p className="mt-2 text-center text-sm text-purple-700 dark:text-purple-200/70">
              Sign in to your developer dashboard
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-purple-100">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-purple-200 dark:border-purple-500/30 rounded-xl bg-white dark:bg-white/5 text-gray-900 dark:text-white placeholder-purple-300 dark:placeholder-purple-300/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent sm:text-sm transition-all"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold text-gray-700 dark:text-purple-100">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-purple-200 dark:border-purple-500/30 rounded-xl bg-white dark:bg-white/5 text-gray-900 dark:text-white placeholder-purple-300 dark:placeholder-purple-300/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent sm:text-sm transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 bg-gray-50 dark:bg-white/10 border-purple-300 dark:border-purple-500/30 rounded text-purple-600 focus:ring-purple-500 focus:ring-offset-white dark:focus:ring-offset-gray-900"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm font-medium text-gray-700 dark:text-purple-200">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link to="/forgot-password" className="font-bold text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 transition-colors">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-[0_0_15px_rgba(147,51,234,0.3)] dark:shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] dark:hover:shadow-[0_0_30px_rgba(147,51,234,0.6)] text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 focus:ring-purple-500 transition-all"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-purple-100 dark:border-purple-500/20 text-center">
            <p className="text-sm font-medium text-gray-600 dark:text-purple-200/70">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="font-bold text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 transition-colors"
              >
                Sign up for free
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}