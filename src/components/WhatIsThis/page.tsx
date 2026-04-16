'use client';

import React from 'react';
import { whatIsThisContent } from './data';

export const WhatIsThisContent = () => {
  return (
    <main className="flex-grow pt-8 lg:pt-10 pb-20">
      <div className="border-b border-border-color pb-6 mb-8">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-[18px] sm:text-[24px] font-semibold text-[#FFB1EE] font-pixel tracking-[-0.24px] leading-[28.8px] opacity-0 animate-[fade-up_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards]">
            {whatIsThisContent.title}
          </h1>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-[#aaa] text-base lg:text-lg leading-relaxed mb-12 opacity-0 animate-[fade-up_0.6s_cubic-bezier(0.16,1,0.3,1)_0.1s_forwards]">
          {whatIsThisContent.intro}
        </p>

      <div className="space-y-10 opacity-0 animate-[fade-up_0.8s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards]">
        {whatIsThisContent.sections.map((section) => (
          <section 
            key={section.id} 
            id={section.id} 
            className={`scroll-mt-32 ${section.id === 'disclaimer' ? 'bg-[#111] p-6 rounded-xl border border-[#222]' : ''}`}
          >
            <h2 className={`font-bold text-white mb-4 font-mono ${section.id === 'disclaimer' ? 'text-lg' : 'text-xl'}`}>
              {section.title}
            </h2>
            
            <div className={`space-y-4 text-sm lg:text-base leading-relaxed ${section.id === 'disclaimer' ? 'text-[#888] italic' : 'text-[#aaa]'}`}>
              {section.content?.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </section>
        ))}
        </div>
      </div>
    </main>
  );
};
