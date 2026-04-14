import React from 'react';
import { Navbar } from '@/components/Navbar/page';
import { Footer } from '@/components/Footer/page';
import { PrivacyContent } from '@/components/Privacy/page';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-[#FF61D2] selection:text-black">
      <Navbar />
      <PrivacyContent />
      <Footer />
    </div>
  );
};

export default PrivacyPage;
