'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { categories } from './data';

interface DesignTableProps {
  selectedCategory: string;
  designs: any[];
}

interface SidebarProps {
  selectedCategory: string;
  onSelect: (cat: string) => void;
  categoryCounts: Record<string, number>;
}

export const DesignTable: React.FC<DesignTableProps> = ({ selectedCategory, designs }) => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const filteredDesigns = useMemo(() => {
    return designs.filter((design) => {
      if (!design.logo_url) return false;
      const matchesCategory = selectedCategory === 'All' || design.category === selectedCategory;
      const matchesSearch = design.name.toLowerCase().includes(search.toLowerCase()) ||
                            design.tagline.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, search, designs]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, search]);

  const totalPages = Math.ceil(filteredDesigns.length / pageSize);
  const paginatedDesigns = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredDesigns.slice(start, start + pageSize);
  }, [filteredDesigns, currentPage, pageSize]);

  return (
    <div className="flex-1">
      <div className="mb-6 relative w-full border-b border-[#222] flex items-center group">
        <span className="text-[#666] mr-3">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </span>
        <input
          type="text"
          placeholder="Search all designs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-transparent py-3 text-[#666] text-sm outline-none font-mono placeholder-[#444]"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr_1fr_1fr] py-3 border-b border-[#222] text-[0.65rem] font-mono lowercase text-[#444] min-w-0">
        <span className="hidden md:inline"># Design Systems</span>
        <span className="md:hidden"># Design Systems</span>
        <span className="hidden md:inline text-right sm:text-left"></span>
        <span className="hidden md:flex items-center justify-end gap-1 text-right">Installs</span>
        <span className="hidden md:flex items-center justify-end gap-1 text-right">Bookmarked</span>
      </div>

      <div className="mt-0 overflow-x-auto lg:overflow-x-visible -mx-4 px-4 lg:mx-0 lg:px-0 no-scrollbar">
        <div className="min-w-0 w-full">
          {paginatedDesigns.map((item) => (
            <Link 
              href={`/design/${item.slug}`}
              key={item.id} 
              className="grid grid-cols-[1fr_auto] md:grid-cols-[1.5fr_3fr_1fr_1fr] py-4 border-b border-[#111] items-center group hover:bg-[#080808] transition-all px-2 md:-mx-2 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <img src={item.logo_url} className="w-8 h-8 md:w-6 md:h-6 invert opacity-80" alt={item.name} />
                <span className="font-bold text-white text-[15px] md:text-sm group-hover:text-accent-pink transition-colors">{item.name}</span>
              </div>
              <div className="hidden md:block text-[#666] text-xs pr-4 line-clamp-1 group-hover:text-[#888] transition-colors">{item.tagline}</div>
              <div className="hidden md:block text-[#666] font-mono text-xs text-right pr-2 group-hover:text-white transition-colors">{item.installs_count}</div>
              <div className="hidden md:block text-[#666] font-mono text-xs text-right pr-2 group-hover:text-white transition-colors">{item.bookmarks_count}</div>
            </Link>
          ))}
        </div>
        {filteredDesigns.length === 0 && (
          <div className="py-20 text-center text-[#444] font-mono text-xs italic">
            No designs found matching your search.
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-between border-t border-[#111] pt-6 font-mono text-[10px] uppercase tracking-widest">
          <button 
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="flex items-center gap-2 text-[#444] hover:text-white disabled:opacity-20 transition-colors py-2 px-1"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            Prev
          </button>
          
          <div className="flex items-center gap-4 text-[#444]">
            <span className="text-white">{currentPage}</span>
            <span className="opacity-30">/</span>
            <span>{totalPages}</span>
          </div>

          <button 
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="flex items-center gap-2 text-[#444] hover:text-white disabled:opacity-20 transition-colors py-2 px-1"
          >
            Next
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      )}
    </div>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({ selectedCategory, onSelect, categoryCounts }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="lg:sticky lg:top-24 h-fit">
      <div className="mb-0 lg:mb-10 flex flex-col md:flex-row lg:flex-col lg:items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h2 className="text-[#FF61D2] font-pixel-triangle text-xs uppercase tracking-[0.2em] mb-4">Find Designs</h2>
          <p className="hidden lg:block text-[#444] text-[10px] leading-relaxed uppercase tracking-widest font-mono">
            Filter by platform or category to find the perfect starting point for your next UI.
          </p>
        </div>

        <div className="h-px bg-[#111] w-full hidden lg:block my-4" />
      </div>

      {/* Mobile Category Dropdown */}
      <div className="lg:hidden mb-12">
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full bg-[#0a0a0a] text-white border border-[#222] py-4 px-4 rounded-lg flex justify-between items-center font-medium text-sm outline-none active:scale-[0.98] transition-transform"
          >
            <span className="text-[#FF61D2] font-pixel-triangle text-[11px] uppercase tracking-wider mr-2">Category:</span>
            <span>{selectedCategory}</span>
            <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-[#0a0a0a] border border-[#222] rounded-xl z-[150] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] animate-[fade-in_0.2s_ease-out]">
              <div className="py-2">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => {
                        onSelect(cat);
                        setIsOpen(false);
                      }}
                      className={`w-full text-left px-5 py-3 text-sm transition-colors border-l-2 ${
                        isActive 
                          ? 'bg-[#111] text-[#FF61D2] border-[#FF61D2]' 
                          : 'text-[#666] border-transparent hover:bg-[#050505] hover:text-white'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{cat}</span>
                        <span className={`font-mono text-[0.7rem] ${isActive ? 'text-[#FF61D2]' : 'text-[#444]'}`}>
                          {categoryCounts[cat] ?? 0}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sidebar */}
      <ul className="hidden lg:flex flex-col space-y-1">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <li
              key={cat}
              onClick={() => onSelect(cat)}
              className={`flex justify-between items-center py-2.5 px-3 cursor-pointer transition-all text-[0.8rem] font-medium group border ${
                isActive
                  ? 'border-[#eee] text-white'
                  : 'text-[#666] border-transparent hover:text-[#aaa]'
              }`}
            >
              <span>{cat}</span>
              <span className={`font-mono text-[0.7rem] ${isActive ? 'text-white' : 'text-[#444]'}`}>
                {categoryCounts[cat] ?? 0}
              </span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
