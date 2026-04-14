import React from 'react';
import { logos } from './data';

export const InspiredLogos = () => {
  const doubledLogos = [...logos, ...logos];


  return (
    <div className="border-y border-border-color bg-black overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto flex items-stretch font-mono text-[0.65rem] md:text-[0.7rem] text-text-secondary uppercase tracking-tight">
        <div className="flex items-center px-4 md:px-8 py-3 border-r border-border-color font-bold flex-shrink-0 bg-black z-10 relative shadow-[10px_0_15px_rgba(0,0,0,0.5)]">
          DESIGN SYSTEMS INSPIRED FROM:
        </div>
        <div className="flex items-stretch animate-marquee">
          {doubledLogos.map((logo, index) => (
            <div key={`${logo.name}-${index}`} className="flex items-center gap-2 px-4 md:px-6 py-3 border-r border-border-color grayscale opacity-60 hover:opacity-100 hover:bg-[#050505] transition-all cursor-pointer flex-shrink-0">
              <img src={logo.icon} className="h-[12px] md:h-[14px] invert opacity-80" alt={logo.name} /> 
              <span>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
