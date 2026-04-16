'use client';

import React from 'react';

export const TermsContent = () => {
  return (
    <main className="flex-grow pt-8 lg:pt-10 pb-20">
      <div className="border-b border-border-color pb-6 mb-8">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-[18px] sm:text-[24px] font-semibold text-[#FFB1EE] font-pixel tracking-[-0.24px] leading-[28.8px] opacity-0 animate-[fade-up_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards]">
            Terms of Service
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <p className="text-[#888] font-pixel-grid text-sm mb-8 opacity-0 animate-[fade-up_0.6s_cubic-bezier(0.16,1,0.3,1)_0.1s_forwards]">
          Last updated: April 8, 2026
        </p>

      <div className="space-y-8 text-[#aaa] text-sm lg:text-base leading-relaxed opacity-0 animate-[fade-up_0.8s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards]">
        <section>
          <h2 className="text-xl font-bold text-white mb-4 font-mono">1. Overview</h2>
          <p>
            getdesign ("the Service") is operated by the VoltAgent team. By accessing or using the Service, you agree to be bound by these Terms of Service. If you do not agree, please do not use the Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 font-mono">2. Description of Service</h2>
          <p>
            getdesign is a browsable directory of design files — structured markdown files that describe design systems inspired by popular websites. The Service also offers a paid "Request a design" feature where users can request a custom design, design tokens, and dark + light preview HTMLs for a specific website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 font-mono">3. Free Content</h2>
          <p>
            All design files available in the public directory are free to browse, download, and use in your projects. These files are provided "as is" without warranty of any kind. They are curated starting points inspired by publicly visible design patterns and are not official design systems from the listed companies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 font-mono">4. Paid Service — Request a design</h2>
          <div className="space-y-4">
            <p>The "Request a design" feature is a paid digital product. By purchasing, you agree to the following:</p>
            <ul className="list-disc pl-5 space-y-2 text-[#888]">
              <li><span className="text-white">Price:</span> $29 per request, charged via Stripe at the time of purchase.</li>
              <li><span className="text-white">Delivery:</span> The generated design, design tokens, and preview HTML files will be delivered to the email address you provide within 1–2 business days.</li>
              <li><span className="text-white">Digital product:</span> Since this is a digital product delivered via email, all sales are final. No refunds will be issued once the design has been delivered.</li>
              <li><span className="text-white">Refund exception:</span> If we are unable to generate a design for the requested website (e.g., the site is behind a login wall or unavailable), you will receive a full refund.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 font-mono">5. Intellectual Property</h2>
          <p>
            All trademarks, brand names, logos, and design elements referenced in design files belong to their respective owners. getdesign does not claim ownership of any third-party intellectual property. The design files document publicly observable design patterns for educational and development purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 font-mono">6. User Responsibilities</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>You must provide a valid email address when requesting a paid design.</li>
            <li>You must not use the Service for any unlawful purpose.</li>
            <li>You are responsible for how you use the generated design files in your own projects.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 font-mono">7. Limitation of Liability</h2>
          <p>
            The Service is provided "as is" and "as available" without warranties of any kind, express or implied. We do not guarantee that design files will be error-free, complete, or suitable for any particular purpose. In no event shall getdesign or its operators be liable for any indirect, incidental, or consequential damages arising from the use of the Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 font-mono">8. Changes to Terms</h2>
          <p>
            We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated date. Continued use of the Service after changes constitutes acceptance of the new Terms.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-4 font-mono">9. Contact</h2>
          <p>
            For questions about these Terms, please reach out via email.
          </p>
        </section>
      </div>
    </div>
  </main>
);
};
