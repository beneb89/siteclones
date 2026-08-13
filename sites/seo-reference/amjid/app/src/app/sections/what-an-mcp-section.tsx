import ListRow2, { type ListRow2Data } from "../components/list-row2";
import ListRow3, { type ListRow3Data } from "../components/list-row3";
import ListRow4, { type ListRow4Data } from "../components/list-row4";
import ListRow5 from "../components/list-row5";
import { listRow5Data as listRow5DataContent } from "../content";
const ListRow2_data: ListRow2Data[] = [
    { text: "Customer management (accounts, users, permissions)" },
    { text: "Campaign management (campaigns, ad groups, ads, keywords)" },
    { text: "Bulk operations (uploads, downloads)" },
    { text: "Reporting (~40 report types)" },
    { text: "Ad insight and planning" },
    { text: "Customer billing and invoicing" }
];
const ListRow2_data2: ListRow2Data[] = [
    { text: "Wrapped in API-specific code." },
    { text: "Exposed to each AI tool individually (once per model or app)." },
    { text: "Secured against credential leakage, one integration at a time." }
];
const ListRow2_data3: ListRow2Data[] = [
    { text: "Claude, ChatGPT, Gemini, and any other MCP-aware client see the same tools with the same schema." },
    { text: "OAuth, rate limiting, and audit live in one place." },
    { text: "Agency setups with multiple clients can use the same server with tenant isolation." },
    { text: "Changes to the Microsoft API are absorbed once, in the MCP server, not across every agent." }
];
const ListRow2_data4: ListRow2Data[] = [
    { text: "Check when the last commit was (anything older than 3 months is a yellow flag given API changes)." },
    { text: "Read the auth implementation carefully (if it expects a raw API key in the config file, reject it)." },
    { text: "Confirm it handles Microsoft’s OAuth 2.0 flow properly (including refresh tokens)." },
    { text: "Look for rate limit handling (Microsoft Ads has tight daily quotas per app)." }
];
const ListRow3_data: ListRow3Data[] = [
    { text: "list_accounts", text2: ", return all accounts the authenticated user can see." },
    { text: "list_campaigns(account_id, status?)", text2: ", list campaigns with status filter." },
    { text: "get_campaign(campaign_id)", text2: ", full campaign detail including settings and budget." },
    { text: "list_ad_groups(campaign_id)", text2: ", ad groups inside a campaign." },
    { text: "list_keywords(ad_group_id)", text2: ", keywords with match types and bids." },
    { text: "list_ads(ad_group_id)", text2: ", all ads in an ad group." },
    { text: "get_performance_report(date_range, granularity, account_ids, campaign_ids?)", text2: ", clicks, impressions, spend, conversions." },
    { text: "get_search_terms_report(date_range, campaign_ids)", text2: ", mine for negative keywords." },
    { text: "get_keyword_performance(date_range, ad_group_ids)", text2: ", keyword-level KPIs." },
    { text: "get_geographic_report(date_range, account_ids)", text2: ", geo performance." }
];
const ListRow3_data2: ListRow3Data[] = [
    { text: "suggest_negative_keywords(date_range, campaign_id, spend_threshold)", text2: ", LLM-assisted analysis that returns a ranked list of recommended negative keywords with reasoning. Does not apply them." },
    { text: "suggest_ad_copy_variants(ad_group_id, count, style?)", text2: ", generate ad copy variants. Returns text for a human to approve." },
    { text: "suggest_bid_adjustments(ad_group_id, strategy)", text2: ", return recommended bid adjustments with reasoning." },
    { text: "suggest_budget_reallocation(account_id)", text2: ", analyse spend vs. performance across campaigns and recommend budget moves." }
];
const ListRow2_data5: ListRow2Data[] = [
    { text: "Launching new campaigns or ad groups." },
    { text: "Moving budget between campaigns at the account level." },
    { text: "Pausing a campaign above a spend threshold." },
    { text: "Any customer / billing operation." },
    { text: "Adding or removing users / permissions." }
];
const ListRow2_data6: ListRow2Data[] = [
    { text: "Interactive flow for initial account authorisation." },
    { text: "Refresh token storage (encrypted, at rest)." },
    { text: "Automatic refresh before expiry." },
    { text: "A clear error path when refresh fails." }
];
const ListRow2_data7: ListRow2Data[] = [
    { text: "Define a strict JSON schema for inputs." },
    { text: "Validate inputs before hitting the Microsoft API." },
    { text: "Translate Microsoft’s response shapes into LLM-friendly JSON (strip unnecessary fields, rename camelCase where helpful, always return ISO dates)." },
    { text: "Return errors as structured responses, not exceptions." }
];
const ListRow2_data8: ListRow2Data[] = [
    { text: "Per-tool rate limits (e.g., reports: 60/hour)." },
    { text: "Per-account quotas." },
    { text: "Back off gracefully when you approach Microsoft’s quota." }
];
const ListRow2_data9: ListRow2Data[] = [
    { text: "Tool name, inputs, outputs (or output hash for large payloads)." },
    { text: "Client identifier (which agent called it)." },
    { text: "Outcome (success, rate limit, API error)." },
    { text: "Latency." }
];
const ListRow2_data10: ListRow2Data[] = [
    { text: "Generate a pending-operation ID." },
    { text: "Write the pending operation to a durable store." },
    { text: "Notify a human via Slack / email / dashboard." },
    { text: "Wait for explicit approval (polling or webhook) before executing." },
    { text: "Log the approval and the final write." }
];
const ListRow2_data11: ListRow2Data[] = [
    { text: "Containerised deployment, TLS-fronted, on your infrastructure." },
    { text: "Secrets in a vault, not in env files." },
    { text: "Monitoring on error rates and latency." },
    { text: "Health checks." },
    { text: "A runbook for rotating the Developer Token." }
];
const ListRow4_data: ListRow4Data[] = [
    { text: "Weekly performance summaries", text2: " generated automatically across all managed accounts, highlighting the top 3 movers positive and negative, with a plain-English explanation of why." },
    { text: "Monday-morning negative keyword recommendations", text2: " based on the previous week’s search-term reports, agent analyses, human approves the list in a single click." },
    { text: "Ad copy variant generation", text2: " on demand, agent produces 10 variants aligned to the product page, marketer picks 2–3 to test." },
    { text: "Budget pacing alerts", text2: ", early warning when a campaign is tracking to overspend, with a recommended adjustment." },
    { text: "Anomaly detection", text2: ", flagging unusual CPC spikes, conversion drops, geo-performance outliers." }
];
/** What An Mcp section. */
export default function WhatAnMcpSection({ listRow2Data = ListRow2_data, listRow2Data2 = ListRow2_data2, listRow2Data3 = ListRow2_data3, listRow2Data4 = ListRow2_data4, listRow3Data = ListRow3_data, listRow3Data2 = ListRow3_data2, listRow2Data5 = ListRow2_data5, listRow2Data6 = ListRow2_data6, listRow2Data7 = ListRow2_data7, listRow2Data8 = ListRow2_data8, listRow2Data9 = ListRow2_data9, listRow2Data10 = ListRow2_data10, listRow2Data11 = ListRow2_data11, listRow4Data = ListRow4_data, listRow5Data = listRow5DataContent } = {}) {
  return (
    <article className="block" aria-labelledby="post-title">
      <div className="block max-w-170 mx-auto">
        <p className="block mb-4 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
          Paid search is one of the clearest wins for AI agents. Microsoft Advertising alone is a multi-billion-dollar ad platform, and the work that keeps it performing, pulling reports, drafting ad variants, mining search term data, managing negative keywords, is precisely the kind of structured, repetitive knowledge work that LLMs now handle well.
        </p>
        {" "}
        <p className="block mb-4 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
          The problem until recently was the plumbing. You either wired Microsoft’s REST API directly into a custom app, or you duct-taped together Zapier and ChatGPT prompts. Neither scaled.
        </p>
        {" "}
        <p className="block mb-4 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
          <strong className="inline text-foreground font-bold">
            MCP changes that.
          </strong>
          {" With a Microsoft Ads MCP server, you build the integration once, and every MCP-aware agent, Claude Code, Claude Desktop, ChatGPT, Cursor, your custom n8n workflows, gets governed access to the account. This post walks through what that looks like in 2026, what you can reasonably automate, and where the real guardrails need to be."}
        </p>
        {" "}
        <h2 className="block mt-12 mb-3 [font-family:'DM_Serif_Display',_Georgia,_serif] text-[1.75rem] leading-[2.1875rem] tracking-[-0.56px] max-md:text-2xl max-md:leading-[1.875rem] max-md:tracking-[-0.49px] md:max-lg:text-[1.625rem] md:max-lg:leading-[2.0625rem] md:max-lg:tracking-[-0.52px]" data-component="heading" id="what-an-mcp-server-gives-you-for-microsoft-ads">
          What an MCP server gives you for Microsoft Ads
        </h2>
        {" "}
        <p className="block mb-4 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
          The Microsoft Advertising API (officially the Bing Ads API, branded as Microsoft Advertising API v13 at the time of writing) exposes roughly 200+ operations across:
        </p>
        {" "}
        <ul className="block mb-4 ml-8 [list-style-type:disc] list-outside">
          {listRow2Data.map((d, i) => <ListRow2 key={i} d={d} />)}
        </ul>
        {" "}
        <p className="block mb-4 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
          Without MCP, every one of those operations has to be:
        </p>
        {" "}
        <ol className="block mb-4 ml-8 [list-style-type:decimal] list-outside">
          {listRow2Data2.map((d, i) => <ListRow2 key={i} d={d} />)}
        </ol>
        {" "}
        <p className="block mb-4 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
          <strong className="inline text-foreground font-bold">
            With an MCP server in front, you wrap each operation once as a typed tool.
          </strong>
          {" Then:"}
        </p>
        {" "}
        <ul className="block mb-4 ml-8 [list-style-type:disc] list-outside">
          {listRow2Data3.map((d, i) => <ListRow2 key={i} d={d} />)}
        </ul>
        {" "}
        <p className="block mb-4 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
          {"This is the same portable-integration-layer argument that applies to "}
          <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="/insights/the-mcp-server-handbook-for-enterprise">
            MCP in general
          </a>
          , it just lands particularly cleanly in a domain where operations are well-structured and agents add clear value.
        </p>
        {" "}
        <h2 className="block mt-12 mb-3 [font-family:'DM_Serif_Display',_Georgia,_serif] text-[1.75rem] leading-[2.1875rem] tracking-[-0.56px] max-md:text-2xl max-md:leading-[1.875rem] max-md:tracking-[-0.49px] md:max-lg:text-[1.625rem] md:max-lg:leading-[2.0625rem] md:max-lg:tracking-[-0.52px]" data-component="heading" id="the-state-of-microsoft-ads-mcp-servers-in-2026">
          The state of Microsoft Ads MCP servers in 2026
        </h2>
        {" "}
        <p className="block mb-4 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
          Here is the honest landscape as of April 2026.
        </p>
        {" "}
        <h3 className="block mt-8 mb-3 [font-family:'DM_Serif_Display',_Georgia,_serif] text-[1.375rem] leading-[2.1875rem] max-md:text-xl max-md:leading-8 md:max-lg:text-[1.3125rem] md:max-lg:leading-[2.125rem]" data-component="heading" id="official--first-party">
          Official / first-party
        </h3>
        {" "}
        <p className="block mb-4 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
          <strong className="inline text-foreground font-bold">
            There is no official Microsoft Ads MCP server yet.
          </strong>
          {" Microsoft has been aggressive on MCP elsewhere (Azure, Microsoft 365 Copilot, GitHub), but has not released one for Microsoft Advertising specifically. Given the direction of travel, I would be surprised if this was still true by end of 2026, but today: no."}
        </p>
        {" "}
        <h3 className="block mt-8 mb-3 [font-family:'DM_Serif_Display',_Georgia,_serif] text-[1.375rem] leading-[2.1875rem] max-md:text-xl max-md:leading-8 md:max-lg:text-[1.3125rem] md:max-lg:leading-[2.125rem]" data-component="heading" id="community--open-source">
          Community / open source
        </h3>
        {" "}
        <p className="block mb-4 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
          Several community servers exist on GitHub in varying states. Quality varies wildly. Before adopting any of them:
        </p>
        {" "}
        <ul className="block mb-4 ml-8 [list-style-type:disc] list-outside">
          {listRow2Data4.map((d, i) => <ListRow2 key={i} d={d} />)}
        </ul>
        {" "}
        <h3 className="block mt-8 mb-3 [font-family:'DM_Serif_Display',_Georgia,_serif] text-[1.375rem] leading-[2.1875rem] max-md:text-xl max-md:leading-8 md:max-lg:text-[1.3125rem] md:max-lg:leading-[2.125rem]" data-component="heading" id="custom">
          Custom
        </h3>
        {" "}
        <p className="block mb-4 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
          Most production deployments I have seen use a custom MCP server wrapping the Microsoft Advertising API. This is not because the work is exotic, it is because every organisation’s consent / approval / audit pattern is slightly different, and those patterns are exactly what you want encoded in the MCP layer.
        </p>
        {" "}
        <h2 className="block mt-12 mb-3 [font-family:'DM_Serif_Display',_Georgia,_serif] text-[1.75rem] leading-[2.1875rem] tracking-[-0.56px] max-md:text-2xl max-md:leading-[1.875rem] max-md:tracking-[-0.49px] md:max-lg:text-[1.625rem] md:max-lg:leading-[2.0625rem] md:max-lg:tracking-[-0.52px]" data-component="heading" id="what-to-build-into-a-microsoft-ads-mcp-server">
          What to build into a Microsoft Ads MCP server
        </h2>
        {" "}
        <p className="block mb-4 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
          Here is the reference toolset we ship for production Microsoft Ads MCP servers. Designed to be useful without being dangerous.
        </p>
        {" "}
        <h3 className="block mt-8 mb-3 [font-family:'DM_Serif_Display',_Georgia,_serif] text-[1.375rem] leading-[2.1875rem] max-md:text-xl max-md:leading-8 md:max-lg:text-[1.3125rem] md:max-lg:leading-[2.125rem]" data-component="heading" id="read-tools-safe-no-approval-gates">
          Read tools (safe, no approval gates)
        </h3>
        {" "}
        <ul className="block mb-4 ml-8 [list-style-type:disc] list-outside">
          {listRow3Data.map((d, i) => <ListRow3 key={i} d={d} />)}
        </ul>
        {" "}
        <h3 className="block mt-8 mb-3 [font-family:'DM_Serif_Display',_Georgia,_serif] text-[1.375rem] leading-[2.1875rem] max-md:text-xl max-md:leading-8 md:max-lg:text-[1.3125rem] md:max-lg:leading-[2.125rem]" data-component="heading" id="suggestion--draft-tools-safe-produce-output-for-review">
          Suggestion / draft tools (safe, produce output for review)
        </h3>
        {" "}
        <ul className="block mb-4 ml-8 [list-style-type:disc] list-outside">
          {listRow3Data2.map((d, i) => <ListRow3 key={i} d={d} />)}
        </ul>
        {" "}
        <h3 className="block mt-8 mb-3 [font-family:'DM_Serif_Display',_Georgia,_serif] text-[1.375rem] leading-[2.1875rem] max-md:text-xl max-md:leading-8 md:max-lg:text-[1.3125rem] md:max-lg:leading-[2.125rem]" data-component="heading" id="write-tools-gated-behind-approval-or-hard-caps">
          Write tools (gated behind approval or hard caps)
        </h3>
        {" "}
        <ul className="block mb-4 ml-8 [list-style-type:disc] list-outside">
          <li className="list-item mb-2 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
            <code className="inline py-[0.1rem] px-[6.5px] rounded-lg text-primary [font-family:'JetBrains_Mono',_ui-monospace,_SFMono-Regular,_Menlo,_monospace] text-base leading-[1.75rem] bg-color-002 max-md:py-[0.0875rem] max-lg:px-1.5 max-lg:text-[0.9375rem] max-md:leading-[1.5625rem] md:max-lg:py-[1.5px] md:max-lg:leading-[1.6875rem]">
              apply_negative_keywords(campaign_id, keywords[])
            </code>
            , rate-limited, hard cap of 50 per call, logged.
          </li>
          <li className="list-item mb-2 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
            <code className="inline py-[0.1rem] px-[6.5px] rounded-lg text-primary [font-family:'JetBrains_Mono',_ui-monospace,_SFMono-Regular,_Menlo,_monospace] text-base leading-[1.75rem] bg-color-002 max-md:py-[0.0875rem] max-lg:px-1.5 max-lg:text-[0.9375rem] max-md:leading-[1.5625rem] md:max-lg:py-[1.5px] md:max-lg:leading-[1.6875rem]">
              update_keyword_bids(ad_group_id, bid_map, max_change_pct=20)
            </code>
            , enforce a max-change-per-keyword percentage in the server itself.
          </li>
          <li className="list-item mb-2 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
            <code className="inline py-[0.1rem] px-[6.5px] rounded-lg text-primary [font-family:'JetBrains_Mono',_ui-monospace,_SFMono-Regular,_Menlo,_monospace] text-base leading-[1.75rem] bg-color-002 max-md:py-[0.0875rem] max-lg:px-1.5 max-lg:text-[0.9375rem] max-md:leading-[1.5625rem] md:max-lg:py-[1.5px] md:max-lg:leading-[1.6875rem]">
              pause_ad(ad_id)
            </code>
            {" / "}
            <code className="inline py-[0.1rem] px-[6.5px] rounded-lg text-primary [font-family:'JetBrains_Mono',_ui-monospace,_SFMono-Regular,_Menlo,_monospace] text-base leading-[1.75rem] bg-color-002 max-md:py-[0.0875rem] max-lg:px-1.5 max-lg:text-[0.9375rem] max-md:leading-[1.5625rem] md:max-lg:py-[1.5px] md:max-lg:leading-[1.6875rem]">
              enable_ad(ad_id)
            </code>
            , low-risk write.
          </li>
          <li className="list-item mb-2 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
            <code className="inline py-[0.1rem] px-[6.5px] rounded-lg text-primary [font-family:'JetBrains_Mono',_ui-monospace,_SFMono-Regular,_Menlo,_monospace] text-base leading-[1.75rem] bg-color-002 max-md:py-[0.0875rem] max-lg:px-1.5 max-lg:text-[0.9375rem] max-md:leading-[1.5625rem] md:max-lg:py-[1.5px] md:max-lg:leading-[1.6875rem]">
              pause_keyword(keyword_id)
            </code>
            {" / "}
            <code className="inline py-[0.1rem] px-[6.5px] rounded-lg text-primary [font-family:'JetBrains_Mono',_ui-monospace,_SFMono-Regular,_Menlo,_monospace] text-base leading-[1.75rem] bg-color-002 max-md:py-[0.0875rem] max-lg:px-1.5 max-lg:text-[0.9375rem] max-md:leading-[1.5625rem] md:max-lg:py-[1.5px] md:max-lg:leading-[1.6875rem]">
              enable_keyword(keyword_id)
            </code>
            , low-risk write.
          </li>
        </ul>
        {" "}
        <h3 className="block mt-8 mb-3 [font-family:'DM_Serif_Display',_Georgia,_serif] text-[1.375rem] leading-[2.1875rem] max-md:text-xl max-md:leading-8 md:max-lg:text-[1.3125rem] md:max-lg:leading-[2.125rem]" data-component="heading" id="deliberately-not-exposed-as-tools">
          Deliberately NOT exposed as tools
        </h3>
        {" "}
        <p className="block mb-4 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
          These we handle only through human-driven flows, never as agent tools:
        </p>
        {" "}
        <ul className="block mb-4 ml-8 [list-style-type:disc] list-outside">
          {listRow2Data5.map((d, i) => <ListRow2 key={i} d={d} />)}
        </ul>
        {" "}
        <p className="block mb-4 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
          {"The rule: "}
          <strong className="inline text-foreground font-bold">
            anything that can silently lose money or change account security stays out of the tool list, period.
          </strong>
        </p>
        {" "}
        <h2 className="block mt-12 mb-3 [font-family:'DM_Serif_Display',_Georgia,_serif] text-[1.75rem] leading-[2.1875rem] tracking-[-0.56px] max-md:text-2xl max-md:leading-[1.875rem] max-md:tracking-[-0.49px] md:max-lg:text-[1.625rem] md:max-lg:leading-[2.0625rem] md:max-lg:tracking-[-0.52px]" data-component="heading" id="building-the-mcp-server-the-10-step-path">
          Building the MCP server: the 10-step path
        </h2>
        {" "}
        <p className="block mb-4 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
          Here is how we build a production Microsoft Ads MCP server for an engagement.
        </p>
        {" "}
        <h3 className="block mt-8 mb-3 [font-family:'DM_Serif_Display',_Georgia,_serif] text-[1.375rem] leading-[2.1875rem] max-md:text-xl max-md:leading-8 md:max-lg:text-[1.3125rem] md:max-lg:leading-[2.125rem]" data-component="heading" id="1-set-up-a-microsoft-advertising-developer-app">
          1. Set up a Microsoft Advertising developer app
        </h3>
        {" "}
        <p className="block mb-4 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
          Register a developer app via the Microsoft Advertising developer portal. Generate a Developer Token. Configure OAuth 2.0 redirect URIs.
        </p>
        {" "}
        <h3 className="block mt-8 mb-3 [font-family:'DM_Serif_Display',_Georgia,_serif] text-[1.375rem] leading-[2.1875rem] max-md:text-xl max-md:leading-8 md:max-lg:text-[1.3125rem] md:max-lg:leading-[2.125rem]" data-component="heading" id="2-pick-your-server-framework">
          2. Pick your server framework
        </h3>
        {" "}
        <p className="block mb-4 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
          Most production MCP servers we ship are in TypeScript on Node or Python on FastAPI, using the official MCP SDK. Both are fine. Pick whatever your team ships best.
        </p>
        {" "}
        <h3 className="block mt-8 mb-3 [font-family:'DM_Serif_Display',_Georgia,_serif] text-[1.375rem] leading-[2.1875rem] max-md:text-xl max-md:leading-8 md:max-lg:text-[1.3125rem] md:max-lg:leading-[2.125rem]" data-component="heading" id="3-implement-the-oauth-flow">
          3. Implement the OAuth flow
        </h3>
        {" "}
        <p className="block mb-4 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
          Microsoft’s OAuth 2.0 flow has some quirks. You want:
        </p>
        {" "}
        <ul className="block mb-4 ml-8 [list-style-type:disc] list-outside">
          {listRow2Data6.map((d, i) => <ListRow2 key={i} d={d} />)}
        </ul>
        {" "}
        <p className="block mb-4 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
          Handle the multi-account case, one authenticated user can manage many accounts, and the MCP tools need to know which one to operate on.
        </p>
        {" "}
        <h3 className="block mt-8 mb-3 [font-family:'DM_Serif_Display',_Georgia,_serif] text-[1.375rem] leading-[2.1875rem] max-md:text-xl max-md:leading-8 md:max-lg:text-[1.3125rem] md:max-lg:leading-[2.125rem]" data-component="heading" id="4-wrap-the-api-endpoints-as-typed-tools">
          4. Wrap the API endpoints as typed tools
        </h3>
        {" "}
        <p className="block mb-4 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
          For each tool in the reference list above:
        </p>
        {" "}
        <ul className="block mb-4 ml-8 [list-style-type:disc] list-outside">
          {listRow2Data7.map((d, i) => <ListRow2 key={i} d={d} />)}
        </ul>
        {" "}
        <h3 className="block mt-8 mb-3 [font-family:'DM_Serif_Display',_Georgia,_serif] text-[1.375rem] leading-[2.1875rem] max-md:text-xl max-md:leading-8 md:max-lg:text-[1.3125rem] md:max-lg:leading-[2.125rem]" data-component="heading" id="5-add-rate-limiting">
          5. Add rate limiting
        </h3>
        {" "}
        <p className="block mb-4 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
          Microsoft Advertising has daily quotas per developer token. If an agent blows through them, everyone using that token is blocked. Rate limit aggressively in the MCP server:
        </p>
        {" "}
        <ul className="block mb-4 ml-8 [list-style-type:disc] list-outside">
          {listRow2Data8.map((d, i) => <ListRow2 key={i} d={d} />)}
        </ul>
        {" "}
        <h3 className="block mt-8 mb-3 [font-family:'DM_Serif_Display',_Georgia,_serif] text-[1.375rem] leading-[2.1875rem] max-md:text-xl max-md:leading-8 md:max-lg:text-[1.3125rem] md:max-lg:leading-[2.125rem]" data-component="heading" id="6-add-audit-logging">
          6. Add audit logging
        </h3>
        {" "}
        <p className="block mb-4 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
          Log every tool invocation with:
        </p>
        {" "}
        <ul className="block mb-4 ml-8 [list-style-type:disc] list-outside">
          {listRow2Data9.map((d, i) => <ListRow2 key={i} d={d} />)}
        </ul>
        {" "}
        <p className="block mb-4 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
          Ship to a structured log aggregator. This is what you reach for when a customer asks “why did my bid change last Tuesday”.
        </p>
        {" "}
        <h3 className="block mt-8 mb-3 [font-family:'DM_Serif_Display',_Georgia,_serif] text-[1.375rem] leading-[2.1875rem] max-md:text-xl max-md:leading-8 md:max-lg:text-[1.3125rem] md:max-lg:leading-[2.125rem]" data-component="heading" id="7-implement-the-approval-gate-pattern-for-writes">
          7. Implement the approval gate pattern for writes
        </h3>
        {" "}
        <p className="block mb-4 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
          For gated write operations, the MCP tool call should:
        </p>
        {" "}
        <ol className="block mb-4 ml-8 [list-style-type:decimal] list-outside">
          {listRow2Data10.map((d, i) => <ListRow2 key={i} d={d} />)}
        </ol>
        {" "}
        <p className="block mb-4 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
          This is a slightly heavier pattern than a simple tool call but it is what keeps paid-advertising automation from becoming a liability.
        </p>
        {" "}
        <h3 className="block mt-8 mb-3 [font-family:'DM_Serif_Display',_Georgia,_serif] text-[1.375rem] leading-[2.1875rem] max-md:text-xl max-md:leading-8 md:max-lg:text-[1.3125rem] md:max-lg:leading-[2.125rem]" data-component="heading" id="8-add-tenant-isolation-if-multi-client">
          8. Add tenant isolation (if multi-client)
        </h3>
        {" "}
        <p className="block mb-4 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
          For agency setups, the MCP server needs to enforce that a given API client can only see the accounts they are authorised for. Bake tenancy into every tool, do not rely on the agent to respect a “current account” context.
        </p>
        {" "}
        <h3 className="block mt-8 mb-3 [font-family:'DM_Serif_Display',_Georgia,_serif] text-[1.375rem] leading-[2.1875rem] max-md:text-xl max-md:leading-8 md:max-lg:text-[1.3125rem] md:max-lg:leading-[2.125rem]" data-component="heading" id="9-deploy-with-proper-ops-discipline">
          9. Deploy with proper ops discipline
        </h3>
        {" "}
        <ul className="block mb-4 ml-8 [list-style-type:disc] list-outside">
          {listRow2Data11.map((d, i) => <ListRow2 key={i} d={d} />)}
        </ul>
        {" "}
        <h3 className="block mt-8 mb-3 [font-family:'DM_Serif_Display',_Georgia,_serif] text-[1.375rem] leading-[2.1875rem] max-md:text-xl max-md:leading-8 md:max-lg:text-[1.3125rem] md:max-lg:leading-[2.125rem]" data-component="heading" id="10-document-the-tools-and-failure-modes">
          10. Document the tools and failure modes
        </h3>
        {" "}
        <p className="block mb-4 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
          {"Write a short doc per tool explaining: what it does, what inputs it expects, what it returns, what the failure modes look like, what its rate limit is, and when to use it vs. another tool. Attach this to the MCP server so agents discover it via "}
          <code className="inline py-[0.1rem] px-[6.5px] rounded-lg text-primary [font-family:'JetBrains_Mono',_ui-monospace,_SFMono-Regular,_Menlo,_monospace] text-base leading-[1.75rem] bg-color-002 max-md:py-[0.0875rem] max-lg:px-1.5 max-lg:text-[0.9375rem] max-md:leading-[1.5625rem] md:max-lg:py-[1.5px] md:max-lg:leading-[1.6875rem]">
            list_tools
          </code>
          .
        </p>
        {" "}
        <h2 className="block mt-12 mb-3 [font-family:'DM_Serif_Display',_Georgia,_serif] text-[1.75rem] leading-[2.1875rem] tracking-[-0.56px] max-md:text-2xl max-md:leading-[1.875rem] max-md:tracking-[-0.49px] md:max-lg:text-[1.625rem] md:max-lg:leading-[2.0625rem] md:max-lg:tracking-[-0.52px]" data-component="heading" id="what-you-actually-gain-in-practice">
          What you actually gain, in practice
        </h2>
        {" "}
        <p className="block mb-4 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
          {"Here is what a team running a Microsoft Ads MCP server through Claude (via "}
          <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="/insights/n8n-mcp-server-the-enterprise-guide">
            n8n workflows
          </a>
          {" or directly via Claude Code) ships in month one:"}
        </p>
        {" "}
        <ul className="block mb-4 ml-8 [list-style-type:disc] list-outside">
          {listRow4Data.map((d, i) => <ListRow4 key={i} d={d} />)}
        </ul>
        {" "}
        <p className="block mb-4 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
          None of these replace a paid-search specialist. All of them remove 5–10 hours per week of low-leverage work per account managed. At agency scale (10+ accounts per PM), the ROI is immediate and obvious.
        </p>
        {" "}
        <h2 className="block mt-12 mb-3 [font-family:'DM_Serif_Display',_Georgia,_serif] text-[1.75rem] leading-[2.1875rem] tracking-[-0.56px] max-md:text-2xl max-md:leading-[1.875rem] max-md:tracking-[-0.49px] md:max-lg:text-[1.625rem] md:max-lg:leading-[2.0625rem] md:max-lg:tracking-[-0.52px]" data-component="heading" id="where-this-goes-in-the-next-12-months">
          Where this goes in the next 12 months
        </h2>
        {" "}
        <p className="block mb-4 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
          Three trends worth betting on:
        </p>
        {" "}
        <h3 className="block mt-8 mb-3 [font-family:'DM_Serif_Display',_Georgia,_serif] text-[1.375rem] leading-[2.1875rem] max-md:text-xl max-md:leading-8 md:max-lg:text-[1.3125rem] md:max-lg:leading-[2.125rem]" data-component="heading" id="1-microsoft-ships-a-first-party-mcp-server">
          1. Microsoft ships a first-party MCP server
        </h3>
        {" "}
        <p className="block mb-4 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
          Given how aggressively Microsoft is adopting MCP across GitHub, Azure, and M365, a first-party Microsoft Ads MCP server in 2026 seems more likely than not. When it lands, it will probably be the default for read operations. Custom servers will still have a role for the gated-write patterns and audit workflows your internal audit team signs off on.
        </p>
        {" "}
        <h3 className="block mt-8 mb-3 [font-family:'DM_Serif_Display',_Georgia,_serif] text-[1.375rem] leading-[2.1875rem] max-md:text-xl max-md:leading-8 md:max-lg:text-[1.3125rem] md:max-lg:leading-[2.125rem]" data-component="heading" id="2-agency-management-tooling-collapses-into-mcp">
          2. Agency management tooling collapses into MCP
        </h3>
        {" "}
        <p className="block mb-4 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
          The market for “AI for paid search” is crowded, dozens of point solutions, each with its own UI and model. Once MCP is the standard tool interface, most of these will either pivot to being MCP servers (exposing their specialised analysis as tools to whichever agent the user prefers) or become thin UIs on top of a Microsoft-first-party MCP server. The specialist layer moves up; the integration layer commoditises.
        </p>
        {" "}
        <h3 className="block mt-8 mb-3 [font-family:'DM_Serif_Display',_Georgia,_serif] text-[1.375rem] leading-[2.1875rem] max-md:text-xl max-md:leading-8 md:max-lg:text-[1.3125rem] md:max-lg:leading-[2.125rem]" data-component="heading" id="3-the-approval-gate-pattern-standardises">
          3. The approval-gate pattern standardises
        </h3>
        {" "}
        <p className="block mb-4 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
          Today every team implements write-gating differently. Expect a 2026-2027 convergence on a standard pattern (likely: pending-operation ID + approval webhook + audit trail), probably driven by regulated industries where audit is non-negotiable. If you are building now, design for that pattern; retrofitting is painful.
        </p>
        {" "}
        <h2 className="block mt-12 mb-3 [font-family:'DM_Serif_Display',_Georgia,_serif] text-[1.75rem] leading-[2.1875rem] tracking-[-0.56px] max-md:text-2xl max-md:leading-[1.875rem] max-md:tracking-[-0.49px] md:max-lg:text-[1.625rem] md:max-lg:leading-[2.0625rem] md:max-lg:tracking-[-0.52px]" data-component="heading" id="the-bottom-line">
          The bottom line
        </h2>
        {" "}
        <p className="block mb-4 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
          If you manage Microsoft Advertising spend seriously and are not yet experimenting with an MCP server, you are leaving time and performance on the table. Start with a read-only server, point a Claude Code session at it, spend a week asking hard questions about your accounts, and see where the value lands for you. Then decide which writes are worth gating and building.
        </p>
        {" "}
        <p className="block mb-4 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
          {"If you want this done for you, custom MCP server build, integrated with your existing reporting and approval flows, that is exactly the kind of engagement we run as part of "}
          <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="/services/mcp-server-development">
            MCP server development
          </a>
          . Typical build is 3–4 weeks for a single-tenant server, 6–8 weeks for an agency-tenancy setup with approval gates and audit.
        </p>
        {" "}
        <hr className="w-170 h-px border-t border-solid border-t-border block my-12 overflow-hidden text-clr-3 max-md:w-[23.4375rem]" />
        {" "}
        <h2 className="block mt-12 mb-3 [font-family:'DM_Serif_Display',_Georgia,_serif] text-[1.75rem] leading-[2.1875rem] tracking-[-0.56px] max-md:text-2xl max-md:leading-[1.875rem] max-md:tracking-[-0.49px] md:max-lg:text-[1.625rem] md:max-lg:leading-[2.0625rem] md:max-lg:tracking-[-0.52px]" data-component="heading" id="related-reading">
          Related reading
        </h2>
        {" "}
        <ul className="block mb-4 ml-8 [list-style-type:disc] list-outside">
          {listRow5Data.map((d, i) => <ListRow5 key={i} d={d} />)}
        </ul>
        {" "}
      </div>
      {" "}
    </article>
  );
}
