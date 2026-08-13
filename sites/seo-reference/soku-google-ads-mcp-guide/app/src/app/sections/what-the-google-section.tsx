import NavLink from "../components/nav-link";
import Tile, { type TileData } from "../components/tile";
import Tile2, { type Tile2Data } from "../components/tile2";
import ListRow, { type ListRowData } from "../components/list-row";
import ListRow2, { type ListRow2Data } from "../components/list-row2";
import { NavLink_styles, Tile_styles, ListRow_styles, ListRow_styles2, ListRow2_styles } from "../_styles";
import { navLinkData as navLinkDataContent } from "../content";
const Tile_data: TileData[] = [
    { text: "Google Ads account", text2: "A live account (or MCC manager account) with campaigns", text3: "ads.google.com" },
    { text: "Developer token", text2: "Authorizes your project to call the Google Ads API", text3: "Google Ads → Tools → API Center" },
    { text: "OAuth 2.0 client", text2: "Desktop/Web client ID + secret for user auth", text3: "Google Cloud Console → Credentials" },
    { text: "Refresh token", text2: "A long-lived token minted from the OAuth flow", text3: "Generated once via the OAuth consent flow" }
];
const Tile2_data: Tile2Data[] = [
    { text: "DEVELOPER_TOKEN_NOT_APPROVED", text2: "Token still in test access", text3: "Request Basic/Standard access in the API Center" },
    { text: "AUTHENTICATION_ERROR", text2: "Stale or revoked refresh token", text3: "Re-run the OAuth flow to mint a fresh refresh token" },
    { text: "USER_PERMISSION_DENIED", text2: "The OAuth user lacks access to that customer ID", text3: "Grant the user access in Google Ads, or fix the login/target customer ID" }
];
const ListRow_data: ListRowData[] = [
    { text: "\"Show me total cost, conversions, and CPA for the whole account over the last 7 days vs the previous 7 days.\"" },
    { text: "\"Which campaigns spent the most yesterday, and what did each return?\"" },
    { text: "\"List any campaigns with spend above $100 and zero conversions in the last 3 days.\"" },
    { text: "\"What's my account-wide ROAS this month so far?\"" }
];
const ListRow_data2: ListRowData[] = [
    { text: "\"Rank every ad group by wasted spend (cost on zero-conversion search terms) and draft the negative keywords I should add.\"" },
    { text: "\"Compare this month vs last month by conversion action, and flag the three biggest regressions with a likely cause.\"" },
    { text: "\"Which campaigns are budget-constrained (lost impression share due to budget) and how much extra spend would it take to close the gap?\"" },
    { text: "\"Build me a prioritized optimization list: top 10 changes ranked by estimated savings.\"" }
];
const ListRow2_data: ListRow2Data[] = [
    { text: "Understand what it changes", href: "/blog/google-official-ads-mcp-ai-teams", label: "Google's Official Ads MCP: What It Means for AI Ad Teams", text2: " — the strategic read on a read-only first-party connector and how it reshapes the ad-team workflow." },
    { text: "Connect through Claude", href: "/blog/connect-claude-google-ads-mcp", label: "How to Connect Claude to Google Ads", text2: " — Claude Desktop / Claude.ai / Claude Code config and the prompt patterns that get clean GAQL." },
    { text: "Pick the right connector", href: "/blog/best-mcp-servers-google-ads-ranked", label: "Best MCP Servers for Google Ads, Ranked", text2: " — official vs. community forks vs. hosted connectors, weighted by what actually matters." },
    { text: "Compare it to Meta", href: "/blog/google-ads-mcp-vs-meta-ads-mcp", label: "Google Ads MCP vs Meta Ads MCP", text2: " — the read-only-vs-read-write head-to-head, tool by tool." },
    { text: "Doing Meta too?", href: "/blog/meta-ads-mcp-guide", label: "Meta Ads MCP: The Complete Guide", text2: " — the sister pillar for Meta's 29-tool, read-and-write connector." },
    { text: "On TikTok as well?", href: "/blog/tiktok-ads-mcp-guide", label: "TikTok Ads MCP: Official Status, Setup, and Limits", text2: " — where TikTok's official Ads MCP and Agentic Hub stand today, and how they compare with Google and Meta." },
    { text: "Watching Google's automation roadmap?", href: "/blog/dsa-ai-max-automigration-delayed-2027", label: "Google Ads AI Max DSA migration timeline", text2: " — what the delayed DSA → AI Max automigration means for accounts an agent monitors over GAQL." }
];
/** What The Google section. */
export default function WhatTheGoogleSection({ navLinkData = navLinkDataContent, tileData = Tile_data, tile2Data = Tile2_data, listRowData = ListRow_data, listRowData2 = ListRow_data2, listRow2Data = ListRow2_data } = {}) {
  return (
    <div className="block relative mt-10 mx-auto max-w-3xl">
      <aside className="block absolute top-0 right-192 mr-16 h-full w-52 max-lg:hidden">
        <div className="w-52 h-[61.5625rem] block sticky top-24">
          <nav className="block text-sm leading-5" data-component="nav" aria-label="Table of contents">
            <p className="block mb-3 font-semibold">
              Contents
            </p>
            {navLinkData.map((d, i) => <NavLink key={i} d={d} styles={NavLink_styles[i]} />)}
          </nav>
        </div>
      </aside>
      <article className="block">
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"On "}
          <strong className="inline text-foreground font-semibold">
            April 28, 2026
          </strong>
          {", Google shipped an official "}
          <strong className="inline text-foreground font-semibold">
            MCP (Model Context Protocol) server
          </strong>
          {" for the Google Ads API, letting an AI assistant query your ad account in plain language for the first time without writing a line of integration code ("}
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="https://developers.google.com/google-ads/api/docs/developer-toolkit/mcp-server" rel="noopener noreferrer" target="_blank">
            Google Ads API docs
          </a>
          {"). But Google made one choice that defines the whole thing and that most write-ups bury: the server is "}
          <strong className="inline text-foreground font-semibold">
            strictly read-only
          </strong>
          . It can read every metric, budget, and status in your account — and it cannot pause a campaign, change a bid, or create an asset. By design.
        </p>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"This is the complete guide to the "}
          <strong className="inline text-foreground font-semibold">
            Google Ads MCP
          </strong>
          {" — what it is, the two tools and the GAQL layer underneath, the full step-by-step setup (developer token, GCP project, OAuth, client config, your first GAQL query, and the errors you'll hit), a tiered prompt library, the connector landscape, the honest limits, and the read-only-vs-Meta contrast that explains the whole design. If you want the strategic read on what a read-only first-party connector means for AI ad teams, start with "}
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="/blog/google-official-ads-mcp-ai-teams">
            Google's Official Ads MCP: What It Means for AI Ad Teams
          </a>
          .
        </p>
        <h2 className="block mt-10 mb-4 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading" id="what-the-google-ads-mcp-is-in-30-seconds">
          What the Google Ads MCP is, in 30 seconds
        </h2>
        <ul className="block mb-4 ml-6 [list-style-type:disc] list-outside">
          <li className="list-item mb-1 text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              What shipped:
            </strong>
            {" an "}
            <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="https://developers.google.com/google-ads/api/docs/developer-toolkit/mcp-server" rel="noopener noreferrer" target="_blank">
              official MCP server for the Google Ads API
            </a>
            , released April 28, 2026, that exposes the API to MCP-compatible AI hosts.
          </li>
          <li className="list-item mb-1 text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              How big:
            </strong>
            {" a deliberately small surface — "}
            <strong className="inline text-foreground font-semibold">
              2 core tools
            </strong>
            {" ("}
            <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.25rem] bg-surface">
              list_accessible_customers
            </code>
            {" and "}
            <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.25rem] bg-surface">
              search
            </code>
            {"), where "}
            <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.25rem] bg-surface">
              search
            </code>
            {" runs "}
            <strong className="inline text-foreground font-semibold">
              GAQL
            </strong>
            {" (Google Ads Query Language) against your account. A companion "}
            <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.25rem] bg-surface">
              get_resource_metadata
            </code>
            {" helps the model discover field names."}
          </li>
          <li className="list-item mb-1 text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              The defining constraint:
            </strong>
            {" it is "}
            <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="https://developers.google.com/google-ads/api/docs/developer-toolkit/mcp-server" rel="noopener noreferrer" target="_blank">
              strictly read-only
            </a>
            {" — \"it cannot modify bids, pause campaigns, or create new assets.\""}
          </li>
          <li className="list-item text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              The setup tax:
            </strong>
            {" unlike Meta's one-click OAuth, Google requires a "}
            <strong className="inline text-foreground font-semibold">
              developer token
            </strong>
            {", a "}
            <strong className="inline text-foreground font-semibold">
              Google Cloud project
            </strong>
            {" with the Ads API enabled, and "}
            <strong className="inline text-foreground font-semibold">
              OAuth credentials
            </strong>
            {" — the same gate the Google Ads API always had."}
          </li>
        </ul>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          The headline isn't "ask Gemini about your campaigns." It's the operating-model choice. Meta shipped a read-
          <strong className="inline text-foreground font-semibold">
            and
          </strong>
          {"-write MCP and leaned on a "}
          <em className="inline italic">
            created-paused
          </em>
          {" convention plus your discipline to keep it safe. Google shipped a connector where the agent "}
          <strong className="inline text-foreground font-semibold">
            structurally cannot spend
          </strong>
          {" — the safety gate is the API itself, not a convention you have to remember to honor. That contrast runs through every section below."}
        </p>
        <h2 className="block mt-10 mb-4 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading" id="the-two-tools-and-the-gaql-layer">
          The two tools and the GAQL layer
        </h2>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          Where Meta's MCP gives an agent 29 named verbs, Google's gives it essentially one workhorse and a directory (
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="https://developers.google.com/google-ads/api/docs/developer-toolkit/mcp-server" rel="noopener noreferrer" target="_blank">
            Google Ads API docs
          </a>
          ):
        </p>
        <div className="block my-8 overflow-auto">
          <table className="table text-sm leading-5 [border-collapse:collapse] [border-spacing:2px] w-full">
            <thead className="table-header-group align-middle [border-collapse:collapse] [border-spacing:2px]">
              <tr className="border-b border-solid border-b-border table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
                <th className="table-cell py-3 px-4 align-middle font-semibold text-left [border-collapse:collapse] [border-spacing:2px]">
                  Tool
                </th>
                <th className="table-cell py-3 px-4 align-middle font-semibold text-left [border-collapse:collapse] [border-spacing:2px]">
                  What it does
                </th>
              </tr>
            </thead>
            <tbody className="table-row-group align-middle [border-collapse:collapse] [border-spacing:2px]">
              <tr className="border-b border-solid border-b-border table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-xs leading-[1.0625rem] bg-surface [border-collapse:collapse] [border-spacing:2px]">
                    list_accessible_customers
                  </code>
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  Returns the Google Ads customer IDs and account names the authenticated user can reach — the discovery call an agent makes first.
                </td>
              </tr>
              <tr className="border-b border-solid border-b-border table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-xs leading-[1.0625rem] bg-surface [border-collapse:collapse] [border-spacing:2px]">
                    search
                  </code>
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  {"The workhorse. Executes a "}
                  <strong className="inline text-foreground font-semibold [border-collapse:collapse] [border-spacing:2px]">
                    GAQL
                  </strong>
                  {" query for metrics, budgets, and status across any reporting resource (campaign, ad group, keyword, asset, etc.)."}
                </td>
              </tr>
              <tr className="table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-xs leading-[1.0625rem] bg-surface [border-collapse:collapse] [border-spacing:2px]">
                    get_resource_metadata
                  </code>
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  {"Returns metadata about a resource type (e.g. "}
                  <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-xs leading-[1.0625rem] bg-surface [border-collapse:collapse] [border-spacing:2px]">
                    campaign
                  </code>
                  ) so the model can pick valid fields instead of guessing column names.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"This is a thinner, more powerful design than 29 fixed tools, because "}
          <strong className="inline text-foreground font-semibold">
            GAQL is the API's full query language
          </strong>
          {". One "}
          <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.375rem] bg-surface">
            search
          </code>
          {" tool can answer almost any reporting question — \"show me campaigns where "}
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="/glossary/roas">
            ROAS
          </a>
          {" dropped week over week,\" \"list keywords above target "}
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="/glossary/cpa">
            CPA
          </a>
          {",\" \"which assets have a LOW ad strength\" — by composing a SQL-like query, no new tool needed per question. The trade-off: the model has to write valid GAQL, which is why "}
          <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.375rem] bg-surface">
            get_resource_metadata
          </code>
          {" exists and why a community fork ("}
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="https://github.com/google-marketing-solutions/google_ads_mcp" rel="noopener noreferrer" target="_blank">
            google-marketing-solutions/google_ads_mcp
          </a>
          {") adds helper tools like "}
          <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.375rem] bg-surface">
            get_gaql_doc
          </code>
          {" and "}
          <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.375rem] bg-surface">
            get_reporting_fields_doc
          </code>
          {" to teach the model the schema. Expressive surface, steeper accuracy curve — that's the deal."}
        </p>
        <h2 className="block mt-10 mb-4 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading" id="setup-the-developer-token-wall-is-the-real-friction">
          Setup: the developer-token wall is the real friction
        </h2>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"This is where Google and Meta diverge most. Meta's setup is a Business OAuth click. Google's MCP inherits the "}
          <strong className="inline text-foreground font-semibold">
            full Google Ads API onboarding
          </strong>
          , and skipping any piece means the server won't return data (
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="https://www.digitalapplied.com/blog/google-ads-mcp-server-claude-gemini-setup-guide" rel="noopener noreferrer" target="_blank">
            digitalapplied setup guide
          </a>
          ):
        </p>
        <ol className="block mb-4 ml-6 [list-style-type:decimal] list-outside">
          <li className="list-item mb-1 text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              Get a developer token
            </strong>
            {" — a 22-character string from the Google Ads UI under "}
            <strong className="inline text-foreground font-semibold">
              {"Tools & Settings → API Center"}
            </strong>
            .
          </li>
          <li className="list-item mb-1 text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              Apply for Standard access.
            </strong>
            {" Basic access works for testing but "}
            <strong className="inline text-foreground font-semibold">
              throttles queries and is limited to test accounts
            </strong>
            {"; production GAQL work needs Standard access, and "}
            <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="https://www.digitalapplied.com/blog/google-ads-mcp-server-claude-gemini-setup-guide" rel="noopener noreferrer" target="_blank">
              approvals take 1–2 business days
            </a>
            {" for agency accounts with active spend."}
          </li>
          <li className="list-item mb-1 text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              Create a Google Cloud project
            </strong>
            {" with the Google Ads API enabled."}
          </li>
          <li className="list-item mb-1 text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              Set up OAuth credentials
            </strong>
            {" (Client ID/Secret for solo users) or a "}
            <strong className="inline text-foreground font-semibold">
              service account JSON key
            </strong>
            {" (more resilient for teams — refresh tokens can be revoked and force a re-consent)."}
          </li>
          <li className="list-item text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              Install and wire the server
            </strong>
            {" — typically via "}
            <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.25rem] bg-surface">
              pipx
            </code>
            {", then point your MCP client's config at it with "}
            <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.25rem] bg-surface">
              GOOGLE_PROJECT_ID
            </code>
            {" and "}
            <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.25rem] bg-surface">
              GOOGLE_ADS_DEVELOPER_TOKEN
            </code>
            {" env vars. The supported clients are "}
            <strong className="inline text-foreground font-semibold">
              Claude Desktop, Claude Code, Gemini CLI, Cursor, and Windsurf
            </strong>
            .
          </li>
        </ol>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"The honest friction: switching auth mode (OAuth → service account) means reconfiguring "}
          <strong className="inline text-foreground font-semibold">
            every
          </strong>
          {" client, and that 1–2-day token approval is a hard gate you can't engineer around. The copy-pasteable version of those five steps — every env var, the GCP steps, and the client JSON blocks — follows below, from prerequisites through your first GAQL query and the errors you'll hit on the way. Budget 30–60 minutes for the credential dance, and longer if your developer token still needs approval. If you're specifically on Claude (Desktop, Claude.ai, or Claude Code), the "}
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="/blog/connect-claude-google-ads-mcp">
            connect-Claude-to-Google-Ads guide
          </a>
          {" covers the per-client config and the prompt patterns that get decisions instead of GAQL errors."}
        </p>
        <h2 className="block mt-10 mb-4 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading" id="prerequisites">
          Prerequisites
        </h2>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          Google Ads API access is gated more tightly than most marketing APIs. You need four things before you touch the server.
        </p>
        <div className="block my-8 overflow-auto">
          <table className="table text-sm leading-5 [border-collapse:collapse] [border-spacing:2px] w-full">
            <thead className="table-header-group align-middle [border-collapse:collapse] [border-spacing:2px]">
              <tr className="border-b border-solid border-b-border table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
                <th className="table-cell py-3 px-4 align-middle font-semibold text-left [border-collapse:collapse] [border-spacing:2px]">
                  Prerequisite
                </th>
                <th className="table-cell py-3 px-4 align-middle font-semibold text-left [border-collapse:collapse] [border-spacing:2px]">
                  What it is
                </th>
                <th className="table-cell py-3 px-4 align-middle font-semibold text-left [border-collapse:collapse] [border-spacing:2px]">
                  Where to get it
                </th>
              </tr>
            </thead>
            <tbody className="table-row-group align-middle [border-collapse:collapse] [border-spacing:2px]">
              {tileData.map((d, i) => <Tile key={i} d={d} styles={Tile_styles[i]} />)}
            </tbody>
          </table>
        </div>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          A few notes that trip people up:
        </p>
        <ul className="block mb-4 ml-6 [list-style-type:disc] list-outside">
          <li className="list-item mb-1 text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              The developer token starts in "Test" access.
            </strong>
            {" A freshly issued "}
            <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="https://developers.google.com/google-ads/api/docs/get-started/dev-token" rel="noopener noreferrer" target="_blank">
              developer token
            </a>
            {" can only query "}
            <em className="inline italic">
              test
            </em>
            {" accounts until Google approves it for Basic or Standard access. If your queries return real data, you already have at least Basic access; if they error on production accounts, request elevated access in the API Center."}
          </li>
          <li className="list-item mb-1 text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              Use an MCC (manager) account if you have one.
            </strong>
            {" When you manage multiple clients, point the server at your manager account's customer ID and pass the child account's ID as the "}
            <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.25rem] bg-surface">
              login-customer-id
            </code>
            {" / target customer at query time."}
          </li>
          <li className="list-item text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              You authenticate as a Google user, not as the account.
            </strong>
            {" The OAuth refresh token represents a real person who has access to the Ads account — so use a service-style Google identity that won't lose access when someone leaves."}
          </li>
        </ul>
        <h2 className="block mt-10 mb-4 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading" id="step-1-enable-the-api-and-create-the-oauth-client">
          Step 1 — Enable the API and create the OAuth client
        </h2>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"In the "}
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="https://console.cloud.google.com/" rel="noopener noreferrer" target="_blank">
            Google Cloud Console
          </a>
          {", create (or pick) a project and enable the "}
          <strong className="inline text-foreground font-semibold">
            Google Ads API
          </strong>
          {" under APIs & Services. Then create an OAuth 2.0 Client ID. For a local MCP server running on your own machine, a "}
          <strong className="inline text-foreground font-semibold">
            Desktop app
          </strong>
          {" client type is the simplest — it avoids redirect-URI headaches."}
        </p>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"Download the client JSON or copy the "}
          <strong className="inline text-foreground font-semibold">
            client ID
          </strong>
          {" and "}
          <strong className="inline text-foreground font-semibold">
            client secret
          </strong>
          . You'll combine these with the developer token in a moment.
        </p>
        <h2 className="block mt-10 mb-4 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading" id="step-2-mint-a-refresh-token">
          Step 2 — Mint a refresh token
        </h2>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"The OAuth client only proves "}
          <em className="inline italic">
            which app
          </em>
          {" is asking. You still need a refresh token that proves "}
          <em className="inline italic">
            which user
          </em>
          {" is granting access. The Google Ads API client libraries ship a small auth script for exactly this. Run it once and complete the consent screen in your browser."}
        </p>
        <pre className="border border-solid border-border block my-6 p-4 rounded-[10px] overflow-auto [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-sm leading-5 whitespace-pre text-nowrap bg-surface">
          <code className="inline [font-family:neueMontrealMono,_'neueMontrealMono_Fallback']">
            {"# Example: using the Python client library's auth helper\npython -m google.ads.googleads.oauth2.generate_user_credentials \\\n  --client_id \"YOUR_CLIENT_ID\" \\\n  --client_secret \"YOUR_CLIENT_SECRET\""}
          </code>
        </pre>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          It opens a browser, you approve the scope (
          <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.375rem] bg-surface">
            https://www.googleapis.com/auth/adwords
          </code>
          {"), and it prints a "}
          <strong className="inline text-foreground font-semibold">
            refresh token
          </strong>
          . Store it like a password — it's a durable key to your ad account data.
        </p>
        <h2 className="block mt-10 mb-4 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading" id="step-3-install-or-clone-the-server">
          Step 3 — Install or clone the server
        </h2>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"Install the official Google Ads MCP server. The exact package name and runtime are documented on Google's "}
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="https://developers.google.com/google-ads/api/docs/developer-toolkit/mcp-server" rel="noopener noreferrer" target="_blank">
            MCP server reference page
          </a>
          ; the pattern below is the typical local install.
        </p>
        <pre className="border border-solid border-border block my-6 p-4 rounded-[10px] overflow-auto [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-sm leading-5 whitespace-pre text-nowrap bg-surface">
          <code className="inline [font-family:neueMontrealMono,_'neueMontrealMono_Fallback']">
            {"# Clone the official server and install dependencies\ngit clone https://github.com/googleads/google-ads-mcp.git\ncd google-ads-mcp\npip install -r requirements.txt"}
          </code>
        </pre>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"If a hosted or "}
          <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.375rem] bg-surface">
            uvx
          </code>
          /
          <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.375rem] bg-surface">
            npx
          </code>
          -style invocation is offered, you can skip the clone and let your MCP client launch the server on demand — but a local clone is the most transparent way to see exactly what it's doing with your credentials.
        </p>
        <h2 className="block mt-10 mb-4 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading" id="step-4-configure-credentials">
          Step 4 — Configure credentials
        </h2>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          The server reads its credentials from environment variables (or a config file). At minimum you provide the four values from the prerequisites, plus the customer ID you want to query.
        </p>
        <pre className="border border-solid border-border block my-6 p-4 rounded-[10px] overflow-auto [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-sm leading-5 whitespace-pre text-nowrap bg-surface">
          <code className="inline [font-family:neueMontrealMono,_'neueMontrealMono_Fallback']">
            {"export GOOGLE_ADS_DEVELOPER_TOKEN=\"your-developer-token\"\nexport GOOGLE_ADS_CLIENT_ID=\"your-oauth-client-id\"\nexport GOOGLE_ADS_CLIENT_SECRET=\"your-oauth-client-secret\"\nexport GOOGLE_ADS_REFRESH_TOKEN=\"your-refresh-token\"\nexport GOOGLE_ADS_LOGIN_CUSTOMER_ID=\"1234567890\"   # MCC, digits only, no dashes"}
          </code>
        </pre>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"Two formatting rules save a lot of debugging: "}
          <strong className="inline text-foreground font-semibold">
            customer IDs are digits only
          </strong>
          {" (strip the dashes Google shows in the UI), and the "}
          <strong className="inline text-foreground font-semibold">
            login customer ID is your manager account
          </strong>
          {" when you operate through an MCC, while the "}
          <strong className="inline text-foreground font-semibold">
            target customer ID
          </strong>
          {" (the child account you're querying) is passed per request."}
        </p>
        <h2 className="block mt-10 mb-4 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading" id="step-5-register-it-with-your-mcp-client">
          Step 5 — Register it with your MCP client
        </h2>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"MCP clients discover servers from a JSON config. For Claude Desktop, that's "}
          <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.375rem] bg-surface">
            claude_desktop_config.json
          </code>
          {"; for Cursor and others the shape is nearly identical. Add the server under "}
          <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.375rem] bg-surface">
            mcpServers
          </code>
          {" and pass the credentials through "}
          <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.375rem] bg-surface">
            env
          </code>
          .
        </p>
        <pre className="border border-solid border-border block my-6 p-4 rounded-[10px] overflow-auto [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-sm leading-5 whitespace-pre text-nowrap bg-surface">
          <code className="inline [font-family:neueMontrealMono,_'neueMontrealMono_Fallback']">
            {"{\n  \"mcpServers\": {\n    \"google-ads\": {\n      \"command\": \"python\",\n      \"args\": [\"-m\", \"google_ads_mcp\"],\n      \"env\": {\n        \"GOOGLE_ADS_DEVELOPER_TOKEN\": \"your-developer-token\",\n        \"GOOGLE_ADS_CLIENT_ID\": \"your-oauth-client-id\",\n        \"GOOGLE_ADS_CLIENT_SECRET\": \"your-oauth-client-secret\",\n        \"GOOGLE_ADS_REFRESH_TOKEN\": \"your-refresh-token\",\n        \"GOOGLE_ADS_LOGIN_CUSTOMER_ID\": \"1234567890\"\n      }\n    }\n  }\n}"}
          </code>
        </pre>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"Restart the client fully (quit and reopen — a window reload often isn't enough). When it relaunches, the Google Ads tools should appear in the client's tool list. If they don't, check the client's MCP log: a missing tool almost always means the server crashed on startup, usually from a malformed credential. For a Claude-specific, screenshot-level version of this step, see the "}
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="/blog/connect-claude-google-ads-mcp">
            connect Claude to Google Ads MCP
          </a>
          {" guide."}
        </p>
        <h2 className="block mt-10 mb-4 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading" id="step-6-run-your-first-gaql-query">
          Step 6 — Run your first GAQL query
        </h2>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"Everything the server reads, it reads through "}
          <strong className="inline text-foreground font-semibold">
            GAQL
          </strong>
          . The beauty of MCP is that you rarely write GAQL by hand; you ask in English and the assistant generates it. But it helps to see one so you understand what's happening under the hood.
        </p>
        <pre className="border border-solid border-border block my-6 p-4 rounded-[10px] overflow-auto [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-sm leading-5 whitespace-pre text-nowrap bg-surface">
          <code className="inline [font-family:neueMontrealMono,_'neueMontrealMono_Fallback']">
            {"SELECT\n  campaign.name,\n  metrics.cost_micros,\n  metrics.conversions,\n  metrics.average_cpc\nFROM campaign\nWHERE segments.date DURING LAST_7_DAYS\nORDER BY metrics.cost_micros DESC"}
          </code>
        </pre>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"A couple of GAQL realities worth knowing: "}
          <strong className="inline text-foreground font-semibold">
            cost is reported in micros
          </strong>
          {" (1,000,000 micros = one unit of your account currency, so divide by a million to get dollars), and "}
          <strong className="inline text-foreground font-semibold">
            dates use named ranges
          </strong>
          {" like "}
          <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.375rem] bg-surface">
            LAST_7_DAYS
          </code>
          {", "}
          <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.375rem] bg-surface">
            LAST_30_DAYS
          </code>
          {", or explicit "}
          <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.375rem] bg-surface">
            BETWEEN '2026-05-01' AND '2026-05-31'
          </code>
          . A good MCP client handles the micros conversion for you; if your numbers look 1,000,000× too big, that's why.
        </p>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"In your client, just type: "}
          <em className="inline italic">
            "Show me my top 5 campaigns by spend in the last 7 days, with conversions and CPA."
          </em>
          {" The assistant will compose a GAQL query close to the one above, run it through the server, and return a clean table."}
        </p>
        <h2 className="block mt-10 mb-4 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading" id="troubleshooting-the-common-failures">
          Troubleshooting the common failures
        </h2>
        <div className="block my-8 overflow-auto">
          <table className="table text-sm leading-5 [border-collapse:collapse] [border-spacing:2px] w-full">
            <thead className="table-header-group align-middle [border-collapse:collapse] [border-spacing:2px]">
              <tr className="border-b border-solid border-b-border table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
                <th className="table-cell py-3 px-4 align-middle font-semibold text-left [border-collapse:collapse] [border-spacing:2px]">
                  Symptom
                </th>
                <th className="table-cell py-3 px-4 align-middle font-semibold text-left [border-collapse:collapse] [border-spacing:2px]">
                  Likely cause
                </th>
                <th className="table-cell py-3 px-4 align-middle font-semibold text-left [border-collapse:collapse] [border-spacing:2px]">
                  Fix
                </th>
              </tr>
            </thead>
            <tbody className="table-row-group align-middle [border-collapse:collapse] [border-spacing:2px]">
              <tr className="border-b border-solid border-b-border table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  Tools don't appear in the client
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  Server crashed on startup
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  Check the MCP log; usually a malformed credential or missing env var
                </td>
              </tr>
              {tile2Data.map((d, i) => <Tile2 key={i} d={d} />)}
              <tr className="table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  Numbers look 1,000,000× too large
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  Cost is in micros
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  {"Divide "}
                  <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-xs leading-[1.0625rem] bg-surface [border-collapse:collapse] [border-spacing:2px]">
                    cost_micros
                  </code>
                  {" by 1,000,000"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 className="block mt-10 mb-4 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading" id="the-read-only-vs-meta-contrast-the-original-frame">
          The read-only-vs-Meta contrast (the original frame)
        </h2>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"The single most useful way to understand Google's MCP is to put it next to Meta's, because the two platforms made "}
          <em className="inline italic">
            opposite
          </em>
          {" bets about where the safety gate lives."}
        </p>
        <figure className="block my-8">
          <img className="w-full h-[30.5625rem] block max-w-full overflow-clip align-middle max-md:h-52 md:max-lg:h-114.5" data-component="image" alt="A comparison of the Google Ads MCP and Meta Ads MCP operating models across access model, tools, auth path, setup friction, and whether the agent can spend, showing Google enforces safety in the API while Meta enforces it via created-paused plus a human gate" src="/assets/cloned/svg/176852a5c715.svg" />
          <figcaption className="block mt-2 text-muted-foreground text-sm leading-5 text-center">
            A comparison of the Google Ads MCP and Meta Ads MCP operating models across access model, tools, auth path, setup friction, and whether the agent can spend, showing Google enforces safety in the API while Meta enforces it via created-paused plus a human gate
          </figcaption>
        </figure>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          <strong className="inline text-foreground font-semibold">
            Meta's bet: write access with a soft gate.
          </strong>
          {" Meta's MCP exposes 29 tools including campaign, ad-set, and ad creation, behind a one-click Business OAuth. Everything an agent "}
          <em className="inline italic">
            creates
          </em>
          {" lands "}
          <strong className="inline text-foreground font-semibold">
            paused
          </strong>
          {", and a human flips the switch — but that's a "}
          <em className="inline italic">
            convention
          </em>
          {", and the CLI companion even creates "}
          <strong className="inline text-foreground font-semibold">
            active
          </strong>
          {" by default unless you pass "}
          <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.375rem] bg-surface">
            --status PAUSED
          </code>
          . The agent can spend; you trust the workflow not to.
        </p>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          <strong className="inline text-foreground font-semibold">
            Google's bet: no write access at all.
          </strong>
          {" The agent reads everything and writes nothing, full stop. There is no \"remember to keep it paused,\" no scope-escalation footgun, no created-active gotcha — because the API rejects the write outright. The safety gate is moved from your discipline into the protocol. As Google's own docs put it, \""}
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="https://www.digitalapplied.com/blog/google-ads-mcp-server-claude-gemini-setup-guide" rel="noopener noreferrer" target="_blank">
            the read-only boundary is the safety model
          </a>
          ."
        </p>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"Which is better depends entirely on what you want the agent to "}
          <em className="inline italic">
            do
          </em>
          :
        </p>
        <div className="block my-8 overflow-auto">
          <table className="table text-sm leading-5 [border-collapse:collapse] [border-spacing:2px] w-full">
            <thead className="table-header-group align-middle [border-collapse:collapse] [border-spacing:2px]">
              <tr className="border-b border-solid border-b-border table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
                <th className="table-cell py-3 px-4 align-middle font-semibold text-left [border-collapse:collapse] [border-spacing:2px]">
                  If you want…
                </th>
                <th className="table-cell py-3 px-4 align-middle font-semibold text-left [border-collapse:collapse] [border-spacing:2px]">
                  Google read-only
                </th>
                <th className="table-cell py-3 px-4 align-middle font-semibold text-left [border-collapse:collapse] [border-spacing:2px]">
                  Meta read-write
                </th>
              </tr>
            </thead>
            <tbody className="table-row-group align-middle [border-collapse:collapse] [border-spacing:2px]">
              <tr className="border-b border-solid border-b-border table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  {"An agent that "}
                  <strong className="inline text-foreground font-semibold [border-collapse:collapse] [border-spacing:2px]">
                    analyzes and recommends
                  </strong>
                  , never touches spend
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  Ideal — safety is guaranteed
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  Possible, but you enforce it
                </td>
              </tr>
              <tr className="border-b border-solid border-b-border table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  {"An agent that "}
                  <strong className="inline text-foreground font-semibold [border-collapse:collapse] [border-spacing:2px]">
                    executes
                  </strong>
                  {" edits end-to-end"}
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  Not possible — writes go through a separate REST workflow
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  Built for it (with created-paused)
                </td>
              </tr>
              <tr className="border-b border-solid border-b-border table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  <strong className="inline text-foreground font-semibold [border-collapse:collapse] [border-spacing:2px]">
                    Lowest blast radius
                  </strong>
                  {" by default"}
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  Wins — structurally can't hurt you
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  Depends on your guardrails
                </td>
              </tr>
              <tr className="table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  <strong className="inline text-foreground font-semibold [border-collapse:collapse] [border-spacing:2px]">
                    Fastest to a live connection
                  </strong>
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  Slower (token + GCP + OAuth)
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  Faster (one OAuth click)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"For ad teams, the practical read is that Google's MCP is a "}
          <strong className="inline text-foreground font-semibold">
            superb diagnostic and reporting brain
          </strong>
          {" that you pair with a separate, audited write path — while Meta's is a single connector that both observes "}
          <em className="inline italic">
            and
          </em>
          {" acts. Neither is strictly better; they imply different agent designs. The full head-to-head — tool-by-tool, setup-by-setup, and which to reach for by use case — is in "}
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="/blog/google-ads-mcp-vs-meta-ads-mcp">
            Google Ads MCP vs Meta Ads MCP
          </a>
          .
        </p>
        <h2 className="block mt-10 mb-4 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading" id="the-connector-landscape-official-isn-t-the-only-option">
          The connector landscape: official isn't the only option
        </h2>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          Google's free server isn't the only Google Ads MCP, and for some teams it isn't the fastest path to value. Because the official server is read-only and carries the developer-token tax, a market of hosted and community connectors has grown around it (
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="https://www.gomarble.ai/ai-tools/mcp/google-ads/" rel="noopener noreferrer" target="_blank">
            GoMarble
          </a>
          {", "}
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="https://www.adspirer.com/blog/why-not-google-free-mcp-server" rel="noopener noreferrer" target="_blank">
            Adspirer
          </a>
          ):
        </p>
        <ul className="block mb-4 ml-6 [list-style-type:disc] list-outside">
          <li className="list-item mb-1 text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              Official Google server
            </strong>
            {" — free, read-only, two tools, full GAQL power. Best when you want zero vendor in the loop and can pay the setup tax once."}
          </li>
          <li className="list-item mb-1 text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              Community forks
            </strong>
            {" (e.g. "}
            <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="https://github.com/google-marketing-solutions/google_ads_mcp" rel="noopener noreferrer" target="_blank">
              google-marketing-solutions/google_ads_mcp
            </a>
            ) — add GAQL-helper tools to improve query accuracy; still read-only, still self-hosted.
          </li>
          <li className="list-item text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              Hosted connectors
            </strong>
            {" (GoMarble, Pipeboard, Adspirer, Composio) — trade a subscription for skipping the developer-token and GCP setup, multi-platform auth (Google "}
            <strong className="inline text-foreground font-semibold">
              and
            </strong>
            {" Meta in one connection), and in some cases a write path Google's own server won't give you."}
          </li>
        </ul>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"Setup time is the wrong headline metric — you connect a Google Ads MCP once, then live with its auth model, data scope, and agent fit for as long as you run it. The full field, ranked by what actually matters (data coverage, agent fit, auth resilience, cost, setup), is in "}
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="/blog/best-mcp-servers-google-ads-ranked">
            Best MCP Servers for Google Ads, Ranked
          </a>
          .
        </p>
        <h2 className="block mt-10 mb-4 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading" id="the-honest-limitations-read-before-you-trust-it">
          The honest limitations (read before you trust it)
        </h2>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          This is where most page-one articles go thin. The consolidated list:
        </p>
        <ol className="block mb-4 ml-6 [list-style-type:decimal] list-outside">
          <li className="list-item mb-1 text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              It cannot do anything.
            </strong>
            {" Worth restating: it's "}
            <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="https://developers.google.com/google-ads/api/docs/developer-toolkit/mcp-server" rel="noopener noreferrer" target="_blank">
              strictly read-only
            </a>
            . Any "the agent optimized my campaigns" workflow needs a separate, non-MCP write path. The MCP recommends; it never executes.
          </li>
          <li className="list-item mb-1 text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              GAQL accuracy isn't free.
            </strong>
            {" With only a "}
            <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.25rem] bg-surface">
              search
            </code>
            {" tool, every answer is a model-written GAQL query. A wrong field name or a missing date segment yields an error or — worse — confidently wrong numbers. Pin date ranges and verify schema; this is why helper-tool forks exist."}
          </li>
          <li className="list-item mb-1 text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              The developer-token gate is real.
            </strong>
            {" Basic access is test-accounts-only and throttled; Standard access takes "}
            <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="https://www.digitalapplied.com/blog/google-ads-mcp-server-claude-gemini-setup-guide" rel="noopener noreferrer" target="_blank">
              1–2 business days
            </a>
            {" to approve. You can't query production data until it clears."}
          </li>
          <li className="list-item mb-1 text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              It can't see your creative.
            </strong>
            {" Like Meta's, the tools read structured fields and metrics, not images, video, or landing-page experience — no judgment on the creative itself, only on its numbers."}
          </li>
          <li className="list-item mb-1 text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              No access to Google's optimization brain.
            </strong>
            {" "}
            <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="/glossary/smart-bidding">
              Smart Bidding
            </a>
            {" internals, Performance Max asset selection, and the auction are off-limits. The agent reads outcomes, not the algorithm."}
          </li>
          <li className="list-item text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              Auth is brittle for solo OAuth.
            </strong>
            {" Refresh tokens can be revoked and force a re-consent; teams should prefer service-account auth, but switching modes means "}
            <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="https://www.digitalapplied.com/blog/google-ads-mcp-server-claude-gemini-setup-guide" rel="noopener noreferrer" target="_blank">
              reconfiguring every client
            </a>
            .
          </li>
        </ol>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"The upside of the read-only design is that limitation #1 makes the rest low-stakes: an agent that can't write can't "}
          <em className="inline italic">
            cost
          </em>
          {" you anything beyond a wrong recommendation you choose to ignore. That's the whole point of where Google put the gate."}
        </p>
        <h2 className="block mt-10 mb-4 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading" id="the-agent-operating-model-the-tools-imply">
          The agent operating model the tools imply
        </h2>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"A two-tool, read-only, GAQL-driven connector implies a very specific agent — a "}
          <strong className="inline text-foreground font-semibold">
            diagnostician, not an operator
          </strong>
          . The loop that follows:
        </p>
        <ol className="block mb-4 ml-6 [list-style-type:decimal] list-outside">
          <li className="list-item mb-1 text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              Connect once, at the account scope you need.
            </strong>
            {" Developer token + OAuth (or service account), Standard access for production. There is no \"scope tier\" decision the way Meta has — read-only is the only mode."}
          </li>
          <li className="list-item mb-1 text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              Ask in plain language; let GAQL do the work.
            </strong>
            {" \"Which campaigns lost "}
            <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="/glossary/impression-share">
              impression share
            </a>
            {" to budget last week?\" becomes a "}
            <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.25rem] bg-surface">
              search
            </code>
            {" query. Always pin the date range and breakdown so the model can't backfill a hallucinated number."}
          </li>
          <li className="list-item text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              Get a recommendation, then act through your own gated write path.
            </strong>
            {" The MCP hands you the diagnosis; a human (or a separate, audited automation) makes the change in Google Ads. Nothing the MCP touches can move spend."}
          </li>
        </ol>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"The point: because the connector gives everyone the same read-only verbs, the value isn't access — it's the judgment in the questions you ask and the discipline of the write path you pair it with. "}
          <strong className="inline text-foreground font-semibold">
            Read access is table stakes; a trustworthy act-on-it workflow is the moat.
          </strong>
        </p>
        <h2 className="block mt-10 mb-4 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading" id="a-real-tiered-gaql-prompt-library">
          A real, tiered GAQL prompt library
        </h2>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"The honest gap in most \"how to use the Google Ads MCP\" content is that it stops at "}
          <em className="inline italic">
            "now you can ask it anything!"
          </em>
          {" — which is useless, because a blank prompt box is paralyzing. So here's the prompt set we actually run, organized by how deep you're going. Think of it as a ladder: triage every day, diagnose when a number moves, decide once a week."}
        </p>
        <figure className="block my-8">
          <img className="w-full h-[29.4375rem] block max-w-full overflow-clip align-middle max-md:h-[12.5625rem] md:max-lg:h-110.5" data-component="image" alt="A three-tier ladder of GAQL prompts for the Google Ads MCP server: Tier 1 triage, Tier 2 diagnose, Tier 3 decide" src="/assets/cloned/svg/a12c57ca840d.svg" />
          <figcaption className="block mt-2 text-muted-foreground text-sm leading-5 text-center">
            A three-tier ladder of GAQL prompts for the Google Ads MCP server: Tier 1 triage, Tier 2 diagnose, Tier 3 decide
          </figcaption>
        </figure>
        <h3 className="block mt-8 mb-3 [font-family:editorialNew,_'editorialNew_Fallback'] text-xl font-medium leading-7 tracking-[-0.5px]" data-component="heading" id="tier-1-triage-your-daily-60-second-read">
          Tier 1 — Triage (your daily 60-second read)
        </h3>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          These are account-level pulse checks. Run them every morning; they tell you whether anything needs attention before you open the dashboard.
        </p>
        <ul className="block mb-4 ml-6 [list-style-type:disc] list-outside">
          {listRowData.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles[i]} />)}
        </ul>
        <h3 className="block mt-8 mb-3 [font-family:editorialNew,_'editorialNew_Fallback'] text-xl font-medium leading-7 tracking-[-0.5px]" data-component="heading" id="tier-2-diagnose-when-a-number-moves-the-wrong-way">
          Tier 2 — Diagnose (when a number moves the wrong way)
        </h3>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"When triage flags something, you segment to find the cause. This is where GAQL's join-like "}
          <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.375rem] bg-surface">
            FROM
          </code>
          {" resources earn their keep."}
        </p>
        <ul className="block mb-4 ml-6 [list-style-type:disc] list-outside">
          <li className="list-item mb-1 text-muted-foreground">
            "For Campaign X, show the search terms that spent money but produced no conversions in the last 14 days."
          </li>
          <li className="list-item mb-1 text-muted-foreground">
            "Break down CPA by device and network for Campaign X over the last 30 days."
          </li>
          <li className="list-item mb-1 text-muted-foreground">
            {"\"Which ad groups in this campaign have a "}
            <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="/glossary/ctr">
              CTR
            </a>
            {" below the campaign average?\""}
          </li>
          <li className="list-item mb-1 text-muted-foreground">
            "Show conversions by hour of day for the last 14 days — when are we wasting budget?"
          </li>
          <li className="list-item text-muted-foreground">
            "List keywords with quality score below 5 that are still spending."
          </li>
        </ul>
        <h3 className="block mt-8 mb-3 [font-family:editorialNew,_'editorialNew_Fallback'] text-xl font-medium leading-7 tracking-[-0.5px]" data-component="heading" id="tier-3-decide-your-weekly-optimization-review">
          Tier 3 — Decide (your weekly optimization review)
        </h3>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          These are cross-entity, ranked questions that turn data into an action plan. The assistant can't apply the changes (read-only), but it can draft them — and a drafted change list is 80% of the work.
        </p>
        <ul className="block mb-4 ml-6 [list-style-type:disc] list-outside">
          {listRowData2.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles2[i]} />)}
        </ul>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"The Tier-3 prompts are the ones that justify the whole setup. They compress what used to be an hour of pivot-tables into a single conversation — and because the output is a "}
          <em className="inline italic">
            proposal
          </em>
          {" you review, the read-only boundary becomes a feature, not a friction."}
        </p>
        <h2 className="block mt-10 mb-4 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading" id="how-soku-fits">
          How Soku fits
        </h2>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"Soku is itself an ad-automation agent with a human-in-the-loop approval model, so it treats Google's read-only MCP as exactly what it's good for — the diagnostic layer — and supplies the part Google's server deliberately leaves out: a "}
          <strong className="inline text-foreground font-semibold">
            gated write path
          </strong>
          {". From the top-level "}
          <strong className="inline text-foreground font-semibold">
            Integrations
          </strong>
          {" entry in the sidebar, the Google Ads card sits under "}
          <em className="inline italic">
            Bring Your Own
          </em>
          {" alongside Meta Ads, GA4, and TikTok, and connecting runs the OAuth flow once."}
        </p>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"After you connect, Soku reads your account the way the MCP does — GAQL under the hood, plain-language questions on top — surfaces the anomalies and recommendations, and then routes any "}
          <em className="inline italic">
            change
          </em>
          {" through an approval gate where a human signs off before a single edit reaches the account. You assign each ad account to one or more brands, so one agent operates a whole client roster without ever pointing the wrong account at the wrong brand. The read-only MCP gives an assistant the Google verbs; the agent layer decides "}
          <em className="inline italic">
            which account
          </em>
          {" belongs to "}
          <em className="inline italic">
            which brand
          </em>
          , keeps a human gate on spend, and enforces the read→diagnose→approve→act discipline above.
        </p>
        <h2 className="block mt-10 mb-4 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading" id="where-to-go-next">
          Where to go next
        </h2>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          This page is the map. For the full treatment of each sub-topic, follow the deep dive that matches your intent:
        </p>
        <ul className="block mb-4 ml-6 [list-style-type:disc] list-outside">
          {listRow2Data.map((d, i) => <ListRow2 key={i} d={d} styles={ListRow2_styles[i]} />)}
        </ul>
        <h2 className="block mt-10 mb-4 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading" id="faq">
          FAQ
        </h2>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          <strong className="inline text-foreground font-semibold">
            What is the Google Ads MCP?
          </strong>
        </p>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"An "}
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="https://developers.google.com/google-ads/api/docs/developer-toolkit/mcp-server" rel="noopener noreferrer" target="_blank">
            official MCP server
          </a>
          {" Google released on April 28, 2026, that exposes the Google Ads API to AI assistants through two core tools — "}
          <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.375rem] bg-surface">
            list_accessible_customers
          </code>
          {" and a GAQL-powered "}
          <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.375rem] bg-surface">
            search
          </code>
          {" — so an agent can query your account in plain language. It is strictly read-only."}
        </p>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          <strong className="inline text-foreground font-semibold">
            Is the Google Ads MCP read-only?
          </strong>
        </p>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"Yes. Per Google's docs it is strictly read-only and \"cannot modify bids, pause campaigns, or create new assets.\" Any write must go through a separate REST workflow outside the MCP. That read-only boundary "}
          <em className="inline italic">
            is
          </em>
          {" the safety model."}
        </p>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          <strong className="inline text-foreground font-semibold">
            How is it different from the Meta Ads MCP?
          </strong>
        </p>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"Google's MCP is read-only with 2 tools and a developer-token + GCP + OAuth setup; Meta's is read-and-write with 29 tools and a one-click Business OAuth. Google moves the safety gate into the API; Meta relies on created-paused plus your discipline. Full comparison "}
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="/blog/google-ads-mcp-vs-meta-ads-mcp">
            here
          </a>
          .
        </p>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          <strong className="inline text-foreground font-semibold">
            What do I need to set it up?
          </strong>
        </p>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"A 22-character developer token (with "}
          <strong className="inline text-foreground font-semibold">
            Standard
          </strong>
          {" access for production — "}
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="https://www.digitalapplied.com/blog/google-ads-mcp-server-claude-gemini-setup-guide" rel="noopener noreferrer" target="_blank">
            1–2 business days
          </a>
          {" to approve), a Google Cloud project with the Ads API enabled, and OAuth or service-account credentials, plus a refresh token minted from the OAuth flow. The step-by-step is in the six setup steps above."}
        </p>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          <strong className="inline text-foreground font-semibold">
            Which AI clients does it work with?
          </strong>
        </p>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"Claude Desktop, Claude Code, Gemini CLI, Cursor, and Windsurf — each with a different config path but the same server logic. For Claude specifically, see the "}
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="/blog/connect-claude-google-ads-mcp">
            connect guide
          </a>
          .
        </p>
      </article>
    </div>
  );
}
