'use client';

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';

export const SignInForm = () => {
  const [email, setEmail] = useState('');

  return (
    <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-md w-full bg-[#080808] border border-[#222] rounded-2xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="text-center space-y-3 mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Save Design Files
          </h1>
          <p className="text-gray-400 text-sm">
            Sign in to bookmark design inspirations
          </p>
        </div>

        <div className="space-y-6">
          <button
            onClick={() => signIn('github', { callbackUrl: '/' })}
            className="w-full flex items-center justify-center gap-3 bg-black border border-[#333] hover:bg-[#111] text-white font-medium py-3 rounded-lg transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Continue with GitHub
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#222]"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#080808] px-2 text-gray-500 font-mono tracking-widest">Or continue with</span>
            </div>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <label className="block text-[0.8rem] font-bold text-gray-200">
                Email address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-black border border-[#333] rounded-lg py-3.5 px-4 text-white text-sm focus:border-accent-pink focus:outline-none transition-colors placeholder:text-[#444]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent-pink text-black font-bold py-4 rounded-xl text-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_10px_30px_rgba(255,97,210,0.2)]"
            >
              Send link
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};
