'use client';

import React, { useState } from 'react';
import { Design } from '../LandingPage/DesignSections/data';
import { useSession, signIn } from 'next-auth/react';

interface DesignDetailProps {
  design: Design;
}

export const DesignDetail: React.FC<DesignDetailProps> = ({ design }) => {
  const { data: session } = useSession();
  const [copyStatus, setCopyStatus] = useState('Copy');
  const [activeTab, setActiveTab] = useState('Live Preview');

  const command = `npx design@latest add ${design.name.toLowerCase().replace(/\s+/g, '-')}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopyStatus('Copied!');
    setTimeout(() => setCopyStatus('Copy'), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white py-16 px-6 md:px-14 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        {/* Breadcrumb */}
        <button 
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-[#666] hover:text-white transition-colors text-[10px] uppercase tracking-wider mb-8 group"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><polyline points="15 18 9 12 15 6"></polyline></svg>
          Back to designs
        </button>

        {/* Header */}
        <div className="flex flex-col md:flex-row items-start gap-5 mb-8">
          <div className="w-8 h-8 flex items-center justify-center shrink-0">
            <img src={design.logo} alt={design.name} className="w-full h-full invert opacity-90" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-[#888] bg-clip-text text-transparent">
              Design System inspired by {design.name}
            </h1>
            <p className="text-[#666] text-xs md:text-sm max-w-2xl font-medium leading-relaxed">
              {design.desc}
            </p>
          </div>
        </div>

        <hr className="border-[#111] mb-8" />

        {/* Usage Section */}
        <div className="space-y-6 mb-16">
          <h2 className="text-sm font-bold font-pixel-triangle uppercase tracking-[0.3em] text-[#333]">Usage</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
            <div className="space-y-5">
              {/* Command Box */}
              <div className="bg-[#080808] border border-[#222] rounded-xl overflow-hidden group hover:border-[#333] transition-colors relative">
                <div className="p-5 md:p-6 flex items-center justify-between gap-6">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-accent-pink font-mono text-xs opacity-40 select-none hidden sm:inline">$</span>
                    <code className="font-mono text-xs md:text-sm text-[#eee] break-all">
                      {command}
                    </code>
                  </div>
                  <button 
                    onClick={handleCopy}
                    className="shrink-0 p-2.5 bg-[#111] border border-[#222] hover:bg-[#1a1a1a] hover:border-[#333] rounded-lg transition-all text-[#666] hover:text-white group/btn relative"
                    title="Copy command"
                  >
                    <span className={`absolute -top-9 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] font-bold px-2 py-0.5 rounded transition-all duration-300 pointer-events-none ${copyStatus === 'Copied!' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                      COPIED!
                    </span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  </button>
                </div>
              </div>
              <p className="text-[#333] text-[9px] font-mono tracking-tighter uppercase">
                Run this command from your project root, then ask your AI assistant to use Design for UI work.
              </p>

              <div className="text-[#555] text-xs leading-relaxed max-w-2xl mt-12 pt-8 border-t border-[#111]">
                {design.name} builds on {design.desc.split('.')[0].toLowerCase()} and carries it with {design.desc.split('.')[1]?.trim().toLowerCase() ?? 'a modern aesthetic'}. 
                It works best for {design.desc.split('.')[0].toLowerCase()} and {design.desc.split('.')[2]?.trim().toLowerCase() ?? 'modern web applications'}.
              </div>
            </div>

            <div className="space-y-5 lg:pl-10 lg:border-l border-[#111]">
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => !session && signIn()}
                  className="w-full flex items-center justify-center gap-2 bg-[#FF61D2] text-black text-sm font-bold py-3.5 rounded-xl hover:scale-[1.01] active:scale-[0.99] transition-all shadow-[0_0_20px_rgba(255,97,210,0.15)] group"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:fill-black transition-all"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                  SAVE DESIGN
                </button>
                
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-[#080808] border border-[#222] rounded-xl p-3 text-center">
                    <div className="text-[9px] uppercase tracking-[0.2em] text-[#333] font-mono mb-1">Installs</div>
                    <div className="text-base font-bold text-[#FFD700] tabular-nums font-mono">{design.installs}</div>
                  </div>
                  <div className="bg-[#080808] border border-[#222] rounded-xl p-3 text-center">
                    <div className="text-[9px] uppercase tracking-[0.2em] text-[#333] font-mono mb-1">Bookmarked</div>
                    <div className="text-base font-bold text-accent-pink tabular-nums font-mono">{design.bookmarked}</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 items-start text-[10px] text-[#333] leading-relaxed bg-[#050505] p-4 rounded-xl border border-[#111]">
                <span className="text-accent-pink animate-pulse">✦</span>
                <p>Not an official {design.name} design system. A curated starting point for building {design.name.toLowerCase()}-like UIs with your AI coding agent.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <div className="space-y-8">
          <div className="flex items-center justify-between flex-wrap gap-4 pt-8 border-t border-[#111]">
            <h2 className="text-sm font-bold font-pixel-triangle uppercase tracking-[0.3em] text-[#333]">Preview</h2>
            
            <div className="flex items-center gap-1.5 bg-[#080808] border border-[#222] p-1 rounded-xl text-[9px] font-mono uppercase tracking-wider">
              <button 
                onClick={() => setActiveTab('Live Preview')}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-2 transition-all ${activeTab === 'Live Preview' ? 'bg-[#1a1a1a] text-white' : 'text-[#444] hover:text-[#666]'}`}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                Live Preview
              </button>
              <button 
                onClick={() => setActiveTab('Design')}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-2 transition-all ${activeTab === 'Design' ? 'bg-[#1a1a1a] text-white' : 'text-[#444] hover:text-[#666]'}`}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                Design
              </button>
              <div className="w-px h-4 bg-[#222] mx-1" />
              <div className="flex bg-black border border-[#222] rounded-lg overflow-hidden">
                <button className="px-2 py-1 text-[#FFD700] hover:bg-[#080808] transition-colors border-r border-[#222]">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line></svg>
                </button>
                <button className="px-2 py-1 text-[#333] hover:bg-[#080808] transition-colors">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </button>
              </div>
            </div>
          </div>

          <div className="aspect-video w-full bg-[#080808] border border-[#222] rounded-2xl relative overflow-hidden group">
            <div className="absolute inset-0 grid-background opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-700">
                  <img src={design.logo} className="w-full h-full invert opacity-10 group-hover:opacity-40 transition-opacity" alt="" />
                </div>
                <p className="text-[#222] font-mono text-[9px] uppercase tracking-[0.4em]">
                  {design.name.toLowerCase()}.design.preview
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
