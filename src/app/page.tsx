'use client';

import React, { useState } from 'react';
import { Hero } from '@/components/LandingPage/Hero/page';
import { InspiredLogos } from '@/components/LandingPage/InspiredLogos/page';
import { Sidebar, DesignTable } from '@/components/LandingPage/DesignSections/page';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <>
      <Hero />
      <InspiredLogos />
      
      <div className="max-w-[1400px] mx-auto py-16 px-6 md:px-14 lg:px-20 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16" id="designs">
        <Sidebar 
          selectedCategory={selectedCategory} 
          onSelect={setSelectedCategory} 
        />
        <DesignTable 
          selectedCategory={selectedCategory} 
        />
      </div>
    </>
  );
}
