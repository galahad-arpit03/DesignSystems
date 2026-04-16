import React from 'react';

export const Footer = () => {
  return (
    <footer className="border-t border-[#111] py-4 lg:py-10 px-6 md:px-8 mt-6 lg:mt-16 bg-black">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:grid lg:grid-cols-[1fr_2fr_1fr] items-center gap-3 lg:gap-4 text-[11px] text-[#555]">
        {/* Left */}
        <div className="flex items-center gap-2 lg:justify-start">
          <span className="text-[#888] font-pixel-grid uppercase tracking-widest">Maintained by Arpit</span>
        </div>

        {/* Center */}
        <div className="text-center">
          <span className="text-[#555] leading-relaxed block max-w-md mx-auto">
            Design system inspirations from popular websites. Drop one in, let AI build matching UI.
          </span>
        </div>

        {/* Right */}
        <div className="flex gap-6 lg:justify-end">
          <a href="/terms" className="hover:text-white transition-colors">Terms</a>
          <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
        </div>
      </div>
    </footer>
  );
};
