export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 flex flex-col gap-20">

      {/* Hero */}
      <section className="flex flex-col gap-6 text-center">
        <span className="text-xs uppercase tracking-widest text-[#58a6ff] font-semibold">
          For Etsy Sellers &amp; Print-on-Demand Entrepreneurs
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
          Find trending products<br />
          <span className="text-[#58a6ff]">before they saturate</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto">
          Etsy Trend Opportunity Finder monitors search trends and competitor listings
          to surface emerging keywords with low competition — so you can list first and win.
        </p>
        <ul className="flex flex-col sm:flex-row gap-3 justify-center text-sm text-[#c9d1d9]">
          <li className="flex items-center gap-2 justify-center">
            <span className="text-[#58a6ff] font-bold">&#10003;</span> Real-time trend monitoring
          </li>
          <li className="flex items-center gap-2 justify-center">
            <span className="text-[#58a6ff] font-bold">&#10003;</span> Competitor gap analysis
          </li>
          <li className="flex items-center gap-2 justify-center">
            <span className="text-[#58a6ff] font-bold">&#10003;</span> Instant opportunity alerts
          </li>
        </ul>
        <div>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
          >
            Start Finding Opportunities — $12/mo
          </a>
        </div>
      </section>

      {/* Pricing */}
      <section className="flex flex-col gap-6 items-center">
        <h2 className="text-2xl font-bold text-white">Simple Pricing</h2>
        <div className="w-full max-w-sm border border-[#30363d] rounded-xl p-8 flex flex-col gap-5 bg-[#161b22]">
          <div className="flex flex-col gap-1">
            <span className="text-3xl font-bold text-white">$12<span className="text-base font-normal text-[#8b949e]">/mo</span></span>
            <span className="text-sm text-[#8b949e]">Everything you need to stay ahead</span>
          </div>
          <ul className="flex flex-col gap-3 text-sm text-[#c9d1d9]">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">&#10003;</span> Unlimited keyword tracking</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">&#10003;</span> Daily competitor scans</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">&#10003;</span> Email &amp; dashboard alerts</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">&#10003;</span> Trend score &amp; competition index</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">&#10003;</span> Cancel anytime</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg text-sm transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-white text-center">FAQ</h2>
        <div className="flex flex-col gap-5">
          <div className="border border-[#30363d] rounded-lg p-5 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does it find trending products?</h3>
            <p className="text-sm text-[#8b949e]">We continuously scrape Etsy search results and listing data, tracking keyword velocity and listing density over time. When a keyword shows rising search interest but few competing listings, we flag it as an opportunity.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-5 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How quickly will I get alerts?</h3>
            <p className="text-sm text-[#8b949e]">Our background jobs run daily scans. When a new opportunity is detected, you receive an email alert and it appears on your dashboard within hours — giving you a head start before competitors notice.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-5 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. There are no contracts or commitments. Cancel your subscription at any time from your account settings and you won't be charged again.</p>
          </div>
        </div>
      </section>

    </main>
  );
}
