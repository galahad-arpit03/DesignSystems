'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Hero } from '@/components/LandingPage/Hero/page';
import { InspiredLogos } from '@/components/LandingPage/InspiredLogos/page';
import { Sidebar, DesignTable } from '@/components/LandingPage/DesignSections/page';
import { supabase } from '@/lib/supabase';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [designs, setDesigns] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDesigns = async () => {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('designs')
        .select('*')
        .order('name', { ascending: true });
      if (data) setDesigns(data);
      if (error) console.error(error);
      setIsLoading(false);
    };
    fetchDesigns();
  }, []);

  const categoryCounts = useMemo(() => {
    return designs.reduce((acc: any, design: any) => {
      acc[design.category] = (acc[design.category] || 0) + 1;
      acc["All"] = (acc["All"] || 0) + 1;
      return acc;
    }, { "All": 0 });
  }, [designs]);

  return (
    <>
      <Hero count={designs.length} />
      <InspiredLogos designs={designs} />
      
      <div className="max-w-[1400px] mx-auto py-16 px-6 md:px-14 lg:px-20 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16" id="designs">
        {isLoading ? (
          <div className="col-span-full py-20 text-center text-[#444] font-mono text-xs animate-pulse lowercase">
            fetching design library...
          </div>
        ) : (
          <>
            <Sidebar 
              selectedCategory={selectedCategory} 
              onSelect={setSelectedCategory}
              categoryCounts={categoryCounts}
            />
            <DesignTable 
              selectedCategory={selectedCategory} 
              designs={designs}
            />
          </>
        )}
      </div>
    </>
  );
}
