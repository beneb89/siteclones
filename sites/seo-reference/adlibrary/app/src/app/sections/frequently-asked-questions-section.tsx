/** Frequently Asked Questions section. */
export default function FrequentlyAskedQuestionsSection() {
  return (
    <div className="block">
      <h2 className="block mt-10 mb-4 [font-family:instrumentSerif,_'instrumentSerif_Fallback'] text-[1.5rem] tracking-[-0.6px] max-lg:leading-8" data-component="heading" id="frequently-asked-questions">
        Frequently asked questions
      </h2>
      {" "}
      <h3 className="block mt-8 mb-3 text-xl leading-7 tracking-[-0.5px]" data-component="heading" id="what-is-meta-ads-mcp-and-how-does-it-work">
        What is Meta Ads MCP and how does it work?
      </h3>
      {" "}
      <p className="block my-4 text-accent leading-7">
        {"Meta Ads MCP is Meta's official Model Context Protocol server hosted at "}
        <code className="inline py-0.5 px-1.5 rounded-sm [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm leading-5 [overflow-wrap:break-word] bg-background before:content-[''] before:hidden after:content-[''] after:hidden">
          mcp.facebook.com/ads
        </code>
        . It exposes 29 tools from the Meta Marketing API v25.0 — including campaign creation, insights retrieval, and opportunity scoring — to any MCP-compatible AI client like Claude Code. Authentication uses OAuth 2.0; you connect once and the AI agent can then read account data and, if you grant write scopes, create or modify campaigns on your behalf.
      </p>
      {" "}
      <h3 className="block mt-8 mb-3 text-xl leading-7 tracking-[-0.5px]" data-component="heading" id="is-meta-ads-mcp-safe-to-connect-with-write-permissions">
        Is Meta Ads MCP safe to connect with write permissions?
      </h3>
      {" "}
      <p className="block my-4 text-accent leading-7">
        Yes, with the right guard rails. Meta's OAuth scope picker lets you grant read-only, read/write, or read/write/financial access. The safest production pattern is to grant read and read/write but keep all agent-created campaigns in PAUSED state for human review before activating. Never grant financial scope to an automated agent without an explicit approval step in your workflow.
      </p>
      {" "}
      <h3 className="block mt-8 mb-3 text-xl leading-7 tracking-[-0.5px]" data-component="heading" id="what-is-the-difference-between-metas-official-mcp-server-and-pipeboard">
        What is the difference between Meta's official MCP server and Pipeboard?
      </h3>
      {" "}
      <p className="block my-4 text-accent leading-7">
        {"Meta's official server at "}
        <code className="inline py-0.5 px-1.5 rounded-sm [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm leading-5 [overflow-wrap:break-word] bg-background before:content-[''] before:hidden after:content-[''] after:hidden">
          mcp.facebook.com/ads
        </code>
        {" is OAuth-based, requires no developer app provisioning, and is directly maintained by Meta. Pipeboard's open-source meta-ads-mcp (github.com/pipeboard-co/meta-ads-mcp) requires a Facebook developer app but gives you local control and is licensed under BSL 1.1, which restricts commercial hosting. Most media buyers should start with Meta's official server."}
      </p>
      {" "}
      <h3 className="block mt-8 mb-3 text-xl leading-7 tracking-[-0.5px]" data-component="heading" id="how-many-tools-does-meta-ads-mcp-expose">
        How many tools does Meta Ads MCP expose?
      </h3>
      {" "}
      <p className="block my-4 text-accent leading-7">
        {"As of its April 29 2026 beta launch, Meta Ads MCP exposes 29 tools including "}
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
        {", "}
        <code className="inline py-0.5 px-1.5 rounded-sm [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm leading-5 [overflow-wrap:break-word] bg-background before:content-[''] before:hidden after:content-[''] after:hidden">
          ads_insights_industry_benchmark
        </code>
        {", and "}
        <code className="inline py-0.5 px-1.5 rounded-sm [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm leading-5 [overflow-wrap:break-word] bg-background before:content-[''] before:hidden after:content-[''] after:hidden">
          mcp_meta_ads_get_login_link
        </code>
        , among others.
      </p>
      {" "}
      <h3 className="block mt-8 mb-3 text-xl leading-7 tracking-[-0.5px]" data-component="heading" id="do-i-need-a-meta-developer-app-to-use-meta-ads-mcp">
        Do I need a Meta developer app to use Meta Ads MCP?
      </h3>
      {" "}
      <p className="block my-4 text-accent leading-7">
        No. Meta's official MCP server handles authentication entirely through OAuth 2.0 — you authorize via your existing Meta Business Manager account. No developer app, no app review, no access token wrangling. That is the key advantage over older Marketing API integrations.
      </p>
      {" "}
      <h2 className="block mt-10 mb-4 [font-family:instrumentSerif,_'instrumentSerif_Fallback'] text-[1.5rem] tracking-[-0.6px] max-lg:leading-8" data-component="heading" id="bottom-line">
        Bottom line
      </h2>
      {" "}
      <p className="block my-4 text-accent leading-7">
        {"Meta Ads MCP is the first write-capable agent path to the "}
        <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="/glossary/meta-marketing-api">
          Meta Marketing API
        </a>
        {" that doesn't require a developer. The setup is four commands. The discipline is in what you do before command one: pull the in-market angle from "}
        <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="/">
          adlibrary
        </a>
        {", understand what's working, then let the agent build it — paused, reviewable, and scoped to the minimum permissions the task actually needs. For the full "}
        <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="/posts/claude-code-for-marketers-intro">
          Claude Code for marketers
        </a>
        {" picture, including how MCP fits into a broader "}
        <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="/posts/claude-code-agentic-marketing-adlibrary-api">
          agentic marketing stack
        </a>
        , those posts are the natural next read.
      </p>
    </div>
  );
}
