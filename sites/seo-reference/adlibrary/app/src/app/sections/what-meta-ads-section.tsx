/** What Meta Ads section. */
export default function WhatMetaAdsSection() {
  return (
    <div className="block">
      <h2 className="block mt-10 mb-4 [font-family:instrumentSerif,_'instrumentSerif_Fallback'] text-[1.5rem] tracking-[-0.6px] max-lg:leading-8" data-component="heading" id="what-meta-ads-mcp-actually-is-and-why-beta-status-matters">
        What Meta Ads MCP actually is — and why beta status matters
      </h2>
      {" "}
      <p className="block my-4 text-accent leading-7">
        {"The "}
        <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="https://developers.facebook.com/docs/marketing-apis" rel="noopener noreferrer" target="_blank">
          Meta Marketing API
        </a>
        {" has existed for years, but using it always required provisioning a Facebook developer app, going through app review, managing access tokens, and writing or buying a wrapper. Meta Ads MCP changes that stack entirely."}
      </p>
      {" "}
      <p className="block my-4 text-accent leading-7">
        {"Hosted at "}
        <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="https://mcp.facebook.com/ads" rel="noopener noreferrer" target="_blank">
          mcp.facebook.com/ads
        </a>
        {", the official server implements the "}
        <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="https://modelcontextprotocol.io/introduction" rel="noopener noreferrer" target="_blank">
          Model Context Protocol
        </a>
        {" — an open standard that lets AI clients discover and call tools on external servers. Claude Code acts as the MCP client. Meta's server is the tool provider. Authentication runs entirely through OAuth 2.0; you authorize against your existing "}
        <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="/glossary/ad-account">
          Meta Business Manager
        </a>
        {" account and the server handles token management."}
      </p>
      {" "}
      <p className="block my-4 text-accent leading-7">
        {"As of the April 29 2026 launch, the server exposes "}
        <strong className="inline font-normal">
          29 tools
        </strong>
        {" across the Meta Marketing API v25.0 surface — including "}
        <code className="inline py-0.5 px-1.5 rounded-sm [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm leading-5 [overflow-wrap:break-word] bg-background before:content-[''] before:hidden after:content-[''] after:hidden">
          ads_create_campaign
        </code>
        {", "}
        <code className="inline py-0.5 px-1.5 rounded-sm [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm leading-5 [overflow-wrap:break-word] bg-background before:content-[''] before:hidden after:content-[''] after:hidden">
          ads_insights_advertiser_context
        </code>
        {", "}
        <code className="inline py-0.5 px-1.5 rounded-sm [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm leading-5 [overflow-wrap:break-word] bg-background before:content-[''] before:hidden after:content-[''] after:hidden">
          ads_get_opportunity_score
        </code>
        {", and "}
        <code className="inline py-0.5 px-1.5 rounded-sm [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm leading-5 [overflow-wrap:break-word] bg-background before:content-[''] before:hidden after:content-[''] after:hidden">
          ads_insights_industry_benchmark
        </code>
        {". The beta label matters: tool signatures may shift between versions, and Meta has not committed to a backward-compatibility guarantee during this phase. Pin your Claude Code MCP config to the current endpoint and watch the "}
        <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="https://developers.facebook.com/docs/marketing-apis" rel="noopener noreferrer" target="_blank">
          Marketing API changelog
        </a>
        {" for deprecation notices."}
      </p>
      {" "}
      <p className="block my-4 text-accent leading-7">
        {"The bigger deal is the write capability. Previous AI-to-Meta integrations were read-only or required a middleware app with full developer access. MCP gives you a scoped, auditable, OAuth-gated write path from a conversational AI interface to live "}
        <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="/glossary/ad-account">
          ad account
        </a>
        {" data — for the first time, without a developer."}
      </p>
    </div>
  );
}
