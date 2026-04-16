'use client';

import React from 'react';

export const PrivacyContent = () => {
  return (
    <main className="flex-grow pt-8 lg:pt-10 pb-20">
      <div className="border-b border-border-color pb-6 mb-8">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-[18px] sm:text-[24px] font-semibold text-[#FFB1EE] font-pixel tracking-[-0.24px] leading-[28.8px] opacity-0 animate-[fade-up_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards]">
            Privacy Policy
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
              design respects your privacy. This policy explains what data is collected, how it is used, and what control you have over it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 font-mono">2. Data we collect</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2 font-mono">2.1 Browsing (free)</h3>
                <p>
                  When you browse the platform, only basic analytics data is collected. This may include page views, general location (country level), browser type, and device type.
                </p>
                <p className="mt-2 text-[#888] italic">
                  This data is anonymous and does not identify you personally.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2 font-mono">2.2 Authentication (optional)</h3>
                <p>
                  If you choose to sign in and save designs, your basic account information such as email or profile details is collected.
                </p>
                <p className="mt-2">
                  This is only used to maintain your saved data and improve your experience.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2 font-mono">2.3 Requesting a design (paid)</h3>
                <p>When you submit a request, the following information is collected:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-[#888]">
                  <li><span className="text-white">Email address</span> — to deliver your files</li>
                  <li><span className="text-white">Website URL</span> — to understand what needs to be created</li>
                  <li><span className="text-white">Additional input</span> — any optional details you provide</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 font-mono">3. Payments</h2>
            <p>
              All payments are handled securely by Stripe.
            </p>
            <p className="mt-2 text-[#888]">
              No sensitive payment details like card numbers or CVV are stored on the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 font-mono">4. How your data is used</h2>
            <div className="space-y-2">
              <p>Your data is used only to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Deliver requested files</li>
                <li>Communicate updates or clarifications</li>
                <li>Improve the platform using aggregated analytics</li>
                <li>Maintain your saved designs (if signed in)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 font-mono">5. Data sharing</h2>
            <p>
              Your data is not sold or used for advertising.
            </p>
            <p className="mt-4">
              It is only shared with essential services required to run the platform:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2 text-[#888]">
              <li><span className="text-white">Stripe</span> — payment processing</li>
              <li><span className="text-white">Resend</span> — sending emails</li>
              <li><span className="text-white">Supabase</span> — authentication</li>
              <li><span className="text-white">Google Analytics</span> — anonymous usage insights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 font-mono">6. Data retention</h2>
            <p>
              Personal data is kept only as long as necessary to fulfill your request or provide support.
            </p>
            <p className="mt-4">
              Analytics data is stored in an anonymized and aggregated form.
            </p>
            <p className="mt-4">
              You can request deletion of your data at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 font-mono">7. Cookies</h2>
            <p>
              Cookies are used for basic functionality like login sessions and analytics.
            </p>
            <p className="mt-4 text-[#888]">
              No advertising or invasive tracking cookies are used. Disabling cookies may affect certain features.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 font-mono">8. Your rights</h2>
            <div className="space-y-4">
              <p>You have the right to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Access your data</li>
                <li>Request corrections or deletion</li>
                <li>Withdraw consent</li>
                <li>Request a copy of your data</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, you can contact us directly.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 font-mono">9. Policy updates</h2>
            <p>
              This policy may be updated over time. Continued use of the platform means you accept the latest version.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 font-mono">10. Contact</h2>
            <p>
              For any privacy-related questions, you can reach out via email.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};
