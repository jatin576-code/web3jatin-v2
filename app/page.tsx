import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    // MAIN HOMEPAGE COMPONENT
    <main className="bg-background-light text-secondary font-sans antialiased selection:bg-primary selection:text-secondary">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#E6F5FC]/85 backdrop-blur-md border-b border-white/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="#hero" className="flex items-center gap-2 group cursor-pointer">
            {/* Logo: Circular */}
            <img 
              src="/images/Web3Jatinlogo.jpg" 
              alt="Web3 Jatin Logo" 
              className="h-10 w-10 rounded-full object-cover group-hover:-rotate-3 transition-transform duration-300"
            />
            <span className="text-secondary font-bold text-lg tracking-tight">Web3 Jatin</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-10">
            <Link href="#hero" className="text-sm font-semibold text-secondary/80 hover:text-secondary hover:underline decoration-primary decoration-2 underline-offset-4 transition-all">Home</Link>
            <Link href="#services" className="text-sm font-semibold text-secondary/80 hover:text-secondary hover:underline decoration-primary decoration-2 underline-offset-4 transition-all">Services</Link>
            <Link href="#process" className="text-sm font-semibold text-secondary/80 hover:text-secondary hover:underline decoration-primary decoration-2 underline-offset-4 transition-all">Process</Link>
            <Link href="#whyme" className="text-sm font-semibold text-secondary/80 hover:text-secondary hover:underline decoration-primary decoration-2 underline-offset-4 transition-all">Why Me</Link>
            <Link href="#faq" className="text-sm font-semibold text-secondary/80 hover:text-secondary hover:underline decoration-primary decoration-2 underline-offset-4 transition-all">FAQ</Link>
          </div>
          
          <Link 
            href="https://calendly.com/web3jatin" 
            target="_blank"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full border border-secondary text-secondary font-bold text-sm hover:bg-secondary hover:text-primary transition-all duration-300 hover:shadow-glow"
          >
            <span>Book Call</span>
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
          </Link>
          
          <button className="md:hidden text-secondary">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      {/* Updated: Tighter padding so everything fits above the fold */}
      <section id="hero" className="relative pt-24 pb-10 md:pt-28 md:pb-8 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* Hero Content */}
          <div className="flex flex-col gap-5 relative z-10 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-secondary/10 w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-bold text-secondary tracking-wide uppercase">Accepting serious projects only</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary leading-[1.1] tracking-tight">
              Token Launch & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[#2C6E7A]">CEX Listing</span> Strategy
            </h1>
            
            <p className="text-lg md:text-xl text-body-text max-w-xl leading-relaxed">
              I help Web3 projects design and execute token launches that survive post-TGE.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-1">
              <Link 
                href="https://calendly.com/web3jatin"
                target="_blank"
                className="px-8 py-4 rounded-lg bg-secondary text-white font-bold text-base hover:shadow-lg hover:shadow-secondary/20 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Book Strategy Call
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl -z-10"></div>
            
            {/* UPDATED: Forced Max Height constraint (420px) to prevent scrolling */}
            <div className="flex flex-col items-center w-full max-w-[480px]">
    {/* FIX 1: Changed h-[420px] to h-[320px] md:h-[420px] */}
    {/* This makes the card shorter on mobile to remove empty space, but keeps it tall on desktop */}
    <div className="relative w-full h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-2xl shadow-secondary/10 rotate-2 hover:rotate-0 transition-transform duration-700 ease-out bg-[#F3F4F6]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/10 z-10 mix-blend-multiply"></div>
        <img 
            src="/images/Web3JatinCharacter.png" 
            alt="Web3 Jatin Character" 
            // FIX 2: Changed object-top to object-bottom md:object-top
            // This anchors the character to the bottom on mobile (so no floating), but keeps top alignment on desktop
            className="w-full h-full object-contain object-bottom md:object-top"
        />
    </div>
    
    <div className="mt-4 text-center">
        <h3 className="text-base font-semibold text-secondary">Jatin Saini</h3>
        <p className="text-sm text-body-text">Token Launch & CEX Listing Strategist</p>
    </div>
</div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-semibold text-secondary leading-normal">
            "I help Web3 founders launch tokens <span className="bg-primary/20 px-1 text-secondary">the right way</span> - smart exchange sequencing, disciplined liquidity planning, and a sustainable token structure that holds up long-term."
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-10 rounded-full"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left Column Sticky Sidebar */}
          <div className="md:col-span-4 lg:col-span-4 relative">
            <div className="md:sticky md:top-32">
              <h3 className="text-4xl md:text-5xl font-extrabold text-secondary mb-6 leading-tight">
                Core <br /> Services
              </h3>
              <p className="text-body-text text-lg mb-8 max-w-xs">
                 Specialized strategy and execution support tailored for high-impact token launches and long-term growth.
              </p>
            </div>
          </div>

          {/* Service Cards */}
          <div className="md:col-span-8 lg:col-span-7 lg:col-start-6 flex flex-col gap-8">
            
            {/* Card 1 */}
            <div className="group bg-surface p-8 md:p-10 rounded-2xl shadow-soft hover:shadow-glow hover:-translate-y-2 transition-all duration-300 border border-[#cde9ea]/50">
              <div className="w-14 h-14 rounded-xl bg-[#E6F5FC] text-secondary flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-primary group-hover:text-secondary">
                <span className="material-symbols-outlined text-3xl">token</span>
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-3 group-hover:text-[#013E48]">Token Structuring</h3>
              <p className="text-body-text text-lg leading-relaxed mb-6">
                Token structure, vesting, and sale structure designed for sustainable price discovery (not short-term pumps).
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 text-sm font-medium text-secondary/80">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  Tokenomics Refinement
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-secondary/80">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  Token Sale Structure + Launchpad Planning
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="group bg-surface p-8 md:p-10 rounded-2xl shadow-soft hover:shadow-glow hover:-translate-y-2 transition-all duration-300 border border-[#cde9ea]/50">
              <div className="w-14 h-14 rounded-xl bg-[#E6F5FC] text-secondary flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-primary group-hover:text-secondary">
                <span className="material-symbols-outlined text-3xl">account_balance</span>
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-3 group-hover:text-[#013E48]">Strategic CEX Listings</h3>
              <p className="text-body-text text-lg leading-relaxed mb-6">
                Helping you list your token on the right exchanges at the right time according to your users, liquidity and stage.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 text-sm font-medium text-secondary/80">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  Strategic Exchange Selection
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-secondary/80">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  TGE Listing + Post-TGE CEX Expansion
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="group bg-surface p-8 md:p-10 rounded-2xl shadow-soft hover:shadow-glow hover:-translate-y-2 transition-all duration-300 border border-[#cde9ea]/50">
              <div className="w-14 h-14 rounded-xl bg-[#E6F5FC] text-secondary flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-primary group-hover:text-secondary">
                <span className="material-symbols-outlined text-3xl">water_drop</span>
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-3 group-hover:text-[#013E48]">Liquidity Management</h3>
              <p className="text-body-text text-lg leading-relaxed mb-6">
                Fundamental liquidity planning to help you choose the right market maker, the right MM model, and the right amount of liquidity for the right exchanges.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 text-sm font-medium text-secondary/80">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  MM Model + MM Selection
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-secondary/80">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  CEX + DEX Liquidity Planning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">The Process</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Process Card 1 */}
            <div className="bg-surface p-6 rounded-2xl border border-[#cde9ea] shadow-sm hover:shadow-glow transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-background-light text-secondary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-2xl">search</span>
              </div>
              <h4 className="text-xl font-bold text-secondary mb-3">Project Review</h4>
              <p className="text-body-text text-sm leading-relaxed">
                You submit your project details for review. I assess fundamentals, token readiness, timelines, and requirements, followed by a discovery call to confirm alignment and scope.
              </p>
            </div>

            {/* Process Card 2 */}
            <div className="bg-surface p-6 rounded-2xl border border-[#cde9ea] shadow-sm hover:shadow-glow transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-background-light text-secondary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-2xl">architecture</span>
              </div>
              <h4 className="text-xl font-bold text-secondary mb-3">Strategy Blueprint</h4>
              <p className="text-body-text text-sm leading-relaxed">
                You receive a clear, execution-ready blueprint covering token structure, listings, liquidity planning, launch sequencing, and key coordination points tailored to your project stage.
              </p>
            </div>

            {/* Process Card 3 */}
            <div className="bg-surface p-6 rounded-2xl border border-[#cde9ea] shadow-sm hover:shadow-glow transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-background-light text-secondary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-2xl">construction</span>
              </div>
              <h4 className="text-xl font-bold text-secondary mb-3">Execution</h4>
              <p className="text-body-text text-sm leading-relaxed">
                I coordinate execution based on the finalized strategy, actively managing exchanges, market makers, launchpads, and partners to ensure alignment and real progress.
              </p>
            </div>

            {/* Process Card 4 */}
            <div className="bg-surface p-6 rounded-2xl border border-[#cde9ea] shadow-sm hover:shadow-glow transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-background-light text-secondary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-2xl">rocket_launch</span>
              </div>
              <h4 className="text-xl font-bold text-secondary mb-3">Go Live</h4>
              <p className="text-body-text text-sm leading-relaxed">
                Your launch goes live smoothly with coordinated execution. The focus is smooth rollout, stable market conditions, and a clean transition into active trading.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Me Section */}
      <section id="whyme" className="py-20 px-6 bg-surface border-y border-[#cde9ea]/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">Why work with me</h2>
            <p className="text-body-text text-lg md:text-xl">Strategy-first execution that protects your token after TGE.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="p-8 rounded-2xl bg-background-light border border-[#cde9ea] flex flex-col gap-4 hover:shadow-glow transition-all duration-300 group hover:-translate-y-1 h-full hover:border-[#01F2FB]/50">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-secondary transition-colors duration-300">
                <span className="material-symbols-outlined text-2xl">psychology</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-secondary mb-3">Strategy First</h4>
                <p className="text-body-text text-base leading-relaxed">Plan before execution. I ensure every move is calculated to align with long-term goals rather than short-term hype.</p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-background-light border border-[#cde9ea] flex flex-col gap-4 hover:shadow-glow transition-all duration-300 group hover:-translate-y-1 h-full hover:border-[#01F2FB]/50">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-secondary transition-colors duration-300">
                <span className="material-symbols-outlined text-2xl">engineering</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-secondary mb-3">Execution Support</h4>
                <p className="text-body-text text-base leading-relaxed">I coordinate execution with precision, managing vendors and partners so you can focus on building the product.</p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-background-light border border-[#cde9ea] flex flex-col gap-4 hover:shadow-glow transition-all duration-300 group hover:-translate-y-1 h-full hover:border-[#01F2FB]/50">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-secondary transition-colors duration-300">
                <span className="material-symbols-outlined text-2xl">shield</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-secondary mb-3">Post-TGE Survival</h4>
                <p className="text-body-text text-base leading-relaxed">I focus on designing token launches that hold up in the secondary market - building real demand, healthier price discovery, and long-term trust after TGE.</p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-background-light border border-[#cde9ea] flex flex-col gap-4 hover:shadow-glow transition-all duration-300 group hover:-translate-y-1 h-full hover:border-[#01F2FB]/50">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-secondary transition-colors duration-300">
                <span className="material-symbols-outlined text-2xl">bolt</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-secondary mb-3">Lean & Efficient</h4>
                <p className="text-body-text text-base leading-relaxed">I help you avoid unnecessary spend and focus only on high-impact execution - so your budget goes into things that actually move the needle.</p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-background-light border border-[#cde9ea] flex flex-col gap-4 hover:shadow-glow transition-all duration-300 group hover:-translate-y-1 h-full hover:border-[#01F2FB]/50">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-secondary transition-colors duration-300">
                <span className="material-symbols-outlined text-2xl">swap_vert</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-secondary mb-3">CEX Sequencing</h4>
                <p className="text-body-text text-base leading-relaxed">I help you list on the right exchanges at the right time - no vanity listings, no wasted fees, just high quality listings that actually make sense.</p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-background-light border border-[#cde9ea] flex flex-col gap-4 hover:shadow-glow transition-all duration-300 group hover:-translate-y-1 h-full hover:border-[#01F2FB]/50">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-secondary transition-colors duration-300">
                <span className="material-symbols-outlined text-2xl">water_drop</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-secondary mb-3">Liquidity Discipline</h4>
                <p className="text-body-text text-base leading-relaxed">Liquidity planning + MM oversight. Ensuring your market depth is healthy and ready for volume & price discovery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* FAQ Section */}

      <section id="faq" className="py-20 md:py-32 px-6">

        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-12 text-center">Frequently Asked Questions</h2>

          <div className="flex flex-col gap-4">

           

            <details className="group bg-surface rounded-lg border border-[#cde9ea] overflow-hidden">

              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-background-light/50 transition-colors list-none">

                <h3 className="text-lg font-bold text-secondary group-open:text-primary-hover transition-colors">Who do you work with?</h3>

                <span className="material-symbols-outlined text-secondary transition-transform group-open:rotate-180">expand_more</span>

              </summary>

              <div className="px-6 pb-6 pt-0 text-body-text leading-relaxed">

                I work with serious Web3 teams preparing for TGE or scaling post-TGE - especially projects that need structured strategy and execution support for long-term growth, not short term hype.

              </div>

            </details>



            <details className="group bg-surface rounded-lg border border-[#cde9ea] overflow-hidden">

              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-background-light/50 transition-colors list-none">

                <h3 className="text-lg font-bold text-secondary group-open:text-primary-hover transition-colors">Can you guarantee a successful token launch?</h3>

                <span className="material-symbols-outlined text-secondary transition-transform group-open:rotate-180">expand_more</span>

              </summary>

              <div className="px-6 pb-6 pt-0 text-body-text leading-relaxed">

                No. A successful token launch depends on product strength, market timing, community strength, and execution across multiple teams.

What I do guarantee is a structured launch strategy and execution support that significantly improves the odds of post-TGE survival and long-term success.

              </div>

            </details>



            <details className="group bg-surface rounded-lg border border-[#cde9ea] overflow-hidden">

              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-background-light/50 transition-colors list-none">

                <h3 className="text-lg font-bold text-secondary group-open:text-primary-hover transition-colors">Do you guarantee Tier-1 listings (Binance/Coinbase)?</h3>

                <span className="material-symbols-outlined text-secondary transition-transform group-open:rotate-180">expand_more</span>

              </summary>

              <div className="px-6 pb-6 pt-0 text-body-text leading-relaxed">

                No. Nobody legitimate can guarantee Tier-1 listings.

What I can do is maximize your probability by preparing the right strategy, sequencing exchanges strategically, and presenting your project the right way to decision-makers.

              </div>

            </details>



            <details className="group bg-surface rounded-lg border border-[#cde9ea] overflow-hidden">

              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-background-light/50 transition-colors list-none">

                <h3 className="text-lg font-bold text-secondary group-open:text-primary-hover transition-colors">How involved are you day-to-day with the project?</h3>

                <span className="material-symbols-outlined text-secondary transition-transform group-open:rotate-180">expand_more</span>

              </summary>

              <div className="px-6 pb-6 pt-0 text-body-text leading-relaxed">

                I act as a fractional Chief Strategy Officer - deeply involved in high-level strategy, key negotiations, and execution.

              </div>

            </details>



            <details className="group bg-surface rounded-lg border border-[#cde9ea] overflow-hidden">

  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-background-light/50 transition-colors list-none">

    <h3 className="text-lg font-bold text-secondary group-open:text-primary-hover transition-colors">

      How do you charge (retainer or success fee)?

    </h3>

    <span className="material-symbols-outlined text-secondary transition-transform group-open:rotate-180">

      expand_more

    </span>

  </summary>

  <div className="px-6 pb-6 pt-0 text-body-text leading-relaxed">
  I charge a one-time upfront fee for token launch strategy + execution coordination.

For outcome-based work (like fundraising or Tier-1 CEX listings), I charge a success fee only if the result is delivered.
  </div>

</details>



<details className="group bg-surface rounded-lg border border-[#cde9ea] overflow-hidden">

  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-background-light/50 transition-colors list-none">

    <h3 className="text-lg font-bold text-secondary group-open:text-primary-hover transition-colors">

      What makes your approach different from agencies or “listing brokers”?

    </h3>

    <span className="material-symbols-outlined text-secondary transition-transform group-open:rotate-180">

      expand_more

    </span>

  </summary>

  <div className="px-6 pb-6 pt-0 text-body-text leading-relaxed">

    I work with your project as part of the team, not as a vendor.

I don’t push unnecessary listings or services - only strategy and execution aligned with long-term growth rather than short-term hype.

  </div>

</details>



<details className="group bg-surface rounded-lg border border-[#cde9ea] overflow-hidden">

  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-background-light/50 transition-colors list-none">

    <h3 className="text-lg font-bold text-secondary group-open:text-primary-hover transition-colors">

      Do you work with memecoins or no-utility projects?

    </h3>

    <span className="material-symbols-outlined text-secondary transition-transform group-open:rotate-180">

      expand_more

    </span>

  </summary>

  <div className="px-6 pb-6 pt-0 text-body-text leading-relaxed">

    Generally no. I focus on utility-driven projects with serious long-term roadmaps.

    If your project has strong community and execution goals, I’m open to a discussion.

  </div>

</details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto bg-secondary rounded-[2rem] overflow-hidden shadow-2xl shadow-secondary/20 relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-8 md:p-16 relative z-10">
            <div className="flex flex-col gap-6 text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Ready to <span className="text-primary">Launch?</span>
              </h2>
              <p className="text-white/80 text-lg md:text-xl max-w-md">
                Let's discuss how we can structure your token launch & CEX listing strategy for maximum impact.
              </p>
              <Link 
                href="https://calendly.com/web3jatin"
                target="_blank"
                className="w-fit mt-4 px-8 py-4 rounded-lg bg-primary text-secondary font-bold text-base hover:bg-white transition-all duration-300 shadow-glow flex items-center gap-2"
              >
                Book Your Strategy Session
                <span className="material-symbols-outlined">calendar_month</span>
              </Link>
            </div>
            
            <div className="hidden md:flex justify-end">
              <div className="w-80 h-80 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-transparent opacity-20 rounded-full animate-pulse"></div>
                <img 
                  src="/images/token-launch.png" 
                  alt="Web3 Strategy" 
                  className="w-full h-full object-cover rounded-2xl shadow-2xl -rotate-6 border border-white/10 mix-blend-lighten" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background-light pt-20 pb-10 px-6 border-t border-[#cde9ea]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img 
                src="/images/Web3Jatinlogo.jpg" 
                alt="Web3 Jatin Logo" 
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="text-secondary font-bold text-xl tracking-tight">Web3 Jatin</span>
            </div>
            <p className="text-body-text max-w-xs">
              Designing and executing token launches that survive post-TGE.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-12 md:gap-24">
            <div className="flex flex-col gap-4">
              <h4 className="text-secondary font-bold uppercase tracking-wider text-sm">Navigation</h4>
              <Link href="#hero" className="text-body-text hover:text-secondary transition-colors">Home</Link>
              <Link href="#services" className="text-body-text hover:text-secondary transition-colors">Services</Link>
              <Link href="#process" className="text-body-text hover:text-secondary transition-colors">Process</Link>
              <Link href="#whyme" className="text-body-text hover:text-secondary transition-colors">Why Me</Link>
              <Link href="#faq" className="text-body-text hover:text-secondary transition-colors">FAQ</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-secondary font-bold uppercase tracking-wider text-sm">Socials</h4>
              <Link href="https://x.com/web3jatin" target="_blank" className="text-body-text hover:text-secondary transition-colors">Twitter / X</Link>
              <Link href="https://www.linkedin.com/in/web3jatin/" target="_blank" className="text-body-text hover:text-secondary transition-colors">LinkedIn</Link>
              <Link href="https://t.me/web3jatin2" target="_blank" className="text-body-text hover:text-secondary transition-colors">Telegram</Link>
              <Link href="mailto:jatin@web3jatin.com" className="text-body-text hover:text-secondary transition-colors">Email</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-secondary font-bold uppercase tracking-wider text-sm">Legal</h4>
              <Link href="/privacy-policy" className="text-body-text hover:text-secondary transition-colors">Privacy Policy</Link>
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