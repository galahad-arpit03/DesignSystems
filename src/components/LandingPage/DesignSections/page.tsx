'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { designs, categories, categoryCounts, Design } from './data';

interface DesignTableProps {
  selectedCategory: string;
}

export const DesignTable: React.FC<DesignTableProps> = ({ selectedCategory }) => {
  const [search, setSearch] = useState('');

  const filteredDesigns = useMemo(() => {
    return designs.filter((design: Design) => {
      const matchesCategory = selectedCategory === 'All' || design.category === selectedCategory;
      const matchesSearch = design.name.toLowerCase().includes(search.toLowerCase()) ||
                            design.desc.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, search]);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

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
          {paginatedDesigns.map((item: Design) => (
            <div key={item.name} className="grid grid-cols-[1fr_auto] md:grid-cols-[1.5fr_3fr_1fr_1fr] py-4 border-b border-[#111] items-center group hover:bg-[#111] transition-all px-2 md:-mx-2">
              <div className="flex items-center gap-3">
                <img src={item.logo} className="w-8 h-8 md:w-6 md:h-6 rounded bg-[#1a1a1a] p-1 invert opacity-80" alt={item.name} />
                <span className="font-bold text-white text-[15px] md:text-sm">{item.name}</span>
              </div>
              <div className="hidden md:block text-[#666] text-xs pr-4 line-clamp-1">{item.desc}</div>
              <div className="hidden md:block text-[#666] font-mono text-xs text-right pr-2">{item.installs}</div>
              <div className="hidden md:block text-[#666] font-mono text-xs text-right pr-2">{item.bookmarked}</div>
            </div>
          ))}
        </div>
        {filteredDesigns.length === 0 && (
          <div className="py-20 text-center text-[#444] font-mono text-xs italic">
            No designs found matching your search.
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-between border-t border-[#222] pt-6 font-mono text-[0.65rem] lowercase text-[#666]">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`hover:text-white transition-colors flex items-center gap-1 ${currentPage === 1 ? 'opacity-30 cursor-not-allowed' : ''}`}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              prev
            </button>
            <div className="flex items-center gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-6 h-6 flex items-center justify-center transition-all ${currentPage === i + 1 ? 'border border-[#eee] text-white' : 'hover:text-[#aaa]'}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`hover:text-white transition-colors flex items-center gap-1 ${currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : ''}`}
            >
              next
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
          <div>
            showing {Math.min(filteredDesigns.length, (currentPage - 1) * pageSize + 1)}-{Math.min(filteredDesigns.length, currentPage * pageSize)} of {filteredDesigns.length}
          </div>
        </div>
      )}
    </div>
  );
};

export const Sidebar: React.FC<{ selectedCategory: string; onSelect: (cat: string) => void }> = ({ selectedCategory, onSelect }) => {
  return (
    <aside className="w-full lg:w-[260px] flex-shrink-0">
      <h2 className="text-xl font-bold mb-6 lg:mb-8 text-accent-pink font-pixel-circle">Find Designs</h2>
      
      {/* Mobile Select */}
      <div className="lg:hidden relative mb-6">
        <select 
          value={selectedCategory}
          onChange={(e) => onSelect(e.target.value)}
          className="w-full bg-[#0a0a0a] text-white border border-[#222] py-4 px-4 rounded-lg appearance-none font-medium text-sm outline-none"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#555]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
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
