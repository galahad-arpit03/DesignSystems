'use client';

import React from 'react';

export default function SavedPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-14 lg:px-20 bg-black">
      <div className="max-w-[1400px] mx-auto text-left space-y-8">
        <h1 className="text-4xl font-bold text-white tracking-tight">Saved Designs</h1>
        <div className="bg-[#111] border border-[#222] rounded-2xl p-12 text-center space-y-4">
          <p className="text-gray-400">You haven't saved any designs yet.</p>
          <a 
            href="/#designs" 
            className="inline-block bg-accent-pink text-black px-6 py-2 rounded-lg font-bold hover:scale-105 transition-transform"
          >
            Browse Designs
          </a>
        </div>
      </div>
    </main>
  );
}
