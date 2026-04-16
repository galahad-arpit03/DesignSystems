'use client';

import React, { useState } from 'react';

export const RequestDesignForm = () => {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');

  return (
    <main className="flex-grow flex items-center justify-center py-10 px-4 sm:px-6 bg-black">
      <div className="max-w-lg w-full bg-[#080808] border border-[#222] rounded-xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="space-y-5">
          <h1 className="text-xl sm:text-2xl font-bold text-[#FFB1EE] font-mono tracking-tight text-left">
            Request a design
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            Get a structured design file, complete with design tokens and both dark and light preview HTMLs for any website.
          </p>

          <div className="bg-[#111]/50 border border-[#222] rounded-lg p-4 space-y-3 text-[11px] sm:text-[12px] text-gray-300 leading-relaxed font-pixel-grid">
            <p>
              Each request is handled with attention to detail. The site is carefully reviewed, its patterns are analyzed, and everything is structured into a usable format before delivery.
            </p>
            <p>
              The platform already includes a growing collection of free design files, with new ones added regularly.
            </p>
            <p>
              If you need something specific or want a private design, submit a request below. These are handled privately and never added to the public collection.
            </p>
          </div>

          <form className="space-y-6 mt-6">
            <div className="space-y-1.5">
              <label className="block text-[0.75rem] font-bold text-gray-200 uppercase tracking-wider">
                Website URL
              </label>
              <input
                type="url"
                required
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
                className="w-full bg-black border border-[#333] rounded-md py-2.5 px-3 text-white text-xs focus:border-accent-pink focus:outline-none transition-colors placeholder:text-[#444]"
              />
              <p className="text-[10px] text-gray-500 font-medium">The website you want the design to be based on</p>
            </div>

            <div className="space-y-1.5">
              <label className="block text-[0.75rem] font-bold text-gray-200 uppercase tracking-wider">
                Delivery Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-black border border-[#333] rounded-md py-2.5 px-3 text-white text-xs focus:border-accent-pink focus:outline-none transition-colors placeholder:text-[#444]"
              />
              <p className="text-[10px] text-gray-500 font-medium">Where the files will be sent</p>
            </div>

            <div className="space-y-1.5">
              <label className="block text-[0.75rem] font-bold text-gray-200 uppercase tracking-wider">
                Additional details (optional)
              </label>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Any extra context or specific requirements"
                rows={3}
                className="w-full bg-black border border-[#333] rounded-md py-2.5 px-3 text-white text-xs focus:border-accent-pink focus:outline-none transition-colors placeholder:text-[#444] resize-none"
              />
            </div>

            <div className="space-y-2 pt-3 border-t border-[#222]">
              <h2 className="text-sm font-bold text-white tracking-tight uppercase">Payment</h2>
              <p className="text-[10px] text-gray-500 leading-relaxed">
                Proceed to payment to complete your request.
                <br />
                You’ll be redirected to Stripe for secure checkout.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-accent-pink text-black font-bold py-3 px-4 rounded-lg text-xs sm:text-sm hover:translate-y-[-1px] active:translate-y-[1px] transition-all shadow-[0_5px_15px_rgba(255,97,210,0.2)] cursor-pointer"
            >
              Proceed to Payment (Rs. 49)
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};
