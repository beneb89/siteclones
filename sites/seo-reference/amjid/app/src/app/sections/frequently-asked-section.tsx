/** Frequently Asked section. */
export default function FrequentlyAskedSection() {
  return (
    <section className="block relative pt-12 pb-4" aria-labelledby="post-faq-title">
      <div className="block max-w-170 mx-auto">
        <div className="inline-flex mb-3 items-center gap-3 text-primary [font-family:'JetBrains_Mono',_ui-monospace,_SFMono-Regular,_Menlo,_monospace] text-xs leading-[1.1875rem] tracking-[2.37px] uppercase max-lg:text-[0.6875rem] max-lg:leading-[1.125rem] max-md:tracking-[2.2px] md:max-lg:tracking-[2.27px] 2xl:tracking-[2.4px] before:content-[''] before:block before:w-6 before:h-px before:bg-primary before:opacity-60">
          Questions
        </div>
        {" "}
        <h2 className="block mt-12 mb-3 [font-family:'DM_Serif_Display',_Georgia,_serif] text-[1.75rem] leading-[2.1875rem] tracking-[-0.56px] max-md:text-2xl max-md:leading-[1.875rem] max-md:tracking-[-0.49px] md:max-lg:text-[1.625rem] md:max-lg:leading-[2.0625rem] md:max-lg:tracking-[-0.52px]" data-component="heading" id="post-faq-title">
          {"Frequently "}
          <em className="inline text-primary italic">
            asked
          </em>
          .
        </h2>
        {" "}
        <dl className="grid gap-6 grid-cols-1">
          <dt className="block mb-2 [font-family:'DM_Serif_Display',_Georgia,_serif] text-xl leading-[1.5625rem] tracking-[-0.4px] max-md:text-lg max-md:leading-[1.4375rem] max-md:tracking-[-0.36px] md:max-lg:text-[1.1875rem] md:max-lg:leading-[1.5rem] md:max-lg:tracking-[-0.38px]">
            What is a Microsoft Ads MCP server?
          </dt>
          <dd className="block text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
            A Microsoft Ads MCP server is a Model Context Protocol adapter that exposes Microsoft Advertising (Bing Ads) operations to AI agents as structured tools. With one plugged in, a Claude or ChatGPT agent can read campaign performance, draft ad copy, adjust bids, and manage negative keyword lists, all under your OAuth credentials, not a side-channel API key.
          </dd>
          <dt className="block mb-2 [font-family:'DM_Serif_Display',_Georgia,_serif] text-xl leading-[1.5625rem] tracking-[-0.4px] max-md:text-lg max-md:leading-[1.4375rem] max-md:tracking-[-0.36px] md:max-lg:text-[1.1875rem] md:max-lg:leading-[1.5rem] md:max-lg:tracking-[-0.38px]">
            Is there an official Microsoft Ads MCP server?
          </dt>
          <dd className="block text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
            As of April 2026, Microsoft has not shipped a first-party MCP server for Microsoft Advertising. The ecosystem runs on open-source community implementations and custom builds wrapping the Microsoft Advertising API (REST and SOAP). Expect a first-party option within 12 months given Microsoft's broader MCP adoption across Azure and M365.
          </dd>
          <dt className="block mb-2 [font-family:'DM_Serif_Display',_Georgia,_serif] text-xl leading-[1.5625rem] tracking-[-0.4px] max-md:text-lg max-md:leading-[1.4375rem] max-md:tracking-[-0.36px] md:max-lg:text-[1.1875rem] md:max-lg:leading-[1.5rem] md:max-lg:tracking-[-0.38px]">
            What can an AI agent do with Microsoft Ads via MCP?
          </dt>
          <dd className="block text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
            Practical use cases: performance reporting (pull KPIs across accounts, campaigns, ad groups), ad copy variant generation, negative keyword expansion, bid strategy analysis, budget pacing alerts, search term report mining, and anomaly detection. Harder (and worth gating to humans): launching new campaigns, moving budget between campaigns, pausing high-spend campaigns.
          </dd>
          <dt className="block mb-2 [font-family:'DM_Serif_Display',_Georgia,_serif] text-xl leading-[1.5625rem] tracking-[-0.4px] max-md:text-lg max-md:leading-[1.4375rem] max-md:tracking-[-0.36px] md:max-lg:text-[1.1875rem] md:max-lg:leading-[1.5rem] md:max-lg:tracking-[-0.38px]">
            Is it safe to let AI manage paid advertising spend?
          </dt>
          <dd className="block text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
            Only with explicit guardrails. Our baseline: read-only access is fine, any write operation (bid change, budget move, campaign pause) requires human approval or sits under hard daily-budget caps. Log every write to an audit trail. The upside of AI-assisted ads management is real; the downside of a misfiring agent is six figures of wasted spend overnight.
          </dd>
          <dt className="block mb-2 [font-family:'DM_Serif_Display',_Georgia,_serif] text-xl leading-[1.5625rem] tracking-[-0.4px] max-md:text-lg max-md:leading-[1.4375rem] max-md:tracking-[-0.36px] md:max-lg:text-[1.1875rem] md:max-lg:leading-[1.5rem] md:max-lg:tracking-[-0.38px]">
            How long does it take to build a custom Microsoft Ads MCP server?
          </dt>
          <dd className="block text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
            3–4 weeks for a well-scoped server: OAuth flow, read endpoints (accounts, campaigns, ad groups, keywords, reports), a curated set of write endpoints behind approval gates, rate limit handling, and audit logging. Deep integrations (custom reporting, multi-tenant agency setups) can run 6–8 weeks.
          </dd>
        </dl>
        {" "}
      </div>
      {" "}
    </section>
  );
}
