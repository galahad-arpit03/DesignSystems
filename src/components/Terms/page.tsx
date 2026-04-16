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
              design is a platform that provides access to structured design resources. By using the service, you agree to these terms. If you do not agree, please do not use the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 font-mono">2. What the service offers</h2>
            <p>
              design provides a browsable collection of design files — structured markdown documents that define UI patterns such as colors, typography, spacing, components, and layout.
            </p>
            <p className="mt-4">
              The platform also includes a paid feature where you can request a custom design along with design tokens and preview files.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 font-mono">3. Free content</h2>
            <p>
              All publicly available design files can be used freely in your projects.
            </p>
            <p className="mt-4">
              These files are provided as-is, without guarantees. They are meant to serve as starting points and references for building interfaces, not as official or complete design systems.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 font-mono">4. Paid feature — Request a design</h2>
            <div className="space-y-4">
              <p>When purchasing a custom design:</p>
              <ul className="list-disc pl-5 space-y-2 text-[#888]">
                <li><span className="text-white">Pricing:</span> Rs.49 per request</li>
                <li><span className="text-white">Delivery:</span> Files are sent to your email within 1–2 business days</li>
                <li><span className="text-white">What you receive:</span> A structured design, design tokens, and preview files</li>
              </ul>
              <p className="mt-4">
                Since this is a digital product, all purchases are final once delivered.
              </p>
              <p>
                If a request cannot be fulfilled (for example, due to access restrictions or unavailable sources), a full refund will be issued.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 font-mono">5. Intellectual property</h2>
            <p>
              All brand names, logos, and design references belong to their respective owners.
            </p>
            <p className="mt-4">
              design does not claim ownership of any third-party assets. The content is based on publicly observable patterns and is intended for learning and development purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 font-mono">6. Your responsibilities</h2>
            <div className="space-y-4">
              <p>By using the platform, you agree to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide accurate information when making a request</li>
                <li>Use the service in a lawful manner</li>
                <li>Take responsibility for how you apply the provided design files</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 font-mono">7. Limitation of liability</h2>
            <p>
              The service is provided without warranties of any kind.
            </p>
            <p className="mt-4">
              We do not guarantee that the content will always be accurate, complete, or suitable for your specific needs. We are not liable for any damages resulting from the use of the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 font-mono">8. Updates to these terms</h2>
            <p>
              These terms may be updated from time to time. Continued use of the platform means you accept the latest version.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 font-mono">9. Contact</h2>
            <p>
              If you have any questions, you can reach out via email.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};
