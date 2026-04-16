import React from 'react';
import { heroStats, featuredDesigns } from './data';

export const Hero = () => {
  return (
    <header className="relative min-h-0 lg:min-h-[75vh] flex items-center py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-14 lg:px-20 relative">
      
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] lg:w-[600px] h-[300px] lg:h-[400px] bg-[#FF61D2]/5 blur-[80px] lg:blur-[120px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center w-full relative z-10">
        
        <div className="flex flex-col gap-6 lg:gap-5 text-left items-start w-full">
          
          <div className="flex items-center gap-2 text-[10px] lg:text-[11px] font-pixel-triangle text-[#555] uppercase tracking-[2px] lg:tracking-[3px] opacity-0 animate-[fade-up_0.6s_cubic-bezier(0.16,1,0.3,1)_0.1s_forwards]">
            <span className="w-3 lg:w-4 h-px bg-[#FF61D2]" />
            Open Design Library
            <span className="w-3 lg:w-4 h-px bg-[#FF61D2]" />
          </div>

          <h1 className="font-pixel text-[min(15vw,60px)] lg:text-[min(13vw,130px)] leading-[1.1] lg:leading-[0.8] tracking-tight text-white opacity-0 animate-[fade-up_0.8s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards]">
            AWESOME
            <br />
            <span className="text-[#FF61D2]">DESIGN</span>
          </h1>

          <p className="text-[#555] text-sm lg:text-base max-w-md leading-relaxed opacity-0 animate-[fade-up_0.8s_cubic-bezier(0.16,1,0.3,1)_0.35s_forwards]">
           Design system inspirations from popular websites. Drop one into your project and let coding agents build matching UI.
          </p>

          <div className="flex items-center gap-4 opacity-0 animate-[fade-up_0.8s_cubic-bezier(0.16,1,0.3,1)_0.5s_forwards]">
            <a
              href="#designs"
              className="inline-flex items-center gap-2 bg-white text-black text-sm font-bold py-3 px-7 rounded-lg hover:bg-[#FF61D2] hover:text-white transition-all duration-300"
            >
              Browse Designs ↓
            </a>
            <span className="text-[#aaa] text-xs font-mono">
              {heroStats[0].value} files & counting
            </span>
          </div>
        </div>

        <div className="hidden lg:block opacity-0 animate-[fade-in_1s_ease_0.6s_forwards] relative lg:-left-12 max-w-[280px] lg:max-w-none mx-auto lg:mx-0">
  <img src="/hero/hero.png" alt="Hero illustration" className="w-full h-auto object-cover rounded-lg" />
</div>

      </div>
      </div>
    </header>
  );
};
