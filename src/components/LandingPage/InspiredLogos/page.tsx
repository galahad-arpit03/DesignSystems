import React from 'react';
import { logos } from './data';

export const InspiredLogos = ({ designs = [] }: { designs?: any[] }) => {
  const displayLogos = designs.length > 0 ? designs : [
    { name: 'Loading...', logo_url: '' }
  ];
  
  const doubledLogos = [...displayLogos, ...displayLogos];

  return (
    <div className="border-y border-[#111] bg-black overflow-hidden relative">
      {/* Desktop Marquee */}
      <div className="hidden md:flex max-w-[1400px] mx-auto items-stretch font-mono text-[0.7rem] text-[#444] uppercase tracking-tight px-6 md:px-14 lg:px-20">
        <div className="flex items-center px-4 md:px-8 py-3 border-r border-[#111] font-bold flex-shrink-0 bg-black z-30 relative">
          <div className="absolute right-full top-0 bottom-0 w-[100vw] bg-black z-30" />
          <span className="hidden md:inline">INSPIRED BY:</span>
        </div>
        <div className="flex items-stretch animate-marquee">
          {doubledLogos.map((logo, index) => (
            <div key={`${logo.name}-${index}`} className="flex items-center gap-2 px-6 py-3 border-r border-[#111] opacity-40 hover:opacity-100 hover:bg-[#080808] transition-all cursor-pointer flex-shrink-0 group">
              {logo.logo_url && (
                <img 
                  src={logo.logo_url} 
                  className="h-[14px] invert grayscale group-hover:invert-0 group-hover:grayscale-0 transition-all duration-300" 
                  alt={logo.name} 
                />
              )} 
              <span className="group-hover:text-white transition-colors">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Featured Designs Grid */}
      <div className="md:hidden px-6 py-10">
        <div className="flex items-center gap-2 text-[10px] font-mono text-[#333] uppercase tracking-widest mb-8">
          <span className="text-accent-pink">▶</span> FEATURED
        </div>
        <div className="grid grid-cols-2 gap-4">
          {displayLogos.slice(0, 4).map((item, i) => (
            <div key={item.id || i} className="flex items-center gap-3 p-4 border border-[#111] rounded-xl bg-black">
              {item.logo_url && <img src={item.logo_url} className="w-5 h-5 invert opacity-80" alt="" />}
              <span className="text-xs font-bold text-white leading-none">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
