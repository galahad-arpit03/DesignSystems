import React from 'react';
import { Navbar } from '@/components/Navbar/page';
import { Footer } from '@/components/Footer/page';
import { WhatIsThisContent } from '@/components/WhatIsThis/page';

const WhatIsThisPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-[#FF61D2] selection:text-black">
      <Navbar />
      <WhatIsThisContent />
      <Footer />
    </div>
  );
};

export default WhatIsThisPage;
