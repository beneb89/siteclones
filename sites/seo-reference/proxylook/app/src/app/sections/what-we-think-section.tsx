/** What We Think section. */
export default function WhatWeThinkSection() {
  return (
    <section className="border-r border-solid border-r-border border-b border-b-border border-l border-l-border block relative mb-4 p-6.5 rounded-xl [overflow-wrap:anywhere] bg-surface" data-ditto-id="style-review" id="review">
      <h2 className="flex mb-2 items-center gap-3 text-[1.375rem] font-bold leading-[1.625rem] tracking-[-0.22px]" data-component="heading">
        <span className="w-[0.5625rem] h-[0.5625rem] flex min-w-[0.5625rem] rounded-[3px] justify-center items-center shrink-0 text-surface text-[1.0625rem] leading-[1.25rem] bg-muted-foreground" />
        What we think after testing DataForSEO
      </h2>
      {" "}
      <p className="w-full max-w-136 block mb-5 text-muted-foreground text-[0.8125rem] leading-[1.375rem] max-md:text-xs max-md:leading-[1.25rem]">
        Editorial review by Maya Cortez · last updated Aug 13, 2026
      </p>
      {" "}
      <div className="w-full max-w-180 block text-accent text-base leading-[1.6875rem]">
        <p className="block max-w-187 mb-5 text-foreground text-[1.0625rem] font-medium leading-7">
          DataForSEO is the data-infrastructure layer behind a large share of SEO and martech tools, and its scale is the headline. The platform exposes 13-plus APIs — SERP, Keywords Data, Backlinks, On-Page, DataForSEO Labs, Reviews, Business Data, Merchant, Domain Analytics and Content Analysis — backed by databases spanning Google, Bing, Amazon, App Store and Google Play. Published figures include 1.98 trillion live backlinks, over 8 billion Google keywords and 577 million Google SERPs.
        </p>
        <p className="w-full max-w-170 block mb-4.5 leading-[1.625rem]">
          The commercial model is its other strong suit: genuine pay-as-you-go where you pay only for the calls you consume, with a modest $50 minimum payment and dashboard tools for budgeting and spend limits. This is materially more flexible than the fixed monthly tiers most competitors impose and is well suited to SaaS products with variable load. There is free registration for testing, though no permanent flat free tier.
        </p>
        <p className="w-full max-w-170 block mb-4.5 leading-[1.625rem]">
          History adds credibility: the company started in 2011 building software for an SEO agency, pivoted to its first API in 2016, shipped API v3 in 2019, and became an early ISO-certified data provider. It is headquartered in Tallinn with a team office in Kharkiv, Ukraine, and serves 3,500+ customers. Support is 24/7 and documentation is thorough, with first-party connectors for Google Sheets, Zapier, Make, n8n, Airtable and Postman.
        </p>
        <p className="w-full max-w-170 block leading-[1.625rem]">
          The gaps are transparency-related rather than capability: per-API rates are not surfaced on the main pricing page, and there are no published uptime or success-rate benchmarks. Consumption pricing, while flexible, demands monitoring discipline to avoid surprise bills at volume. For developers and agencies building data-heavy SEO products, DataForSEO is the most comprehensive single source available, and the pay-per-use model makes it easy to start small.
        </p>
        {" "}
      </div>
      {" "}
    </section>
  );
}
