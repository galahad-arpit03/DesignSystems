'use client';

import React from 'react';
import { whatIsThisContent } from './data';

export const WhatIsThisContent = () => {
  return (
    <main className="flex-grow max-w-4xl mx-auto px-6 py-20 lg:py-32">
      <h1 className="text-3xl md:text-5xl font-bold text-accent-pink font-pixel-circle mb-8 opacity-0 animate-[fade-up_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards]">
        {whatIsThisContent.title}
      </h1>
      
      <p className="text-[#aaa] text-lg lg:text-xl leading-relaxed mb-16 opacity-0 animate-[fade-up_0.6s_cubic-bezier(0.16,1,0.3,1)_0.1s_forwards]">
        {whatIsThisContent.intro}
      </p>

      <div className="space-y-20 opacity-0 animate-[fade-up_0.8s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards]">
        {whatIsThisContent.sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-32">
            <h2 className="text-2xl font-bold text-white mb-6 font-mono flex items-center gap-3">
              <span className="text-accent-pink">/</span> {section.title}
            </h2>
            
            <div className="space-y-4 text-[#888] leading-relaxed">
              {section.content?.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {section.subsections && (
              <div className="mt-12 space-y-16">
                {section.subsections.map((sub, sIdx) => (
                  <div key={sIdx} className="border-l-2 border-[#1a1a1a] pl-6 py-2">
                    <h3 className="text-lg font-bold text-white mb-4 font-mono">{sub.title}</h3>
                    <p className="text-[#888] mb-6 text-sm">{sub.text}</p>
                    
                    {sub.code && (
                      <div className="bg-[#080808] border border-[#1a1a1a] p-4 rounded-md overflow-x-auto">
                        <pre className="text-xs lg:text-sm font-mono text-accent-pink leading-relaxed">
                          <code>{sub.code}</code>
                        </pre>
                      </div>
                    )}

                    {sub.table && (
                      <div className="mt-6 overflow-x-auto border border-[#1a1a1a] rounded-md">
                        <table className="w-full text-left text-xs lg:text-sm font-mono">
                          <thead>
                            <tr className="bg-[#080808] text-white">
                              {sub.table.headers.map((h, hIdx) => (
                                <th key={hIdx} className="px-4 py-3 border-b border-[#1a1a1a]">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {sub.table.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-white/5 transition-colors">
                                {row.map((cell, cIdx) => (
                                  <td key={cIdx} className="px-4 py-3 border-b border-[#1a1a1a] text-[#888]">{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </main>
  );
};
