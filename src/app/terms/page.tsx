import React from 'react';
import { Navbar } from '@/components/Navbar/page';
import { Footer } from '@/components/Footer/page';
import { TermsContent } from '@/components/Terms/page';

const TermsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-[#FF61D2] selection:text-black">
      <Navbar />
      <TermsContent />
      <Footer />
    </div>
  );
};

export default TermsPage;
