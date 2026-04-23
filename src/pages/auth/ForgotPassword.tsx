import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { KeyRound, ArrowLeft } from 'lucide-react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Dummy handler
    console.log('Password reset requested for:', email);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-12 sm:px-6 lg:px-8 animate-in fade-in zoom-in-95 duration-500">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <div className="mx-auto bg-purple-100 dark:bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md dark:shadow-[0_0_30px_rgba(147,51,234,0.3)] border border-purple-200 dark:border-purple-500/30">
          <KeyRound className="w-8 h-8 text-purple-600 dark:text-purple-400" />
        </div>
        <h2 className="text-center text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Forgot password?
        </h2>
        <p className="mt-3 text-center text-sm font-medium text-gray-600 dark:text-purple-200/70 max-w-sm mx-auto">
          No worries, we'll send you reset instructions.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white/70 dark:bg-black/40 backdrop-blur-xl py-10 px-6 shadow-xl dark:shadow-2xl border border-purple-200 dark:border-purple-500/20 sm:rounded-[2rem] sm:px-12 transition-colors duration-500">
          {!isSubmitted ? (
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
                <button
                  type="submit"
                  className="w-full flex justify-center py-3.5 px-4 rounded-xl shadow-[0_0_15px_rgba(147,51,234,0.3)] dark:shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] dark:hover:shadow-[0_0_30px_rgba(147,51,234,0.6)] text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 focus:ring-purple-500 transition-all border border-transparent"
                >
                  Reset password
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-6">
              <div className="text-sm font-medium text-gray-700 dark:text-purple-200 mb-8 p-4 bg-purple-50 dark:bg-purple-500/10 rounded-xl border border-purple-200 dark:border-purple-500/20">
                We've sent an email to <br /><span className="font-bold text-gray-900 dark:text-white text-base block mt-2">{email}</span> <br />with instructions to reset your password.
              </div>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-sm font-bold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
              >
                Didn't receive the email? Click to resend
              </button>
            </div>
          )}

          <div className="mt-8 text-center pt-6 border-t border-purple-100 dark:border-purple-500/20">
            <Link
              to="/"
              className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-gray-900 dark:text-purple-200/70 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
