import NavLink, { type NavLinkData } from "../components/nav-link";
import ListRow, { type ListRowData } from "../components/list-row";
import ListRow2, { type ListRow2Data } from "../components/list-row2";
import Tile, { type TileData } from "../components/tile";
import Tile2, { type Tile2Data } from "../components/tile2";
import ListRow3, { type ListRow3Data } from "../components/list-row3";
import ListRow4, { type ListRow4Data } from "../components/list-row4";
import { NavLink_styles, ListRow_styles, ListRow2_styles, Tile2_styles, ListRow_styles2, ListRow_styles3, ListRow3_styles, ListRow4_styles } from "../_styles";
const NavLink_data: NavLinkData[] = [
    { kind: "link", href: "#what-the-meta-ads-mcp-is-in-30-seconds", label: "What the Meta Ads MCP is, in 30 seconds" },
    { kind: "link", href: "#mcp-vs-cli-two-surfaces-two-jobs", label: "MCP vs. CLI: two surfaces, two jobs" },
    { kind: "link", href: "#the-29-tools-by-what-an-agent-actually-does", label: "The 29 tools, by what an agent actually does" },
    { kind: "link", href: "#setup-oauth-replaces-the-app-review-wall", label: "Setup: OAuth replaces the App Review wall" },
    { kind: "link", href: "#before-you-start", label: "Before you start" },
    { kind: "link", href: "#option-a-the-mcp-server-conversational-5-minutes", label: "Option A — the MCP server (conversational, ~5 minutes)" },
    { kind: "link", href: "#option-b-the-cli-deterministic-10-15-minutes", label: "Option B — the CLI (deterministic, ~10–15 minutes)" },
    { kind: "link", href: "#the-one-gotcha-that-can-cost-money", label: "The one gotcha that can cost money" },
    { kind: "link", href: "#rate-limits-in-plain-math", label: "Rate limits, in plain math" },
    { kind: "link", href: "#which-connector-should-you-actually-use", label: "Which connector should you actually use?" },
    { kind: "link", href: "#the-honest-limitations-read-before-you-trust-it", label: "The honest limitations (read before you trust it)" },
    { kind: "link", href: "#what-it-genuinely-unlocks", label: "What it genuinely unlocks" },
    { kind: "link", href: "#why-this-is-a-turning-point-not-a-feature", label: "Why this is a turning point, not a feature" },
    { kind: "link", href: "#the-agent-operating-model-the-tools-imply", label: "The agent operating model the tools imply" },
    { kind: "link", href: "#the-prompt-library-we-actually-run-don-t-copy-a-generic-list", label: "The prompt library we actually run (don't copy a generic list)" },
    { kind: "link", href: "#a-safe-30-day-rollout", label: "A safe 30-day rollout" },
    { kind: "link", href: "#how-soku-fits", label: "How Soku fits" },
    { kind: "link", href: "#where-to-go-next", label: "Where to go next" },
    { kind: "link", href: "#faq", label: "FAQ" },
    { href: "#faq", label: "FAQ" }
];
const ListRow_data: ListRowData[] = [
    { text: "Product catalog (10):", text2: " the heaviest cluster — catalog create, get-catalogs, diagnostics, feed-rules, products, plus product-set and feed operations. Where DTC/commerce teams running large SKU sets get the most leverage." },
    { text: "Insights & benchmarks (7):", text2: " performance trend, anomaly signal, auction-ranking benchmarks, industry benchmark, opportunity score, advertiser context — the reporting and \"is this normal?\" layer." },
    { text: "Dataset & tracking diagnostics (4):", text2: " dataset details, quality, stats, and errors — pixel/CAPI health and event-match quality." },
    { text: "Accounts, pages & assets (3):", text2: " get ad accounts, ad entities, pages-for-business — the discovery layer an agent calls first." }
];
const ListRow2_data: ListRow2Data[] = [
    { text: "A ", text2: "Meta Business Manager", text3: " account with an admin role on the ad account (Business Settings → Accounts → Ad Accounts)." },
    { text: "An ", text2: "MCP-compatible client", text3: ": Claude Desktop or Claude.ai, ChatGPT Plus+, or Cursor for the MCP server; Claude Code / Codex / CI for the CLI." },
    { text: "Marketing API access — the free ", text2: "Development", text3: " tier is enough to start." }
];
const Tile_data: TileData[] = [
    { text: "Claude Desktop", text2: "Settings → Connectors → Add custom connector" },
    { text: "Claude.ai", text2: "Profile → Settings → Integrations → Add integration" },
    { text: "ChatGPT Plus", text2: "Profile → Settings → Connectors → Add MCP server" }
];
const Tile2_data: Tile2Data[] = [
    { text: "Pipeboard", text2: "4", text3: "3", text4: "4", text5: "4", text6: "5", text7: "3.85" },
    { text: "Composio", text2: "3", text3: "4", text4: "4", text5: "3", text6: "2", text7: "3.35" },
    { text: "GoMarble", text2: "2", text3: "4", text4: "3", text5: "5", text6: "1", text7: "2.90" },
    { text: "Flywheel", text2: "2", text3: "3", text4: "3", text5: "4", text6: "4", text7: "2.85" }
];
const ListRow_data2: ListRowData[] = [
    { text: "Hallucinated metrics & false causality.", text2: " A vague prompt invites confident, invented numbers and made-up causes. Always pin the date range and breakdown." },
    { text: "Not for real-time bidding.", text2: " Conversational latency makes sub-second programmatic bidding impractical." },
    { text: "Token overhead.", text2: " The MCP preloads ~55,000 tokens of tool descriptions per session — part of why the CLI exists for high-volume use." },
    { text: "The learning-window trap.", text2: " Editing budgets or audiences more than ~once per day can reset Meta's ~50-event learning phase and hurt delivery." },
    { text: "Compliance risk doesn't vanish.", text2: " Official auth removes token-leak and unofficial-connector ban risk, but policy violations and scope escalation are still on you." }
];
const ListRow_data3: ListRowData[] = [
    { text: "Signal audits on demand.", text2: " _\"Show the matching quality of the CRM dataset over the last 30 days and flag any loss of Purchase events.\"_ Pixel/CAPI health without leaving chat." },
    { text: "Catalog operations at scale.", text2: " Feed-rule checks, item-level visibility issues, product-set management — the 10-tool catalog cluster is built for this." },
    { text: "Cross-account agency rollups.", text2: " Reporting across clients in a single session instead of N dashboards." }
];
const ListRow3_data: ListRow3Data[] = [
    { text: "Signal hygiene:", text2: "Audit each dataset's event match quality over the last 30 days. Flag any Purchase or Lead event-volume drop above 15% week-over-week, and say whether it looks like a pixel or a CAPI problem." },
    { text: "Catalog health:", text2: "List catalogs with feed errors, and any items that are out-of-stock or disapproved but still have active ads pointing to them." },
    { text: "Benchmark gap:", text2: "Compare my CTR, [CPM](/glossary/cpm), and [CPA](/glossary/cpa) to Meta's industry benchmark for [vertical]. Show only the metrics where I'm materially worse, and the campaigns driving the gap." },
    { text: "Anomaly, explained from data only:", text2: "For any campaign with a day-over-day CPM spike above 30% in the last 7 days, pull the auction and delivery diagnostics and give the 2 most likely causes. Do not speculate beyond what the tools return." }
];
const ListRow4_data: ListRow4Data[] = [
    { text: "Understand what it changes", href: "/blog/meta-ads-mcp-guide", label: "What Meta's Official MCP Means for AI Ad Teams", text2: " — the strategic read, the full 29-tool breakdown, and the limitations as a product spec." },
    { text: "Connect through Claude", href: "/blog/connect-claude-meta-ads-mcp", label: "How to Connect Claude to Meta Ads", text2: " — Claude Desktop / Claude.ai / Claude Code, free-tier limits, and prompt patterns that get decisions instead of guesses." },
    { text: "Pick the right connector", href: "/blog/best-mcp-servers-meta-ads-ranked", label: "Best MCP Servers for Meta Ads, Ranked", text2: " — official vs. Pipeboard, Flywheel, Composio, GoMarble, weighted by what actually matters." }
];
/** What The Meta section. */
export default function WhatTheMetaSection({ navLinkData = NavLink_data, listRowData = ListRow_data, listRow2Data = ListRow2_data, tileData = Tile_data, tile2Data = Tile2_data, listRowData2 = ListRow_data2, listRowData3 = ListRow_data3, listRow3Data = ListRow3_data, listRow4Data = ListRow4_data } = {}) {
  return (
    <div className="block relative mt-10 mx-auto max-w-3xl">
      <aside className="block absolute top-0 right-192 mr-16 h-full w-52 max-lg:hidden">
        <div className="w-52 h-[53.3rem] block sticky top-24">
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
            April 29, 2026
          </strong>
          {", Meta shipped an official "}
          <strong className="inline text-foreground font-semibold">
            MCP (Model Context Protocol) server
          </strong>
          {" for advertising at "}
          <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.375rem] bg-surface">
            mcp.facebook.com/ads
          </code>
          {", plus a companion "}
          <strong className="inline text-foreground font-semibold">
            CLI
          </strong>
          {" — opening its ad stack to outside AI assistants for the first time. For a platform that historically funneled every advertiser through Ads Manager or unofficial third-party connectors, this is a posture reversal: an AI agent is now a sanctioned, OAuth-gated, first-party client of your ad account, with read "}
          <strong className="inline text-foreground font-semibold">
            and
          </strong>
          {" write access from day one."}
        </p>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"This is the complete guide to the "}
          <strong className="inline text-foreground font-semibold">
            Meta Ads MCP
          </strong>
          {" — what it is, the 29 tools, MCP vs. CLI, the full setup for both surfaces (scopes, the gotcha that can spend money, rate-limit math), the prompt library we actually run, a safe 30-day rollout, how it stacks against community connectors, the limitations nobody leads with, and the operating model that makes it safe to point at real spend."}
        </p>
        <h2 className="block mt-10 mb-4 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading" id="what-the-meta-ads-mcp-is-in-30-seconds">
          What the Meta Ads MCP is, in 30 seconds
        </h2>
        <ul className="block mb-4 ml-6 [list-style-type:disc] list-outside">
          <li className="list-item mb-1 text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              What shipped:
            </strong>
            {" an official MCP server ("}
            <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.25rem] bg-surface">
              mcp.facebook.com/ads
            </code>
            {") "}
            <strong className="inline text-foreground font-semibold">
              and
            </strong>
            {" a CLI, in open beta, "}
            <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="https://www.gomarble.ai/ai-tools/meta-ads-ai-connectors/" rel="noopener noreferrer" target="_blank">
              free during the beta
            </a>
            {" with no published rate limits yet."}
          </li>
          <li className="list-item mb-1 text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              How big:
            </strong>
            {" "}
            <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="https://pasqualepillitteri.it/en/news/1707/official-meta-ads-mcp-claude-29-tools-2026" rel="noopener noreferrer" target="_blank">
              29 natural-language tools
            </a>
            {" spanning reporting/insights, campaign management, catalog operations, account diagnostics, and dataset/signal quality."}
          </li>
          <li className="list-item mb-1 text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              Why it matters:
            </strong>
            {" auth is a single "}
            <strong className="inline text-foreground font-semibold">
              Meta Business OAuth
            </strong>
            {" click — "}
            <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="https://www.admove.ai/blog/metas-mcp-and-cli-for-advertisers" rel="noopener noreferrer" target="_blank">
              no Developer App, no App Review
            </a>
            {" — cutting setup from days to minutes."}
          </li>
          <li className="list-item text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              The guardrail:
            </strong>
            {" everything an agent "}
            <em className="inline italic">
              creates
            </em>
            {" through the MCP lands "}
            <strong className="inline text-foreground font-semibold">
              paused
            </strong>
            ; a human still flips the switch.
          </li>
        </ul>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"The shift this represents is bigger than \"ask Claude about your ads.\" Meta is the "}
          <strong className="inline text-foreground font-semibold">
            first major ad platform to ship full read-and-write MCP access from day one
          </strong>
          {" — the "}
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="/blog/google-ads-mcp-guide">
            Google Ads MCP
          </a>
          {" is still read-only and requires a Developer App, and Amazon Ads only reached open beta in February 2026 ("}
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="https://www.admove.ai/blog/metas-mcp-and-cli-for-advertisers" rel="noopener noreferrer" target="_blank">
            admove
          </a>
          {"). The direction of travel is a world where the "}
          <em className="inline italic">
            assistant
          </em>
          {", not the platform UI, is the control surface for paid media. For the full strategic read on what that changes for ad teams, see "}
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="/blog/meta-ads-mcp-guide">
            What Meta's Official MCP Means for AI Ad Teams
          </a>
          .
        </p>
        <h2 className="block mt-10 mb-4 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading" id="mcp-vs-cli-two-surfaces-two-jobs">
          MCP vs. CLI: two surfaces, two jobs
        </h2>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"Meta shipped "}
          <em className="inline italic">
            two
          </em>
          {" things, and conflating them is the most common mistake in the early write-ups. They're complementary, not redundant ("}
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="https://www.admove.ai/blog/metas-mcp-and-cli-for-advertisers" rel="noopener noreferrer" target="_blank">
            admove
          </a>
          {", "}
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="https://mcp.directory/blog/meta-ads-cli-mcp" rel="noopener noreferrer" target="_blank">
            mcp.directory
          </a>
          ):
        </p>
        <div className="block my-8 overflow-auto">
          <table className="table text-sm leading-5 [border-collapse:collapse] [border-spacing:2px] w-full">
            <thead className="table-header-group align-middle [border-collapse:collapse] [border-spacing:2px]">
              <tr className="border-b border-solid border-b-border table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
                <th className="table-cell py-3 px-4 align-middle font-semibold text-left [border-collapse:collapse] [border-spacing:2px]" />
                <th className="table-cell py-3 px-4 align-middle font-semibold text-left [border-collapse:collapse] [border-spacing:2px]">
                  <strong className="inline [border-collapse:collapse] [border-spacing:2px]">
                    MCP server
                  </strong>
                </th>
                <th className="table-cell py-3 px-4 align-middle font-semibold text-left [border-collapse:collapse] [border-spacing:2px]">
                  <strong className="inline [border-collapse:collapse] [border-spacing:2px]">
                    CLI
                  </strong>
                </th>
              </tr>
            </thead>
            <tbody className="table-row-group align-middle [border-collapse:collapse] [border-spacing:2px]">
              <tr className="border-b border-solid border-b-border table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  Endpoint
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-xs leading-[1.0625rem] bg-surface [border-collapse:collapse] [border-spacing:2px]">
                    mcp.facebook.com/ads
                  </code>
                  {" (hosted by Meta)"}
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  {"local "}
                  <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-xs leading-[1.0625rem] bg-surface [border-collapse:collapse] [border-spacing:2px]">
                    meta
                  </code>
                  {" binary (pip install)"}
                </td>
              </tr>
              <tr className="border-b border-solid border-b-border table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  Clients
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  Claude Desktop / Web, ChatGPT, Cursor
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  Claude Code, Codex, CI pipelines
                </td>
              </tr>
              <tr className="border-b border-solid border-b-border table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  Best at
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  Conversational analysis, anomaly hunting, ad-hoc reporting
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  Deterministic bulk operations, scripted/repeatable edits
                </td>
              </tr>
              <tr className="border-b border-solid border-b-border table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  Setup
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  ~5–7 min (OAuth in browser)
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  {"~10–15 min (install + "}
                  <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-xs leading-[1.0625rem] bg-surface [border-collapse:collapse] [border-spacing:2px]">
                    meta auth login
                  </code>
                  )
                </td>
              </tr>
              <tr className="border-b border-solid border-b-border table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  Creative files
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  {"Needs "}
                  <strong className="inline text-foreground font-semibold [border-collapse:collapse] [border-spacing:2px]">
                    public URLs
                  </strong>
                  {" (no local files)"}
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  Direct filesystem access
                </td>
              </tr>
              <tr className="table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  Create defaults to
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  <strong className="inline text-foreground font-semibold [border-collapse:collapse] [border-spacing:2px]">
                    Paused
                  </strong>
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  <strong className="inline text-foreground font-semibold [border-collapse:collapse] [border-spacing:2px]">
                    Active
                  </strong>
                  {" — you must pass "}
                  <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-xs leading-[1.0625rem] bg-surface [border-collapse:collapse] [border-spacing:2px]">
                    --status PAUSED
                  </code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"The emerging best practice is "}
          <strong className="inline text-foreground font-semibold">
            "MCP for analysis, CLI for execution"
          </strong>
          {": use the conversational MCP to find the underperforming ad sets, then hand a deterministic batch command to the CLI to act on them — with everything still landing paused for approval. That last row is the one that can cost money: the MCP creates paused, but the CLI creates "}
          <strong className="inline text-foreground font-semibold">
            active by default
          </strong>
          . The step-by-step for both surfaces — endpoints, scopes, the paused-vs-active gotcha, and the rate-limit math — is in the setup sections below.
        </p>
        <h2 className="block mt-10 mb-4 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading" id="the-29-tools-by-what-an-agent-actually-does">
          The 29 tools, by what an agent actually does
        </h2>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"The connector's "}
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="https://pasqualepillitteri.it/en/news/1707/official-meta-ads-mcp-claude-29-tools-2026" rel="noopener noreferrer" target="_blank">
            29 tools group into five areas
          </a>
          {". The weighting is telling — two-thirds of the toolset is reporting and catalog operations, not campaign writes. Meta is optimizing first for "}
          <em className="inline italic">
            commerce
          </em>
          {" advertising and "}
          <em className="inline italic">
            analysis
          </em>
          , and only cautiously for autonomous campaign creation.
        </p>
        <figure className="block my-8">
          <img className="w-full h-96 block max-w-full overflow-clip align-middle max-md:h-41 md:max-lg:h-90" data-component="image" alt="The 29 official Meta Ads MCP tools split across five capability areas: product catalog 10, insights and benchmarks 7, campaign management 5, dataset diagnostics 4, accounts and pages 3" src="/assets/cloned/svg/4c071a82c22f.svg" />
          <figcaption className="block mt-2 text-muted-foreground text-sm leading-5 text-center">
            The 29 official Meta Ads MCP tools split across five capability areas: product catalog 10, insights and benchmarks 7, campaign management 5, dataset diagnostics 4, accounts and pages 3
          </figcaption>
        </figure>
        <ul className="block mb-4 ml-6 [list-style-type:disc] list-outside">
          <li className="list-item mb-1 text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              Campaign management (5):
            </strong>
            {" "}
            <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.25rem] bg-surface">
              ads_create_campaign
            </code>
            {", "}
            <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.25rem] bg-surface">
              ads_create_ad_set
            </code>
            {", "}
            <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.25rem] bg-surface">
              ads_create_ad
            </code>
            {", "}
            <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.25rem] bg-surface">
              ads_update_entity
            </code>
            {", "}
            <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.25rem] bg-surface">
              ads_activate_entity
            </code>
            {" — build and edit the campaign tree, change budgets/status. "}
            <em className="inline italic">
              Every create lands paused.
            </em>
          </li>
          {listRowData.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles[i]} />)}
        </ul>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"This is the real Marketing API verb set, not a \"lite\" demo subset — the same "}
          <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.375rem] bg-surface">
            ads_*
          </code>
          {" operations agent platforms already wrap, now first-party and OAuth-gated. That's why the guardrails below matter more than the novelty."}
        </p>
        <h2 className="block mt-10 mb-4 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading" id="setup-oauth-replaces-the-app-review-wall">
          Setup: OAuth replaces the App Review wall
        </h2>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"The single most consequential change is authentication. The old path was register a Developer App → submit to App Review → wait days. The new path is a "}
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="https://www.admove.ai/blog/metas-mcp-and-cli-for-advertisers" rel="noopener noreferrer" target="_blank">
            Meta Business OAuth dialog
          </a>
          {" with three granular scope tiers — "}
          <strong className="inline text-foreground font-semibold">
            read-only
          </strong>
          {", "}
          <strong className="inline text-foreground font-semibold">
            read/write
          </strong>
          {", and "}
          <strong className="inline text-foreground font-semibold">
            read/write/financial
          </strong>
          {" — granted "}
          <strong className="inline text-foreground font-semibold">
            per user, per account
          </strong>
          , with no long-lived tokens to store or rotate.
        </p>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"Both surfaces authenticate through the same dialog, so the whole thing takes minutes rather than days. The next five sections are the full walkthrough — prerequisites, the MCP path, the CLI path, the one gotcha that can spend real money, and the rate-limit math. If you're on Claude specifically (Desktop, Claude.ai, Claude Code, free-tier limits, prompt patterns), "}
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="/blog/connect-claude-meta-ads-mcp">
            How to Connect Claude to Meta Ads
          </a>
          {" covers that client end to end."}
        </p>
        <h2 className="block mt-10 mb-4 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading" id="before-you-start">
          Before you start
        </h2>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          You need (
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="https://heyoz.com/blogs/official-meta-ads-mcp-setup-guide-claude-free" rel="noopener noreferrer" target="_blank">
            heyOz
          </a>
          ):
        </p>
        <ul className="block mb-4 ml-6 [list-style-type:disc] list-outside">
          {listRow2Data.map((d, i) => <ListRow2 key={i} d={d} styles={ListRow2_styles[i]} />)}
        </ul>
        <h2 className="block mt-10 mb-4 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading" id="option-a-the-mcp-server-conversational-5-minutes">
          Option A — the MCP server (conversational, ~5 minutes)
        </h2>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          This is the path for analysis, reporting, and ad-hoc questions in chat. Where you add the connector depends on your client:
        </p>
        <div className="block my-8 overflow-auto">
          <table className="table text-sm leading-5 [border-collapse:collapse] [border-spacing:2px] w-full">
            <thead className="table-header-group align-middle [border-collapse:collapse] [border-spacing:2px]">
              <tr className="border-b border-solid border-b-border table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
                <th className="table-cell py-3 px-4 align-middle font-semibold text-left [border-collapse:collapse] [border-spacing:2px]">
                  Client
                </th>
                <th className="table-cell py-3 px-4 align-middle font-semibold text-left [border-collapse:collapse] [border-spacing:2px]">
                  Where to add the connector
                </th>
              </tr>
            </thead>
            <tbody className="table-row-group align-middle [border-collapse:collapse] [border-spacing:2px]">
              {tileData.map((d, i) => <Tile key={i} d={d} />)}
              <tr className="table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  Cursor / config-file
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  {"edit "}
                  <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-xs leading-[1.0625rem] bg-surface [border-collapse:collapse] [border-spacing:2px]">
                    ~/.cursor/mcp.json
                  </code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          Then five steps:
        </p>
        <ol className="block mb-4 ml-6 [list-style-type:decimal] list-outside">
          <li className="list-item mb-1 text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              Confirm Business access
            </strong>
            {" at business.facebook.com — admin on the ad accounts you want to use."}
          </li>
          <li className="list-item mb-1 text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              Open your client's connector settings
            </strong>
            {" (see the table above)."}
          </li>
          <li className="list-item mb-1 text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              Add the official endpoint
            </strong>
            {" "}
            <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.25rem] bg-surface">
              https://mcp.facebook.com/ads
            </code>
            {" with transport "}
            <strong className="inline text-foreground font-semibold">
              HTTP
            </strong>
            .
          </li>
          <li className="list-item mb-1 text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              Authenticate via OAuth
            </strong>
            {" — complete the Meta Business login and pick your scope (read-only, read/write, or read/write/financial), granted per user, per account. Start read-only."}
          </li>
          <li className="list-item text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              Test it
            </strong>
            {" — ask "}
            <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.25rem] bg-surface">
              List all my active Meta ad accounts and the campaigns currently running.
            </code>
            {" Accounts should appear within seconds."}
          </li>
        </ol>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          Config-file clients (Cursor, etc.) use this entry:
        </p>
        <pre className="border border-solid border-border block my-6 p-4 rounded-[10px] overflow-auto [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-sm leading-5 whitespace-pre text-nowrap bg-surface">
          <code className="inline [font-family:neueMontrealMono,_'neueMontrealMono_Fallback']">
            {"{ \"mcpServers\": { \"meta-ads\": { \"type\": \"http\", \"url\": \"https://mcp.facebook.com/ads\" } } }"}
          </code>
        </pre>
        <h2 className="block mt-10 mb-4 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading" id="option-b-the-cli-deterministic-10-15-minutes">
          Option B — the CLI (deterministic, ~10–15 minutes)
        </h2>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          This is the path for scripted, repeatable, or bulk operations (Claude Code, Codex, CI) (
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="https://adsuploader.com/blog/meta-ads-mcp-vs-cli" rel="noopener noreferrer" target="_blank">
            adsuploader
          </a>
          ):
        </p>
        <pre className="border border-solid border-border block my-6 p-4 rounded-[10px] overflow-auto [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-sm leading-5 whitespace-pre text-nowrap bg-surface">
          <code className="inline [font-family:neueMontrealMono,_'neueMontrealMono_Fallback']">
            {"# Python 3.12+ required\npip install meta-ads        # or: uv pip install meta-ads\nmeta ads whoami             # confirm the connection"}
          </code>
        </pre>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"The CLI authenticates through Meta Business OAuth as well, and is built as a defined sequence an AI assistant can work through — so Claude Code can run the install and auth for you. The rule of thumb: "}
          <strong className="inline text-foreground font-semibold">
            MCP for analysis, CLI for execution.
          </strong>
        </p>
        <h2 className="block mt-10 mb-4 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading" id="the-one-gotcha-that-can-cost-money">
          The one gotcha that can cost money
        </h2>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"The two surfaces differ on a detail that matters: through the "}
          <strong className="inline text-foreground font-semibold">
            MCP
          </strong>
          {", entities an agent creates land "}
          <strong className="inline text-foreground font-semibold">
            paused
          </strong>
          {". Through the "}
          <strong className="inline text-foreground font-semibold">
            CLI
          </strong>
          {", resources are created "}
          <strong className="inline text-foreground font-semibold">
            active by default
          </strong>
          {" — you must pass "}
          <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.375rem] bg-surface">
            --status PAUSED
          </code>
          {" explicitly in automated flows ("}
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="https://adsuploader.com/blog/meta-ads-mcp-vs-cli" rel="noopener noreferrer" target="_blank">
            adsuploader
          </a>
          ). Never let an unattended CLI job create campaigns without that flag, or you can ship live spend with no review.
        </p>
        <h2 className="block mt-10 mb-4 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading" id="rate-limits-in-plain-math">
          Rate limits, in plain math
        </h2>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"Development access is "}
          <strong className="inline text-foreground font-semibold">
            60 score/hour
          </strong>
          {" — a read costs 1 point, a write costs 3. So a single \"scan all my campaigns\" prompt that pulls 40 entities burns ~40 of your 60 points; two of those in an hour and you're throttled. For real workloads, apply for "}
          <strong className="inline text-foreground font-semibold">
            Standard access (9,000 score/hour)
          </strong>
          {" through Business Suite ("}
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="https://heyoz.com/blogs/official-meta-ads-mcp-setup-guide-claude-free" rel="noopener noreferrer" target="_blank">
            heyOz
          </a>
          ). The MCP also preloads ~55,000 tokens of tool descriptions per session, so high-volume daily use is cheaper on the CLI.
        </p>
        <h2 className="block mt-10 mb-4 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading" id="which-connector-should-you-actually-use">
          Which connector should you actually use?
        </h2>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"The official server isn't the only Meta Ads MCP, and it isn't always the fastest to set up. Before April 29, agent access meant third-party servers — Pipeboard, Flywheel, Composio, GoMarble — typically $25–$99/month per account, on token-based auth, with a documented history of account restrictions. The fastest options are often the riskiest: "}
          <strong className="inline text-foreground font-semibold">
            unverified
          </strong>
          {" connectors run on "}
          <em className="inline italic">
            your
          </em>
          {" personal access token and fire unthrottled API calls unless you add limits yourself."}
        </p>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          Setup time is the wrong headline metric — you connect a Meta Ads MCP once, then live with the auth model, ban risk, and agent fit for as long as you run it. When you re-rank the field by what actually matters (account safety 35%, tool coverage 25%, agent fit 20%, cost 10%, setup time only 10%), the order flips:
        </p>
        <div className="block my-8 overflow-auto">
          <table className="table text-sm leading-5 [border-collapse:collapse] [border-spacing:2px] w-full">
            <thead className="table-header-group align-middle [border-collapse:collapse] [border-spacing:2px]">
              <tr className="border-b border-solid border-b-border table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
                <th className="table-cell py-3 px-4 align-middle font-semibold text-left [border-collapse:collapse] [border-spacing:2px]">
                  Server
                </th>
                <th className="table-cell py-3 px-4 align-middle font-semibold text-left [border-collapse:collapse] [border-spacing:2px]">
                  Safety
                </th>
                <th className="table-cell py-3 px-4 align-middle font-semibold text-left [border-collapse:collapse] [border-spacing:2px]">
                  Coverage
                </th>
                <th className="table-cell py-3 px-4 align-middle font-semibold text-left [border-collapse:collapse] [border-spacing:2px]">
                  Agent fit
                </th>
                <th className="table-cell py-3 px-4 align-middle font-semibold text-left [border-collapse:collapse] [border-spacing:2px]">
                  Cost
                </th>
                <th className="table-cell py-3 px-4 align-middle font-semibold text-left [border-collapse:collapse] [border-spacing:2px]">
                  Setup
                </th>
                <th className="table-cell py-3 px-4 align-middle font-semibold text-left [border-collapse:collapse] [border-spacing:2px]">
                  <strong className="inline [border-collapse:collapse] [border-spacing:2px]">
                    Weighted
                  </strong>
                </th>
              </tr>
            </thead>
            <tbody className="table-row-group align-middle [border-collapse:collapse] [border-spacing:2px]">
              <tr className="border-b border-solid border-b-border table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  <strong className="inline text-foreground font-semibold [border-collapse:collapse] [border-spacing:2px]">
                    Meta MCP (official)
                  </strong>
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  5
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  5
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  3
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  5
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  4
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  <strong className="inline text-foreground font-semibold [border-collapse:collapse] [border-spacing:2px]">
                    4.55
                  </strong>
                </td>
              </tr>
              {tile2Data.map((d, i) => <Tile2 key={i} d={d} styles={Tile2_styles[i]} />)}
            </tbody>
          </table>
        </div>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"The official server wins once safety and coverage carry their real weight — free, OAuth, no ban risk, full read+write. A third-party connector still earns its place when you need Meta "}
          <strong className="inline text-foreground font-semibold">
            and
          </strong>
          {" Google in one connection (Pipeboard) or open-source transparency (GoMarble). The full methodology, the verified-vs-unverified split, and a pick-by-profile guide are in "}
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="/blog/best-mcp-servers-meta-ads-ranked">
            Best MCP Servers for Meta Ads, Ranked by Setup Time
          </a>
          .
        </p>
        <h2 className="block mt-10 mb-4 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading" id="the-honest-limitations-read-before-you-trust-it">
          The honest limitations (read before you trust it)
        </h2>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          This is where most page-one articles go thin. The consolidated honest list (
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="https://www.getpassionfruit.com/blog/meta-ads-claude-mcp-what-it-actually-does" rel="noopener noreferrer" target="_blank">
            Passionfruit
          </a>
          {", "}
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="https://www.scalemate.co/blog/best-mcp-servers-meta-google-ads" rel="noopener noreferrer" target="_blank">
            Scalemate
          </a>
          ):
        </p>
        <ol className="block mb-4 ml-6 [list-style-type:decimal] list-outside">
          <li className="list-item mb-1 text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              It can't see your creative.
            </strong>
            {" The tools read text fields, not images or video — no judgment on hook, thumbnail, or mobile render. The MCP also needs "}
            <strong className="inline text-foreground font-semibold">
              public URLs
            </strong>
            {" for assets; only the CLI has filesystem access."}
          </li>
          <li className="list-item mb-1 text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              No access to Meta's optimization brain.
            </strong>
            {" Advantage+, the bidding algorithm, and audience-expansion internals are off-limits. The agent operates the "}
            <em className="inline italic">
              structure
            </em>
            , not the auction.
          </li>
          {listRowData2.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles2[i]} />)}
        </ol>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"The recommended posture: "}
          <strong className="inline text-foreground font-semibold">
            read-only for the first ~30 days
          </strong>
          , batch writes only after you've watched the agent's recommendations, and a human approval gate on every write — exactly how created-paused is designed to be used.
        </p>
        <h2 className="block mt-10 mb-4 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading" id="what-it-genuinely-unlocks">
          What it genuinely unlocks
        </h2>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          Synthesizing the use cases that hold up across the early field reports (
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="https://www.getpassionfruit.com/blog/meta-ads-claude-mcp-what-it-actually-does" rel="noopener noreferrer" target="_blank">
            Passionfruit
          </a>
          {", "}
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="https://www.admove.ai/blog/metas-mcp-and-cli-for-advertisers" rel="noopener noreferrer" target="_blank">
            admove
          </a>
          ):
        </p>
        <ul className="block mb-4 ml-6 [list-style-type:disc] list-outside">
          <li className="list-item mb-1 text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              Morning triage in one prompt.
            </strong>
            {" _\"For each connected account, summarize active campaigns with "}
            <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="/glossary/roas">
              ROAS
            </a>
            {" below 2, frequency above 3.5, and "}
            <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="/glossary/ctr">
              CTR
            </a>
            {" down 20% vs. the 7-day average.\"_ A 45-minute manual report becomes a 15-minute conversation."}
          </li>
          {listRowData3.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles3[i]} />)}
        </ul>
        <h2 className="block mt-10 mb-4 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading" id="why-this-is-a-turning-point-not-a-feature">
          Why this is a turning point, not a feature
        </h2>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"Meta is the "}
          <strong className="inline text-foreground font-semibold">
            first major ad platform to ship full read-and-write MCP access from day one
          </strong>
          . Google Ads' MCP still requires a Developer App, and Amazon Ads reached open beta in February 2026 (
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="https://www.admove.ai/blog/metas-mcp-and-cli-for-advertisers" rel="noopener noreferrer" target="_blank">
            admove
          </a>
          ). The direction of travel is a unified, multi-platform management layer where the _assistant_ — not the platform UI — is the control surface for paid media. When every major network exposes an official MCP, the durable advantage shifts from "who has API access" to "whose agent uses it well, safely, and with the right judgment layer on top."
        </p>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          That judgment layer is the whole game, and it's where the limitations list above becomes a product spec: an agent that pins date ranges, refuses to over-edit inside the learning window, keeps a human gate on spend, and knows it can't see the creative is worth far more than one that just calls the tools.
        </p>
        <h2 className="block mt-10 mb-4 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading" id="the-agent-operating-model-the-tools-imply">
          The agent operating model the tools imply
        </h2>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"With two-thirds of the tools in reporting and catalog and only five write operations — all of which create paused — the connector is built for a "}
          <strong className="inline text-foreground font-semibold">
            read-heavy, write-gated
          </strong>
          {" agent, not an autopilot. The loop that follows:"}
        </p>
        <ol className="block mb-4 ml-6 [list-style-type:decimal] list-outside">
          <li className="list-item mb-1 text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              Connect at read-only scope first.
            </strong>
            {" OAuth only, no financial scope, one account. Let the agent "}
            <em className="inline italic">
              observe
            </em>
            {" before it touches anything."}
          </li>
          <li className="list-item mb-1 text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              Plan through the MCP.
            </strong>
            {" Pull anomalies — ROAS/frequency/CTR drift, delivery dips, signal loss — and pin every date range and breakdown so the model can't backfill a hallucinated number."}
          </li>
          <li className="list-item text-muted-foreground">
            <strong className="inline text-foreground font-semibold">
              Review, then act through the CLI.
            </strong>
            {" A human approves; the agent issues a deterministic batch edit; every created entity lands paused; nothing edits a budget or audience more than once a day."}
          </li>
        </ol>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"A safe 30-day version — Observe (days 1–10, read-only) → Propose (11–20, drafts only) → Operate (21–30+, approved playbooks, still paused, still one edit/day) — is laid out below. The point: the MCP gives everyone the same verbs, so the value is the judgment around them. "}
          <strong className="inline text-foreground font-semibold">
            Tool access is table stakes; disciplined use is the moat.
          </strong>
        </p>
        <h2 className="block mt-10 mb-4 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading" id="the-prompt-library-we-actually-run-don-t-copy-a-generic-list">
          The prompt library we actually run (don't copy a generic list)
        </h2>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"Most setup guides hand you a flat list of prompts. The problem with that list is it produces "}
          <em className="inline italic">
            data
          </em>
          {", not "}
          <em className="inline italic">
            decisions
          </em>
          {", and the vague ones invite the model to invent confident numbers. These are the prompts we actually run, organized by the "}
          <strong className="inline text-foreground font-semibold">
            read → diagnose → act
          </strong>
          {" loop. Two rules baked into every one: "}
          <strong className="inline text-foreground font-semibold">
            pin the date range and breakdown
          </strong>
          {", and "}
          <strong className="inline text-foreground font-semibold">
            keep writes gated
          </strong>
          .
        </p>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          <strong className="inline text-foreground font-semibold">
            Tier 1 — read-only triage (safe on day one):
          </strong>
        </p>
        <ul className="block mb-4 ml-6 [list-style-type:disc] list-outside">
          <li className="list-item mb-1 text-muted-foreground">
            <em className="inline italic">
              Watchlist, not advice:
            </em>
            {" "}
            <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.25rem] bg-surface">
              Across all connected accounts, list campaigns from the last 7 days with ROAS below [target], frequency above 3.5, OR CTR down more than 20% vs the prior 7 days. Sort by spend. Don't recommend changes — just the watchlist with the numbers.
            </code>
          </li>
          <li className="list-item mb-1 text-muted-foreground">
            <em className="inline italic">
              Pacing check:
            </em>
            {" "}
            <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.25rem] bg-surface">
              For each active campaign, compare yesterday's spend to its daily budget and its 7-day average. Flag anything pacing above 120% or below 60%, with the dollar variance.
            </code>
          </li>
          <li className="list-item text-muted-foreground">
            <em className="inline italic">
              Creative fatigue:
            </em>
            {" "}
            <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.25rem] bg-surface">
              List ads where frequency is above 3 and CTR has declined for 3+ consecutive days in the last 14 days (use that exact window). Show the CTR trend per ad.
            </code>
            {" When the check flags a fatigued winner, refresh it fast with new variants — see our roundup of the "}
            <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="/blog/best-ai-tools-meta-ad-creatives">
              {"best AI tools for Facebook & Instagram ad creatives"}
            </a>
            .
          </li>
        </ul>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          <strong className="inline text-foreground font-semibold">
            Tier 2 — diagnosis (still read-only, deeper):
          </strong>
        </p>
        <ul className="block mb-4 ml-6 [list-style-type:disc] list-outside">
          {listRow3Data.map((d, i) => <ListRow3 key={i} d={d} styles={ListRow3_styles[i]} />)}
        </ul>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          <strong className="inline text-foreground font-semibold">
            Tier 3 — gated actions (writes, human-approved, created paused):
          </strong>
        </p>
        <ul className="block mb-4 ml-6 [list-style-type:disc] list-outside">
          <li className="list-item mb-1 text-muted-foreground">
            <em className="inline italic">
              Test, don't ship:
            </em>
            {" "}
            <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.25rem] bg-surface">
              Draft (paused) a duplicate of [winning ad set] with budget capped at [X] for audience [Y]. Show me the diff before you create it, and do not activate anything.
            </code>
          </li>
          <li className="list-item text-muted-foreground">
            <em className="inline italic">
              Reallocation as a proposal:
            </em>
            {" "}
            <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.25rem] bg-surface">
              Propose a budget reallocation across [campaigns] that holds total spend flat but shifts toward ROAS above [target]. Output a change list for my approval — at most one budget edit per campaign per day.
            </code>
          </li>
        </ul>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          The "one edit per day" rule isn't fussiness: editing budgets or audiences more than once a day can reset Meta's ~50-event learning phase and hurt delivery.
        </p>
        <h2 className="block mt-10 mb-4 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading" id="a-safe-30-day-rollout">
          A safe 30-day rollout
        </h2>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          Connecting in five minutes is easy; trusting an agent with spend should take longer. The rollout we recommend:
        </p>
        <div className="block my-8 overflow-auto">
          <table className="table text-sm leading-5 [border-collapse:collapse] [border-spacing:2px] w-full">
            <thead className="table-header-group align-middle [border-collapse:collapse] [border-spacing:2px]">
              <tr className="border-b border-solid border-b-border table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
                <th className="table-cell py-3 px-4 align-middle font-semibold text-left [border-collapse:collapse] [border-spacing:2px]">
                  Phase
                </th>
                <th className="table-cell py-3 px-4 align-middle font-semibold text-left [border-collapse:collapse] [border-spacing:2px]">
                  Days
                </th>
                <th className="table-cell py-3 px-4 align-middle font-semibold text-left [border-collapse:collapse] [border-spacing:2px]">
                  Scope
                </th>
                <th className="table-cell py-3 px-4 align-middle font-semibold text-left [border-collapse:collapse] [border-spacing:2px]">
                  What the agent does
                </th>
              </tr>
            </thead>
            <tbody className="table-row-group align-middle [border-collapse:collapse] [border-spacing:2px]">
              <tr className="border-b border-solid border-b-border table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  Observe
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  1–10
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  Read-only
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  Tier 1 + 2 prompts only; you compare its reads against Ads Manager to build trust
                </td>
              </tr>
              <tr className="border-b border-solid border-b-border table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  Propose
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  11–20
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  Read/write
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  {"Tier 3 as "}
                  <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                    drafts
                  </em>
                  {" — agent proposes, you approve every change in Ads Manager"}
                </td>
              </tr>
              <tr className="table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  Operate
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  21–30+
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  Read/write
                </td>
                <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                  Agent executes approved playbooks; writes still land paused, still one edit/day
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"Never grant the "}
          <strong className="inline text-foreground font-semibold">
            financial
          </strong>
          {" scope unless a workflow genuinely needs it."}
        </p>
        <h2 className="block mt-10 mb-4 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading" id="how-soku-fits">
          How Soku fits
        </h2>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"Soku is itself an ad-automation agent with a human-in-the-loop approval model, so it ships the OAuth-first model as a one-time connect: from the top-level "}
          <strong className="inline text-foreground font-semibold">
            Integrations
          </strong>
          {" entry in the sidebar, the Meta Ads card sits under "}
          <em className="inline italic">
            Bring Your Own
          </em>
          {" alongside Google Ads, GA4, and TikTok, and connecting is a single "}
          <strong className="inline text-foreground font-semibold">
            Connect
          </strong>
          {" click that runs the Meta Business OAuth flow — no Developer App, no token to paste."}
        </p>
        <figure className="block my-8">
          <img className="w-full h-[23.3125rem] block max-w-full overflow-clip align-middle max-md:h-[9.9375rem] md:max-lg:h-87.5" data-component="image" alt="The Soku Integrations page with the Meta Ads card and a Connect button" src="/assets/cloned/images/f63a43508a45.png" />
          <figcaption className="block mt-2 text-muted-foreground text-sm leading-5 text-center">
            The Soku Integrations page with the Meta Ads card and a Connect button
          </figcaption>
        </figure>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"The half that matters for agencies is what happens "}
          <em className="inline italic">
            after
          </em>
          {" you connect: Soku's "}
          <em className="inline italic">
            Manage Meta Ads
          </em>
          {" dialog lets you assign each ad account to one or more brands, so one agent operates a whole client roster without ever pointing the wrong account at the wrong brand — the cross-account-confusion risk the raw connector leaves on you. The connector gives an assistant the Meta verbs; the agent layer decides "}
          <em className="inline italic">
            which account
          </em>
          {" belongs to "}
          <em className="inline italic">
            which brand
          </em>
          , keeps a human gate on spend, and enforces the read→diagnose→act discipline above.
        </p>
        <h2 className="block mt-10 mb-4 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading" id="where-to-go-next">
          Where to go next
        </h2>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          This page is the map. For the full treatment of each sub-topic, follow the deep dive that matches your intent:
        </p>
        <ul className="block mb-4 ml-6 [list-style-type:disc] list-outside">
          {listRow4Data.map((d, i) => <ListRow4 key={i} d={d} styles={ListRow4_styles[i]} />)}
        </ul>
        <h2 className="block mt-10 mb-4 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading" id="faq">
          FAQ
        </h2>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          <strong className="inline text-foreground font-semibold">
            What is the Meta Ads MCP?
          </strong>
        </p>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          An official MCP server (
          <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.375rem] bg-surface">
            mcp.facebook.com/ads
          </code>
          ) and CLI Meta shipped on April 29, 2026, exposing 29 natural-language tools that let an AI assistant read and operate your Meta ad account through a single Meta Business OAuth connection — no Developer App.
        </p>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          <strong className="inline text-foreground font-semibold">
            Is the Meta Ads MCP free?
          </strong>
        </p>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"Yes — "}
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="https://www.gomarble.ai/ai-tools/meta-ads-ai-connectors/" rel="noopener noreferrer" target="_blank">
            free during the open beta
          </a>
          , with no end date or post-beta pricing announced and no published rate limits during testing.
        </p>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          <strong className="inline text-foreground font-semibold">
            MCP or CLI — which should I use?
          </strong>
        </p>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          MCP for conversational analysis (Claude Desktop/Web, ChatGPT, Cursor); CLI for deterministic, scripted, or bulk operations (Claude Code, Codex, CI). Most teams run both.
        </p>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          <strong className="inline text-foreground font-semibold">
            Do I need a Developer App or App Review?
          </strong>
        </p>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          No. Both the MCP and CLI authenticate through Meta Business OAuth — the old Developer App + App Review path is gone.
        </p>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          <strong className="inline text-foreground font-semibold">
            Why did my agent create a live campaign I didn't approve?
          </strong>
        </p>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"Almost certainly the CLI, which creates entities "}
          <strong className="inline text-foreground font-semibold">
            active
          </strong>
          {" by default. Add "}
          <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.375rem] bg-surface">
            --status PAUSED
          </code>
          {" to automated flows. The MCP creates paused."}
        </p>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          <strong className="inline text-foreground font-semibold">
            Is the official MCP better than third-party connectors?
          </strong>
        </p>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"On a weighted score that prices in account safety and tool coverage, yes (4.55 vs 3.85 for the runner-up). Third-party connectors still win for Meta + Google in one connection (Pipeboard) or open-source transparency (GoMarble). Full ranking "}
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="/blog/best-mcp-servers-meta-ads-ranked">
            here
          </a>
          .
        </p>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          <strong className="inline text-foreground font-semibold">
            Is it safe to let an agent edit campaigns?
          </strong>
        </p>
        <p className="block mb-4 text-muted-foreground leading-6.5">
          {"Safer than before, but not hands-off: every entity created through the MCP is paused by default, the agent can't see creative or Meta's bidding internals, and over-editing resets the learning window. Keep a human approval gate. Because the MCP is creative-blind, pair it with dedicated "}
          <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href="/blog/best-ai-tools-meta-ad-creatives">
            {"AI tools for Facebook & Instagram ad creative"}
          </a>
          {" for the visual side of the workflow."}
        </p>
      </article>
    </div>
  );
}
