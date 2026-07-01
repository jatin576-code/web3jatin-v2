'use client';
import React, { useState } from 'react';

export default function LaunchLab() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <main className="bg-background-light text-secondary font-sans antialiased selection:bg-primary selection:text-secondary">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#E6F5FC]/85 backdrop-blur-md border-b border-white/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 group cursor-pointer">
            <img 
              src="/images/Jatin's pfp.JPG" 
              alt="Web3 Jatin Logo" 
              className="h-10 w-10 rounded-full object-cover group-hover:-rotate-3 transition-transform duration-300"
            />
            <span className="text-secondary font-bold text-lg tracking-tight">Web3 Jatin</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            <a href="/" className="text-sm font-semibold text-secondary/80 hover:text-secondary hover:underline decoration-primary decoration-2 underline-offset-4 transition-all">Main Site</a>
            <a href="#about" className="text-sm font-semibold text-secondary/80 hover:text-secondary hover:underline decoration-primary decoration-2 underline-offset-4 transition-all">About</a>
            <a href="#what-you-get" className="text-sm font-semibold text-secondary/80 hover:text-secondary hover:underline decoration-primary decoration-2 underline-offset-4 transition-all">What You Get</a>
            <a href="#criteria" className="text-sm font-semibold text-secondary/80 hover:text-secondary hover:underline decoration-primary decoration-2 underline-offset-4 transition-all">Criteria</a>
            <a href="#program-details" className="text-sm font-semibold text-secondary/80 hover:text-secondary hover:underline decoration-primary decoration-2 underline-offset-4 transition-all">Program Details</a>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://tally.so/r/A70Lek" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hidden md:inline-flex items-center justify-center bg-[#01E0F8] text-black font-bold text-sm px-6 py-2.5 rounded-xl hover:-translate-y-[2px] hover:shadow-[0_4px_15px_rgba(1,224,248,0.4)] hover:brightness-105 transition-all duration-200 cursor-pointer"
            >
              Apply Now
            </a>
            <button 
              className="md:hidden text-secondary cursor-pointer" 
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-secondary/80 backdrop-blur-sm z-[100] transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleMobileMenu}
      >
        <div 
          className={`absolute right-0 top-0 bottom-0 w-[80%] max-w-[320px] bg-background-light p-8 shadow-2xl flex flex-col transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()} 
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <a href="/" className="flex items-center gap-2" onClick={toggleMobileMenu}>
              <img src="/images/Jatin's pfp.JPG" alt="Web3 Jatin Logo" className="h-8 w-8 rounded-full object-cover" />
              <span className="text-secondary font-bold text-lg tracking-tight">Web3 Jatin</span>
            </a>
            <button className="text-secondary" onClick={toggleMobileMenu}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-6 text-xl font-medium">
            <a href="/" className="text-secondary hover:text-primary transition-colors" onClick={toggleMobileMenu}>Main Site</a>
            <a href="#about" className="text-secondary hover:text-primary transition-colors" onClick={toggleMobileMenu}>About</a>
            <a href="#what-you-get" className="text-secondary hover:text-primary transition-colors" onClick={toggleMobileMenu}>What You Get</a>
            <a href="#criteria" className="text-secondary hover:text-primary transition-colors" onClick={toggleMobileMenu}>Criteria</a>
            <a href="#program-details" className="text-secondary hover:text-primary transition-colors" onClick={toggleMobileMenu}>Program Details</a>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <a 
              href="https://tally.so/r/A70Lek" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex w-full items-center justify-center bg-[#01E0F8] text-black font-bold text-lg px-6 py-4 rounded-xl hover:-translate-y-[2px] hover:shadow-[0_4px_15px_rgba(1,224,248,0.4)] hover:brightness-105 transition-all duration-200 cursor-pointer"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#EBF7FB] pt-20 px-6">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#00FFFF] rounded-full border-[3px] border-secondary"></div>
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#00FFFF] rounded-full border-[3px] border-secondary"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#00FFFF] rounded-full border-[3px] border-secondary"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-[#00FFFF] rounded-full border-[3px] border-secondary"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#013E48] uppercase tracking-tight">
            Jatin Launch Lab
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-extrabold text-black uppercase tracking-wide">
            <span className="text-[#013E48]">1</span> PROJECT • <span className="text-[#013E48]">4</span> WEEKS • <span className="text-[#013E48]">TGE</span>-READY
          </h2>
          
          <p className="text-lg md:text-2xl text-secondary/80 font-medium max-w-2xl">
            4-week Token Launch Strategy & Execution program for Pre-TGE Web3 Projects
          </p>
          
          <a 
            href="https://tally.so/r/A70Lek" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-4 px-10 py-4 rounded-xl bg-[#01E0F8] border-[3px] border-[#01E0F8] text-black font-black text-xl uppercase tracking-wide hover:-translate-y-[3px] hover:shadow-[0_6px_20px_rgba(1,224,248,0.4)] hover:brightness-105 transition-all duration-200 cursor-pointer inline-block"
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-8">What is Jatin Launch Lab?</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-10"></div>
          <p className="text-xl md:text-2xl text-body-text leading-relaxed">
            Jatin Launch Lab is a <span className="font-bold text-secondary">4-week program</span> where I partner with <span className="font-bold text-secondary">one ambitious pre-TGE Web3 project</span> each quarter and help them become <span className="font-bold text-secondary">TGE-ready</span>.
          </p>
          <p className="text-xl md:text-2xl text-body-text leading-relaxed mt-6 font-bold">
            Not just advisory, end-to-end strategy and execution.
          </p>
        </div>
      </section>

      {/* What You Get Section */}
      <section id="what-you-get" className="py-20 px-6 bg-surface border-y border-[#cde9ea]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">What You Get</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="p-10 rounded-2xl bg-background-light border border-[#cde9ea] flex flex-col gap-4 hover:shadow-glow transition-all duration-300 group hover:-translate-y-1 h-full hover:border-[#01F2FB]/50">
              <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-secondary transition-colors duration-300 mb-2">
                <span className="material-symbols-outlined text-3xl">token</span>
              </div>
              <h3 className="text-2xl font-bold text-secondary">Token Structuring</h3>
              <p className="text-body-text text-lg leading-relaxed">
                Tokenomics, token utility, and token sale structure & strategy designed for post-TGE survival and long term sustainablity .
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-10 rounded-2xl bg-background-light border border-[#cde9ea] flex flex-col gap-4 hover:shadow-glow transition-all duration-300 group hover:-translate-y-1 h-full hover:border-[#01F2FB]/50">
              <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-secondary transition-colors duration-300 mb-2">
                <span className="material-symbols-outlined text-3xl">swap_vert</span>
              </div>
              <h3 className="text-2xl font-bold text-secondary">Strategic Exchange Listings</h3>
              <p className="text-body-text text-lg leading-relaxed">
                Which exchanges to list on, when, and why - avoiding unnecessary costs and maximizing trading activity & access.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-10 rounded-2xl bg-background-light border border-[#cde9ea] flex flex-col gap-4 hover:shadow-glow transition-all duration-300 group hover:-translate-y-1 h-full hover:border-[#01F2FB]/50">
              <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-secondary transition-colors duration-300 mb-2">
                <span className="material-symbols-outlined text-3xl">water_drop</span>
              </div>
              <h3 className="text-2xl font-bold text-secondary">Liquidity Strategy</h3>
              <p className="text-body-text text-lg leading-relaxed">
                Fundamental liquidity planning, market maker selection and coordination to ensure healthy market depth.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-10 rounded-2xl bg-background-light border border-[#cde9ea] flex flex-col gap-4 hover:shadow-glow transition-all duration-300 group hover:-translate-y-1 h-full hover:border-[#01F2FB]/50">
              <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-secondary transition-colors duration-300 mb-2">
                <span className="material-symbols-outlined text-3xl">rocket_launch</span>
              </div>
              <h3 className="text-2xl font-bold text-secondary">Execution & Access</h3>
              <p className="text-body-text text-lg leading-relaxed">
                Introductions to exchanges, market makers, VCs & more + dedicated coordination and execution support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section id="criteria" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">Who This Is For</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Good */}
            <div className="bg-surface p-10 rounded-2xl border border-green-500/20 shadow-sm">
              <h3 className="text-2xl font-bold text-secondary mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-green-500">check_circle</span>
                This is for you if:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-lg text-body-text">
                  <span className="material-symbols-outlined text-primary mt-1">check</span>
                  You are a pre-TGE Web3 project
                </li>
                <li className="flex items-start gap-3 text-lg text-body-text">
                  <span className="material-symbols-outlined text-primary mt-1">check</span>
                  You have a working product (MVP, beta, or live)
                </li>
                <li className="flex items-start gap-3 text-lg text-body-text">
                  <span className="material-symbols-outlined text-primary mt-1">check</span>
                  You have real users or traction
                </li>
                <li className="flex items-start gap-3 text-lg text-body-text">
                  <span className="material-symbols-outlined text-primary mt-1">check</span>
                  Your token has a clear purpose
                </li>
              </ul>
            </div>

            {/* The Bad */}
            <div className="bg-surface p-10 rounded-2xl border border-red-500/20 shadow-sm">
              <h3 className="text-2xl font-bold text-secondary mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-red-500">cancel</span>
                This is NOT for:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-lg text-body-text">
                  <span className="material-symbols-outlined text-red-400 mt-1">close</span>
                  Idea-stage projects
                </li>
                <li className="flex items-start gap-3 text-lg text-body-text">
                  <span className="material-symbols-outlined text-red-400 mt-1">close</span>
                  Meme coins
                </li>
                <li className="flex items-start gap-3 text-lg text-body-text">
                  <span className="material-symbols-outlined text-red-400 mt-1">close</span>
                  Token-first, product-later teams
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details Section */}
      <section id="program-details" className="py-24 px-6 border-t border-[#cde9ea]/30">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-secondary/50">
            Program Details
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary leading-tight">
            1 project selected per quarter.
          </h2>
          <p className="text-xl md:text-2xl text-secondary/80 font-medium">
            Applications for Q3 2026 are open from 1 July – 10 July.
          </p>
          <p className="text-base text-body-text font-medium mt-2">
            The program starts on July 15th with the selected project.
          </p>
        </div>
      </section>

      {/* Engagement Model Section */}
      <section className="py-24 px-6 bg-primary/10 border-y border-primary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-secondary/60 mb-4">Engagement Model</h2>
          <p className="text-4xl md:text-6xl font-black text-secondary leading-tight italic">
            No Upfront, Success based Model
          </p>
          <p className="text-2xl md:text-3xl text-secondary mt-4 font-medium">
            I only win if you win.
          </p>
        </div>
      </section>

      {/* Previous Cohort Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">Project selected for Q2 2026</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Left Column - Project Information */}
            <div className="bg-surface p-10 rounded-2xl border border-[#cde9ea]/50 shadow-sm flex flex-col h-full">
              
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-10 text-center sm:text-left">
                <img 
                  src="/images/BlockAI logo.jpg" 
                  alt="BlockAI Logo" 
                  className="w-28 h-28 shrink-0 rounded-2xl object-cover border-[3px] border-[#cde9ea] shadow-lg"
                />
                <div className="flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-secondary mb-2">BlockAI</h3>
                  <p className="text-[17px] text-body-text leading-relaxed">
                    BlockAI is building AI-powered on-chain intelligence, helping users go from raw on-chain data to decision-ready insights.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-auto w-full">
                <a 
                  href="https://www.blockai.live" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-background-light border border-[#cde9ea] text-secondary font-bold text-sm hover:-translate-y-[2px] hover:shadow-md hover:border-primary transition-all duration-200"
                >
                  🌐 Website
                </a>
                <a 
                  href="https://x.com/BlockAi_live" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-background-light border border-[#cde9ea] text-secondary font-bold text-sm hover:-translate-y-[2px] hover:shadow-md hover:border-primary transition-all duration-200"
                >
                  𝕏 X (Twitter)
                </a>
              </div>
            </div>

            {/* Right Column - Founder's Feedback */}
            <div className="bg-surface p-10 rounded-2xl border border-[#cde9ea]/50 shadow-sm flex flex-col h-full">
              <h3 className="text-2xl md:text-3xl font-extrabold text-secondary mb-8">Founder's Feedback</h3>
              <div className="my-auto rounded-xl overflow-hidden border border-[#cde9ea]/40 shadow-sm">
                <img 
                  src="/images/BlockAI recommendation.png" 
                  alt="Founder's Feedback from Siamak Khoshnod" 
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Status Section */}
      <section id="apply" className="py-32 px-6 border-t border-[#cde9ea]/30">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-secondary mb-10">
            Applications for Q3 2026 are open.
          </h2>
          <a 
            href="https://tally.so/r/A70Lek" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-10 py-4 rounded-xl bg-[#01E0F8] border-[3px] border-[#01E0F8] text-black font-black text-xl uppercase tracking-wide hover:-translate-y-[3px] hover:shadow-[0_6px_20px_rgba(1,224,248,0.4)] hover:brightness-105 transition-all duration-200 cursor-pointer inline-block"
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background-light pt-20 pb-10 px-6 border-t border-[#cde9ea]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img 
                src="/images/Jatin's pfp.JPG" 
                alt="Web3 Jatin Logo" 
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="text-secondary font-bold text-xl tracking-tight">Web3 Jatin</span>
            </div>
            <p className="text-body-text max-w-xs">
              Helping Web3 founders become TGE-ready.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-12 md:gap-24">
            <div className="flex flex-col gap-4">
              <h4 className="text-secondary font-bold uppercase tracking-wider text-sm">Navigation</h4>
              <a href="/" className="text-body-text hover:text-secondary transition-colors">Main Site</a>
              <a href="#about" className="text-body-text hover:text-secondary transition-colors">About</a>
              <a href="#what-you-get" className="text-body-text hover:text-secondary transition-colors">What You Get</a>
              <a href="#criteria" className="text-body-text hover:text-secondary transition-colors">Criteria</a>

              <a href="#program-details" className="text-body-text hover:text-secondary transition-colors">Program Details</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-secondary font-bold uppercase tracking-wider text-sm">Socials</h4>
              <a href="https://x.com/web3jatin" target="_blank" rel="noopener noreferrer" className="text-body-text hover:text-secondary transition-colors">Twitter / X</a>
              <a href="https://www.linkedin.com/in/web3jatin/" target="_blank" rel="noopener noreferrer" className="text-body-text hover:text-secondary transition-colors">LinkedIn</a>
              <a href="https://t.me/web3jatin2" target="_blank" rel="noopener noreferrer" className="text-body-text hover:text-secondary transition-colors">Telegram</a>
              <a href="https://www.youtube.com/@web3jatin" target="_blank" rel="noopener noreferrer" className="text-body-text hover:text-secondary transition-colors">YouTube</a>
              <a href="https://www.instagram.com/web3jatin" target="_blank" rel="noopener noreferrer" className="text-body-text hover:text-secondary transition-colors">Instagram</a>
              <a href="mailto:jatin@web3jatin.com" className="text-body-text hover:text-secondary transition-colors">Email</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-secondary font-bold uppercase tracking-wider text-sm">Legal</h4>
              <a href="/privacy-policy" className="text-body-text hover:text-secondary transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-[#cde9ea] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-body-text text-sm">© 2026 Web3 Jatin. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}