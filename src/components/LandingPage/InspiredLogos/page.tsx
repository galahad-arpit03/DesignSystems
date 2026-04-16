import React from 'react';
import { logos } from './data';

export const InspiredLogos = () => {
  const doubledLogos = [...logos, ...logos];


  return (
    <div className="border-y border-border-color bg-black overflow-hidden relative">
      {/* Desktop Marquee */}
      <div className="hidden md:flex max-w-[1400px] mx-auto items-stretch font-mono text-[0.75rem] md:text-[0.7rem] text-text-secondary uppercase tracking-tight">
        <div className="flex items-center px-4 md:px-8 py-3 border-r border-border-color font-bold flex-shrink-0 bg-black z-10 relative shadow-[10px_0_15px_rgba(0,0,0,0.5)]">
          <span className="hidden md:inline">DESIGN SYSTEMS INSPIRED FROM:</span>
          <span className="md:hidden">INSPIRED BY:</span>
        </div>
        <div className="flex items-stretch animate-marquee">
          {doubledLogos.map((logo, index) => (
            <div key={`${logo.name}-${index}`} className="flex items-center gap-2 px-4 md:px-6 py-3 border-r border-border-color grayscale opacity-60 hover:opacity-100 hover:bg-[#050505] transition-all cursor-pointer flex-shrink-0">
              <img src={logo.icon} className="h-[14px] md:h-[14px] invert opacity-80" alt={logo.name} /> 
              <span>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Featured Designs Grid */}
      <div className="md:hidden px-6 py-10">
        <div className="flex items-center gap-2 text-[10px] font-mono text-[#555] uppercase tracking-widest mb-8">
          <span className="text-accent-pink">▶</span> FEATURED DESIGNS
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: 'SpaceX', icon: '/logos/spacex.svg' },
            { name: 'IBM', icon: '/logos/ibm.svg' },
            { name: 'Lamborghini', icon: '/logos/lamborghini.svg' },
            { name: 'Feature your brand?', icon: null }
          ].map((item, i) => (
            <div key={i} className={`flex items-center gap-3 p-4 border border-[#111] rounded-xl bg-black ${!item.icon ? 'border-dashed border-[#222]' : ''}`}>
              {item.icon ? (
                <>
                  <img src={item.icon} className="w-5 h-5 invert opacity-80" alt="" />
                  <span className="text-xs font-bold text-white">{item.name}</span>
                </>
              ) : (
                <div className="flex items-center gap-3">
                  <span className="text-[#333] font-mono">?</span>
                  <span className="text-[10px] italic text-[#444] leading-tight">{item.name}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
