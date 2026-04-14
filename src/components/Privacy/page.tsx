'use client';

import React from 'react';

export const PrivacyContent = () => {
  return (
    <main className="flex-grow max-w-4xl mx-auto px-6 py-20 lg:py-32">
      <h1 className="text-3xl md:text-5xl font-bold text-accent-pink font-pixel-circle mb-4 opacity-0 animate-[fade-up_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards]">
        Privacy Policy
      </h1>
      <p className="text-[#555] font-pixel-grid text-sm mb-16 opacity-0 animate-[fade-up_0.6s_cubic-bezier(0.16,1,0.3,1)_0.1s_forwards]">
        Last updated: April 8, 2026
      </p>

      <div className="space-y-12 text-[#aaa] leading-relaxed opacity-0 animate-[fade-up_0.8s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards]">
        <section>
          <h2 className="text-xl font-bold text-white mb-4 font-mono">1. Overview</h2>
          <p>
            getdesign.md ("the Service") is operated by the VoltAgent team. This Privacy Policy explains what data we collect, how we use it, and your rights regarding your personal information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 font-mono">2. Data We Collect</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-white font-bold mb-2">2.1 Browsing the Directory (Free)</h3>
              <p>
                When you browse the free DESIGN.md directory, we collect minimal analytics data through Google Analytics, including page views, approximate location (country level), browser type, and device type. No personally identifiable information is collected during browsing.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">2.2 Authentication (Optional)</h3>
              <p>
                If you choose to sign in to save designs, we collect your email address and/or GitHub profile information through Supabase authentication. This data is used solely to maintain your saved designs across sessions.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">2.3 Requesting a DESIGN.md (Paid)</h3>
              <p>When you submit a "Request a DESIGN.md" form, we collect:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-[#888]">
                <li><span className="text-white">Email address</span> — to deliver the generated DESIGN.md files.</li>
                <li><span className="text-white">Website URL</span> — to know which website to analyze.</li>
                <li><span className="text-white">Additional details</span> — any extra context you provide (optional).</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 font-mono">3. Payment Processing</h2>
          <p>
            All payments are processed by Stripe. We do not store your credit card number, CVV, or any sensitive payment information on our servers. Stripe handles all payment data in compliance with PCI DSS standards. Please refer to Stripe's privacy policy for details on how they handle your payment information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 font-mono">4. How We Use Your Data</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>To deliver the DESIGN.md files you requested to your email address.</li>
            <li>To communicate with you about your request if needed (e.g., clarification, delivery status).</li>
            <li>To improve the Service through anonymous, aggregated analytics.</li>
            <li>To maintain your saved designs if you have an account.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 font-mono">5. Data Sharing</h2>
          <p>
            We do not sell, rent, or share your personal data with third parties for marketing purposes. Your data is shared only with:
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2 text-[#888]">
            <li><span className="text-white">Stripe</span> — for payment processing.</li>
            <li><span className="text-white">Resend</span> — for sending transactional emails (delivery notifications).</li>
            <li><span className="text-white">Supabase</span> — for authentication (if you sign in).</li>
            <li><span className="text-white">Google Analytics</span> — for anonymous usage analytics.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 font-mono">6. Data Retention</h2>
          <p>
            Your email address and request details are retained only for the duration necessary to fulfill your request and provide support. Analytics data is retained in anonymized, aggregated form. You may request deletion of your data at any time by contacting us.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 font-mono">7. Cookies</h2>
          <p>
            The Service uses cookies for authentication sessions and anonymous analytics. No advertising or tracking cookies are used. You can disable cookies in your browser settings, but this may affect the functionality of authentication features.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 font-mono">8. Your Rights</h2>
          <div className="space-y-4">
            <p>You have the right to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction or deletion of your personal data.</li>
              <li>Withdraw consent for data processing at any time.</li>
              <li>Request a copy of your data in a portable format.</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us through GitHub Issues.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 font-mono">9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of the Service after changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 font-mono">10. Contact</h2>
          <p>
            For privacy-related questions, please reach out via email.
          </p>
        </section>
      </div>
    </main>
  );
};
