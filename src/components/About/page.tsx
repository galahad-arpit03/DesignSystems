'use client';

import React from 'react';

export const AboutContent = () => {
  return (
    <main className="flex-grow pt-8 lg:pt-10 pb-20">
      <div className="border-b border-border-color pb-6 mb-8">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-[18px] sm:text-[24px] font-semibold text-[#FFB1EE] font-pixel tracking-[-0.24px] leading-[28.8px] opacity-0 animate-[fade-up_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards]">
            About
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <p className="text-[#888] font-pixel-grid text-sm mb-8 opacity-0 animate-[fade-up_0.6s_cubic-bezier(0.16,1,0.3,1)_0.1s_forwards]">
          Last updated: April 16, 2026
        </p>

        <div className="space-y-8 text-[#aaa] text-sm lg:text-base leading-relaxed opacity-0 animate-[fade-up_0.8s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards]">
          <section>
            <p className="text-white font-medium mb-4">
              Design is a browsable frontend for a curated collection of real-world UI patterns.
              It brings together design structures inspired by well-known websites and presents them in a simple, usable format.
            </p>
            <p className="mb-4">
              The idea is to provide structured documentation of design elements like colors, typography, spacing, layouts, elevation, and responsiveness — all based on patterns that are commonly used in modern interfaces.
            </p>
            <p className="mb-4">
              You can use these references directly in your projects to guide UI development. Instead of copying designs, this helps you build with a consistent design language that feels familiar, polished, and production-ready.
            </p>
            <p className="mb-4">
              These files act as a foundation for developers and AI coding tools to generate interfaces that follow proven design principles while still being flexible and customizable.
            </p>
          </section>

          <section className="bg-[#111] p-6 rounded-xl border border-[#222]">
            <h2 className="text-lg font-bold text-white mb-3 font-mono">Note</h2>
            <p className="text-sm text-[#888] italic">
              This is not an official design system from any company. It’s a curated and independent collection meant for inspiration and practical use in building interfaces. All brand assets and design styles belong to their respective owners.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};
