import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <main className="bg-background-light text-secondary font-sans antialiased min-h-screen">
      {/* Simple Nav for Privacy Page */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#E6F5FC]/95 backdrop-blur-md border-b border-white/50 h-20 flex items-center">
        <div className="max-w-4xl mx-auto px-6 w-full flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
                <span className="material-symbols-outlined text-secondary group-hover:-translate-x-1 transition-transform">arrow_back</span>
                <span className="font-bold text-secondary">Back to Home</span>
            </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-2">Privacy Policy</h1>
        <p className="text-body-text mb-12">Last updated: {currentDate}</p>

        <div className="space-y-10 text-lg text-secondary leading-relaxed">
          
          <p className="font-medium">
            Web3Jatin.com (“we”, “our”, “this website”) respects your privacy.
          </p>

          <section>
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p className="text-body-text">We do not collect personal information like your name, email, phone number, or wallet address through this website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Analytics (Google Analytics)</h2>
            <p className="text-body-text mb-4">We use Google Analytics to understand how visitors use the website (example: page views, time spent, device type, general location like country).</p>
            <p className="text-body-text">This data helps improve website performance and user experience.</p>
            <p className="text-body-text mt-4">Google Analytics may use cookies or similar technologies to collect this information.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Cookies</h2>
            <p className="text-body-text mb-4">Cookies are small files stored on your device.</p>
            <p className="text-body-text">If you prefer, you can disable cookies through your browser settings. However, some site features may not work properly.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Third-Party Services</h2>
            <p className="text-body-text mb-4">Google Analytics is provided by Google and may process data according to its own policies.</p>
            <p className="text-body-text">
              You can learn more about Google’s privacy practices here: <br />
              <a href="https://policies.google.com/privacy" target="_blank" className="text-primary hover:underline break-all">https://policies.google.com/privacy</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
            <p className="text-body-text">We take reasonable steps to keep this website secure, but no online platform can guarantee 100% security.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Policy Updates</h2>
            <p className="text-body-text">This Privacy Policy may be updated over time. Any updates will be posted on this page.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Contact</h2>
            <p className="text-body-text">
              If you have questions about this Privacy Policy, you can contact: <br />
              <a href="mailto:jatin@web3jatin.com" className="font-bold text-secondary hover:text-primary transition-colors">jatin@web3jatin.com</a>
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}