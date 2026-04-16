'use client';

import React, { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';

const GITHUB_URL = 'https://github.com/galahad-arpit03';
const STORAGE_KEY = 'github_star_count';
const BASE_COUNT = 0;

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clickCount, setClickCount] = useState<number>(0);
  const [isHydrated, setIsHydrated] = useState(false);

  // Runs after hydration — reads the true persisted count from localStorage
  useEffect(() => {
    const stored = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10);
    setClickCount(stored);
    setIsHydrated(true);
  }, []);

  const handleGithubClick = () => {
    const next = clickCount + 1;
    setClickCount(next);
    localStorage.setItem(STORAGE_KEY, String(next));
    window.open(GITHUB_URL, '_blank', 'noopener,noreferrer');
  };

  const displayCount = () => {
    const total = BASE_COUNT + clickCount;
    return String(total);
  };

  const NavLinks = () => (
    <>
      <a href="/what-is-this" className="hover:text-accent-pink transition-colors text-xs uppercase tracking-wider font-semibold">What is this?</a>
      <a href="/about" className="hover:text-accent-pink transition-colors text-xs uppercase tracking-wider font-semibold">About</a>
    </>
  );

  const GithubButton = () => (
    <button
      onClick={handleGithubClick}
      className="flex items-center bg-[#1a1a1a] border border-[#333] rounded-md overflow-hidden cursor-pointer group hover:border-[#555] transition-colors h-8"
    >
      <div className="flex items-center gap-2 px-3 py-1 border-r border-[#333] group-hover:bg-[#222] transition-colors h-full">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
        <span className="text-xs md:text-sm">Git</span>
      </div>
      <div className="px-2.5 py-1 text-[#FFD700] bg-black font-mono tabular-nums text-xs h-full flex items-center min-w-[3ch] justify-center">
        {isHydrated ? displayCount() : <span className="opacity-0">0</span>}
      </div>
    </button>
  );

  const AuthButton = ({ isMobile = false, closeMenu = () => {} }: { isMobile?: boolean, closeMenu?: () => void }) => {
    const { data: session } = useSession();

    if (session) {
      return (
        <div className={`flex items-center gap-4 ${isMobile ? 'flex-col w-full' : ''}`}>
          <a
            href="/saved"
            onClick={closeMenu}
            className={`${isMobile ? 'w-full py-3 h-auto text-sm' : 'h-8 text-xs px-3'} flex items-center justify-center bg-[#111] border border-[#222] text-white rounded-md font-bold hover:bg-[#222] transition-colors cursor-pointer`}
          >
            Saved
          </a>
          <button 
            onClick={() => {
              signOut();
              closeMenu();
            }}
            className={`${isMobile ? 'w-full py-3 h-auto text-sm' : 'h-8 text-xs px-3'} flex items-center justify-center bg-white text-black rounded-md font-bold hover:bg-gray-200 transition-colors cursor-pointer`}
          >
            Sign out
          </button>
        </div>
      );
    }

    return (
      <a 
        href="/signin" 
        className={`${isMobile ? 'w-full py-3 h-auto text-sm' : 'h-8 text-xs px-3'} flex items-center justify-center bg-white text-black rounded-md font-bold hover:bg-gray-200 transition-colors cursor-pointer`}
        onClick={closeMenu}
      >
        Sign in
      </a>
    );
  };

  return (
    <>
      <nav className="py-4 border-b border-border-color sticky top-0 bg-black/80 backdrop-blur-md z-[100]">
        <div className="max-w-[1400px] mx-auto w-full px-6 md:px-14 lg:px-20 flex justify-between items-center">
          <div className="flex items-center gap-4 lg:gap-6">
            <a href="/" className="logo font-bold text-lg font-mono text-white hover:opacity-80 transition-opacity cursor-pointer">
              De<span className="text-accent-pink">sign</span>
            </a>
            <div className="hidden lg:block">
              <a href="/request" className="flex items-center justify-center bg-accent-pink text-black h-8 px-3 rounded-lg font-bold shadow-[0_0_10px_rgba(255,97,210,0.3)] hover:scale-105 transition-transform whitespace-nowrap text-[11px] uppercase tracking-wider">
                Request DESIGN
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 lg:gap-8">
            <div className="lg:hidden scale-90 sm:scale-100">
              <GithubButton />
            </div>

            <div className="hidden lg:flex items-center gap-8 text-white text-xs font-semibold">
              <NavLinks />
              <GithubButton />
              <AuthButton />
            </div>

            <button 
              className="lg:hidden text-white p-2 ml-[-8px]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-black z-[90] transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="flex flex-col items-start gap-8 px-8 py-24 text-white">
          <div className="flex flex-col gap-6 text-xs uppercase tracking-[0.3em] font-pixel-triangle">
            <a href="/what-is-this" className="text-gray-400 hover:text-[#FF61D2] transition-colors" onClick={() => setIsMenuOpen(false)}>What is this?</a>
            <a href="/about" className="text-gray-400 hover:text-[#FF61D2] transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
          </div>

          <div className="w-full flex flex-col gap-3 mt-4">
            <a 
              href="/request"
              className="bg-accent-pink text-black w-full py-3 rounded-md font-bold text-sm uppercase tracking-wider hover:scale-[1.02] transition-transform flex items-center justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Request DESIGN
            </a>
            <AuthButton isMobile closeMenu={() => setIsMenuOpen(false)} />
          </div>
        </div>
      </div>
    </>
  );
};
