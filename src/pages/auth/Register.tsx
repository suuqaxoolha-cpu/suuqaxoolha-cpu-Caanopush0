import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Code2 } from 'lucide-react';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Dummy register handler
    console.log('Register attempt with:', { name, email, password });
  };

  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-12 sm:px-6 lg:px-8 animate-in fade-in zoom-in-95 duration-500">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <div className="mx-auto bg-gradient-to-br from-indigo-600 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(79,70,229,0.3)] dark:shadow-[0_0_30px_rgba(79,70,229,0.5)]">
          <Code2 className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-center text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Create an account
        </h2>
        <p className="mt-2 text-center text-sm text-purple-700 dark:text-purple-200/70">
          Join the developer community today
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white/70 dark:bg-black/40 backdrop-blur-xl py-10 px-6 shadow-xl dark:shadow-2xl border border-purple-200 dark:border-purple-500/20 sm:rounded-[2rem] sm:px-12 transition-colors duration-500">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-purple-100">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-purple-200 dark:border-purple-500/30 rounded-xl bg-white dark:bg-white/5 text-gray-900 dark:text-white placeholder-purple-300 dark:placeholder-purple-300/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent sm:text-sm transition-all"
                  placeholder="John Doe"
                />
              </div>
            </div>

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
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-purple-200 dark:border-purple-500/30 rounded-xl bg-white dark:bg-white/5 text-gray-900 dark:text-white placeholder-purple-300 dark:placeholder-purple-300/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent sm:text-sm transition-all"
                  placeholder="Create a strong password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-[0_0_15px_rgba(79,70,229,0.2)] dark:shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] dark:hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 focus:ring-purple-500 transition-all"
              >
                Sign up
              </button>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-purple-100 dark:border-purple-500/20 text-center">
            <p className="text-sm font-medium text-gray-600 dark:text-purple-200/70">
              Already have an account?{' '}
              <Link
                to="/"
                className="font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
              >
                Log in instead
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}