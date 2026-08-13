import ListRow2, { type ListRow2Data } from "../components/list-row2";
import ListRow3, { type ListRow3Data } from "../components/list-row3";
import ListRow4, { type ListRow4Data } from "../components/list-row4";
import Tile2, { type Tile2Data } from "../components/tile2";
import Tile3, { type Tile3Data } from "../components/tile3";
import Icon2 from "../svgs/svg-icon2";
import Icon3 from "../svgs/svg-icon3";
import Icon4 from "../svgs/svg-icon4";
import { ListRow2_styles, ListRow3_styles, ListRow4_styles, Tile2_styles, Tile3_styles } from "../_styles";
const ListRow2_data: ListRow2Data[] = [
    { href: "#takeaways", label: "00", label2: "Key takeaways" },
    { href: "#asymmetry", label: "01", label2: "One official server, one gap" },
    { href: "#architecture", label: "02", label2: "Local stdio, local credentials" },
    { href: "#ga4-setup", label: "03", label2: "Step 1: the GA4 server" },
    { href: "#gsc-setup", label: "04", label2: "Step 2: Search Console" },
    { href: "#claude-wiring", label: "05", label2: "Claude Code config scopes" },
    { href: "#guardrails", label: "06", label2: "Least-privilege guardrails" },
    { href: "#quotas", label: "07", label2: "Quota math for agents" },
    { href: "#playbook", label: "08", label2: "First prompts & next steps" },
    { href: "#conclusion", label: "09", label2: "Conclusion" },
    { href: "#faq", label: "10", label2: "FAQ" }
];
const ListRow3_data: ListRow3Data[] = [
    { text: "01", text2: "GA4 has an official Google MCP server; GSC does not.", text3: "googleanalytics/google-analytics-mcp is Apache-2.0, Google-maintained, at v0.6.0 with 2.6k GitHub stars as of July 8, 2026. Every Search Console MCP server is community-built — AminForou/mcp-gsc (1.1k stars, MIT) is the most-starred option we found." },
    { text: "02", text2: "Both run as local stdio processes — credentials stay on your machine.", text3: "Neither server is a remote HTTP connector. Claude Code spawns them locally via pipx or uv, so service-account JSON keys and OAuth token caches never leave the machine running the session." },
    { text: "03", text2: "A JSON key alone grants nothing — the grant step is separate.", text3: "The service-account email must be added to the GA4 property under Admin → Property Access Management, and invited as a user on the Search Console property. Skipping either step is the most common reason API calls fail after setup." },
    { text: "04", text2: "Read-only scopes are the guardrail that matters.", text3: "GA4's official server is read-only by design and uses the analytics.readonly scope; for GSC, choose webmasters.readonly over the read/write webmasters scope, and invite the service account as Full — never Owner." },
    { text: "05", text2: "Quota math is a build consideration, not trivia.", text3: "A standard GA4 property gets 200,000 Core tokens per day but only 14,000 tokens per project per property per hour; GSC caps searchanalytics.query at 25,000 rows per request. An untutored agent doing exploratory multi-turn queries can hit both." }
];
const ListRow4_data: ListRow4Data[] = [
    { text: "Full", text2: " — sufficient for reading performance data. This is what an analyst-agent needs." },
    { text: "Owner", text2: " — required only for actions like sitemap submission. An analyst-agent should never hold it." },
    { text: "Restricted", text2: " — narrower view rights; workable if your use case is purely aggregate reporting." }
];
const Tile2_data: Tile2Data[] = [
    { text: "Read-only enforcement", text2: "Server-side, by design — Google’s docs state it serves read requests only", text3: "Scope + permission level — your configuration does the enforcing; sitemap-management tools need Owner, so don’t grant it" },
    { text: "Quota ceilings to design around", text2: "200,000 Core tokens/day, 40,000/hour (standard); 14,000 tokens/project/property/hour; 10 concurrent requests", text3: "25,000 rows/request; 50,000 rows/day/site/search-type; 1,200 QPM per site/user; separate short- and long-term “load” quota" },
    { text: "Freshness signal (Jul 8, 2026)", text2: "2.6k stars · v0.6.0 (May 21, 2026) · 66 commits on main", text3: "1.1k stars · v0.3.2 (April 2026)" }
];
const Tile3_data: Tile3Data[] = [
    { text: "Analytics 360 — daily Core tokens", text2: "per token category · 2,000,000", text3: "2.0M" },
    { text: "Analytics 360 — hourly Core tokens", text2: "400,000 · 20% of the 360 daily bucket", style: { backgroundImage: "linear-gradient(90deg, var(--primary), var(--accent))" }, text3: "400K" },
    { text: "Standard — daily Core tokens", text2: "200,000 · 10% of the 360 daily bucket", style: { backgroundImage: "linear-gradient(90deg, var(--primary), var(--accent))" }, text3: "200K" },
    { text: "Standard — hourly Core tokens", text2: "40,000 · 2% of the 360 daily bucket", style: { backgroundImage: "linear-gradient(90deg, var(--primary), var(--accent))" }, text3: "40K" },
    { text: "Standard — per-project-per-property hourly", text2: "14,000 · 0.7% of the 360 daily bucket", style: { backgroundImage: "linear-gradient(90deg, var(--primary), var(--accent))" }, text3: "14K" }
];
/** Landscape One Official section. */
export default function LandscapeOneOfficialSection({ listRow2Data = ListRow2_data, listRow3Data = ListRow3_data, listRow4Data = ListRow4_data, tile2Data = Tile2_data, tile3Data = Tile3_data } = {}) {
  return (
    <section className="block relative bg-background">
      <div className="grid max-w-330 py-16 px-8 gap-14 mx-auto grid-cols-[260px_minmax(0,1fr)_280px] max-md:px-6 max-lg:gap-10 max-lg:grid-cols-1">
        <aside className="w-65 h-[29.4875rem] block sticky top-21 self-start max-lg:hidden">
          <div className="block">
            <div className="flex mb-4 items-center gap-2 text-muted [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.47px] uppercase">
              <span className="block bg-primary h-px w-4" />
              Table of contents
            </div>
            <ul className="border-l border-solid border-l-border flex flex-col gap-0.5 [list-style-type:none] list-outside">
              {listRow2Data.map((d, i) => <ListRow2 key={i} d={d} styles={ListRow2_styles[i]} />)}
            </ul>
          </div>
        </aside>
        <article className="w-141 block min-w-0 max-md:w-[20.4375rem] md:max-lg:w-176 2xl:w-151">
          <div className="block max-w-180">
            <p className="block mb-7 text-[1.1875rem] leading-[1.875rem] text-pretty">
              {"Connecting GA4 and Search Console to Claude via MCP turns the two most important organic-data surfaces you own into tools an AI analyst can query directly — no CSV exports, no copy-pasting screenshots of the Performance report. The wiring itself is a "}
              <code className="inline py-0.5 px-1.5 rounded-sm [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[1.0625rem] leading-[1.6875rem] bg-surface">
                claude mcp add
              </code>
              {" plus service-account JSON exercise. The part most guides skip is the part that matters: scoping the access so the agent can read everything it needs and change nothing."}
            </p>
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              The landscape has a genuine asymmetry that shapes every decision in this build. Google publishes and maintains an official, open-source GA4 MCP server — Apache-2.0 licensed, versioned releases, its own page on the Google Analytics developer docs. Search Console has no official equivalent as of this writing; every GSC MCP server we found is community-built. You’ll trust one server because Google signed it, and the other because you read its code and capped its permissions.
            </p>
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              This guide covers the full build in order: the architecture (local stdio processes, credentials that never leave your machine), the GA4 server setup with its property-level access grant, the community GSC server choice and its user invite, Claude Code’s three config scopes, the least-privilege guardrail checklist, and the quota ceilings an exploratory agent can burn through faster than you’d expect.
            </p>
          </div>
          <div className="border-t-2 border-solid border-t-foreground block my-12 pt-7" id="takeaways">
            <div className="flex mb-6 items-center gap-2.5 [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1.0625rem] tracking-[1.54px] uppercase">
              <span className="w-1.5 h-1.5 block rounded-full bg-primary shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--primary)_0px_0px_8px_0px]" />
              Key takeaways
            </div>
            <ol className="block [list-style-type:none] list-outside">
              {listRow3Data.map((d, i) => <ListRow3 key={i} d={d} styles={ListRow3_styles[i]} />)}
            </ol>
          </div>
          <h2 className="block mt-14 mb-5 text-4xl leading-[2.5625rem] tracking-[-0.9px] max-lg:text-[1.625rem] max-lg:leading-[1.875rem] max-lg:tracking-[-0.65px]" data-component="heading" id="asymmetry">
            <span className="block mb-3.5 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] font-medium leading-[0.8125rem] tracking-[1.32px] uppercase">
              01 — The Landscape
            </span>
            {"One official server, one "}
            <em className="inline text-accent [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] italic">
              community
            </em>
            {" gap."}
          </h2>
          <div className="block max-w-180">
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              {"Start with what Google actually ships. The official GA4 MCP server lives at "}
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface">
                github.com/googleanalytics/google-analytics-mcp
              </code>
              {" under an Apache-2.0 license, described on its own Google developer docs page as a local MCP server that interacts with the Google Analytics Admin API and Data API. As of July 8, 2026 it sits at 2.6k GitHub stars with its latest release, v0.6.0, dated May 21, 2026 and 66 commits on main — actively maintained, not a hackathon artifact. It exposes seven tools: "}
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface">
                get_account_summaries
              </code>
              {", "}
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface">
                get_property_details
              </code>
              {", "}
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface">
                list_google_ads_links
              </code>
              {", "}
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface">
                run_report
              </code>
              {", "}
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface">
                run_funnel_report
              </code>
              {", "}
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface">
                get_custom_dimensions_and_metrics
              </code>
              {", and "}
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface">
                run_realtime_report
              </code>
              .
            </p>
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              {"Search Console is the opposite story. There is no official Google-maintained GSC MCP server as of this research pass — every implementation we found is third-party. The most-starred is "}
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface">
                AminForou/mcp-gsc
              </code>
              {" at 1.1k stars (v0.3.2, April 2026), MIT licensed, supporting both OAuth browser login and service-account auth, with roughly 20 tools spanning property management, search analytics, URL inspection, and sitemap management. If you want the broader server landscape before committing, "}
              <a className="border-b border-solid border-b-primary inline pb-px text-foreground font-medium cursor-pointer hover:bg-clr-6 hover:text-primary hover:[text-decoration-color:var(--primary)]" data-component="link" href="/blog/mcp-servers-for-marketing-25-servers-reviewed-2026">
                our 25-server MCP roundup
              </a>
              {" covers GA4 as one row among many — this post exists because the two servers a working analyst-agent actually needs deserve a dedicated end-to-end build, not a table row."}
            </p>
          </div>
          <div className="flex my-8 flex-col gap-4">
            <div className="border border-solid border-border flex relative p-7 rounded-[18px] gap-8 bg-background max-md:p-6 max-md:flex-col max-md:gap-5">
              <div className="w-55 flex flex-col items-start shrink-0 gap-3 max-md:w-[17.3125rem] max-md:gap-4 max-md:[flex-direction:initial] max-md:shrink-[initial]">
                <div className="flex flex-col flex-1 gap-1.5">
                  <div className="block text-muted [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.26px] uppercase">
                    Official GA4 server
                  </div>
                  <h5 className="block text-lg font-medium leading-[1.4375rem] tracking-[-0.18px]" data-component="heading">
                    GitHub stars · v0.6.0
                  </h5>
                </div>
                <div className="flex items-baseline order-[-9999] gap-1 text-color-010 text-5xl font-light leading-12 tracking-[-1.44px] max-md:order-[initial]">
                  2.6
                  <span className="block text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-sm font-normal leading-3.5">
                    k
                  </span>
                </div>
              </div>
              <div className="block self-stretch bg-surface-4 w-px max-md:hidden" />
              <div className="flex flex-col justify-between flex-1 gap-4">
                <p className="block text-muted-foreground text-sm leading-[1.375rem]">
                  Google-maintained, Apache-2.0, released May 21, 2026, 66 commits on main as of July 8, 2026. Uses the Admin API and Data API, exposing seven read tools.
                </p>
                <div className="border-t border-solid border-t-surface block pt-2 self-end text-right w-full max-md:self-start max-md:text-left">
                  <span className="inline text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[1px] uppercase">
                    googleanalytics/google-analytics-mcp
                  </span>
                </div>
              </div>
            </div>
            <div className="border border-solid border-border flex relative p-7 rounded-[18px] gap-8 bg-background max-md:p-6 max-md:flex-col max-md:gap-5">
              <div className="w-55 flex flex-col items-start shrink-0 gap-3 max-md:w-[17.3125rem] max-md:gap-4 max-md:[flex-direction:initial] max-md:shrink-[initial]">
                <div className="flex flex-col flex-1 gap-1.5">
                  <div className="block text-muted [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.26px] uppercase">
                    Official GSC servers
                  </div>
                  <h5 className="block text-lg font-medium leading-[1.4375rem] tracking-[-0.18px]" data-component="heading">
                    from Google, as of July 8, 2026
                  </h5>
                </div>
                <div className="flex items-baseline order-[-9999] gap-1 text-color-010 text-5xl font-light leading-12 tracking-[-1.44px] max-md:order-[initial]">
                  0
                </div>
              </div>
              <div className="block self-stretch bg-surface-4 w-px max-md:hidden" />
              <div className="flex flex-col justify-between flex-1 gap-4">
                <p className="block text-muted-foreground text-sm leading-[1.375rem]">
                  Every Search Console MCP server found in this research pass is community-built. The eight community repos we catalogued are all community-built; none carry Google's maintenance guarantee.
                </p>
                <div className="border-t border-solid border-t-surface block pt-2 self-end text-right w-full max-md:self-start max-md:text-left">
                  <span className="inline text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[1px] uppercase">
                    community-only territory
                  </span>
                </div>
              </div>
            </div>
            <div className="border border-solid border-border flex relative p-7 rounded-[18px] gap-8 bg-background max-md:p-6 max-md:flex-col max-md:gap-5">
              <div className="w-55 flex flex-col items-start shrink-0 gap-3 max-md:w-[17.3125rem] max-md:gap-4 max-md:[flex-direction:initial] max-md:shrink-[initial]">
                <div className="flex flex-col flex-1 gap-1.5">
                  <div className="block text-muted [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.26px] uppercase">
                    Top community GSC
                  </div>
                  <h5 className="block text-lg font-medium leading-[1.4375rem] tracking-[-0.18px]" data-component="heading">
                    GitHub stars · v0.3.2
                  </h5>
                </div>
                <div className="flex items-baseline order-[-9999] gap-1 text-color-010 text-5xl font-light leading-12 tracking-[-1.44px] max-md:order-[initial]">
                  1.1
                  <span className="block text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-sm font-normal leading-3.5">
                    k
                  </span>
                </div>
              </div>
              <div className="block self-stretch bg-surface-4 w-px max-md:hidden" />
              <div className="flex flex-col justify-between flex-1 gap-4">
                <p className="block text-muted-foreground text-sm leading-[1.375rem]">
                  AminForou/mcp-gsc, MIT licensed, April 2026 release. OAuth or service-account auth, ~20 tools across search analytics, URL inspection, and sitemaps.
                </p>
                <div className="border-t border-solid border-t-surface block pt-2 self-end text-right w-full max-md:self-start max-md:text-left">
                  <span className="inline text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[1px] uppercase">
                    AminForou/mcp-gsc
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="block max-w-180">
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              That asymmetry is not a footnote — it is the risk model. The GA4 server inherits Google’s maintenance cadence and a documented, deliberate read-only design. A community GSC server inherits whatever its maintainer decided, which is why the scoping and permission steps in Section 04 do more security work than the server choice itself.
            </p>
          </div>
          <h2 className="block mt-14 mb-5 text-4xl leading-[2.5625rem] tracking-[-0.9px] max-lg:text-[1.625rem] max-lg:leading-[1.875rem] max-lg:tracking-[-0.65px]" data-component="heading" id="architecture">
            <span className="block mb-3.5 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] font-medium leading-[0.8125rem] tracking-[1.32px] uppercase">
              02 — Architecture
            </span>
            {"Local stdio, local "}
            <em className="inline text-accent [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] italic">
              credentials
            </em>
            .
          </h2>
          <div className="block max-w-180">
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              {"Both servers in this build run as local "}
              <strong className="inline text-foreground font-semibold">
                stdio
              </strong>
              {" processes — Claude Code spawns them on your machine via "}
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface">
                pipx run
              </code>
              {" or "}
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface">
                uvx
              </code>
              {" and talks to them over standard input/output. That is a materially different trust model from remote HTTP/SSE connectors (the Notion or Asana pattern), where Anthropic’s cloud calls a vendor-hosted endpoint directly. Here, the service-account JSON key and any cached OAuth tokens live on the machine running Claude Code and nowhere else. For agency work on client data, that locality is a feature: the credential story stays inside your existing laptop-security posture instead of adding a new hosted intermediary."}
            </p>
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              It also means these servers are a Claude Code build, not a claude.ai custom-connector build. Claude’s remote-MCP infrastructure expects a publicly reachable HTTPS endpoint — neither of these servers offers one, and for this use case you don’t want one.
            </p>
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              Worth knowing for context: Google announced official MCP support for a first wave of Google services — Maps, BigQuery, Compute Engine, GKE — on December 11, 2025, with an explicitly governance-first framing. GA4 and Search Console were not on that list, but the posture Google describes is the right one to copy even for community servers:
            </p>
          </div>
          <div className="block relative my-7 py-5.5 px-7 rounded-[14px] overflow-hidden text-background bg-foreground">
            <span className="h-full block absolute top-0 left-0 bg-primary w-[0.1875rem]" aria-hidden="true" />
            <span className="block mb-2 text-accent [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.47px] uppercase">
              Google's governance framing
            </span>
            <div className="block text-base leading-[1.5625rem]">
              {"“We pair this ease of discovery with rigorous control: administrators can manage access via Google Cloud IAM, rely on audit logging for observability, and utilize Google Cloud Model Armor to defend against advanced agentic threats such as indirect prompt injection.” — Google Cloud Blog, announcing official MCP support for Google services, December 11, 2025. Google hasn’t shipped IAM-backed managed servers for GA4 or GSC yet — so "}
              <em className="inline [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] italic">
                you
              </em>
              {" supply the least-privilege discipline manually, which is exactly what Sections 03–06 do."}
            </div>
          </div>
          <h2 className="block mt-14 mb-5 text-4xl leading-[2.5625rem] tracking-[-0.9px] max-lg:text-[1.625rem] max-lg:leading-[1.875rem] max-lg:tracking-[-0.65px]" data-component="heading" id="ga4-setup">
            <span className="block mb-3.5 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] font-medium leading-[0.8125rem] tracking-[1.32px] uppercase">
              03 — Build Step 1
            </span>
            {"The official GA4 server: "}
            <em className="inline text-accent [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] italic">
              auth, grant, add
            </em>
            .
          </h2>
          <div className="block max-w-180">
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              {"Prerequisites: Python 3.10+ and a GA4 property you administer. (If the property itself isn’t set up cleanly yet, start with "}
              <a className="border-b border-solid border-b-primary inline pb-px text-foreground font-medium cursor-pointer hover:bg-clr-6 hover:text-primary hover:[text-decoration-color:var(--primary)]" data-component="link" href="/blog/google-analytics-4-complete-setup-guide">
                our GA4 complete setup guide
              </a>
              {" first — an MCP server pointed at a misconfigured property just automates confusion.) The server installs and runs via "}
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface">
                pipx run analytics-mcp
              </code>
              {", and authenticates through Application Default Credentials (ADC), scoped to "}
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface">
                analytics.readonly
              </code>
              . You have two ADC paths:
            </p>
            <ul className="block mb-6 text-pretty [list-style-type:none] list-outside">
              <li className="list-item relative mb-2.5 pl-5.5 text-color-002 leading-[1.625rem] before:content-[''] before:block before:absolute before:top-[0.6875rem] before:right-139 before:bottom-[2.1375rem] before:left-0.5 before:w-1.5 before:h-1.5 before:bg-primary before:rounded-tl-full max-md:before:right-[19.9375rem] max-md:before:bottom-[3.7375rem] md:max-lg:before:right-174 2xl:before:right-149">
                <strong className="inline text-foreground font-semibold">
                  OAuth desktop flow
                </strong>
                {" — "}
                <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-sm leading-[1.4375rem] bg-surface">
                  gcloud auth application-default login
                </code>
                . Your own Google identity, quickest for a solo setup.
              </li>
              <li className="list-item relative mb-2.5 pl-5.5 text-color-002 leading-[1.625rem] before:content-[''] before:block before:absolute before:top-[0.6875rem] before:right-139 before:bottom-[3.7375rem] before:left-0.5 before:w-1.5 before:h-1.5 before:bg-primary before:rounded-tl-full max-md:before:right-[19.9375rem] max-md:before:bottom-[6.9375rem] md:max-lg:before:right-174 2xl:before:right-149">
                <strong className="inline text-foreground font-semibold">
                  Service account
                </strong>
                {" — a dedicated non-human identity with a downloadable JSON key (or impersonation, if you prefer keyless). The right answer for client work and anything a team shares."}
              </li>
            </ul>
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              {"Here is the step everyone misses: "}
              <strong className="inline text-foreground font-semibold">
                creating a service account and downloading its JSON key does not grant it any GA4 access
              </strong>
              . The service-account email must be separately added to the target property — in GA4, under Admin → Property Access Management — before a single API call succeeds. Grant it access to the one property this agent needs, and nothing organization-wide.
            </p>
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              Then register the server with Claude Code:
            </p>
            <pre className="block [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] whitespace-pre text-nowrap">
              <code className="inline py-0.5 px-1.5 rounded-sm text-sm leading-[1.3125rem] bg-surface">
                {"# Google's server, run via pipx (Python 3.10+)\nclaude mcp add --transport stdio --scope local \\\n  --env GOOGLE_APPLICATION_CREDENTIALS=\"$HOME/keys/ga4-readonly.json\" \\\n  analytics -- pipx run analytics-mcp"}
              </code>
            </pre>
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              {"The "}
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface">
                --
              </code>
              {" separator matters: everything before it configures Claude Code (transport, scope, env vars); everything after it is the command that actually launches the server, passed through untouched — that split is straight from Anthropic’s MCP documentation. Once added, ask Claude to list your GA4 account summaries; if the tool call returns your property, auth and grant are both working."}
            </p>
          </div>
          <blockquote className="border-l-[3px] border-solid border-l-primary block my-7 py-5 px-6 [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] text-[1.1875rem] italic leading-[1.8125rem] tracking-[-0.09px] bg-surface-5">
            "The MCP server is available for read requests only. It can't edit your Google Analytics configuration or settings."
            <cite className="block mt-3 text-muted [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] font-medium not-italic leading-[1.0625rem] tracking-[1.1px] uppercase">
              — Google Analytics developer documentation, GA4 MCP server page
            </cite>
          </blockquote>
          <div className="block max-w-180">
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              That read-only design is server-side and deliberate — it is Google’s own guardrail, not one you have to configure. Your job on the GA4 side is only to keep the identity’s footprint small: one property, read-level access, a key file that lives outside any repo.
            </p>
          </div>
          <h2 className="block mt-14 mb-5 text-4xl leading-[2.5625rem] tracking-[-0.9px] max-lg:text-[1.625rem] max-lg:leading-[1.875rem] max-lg:tracking-[-0.65px]" data-component="heading" id="gsc-setup">
            <span className="block mb-3.5 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] font-medium leading-[0.8125rem] tracking-[1.32px] uppercase">
              04 — Build Step 2
            </span>
            {"Search Console: pick a community server, "}
            <em className="inline text-accent [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] italic">
              cap its permissions
            </em>
            .
          </h2>
          <div className="block max-w-180">
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              {"With no official server, your first decision is which community implementation to trust. We anchor this build on "}
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface">
                AminForou/mcp-gsc
              </code>
              {" — the most-starred option we found (1.1k stars, v0.3.2, April 2026), MIT licensed, with both OAuth and service-account auth and ~20 tools covering search analytics, URL inspection, and sitemap management. Its README notes a separate hosted version adds GA4 tools, but the open-source repo itself is GSC-only — which is fine, because the official Google server already covers GA4. Its recommended install path uses "}
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface">
                uv
              </code>
              /
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface">
                uvx
              </code>
              {" (Astral’s Python packager) — the same one-command, no-manual-venv pattern the official GA4 server gets from "}
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface">
                pipx run
              </code>
              . Alternatives exist — this is one of the eight community repos we catalogued — but whichever you pick, read the code before you feed it a credential. It is a community project, not a Google product.
            </p>
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              {"The Search Console API supports two OAuth scopes: "}
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface">
                webmasters
              </code>
              {" (read/write) and "}
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface">
                webmasters.readonly
              </code>
              {" (read-only). Use the read-only scope — and as a bonus, Google reclassified it as non-sensitive in 2024, so it doesn’t trigger the per-scope app-verification process the write scope can involve."}
            </p>
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              The grant step mirrors GA4 but lives in a different place: the service-account email must be manually invited as a user on the target property, via Search Console Settings → Users and permissions. Permission levels matter here:
            </p>
            <ul className="block mb-6 text-pretty [list-style-type:none] list-outside">
              {listRow4Data.map((d, i) => <ListRow4 key={i} d={d} styles={ListRow4_styles[i]} />)}
            </ul>
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              {"Register it with Claude Code using the same "}
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface">
                claude mcp add … -- …
              </code>
              {" pattern as the GA4 server, launching whatever run command the repo’s README specifies via "}
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface">
                uvx
              </code>
              {", with your credential path passed through "}
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface">
                --env
              </code>
              . The smoke test: ask Claude to list the properties the service account can see. One property in the response means the invite worked and the blast radius is right.
            </p>
          </div>
          <h2 className="block mt-14 mb-5 text-4xl leading-[2.5625rem] tracking-[-0.9px] max-lg:text-[1.625rem] max-lg:leading-[1.875rem] max-lg:tracking-[-0.65px]" data-component="heading" id="claude-wiring">
            <span className="block mb-3.5 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] font-medium leading-[0.8125rem] tracking-[1.32px] uppercase">
              05 — Claude Code Config
            </span>
            {"Three scopes, one "}
            <em className="inline text-accent [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] italic">
              approval gate
            </em>
            .
          </h2>
          <div className="block max-w-180">
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              {"Claude Code stores MCP server configs at three scopes, and the choice is a security decision, not a convenience one. "}
              <strong className="inline text-foreground font-semibold">
                Local
              </strong>
              {" (the default) is private to you in the current project, written to "}
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface">
                ~/.claude.json
              </code>
              {". "}
              <strong className="inline text-foreground font-semibold">
                Project
              </strong>
              {" writes to "}
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface">
                .mcp.json
              </code>
              {" in the repo root — version-controlled and shared with teammates. "}
              <strong className="inline text-foreground font-semibold">
                User
              </strong>
              {" is private to you across all projects. When the same server name exists at multiple scopes, precedence runs Local > Project > User."}
            </p>
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              {"Project scope is where teams get nervous — a checked-in config that grants credentialed tool access sounds like a supply-chain problem. Anthropic’s guardrail: project-scoped servers require explicit per-user approval before Claude Code will connect to them. "}
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface">
                claude mcp list
              </code>
              {" shows them as pending approval until each user approves interactively. And "}
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface">
                .mcp.json
              </code>
              {" supports environment-variable expansion, so you commit the server definition without committing anyone’s key path:"}
            </p>
            <pre className="block [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] whitespace-pre text-nowrap">
              <code className="inline py-0.5 px-1.5 rounded-sm text-sm leading-[1.3125rem] bg-surface">
                {"// .mcp.json — committed; each teammate sets GA4_SA_KEY_PATH locally\n{\n  \"mcpServers\": {\n    \"analytics\": {\n      \"command\": \"pipx\",\n      \"args\": [\"run\", \"analytics-mcp\"],\n      \"env\": {\n        \"GOOGLE_APPLICATION_CREDENTIALS\": \"${GA4_SA_KEY_PATH}\"\n      }\n    }\n  }\n}"}
              </code>
            </pre>
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              {"If a referenced variable has no default and isn’t set, Claude Code fails to parse the config — it fails closed rather than silently connecting with a blank credential. (If you’re weighing whether this belongs in MCP at all versus a Skill, see "}
              <a className="border-b border-solid border-b-primary inline pb-px text-foreground font-medium cursor-pointer hover:bg-clr-6 hover:text-primary hover:[text-decoration-color:var(--primary)]" data-component="link" href="/blog/claude-skills-mcp-marketing-automation-guide">
                Claude Skills vs. MCP for marketing automation
              </a>
              {" — live API access to credentialed data surfaces is squarely MCP territory.)"}
            </p>
          </div>
          <div className="flex my-8 flex-col gap-4">
            <div className="border border-solid border-border flex relative p-7 rounded-[18px] gap-8 overflow-hidden bg-background max-md:p-6 max-md:flex-col max-md:gap-5">
              <div className="w-55 flex flex-col shrink-0 gap-3 max-md:w-[17.3125rem] max-md:shrink-[initial]">
                <div className="flex items-center gap-2 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.47px] uppercase">
                  <span className="w-1.5 h-1.5 block rounded-full bg-primary shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--primary)_0px_0px_6px_0px]" />
                  Solo consultant
                </div>
                <h5 className="block text-[1.375rem] font-medium leading-[1.5625rem] tracking-[-0.44px]" data-component="heading">
                  OAuth ADC, local scope
                </h5>
              </div>
              <div className="block self-stretch bg-surface-4 w-px max-md:hidden" />
              <div className="flex flex-col justify-between flex-1 gap-4">
                <p className="block text-muted-foreground text-sm leading-[1.375rem]">
                  gcloud auth application-default login uses your own Google identity via the OAuth desktop flow. Fastest path to a working setup; access dies with your account, which is the point.
                </p>
                <div className="block pt-1 self-end max-md:self-start">
                  <span className="inline-block py-1.5 px-3 rounded-lg [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-xs font-medium leading-[1.0625rem] tracking-[-0.11px] bg-surface whitespace-nowrap" data-component="badge">
                    Pick OAuth + local
                  </span>
                </div>
              </div>
            </div>
            <div className="border border-solid border-surface-2 flex relative p-7 rounded-[18px] gap-8 overflow-hidden text-background bg-foreground max-md:p-6 max-md:flex-col max-md:gap-5">
              <div className="w-141 h-full block absolute -top-px -left-px min-w-0 p-px rounded-2xl pointer-events-none max-md:w-[20.4375rem] md:max-lg:w-176 2xl:w-151" style={{ backgroundImage: "linear-gradient(135deg, var(--clr-7), var(--clr-0) 60%)", maskImage: "linear-gradient(var(--background) 0px, var(--background) 0px), linear-gradient(var(--background) 0px, var(--background) 0px)" }} aria-hidden="true" />
              <div className="w-55 flex flex-col shrink-0 gap-3 max-md:w-[17.3125rem] max-md:shrink-[initial]">
                <div className="flex items-center gap-2 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.47px] uppercase">
                  <span className="w-1.5 h-1.5 block rounded-full bg-primary shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--primary)_0px_0px_6px_0px]" />
                  Agency / client stacks
                </div>
                <h5 className="block text-[1.375rem] font-medium leading-[1.5625rem] tracking-[-0.44px]" data-component="heading">
                  {"Service account, "}
                  <em className="inline text-accent [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] font-normal italic">
                    per-client
                  </em>
                  {" identity"}
                </h5>
              </div>
              <div className="block self-stretch bg-surface-4 w-px max-md:hidden" />
              <div className="flex flex-col justify-between flex-1 gap-4">
                <p className="block text-color-007 text-sm leading-[1.375rem]">
                  One dedicated service account per client stack, granted one GA4 property and one GSC site. Revocable in one place, auditable as itself, never entangled with a human's login.
                </p>
                <div className="block pt-1 self-end max-md:self-start">
                  <span className="inline-block py-1.5 px-3 rounded-lg text-accent [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-xs font-medium leading-[1.0625rem] tracking-[-0.11px] bg-clr-6 whitespace-nowrap">
                    Pick service account
                  </span>
                </div>
              </div>
            </div>
            <div className="border border-solid border-border flex relative p-7 rounded-[18px] gap-8 overflow-hidden bg-background max-md:p-6 max-md:flex-col max-md:gap-5">
              <div className="w-55 flex flex-col shrink-0 gap-3 max-md:w-[17.3125rem] max-md:shrink-[initial]">
                <div className="flex items-center gap-2 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.47px] uppercase">
                  <span className="w-1.5 h-1.5 block rounded-full bg-primary shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--primary)_0px_0px_6px_0px]" />
                  Team-shared repo
                </div>
                <h5 className="block text-[1.375rem] font-medium leading-[1.5625rem] tracking-[-0.44px]" data-component="heading">
                  Project scope + env expansion
                </h5>
              </div>
              <div className="block self-stretch bg-surface-4 w-px max-md:hidden" />
              <div className="flex flex-col justify-between flex-1 gap-4">
                <p className="block text-muted-foreground text-sm leading-[1.375rem]">
                  Commit the server definition in .mcp.json with environment-variable placeholders; each teammate supplies their own key path locally and approves the server on first run. Config is shared; credentials never are.
                </p>
                <div className="block pt-1 self-end max-md:self-start">
                  <span className="inline-block py-1.5 px-3 rounded-lg [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-xs font-medium leading-[1.0625rem] tracking-[-0.11px] bg-surface whitespace-nowrap" data-component="badge">
                    Pick project scope
                  </span>
                </div>
              </div>
            </div>
            <div className="border border-solid border-border flex relative p-7 rounded-[18px] gap-8 overflow-hidden bg-background max-md:p-6 max-md:flex-col max-md:gap-5">
              <div className="w-55 flex flex-col shrink-0 gap-3 max-md:w-[17.3125rem] max-md:shrink-[initial]">
                <div className="flex items-center gap-2 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.47px] uppercase">
                  <span className="w-1.5 h-1.5 block rounded-full bg-primary shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--primary)_0px_0px_6px_0px]" />
                  Personal, cross-project
                </div>
                <h5 className="block text-[1.375rem] font-medium leading-[1.5625rem] tracking-[-0.44px]" data-component="heading">
                  User scope
                </h5>
              </div>
              <div className="block self-stretch bg-surface-4 w-px max-md:hidden" />
              <div className="flex flex-col justify-between flex-1 gap-4">
                <p className="block text-muted-foreground text-sm leading-[1.375rem]">
                  One private config that follows you into every repo. Good for your own properties; wrong for client credentials, which should stay scoped to the project that needs them.
                </p>
                <div className="block pt-1 self-end max-md:self-start">
                  <span className="inline-block py-1.5 px-3 rounded-lg [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-xs font-medium leading-[1.0625rem] tracking-[-0.11px] bg-surface whitespace-nowrap" data-component="badge">
                    Pick user scope
                  </span>
                </div>
              </div>
            </div>
          </div>
          <h2 className="block mt-14 mb-5 text-4xl leading-[2.5625rem] tracking-[-0.9px] max-lg:text-[1.625rem] max-lg:leading-[1.875rem] max-lg:tracking-[-0.65px]" data-component="heading" id="guardrails">
            <span className="block mb-3.5 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] font-medium leading-[0.8125rem] tracking-[1.32px] uppercase">
              06 — Guardrails
            </span>
            {"The least-privilege checklist, "}
            <em className="inline text-accent [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] italic">
              side by side
            </em>
            .
          </h2>
          <div className="block max-w-180">
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              Most MCP-plus-Google-Analytics coverage stops at “connected.” The real guardrail work is the pair of grants: one GA4 property, not organization-wide access; one verified GSC site with Full — not Owner — permission. The table below is the setup checklist we use, with the exact scope strings and the quota ceilings to design around. Sources: Google’s developer docs and each server’s GitHub repo, retrieved July 8, 2026.
            </p>
          </div>
          <div className="border border-solid border-border block my-8 rounded-[18px] overflow-auto">
            <table className="table text-sm leading-[1.3125rem] text-left [border-collapse:collapse] [border-spacing:2px] w-full">
              <caption className="w-px h-px block absolute -m-px overflow-hidden [text-align:-webkit-center] whitespace-nowrap text-nowrap [clip-path:inset(50%)] [border-collapse:collapse] [border-spacing:2px]">
                Side-by-side setup and guardrail comparison of the official GA4 MCP server and the leading community Search Console MCP server: maintainer, install method, auth methods, OAuth scope, minimum-privilege grant step, read-only enforcement, quota ceilings, and freshness signals, as of July 8, 2026.
              </caption>
              <thead className="table-header-group align-middle [border-collapse:collapse] [border-spacing:2px]">
                <tr className="table-row align-middle text-background bg-foreground [border-collapse:collapse] [border-spacing:2px]">
                  <th className="table-cell py-3 px-4 align-middle text-xs font-medium leading-4.5 tracking-[0.72px] uppercase [border-collapse:collapse] [border-spacing:2px]">
                    Setup dimension
                  </th>
                  <th className="table-cell py-3 px-4 align-middle text-xs font-medium leading-4.5 tracking-[0.72px] uppercase [border-collapse:collapse] [border-spacing:2px]">
                    GA4 — official server
                  </th>
                  <th className="table-cell py-3 px-4 align-middle text-xs font-medium leading-4.5 tracking-[0.72px] uppercase [border-collapse:collapse] [border-spacing:2px]">
                    Search Console — community server
                  </th>
                </tr>
              </thead>
              <tbody className="table-row-group align-middle [border-collapse:collapse] [border-spacing:2px]">
                <tr className="border-b border-solid border-b-border table-row align-middle bg-surface-5 [border-collapse:collapse] [border-spacing:2px]">
                  <th className="table-cell py-2.5 px-4 align-middle text-muted text-[0.6875rem] font-medium leading-[1.0625rem] tracking-[0.88px] uppercase [border-collapse:collapse] [border-spacing:2px]" colSpan="3">
                    {"Server & install"}
                  </th>
                </tr>
                <tr className="border-b border-solid border-b-border table-row align-top text-color-002 [border-collapse:collapse] [border-spacing:2px]">
                  <th className="table-cell py-3 px-4 align-top text-foreground text-[0.8125rem] font-medium leading-[1.25rem] [border-collapse:collapse] [border-spacing:2px]">
                    Maintainer
                  </th>
                  <td className="table-cell py-3 px-4 align-top [border-collapse:collapse] [border-spacing:2px]">
                    {"Google (official) — Apache-2.0, "}
                    <code className="inline [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.1875rem] [border-collapse:collapse] [border-spacing:2px]">
                      googleanalytics/google-analytics-mcp
                    </code>
                  </td>
                  <td className="table-cell py-3 px-4 align-top [border-collapse:collapse] [border-spacing:2px]">
                    {"Community — MIT, "}
                    <code className="inline [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.1875rem] [border-collapse:collapse] [border-spacing:2px]">
                      AminForou/mcp-gsc
                    </code>
                    {" (reference pick; 8+ alternatives exist)"}
                  </td>
                </tr>
                <tr className="border-b border-solid border-b-border table-row align-top text-color-002 [border-collapse:collapse] [border-spacing:2px]">
                  <th className="table-cell py-3 px-4 align-top text-foreground text-[0.8125rem] font-medium leading-[1.25rem] [border-collapse:collapse] [border-spacing:2px]">
                    Install / run
                  </th>
                  <td className="table-cell py-3 px-4 align-top [border-collapse:collapse] [border-spacing:2px]">
                    <code className="inline [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.1875rem] [border-collapse:collapse] [border-spacing:2px]">
                      pipx run analytics-mcp
                    </code>
                    {" · Python 3.10+"}
                  </td>
                  <td className="table-cell py-3 px-4 align-top [border-collapse:collapse] [border-spacing:2px]">
                    <code className="inline [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.1875rem] [border-collapse:collapse] [border-spacing:2px]">
                      uv
                    </code>
                    {" / "}
                    <code className="inline [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.1875rem] [border-collapse:collapse] [border-spacing:2px]">
                      uvx
                    </code>
                    {" per repo README"}
                  </td>
                </tr>
                <tr className="border-b border-solid border-b-border table-row align-middle bg-surface-5 [border-collapse:collapse] [border-spacing:2px]">
                  <th className="table-cell py-2.5 px-4 align-middle text-muted text-[0.6875rem] font-medium leading-[1.0625rem] tracking-[0.88px] uppercase [border-collapse:collapse] [border-spacing:2px]" colSpan="3">
                    {"Auth & scoping"}
                  </th>
                </tr>
                <tr className="border-b border-solid border-b-border table-row align-top text-color-002 [border-collapse:collapse] [border-spacing:2px]">
                  <th className="table-cell py-3 px-4 align-top text-foreground text-[0.8125rem] font-medium leading-[1.25rem] [border-collapse:collapse] [border-spacing:2px]">
                    Auth methods
                  </th>
                  <td className="table-cell py-3 px-4 align-top [border-collapse:collapse] [border-spacing:2px]">
                    ADC — OAuth desktop flow (
                    <code className="inline [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.1875rem] [border-collapse:collapse] [border-spacing:2px]">
                      gcloud auth application-default login
                    </code>
                    ) or service-account impersonation
                  </td>
                  <td className="table-cell py-3 px-4 align-top [border-collapse:collapse] [border-spacing:2px]">
                    OAuth browser login (cached token) or service-account JSON
                  </td>
                </tr>
                <tr className="border-b border-solid border-b-border table-row align-top text-color-002 [border-collapse:collapse] [border-spacing:2px]">
                  <th className="table-cell py-3 px-4 align-top text-foreground text-[0.8125rem] font-medium leading-[1.25rem] [border-collapse:collapse] [border-spacing:2px]">
                    OAuth scope
                  </th>
                  <td className="table-cell py-3 px-4 align-top [border-collapse:collapse] [border-spacing:2px]">
                    <code className="inline [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.1875rem] [border-collapse:collapse] [border-spacing:2px]">
                      analytics.readonly
                    </code>
                  </td>
                  <td className="table-cell py-3 px-4 align-top [border-collapse:collapse] [border-spacing:2px]">
                    <code className="inline [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.1875rem] [border-collapse:collapse] [border-spacing:2px]">
                      webmasters.readonly
                    </code>
                    {" (non-sensitive since 2024; avoid the read/write "}
                    <code className="inline [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.1875rem] [border-collapse:collapse] [border-spacing:2px]">
                      webmasters
                    </code>
                    {" scope)"}
                  </td>
                </tr>
                <tr className="border-b border-solid border-b-border table-row align-top text-color-002 [border-collapse:collapse] [border-spacing:2px]">
                  <th className="table-cell py-3 px-4 align-top text-foreground text-[0.8125rem] font-medium leading-[1.25rem] [border-collapse:collapse] [border-spacing:2px]">
                    Minimum-privilege grant
                  </th>
                  <td className="table-cell py-3 px-4 align-top [border-collapse:collapse] [border-spacing:2px]">
                    Add service-account email to ONE property: Admin → Property Access Management
                  </td>
                  <td className="table-cell py-3 px-4 align-top [border-collapse:collapse] [border-spacing:2px]">
                    {"Invite service-account email as user with "}
                    <strong className="inline font-bold [border-collapse:collapse] [border-spacing:2px]">
                      Full
                    </strong>
                    {" (not Owner) on ONE verified site: Settings → Users and permissions"}
                  </td>
                </tr>
                <tr className="border-b border-solid border-b-border table-row align-middle bg-surface-5 [border-collapse:collapse] [border-spacing:2px]">
                  <th className="table-cell py-2.5 px-4 align-middle text-muted text-[0.6875rem] font-medium leading-[1.0625rem] tracking-[0.88px] uppercase [border-collapse:collapse] [border-spacing:2px]" colSpan="3">
                    {"Guardrails & ceilings"}
                  </th>
                </tr>
                {tile2Data.map((d, i) => <Tile2 key={i} d={d} styles={Tile2_styles[i]} />)}
              </tbody>
            </table>
          </div>
          <div className="block relative my-7 py-5.5 px-7 rounded-[14px] overflow-hidden text-background bg-foreground">
            <span className="h-full block absolute top-0 left-0 bg-primary w-[0.1875rem]" aria-hidden="true" />
            <span className="block mb-2 text-accent [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.47px] uppercase">
              The rule that survives every setup
            </span>
            <div className="block text-base leading-[1.5625rem]">
              {"An analyst-agent should "}
              <em className="inline [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] italic">
                never
              </em>
              {" hold write or Owner permissions on either surface. GA4’s official server can’t write even if you over-grant — Search Console has no such server-side backstop, so the Full-not-Owner invite and the read-only scope are the entire enforcement story. Neither API has a paid tier; both are free within their published quotas, so there is no billing reason to share broader credentials either."}
            </div>
          </div>
          <h2 className="block mt-14 mb-5 text-4xl leading-[2.5625rem] tracking-[-0.9px] max-lg:text-[1.625rem] max-lg:leading-[1.875rem] max-lg:tracking-[-0.65px]" data-component="heading" id="quotas">
            <span className="block mb-3.5 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] font-medium leading-[0.8125rem] tracking-[1.32px] uppercase">
              07 — Quota Math
            </span>
            {"Design the agent around the "}
            <em className="inline text-accent [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] italic">
              ceilings
            </em>
            .
          </h2>
          <div className="block max-w-180">
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              {"Most GA4/GSC MCP writeups never mention quotas. That is a mistake for agentic use specifically, because an exploratory agent making multi-turn queries behaves nothing like a dashboard refreshing once an hour. The GA4 Data API meters usage in "}
              <strong className="inline text-foreground font-semibold">
                tokens, not requests
              </strong>
              {" — each call’s cost varies with row count, dimension and metric count, filter complexity, date-range length, and data cardinality. A standard property gets 200,000 Core tokens per day and 40,000 per hour, with the same figures applying separately to the Realtime and Funnel categories; Analytics 360 properties get ten times both. The ceiling that bites agents first, though, is smaller: 14,000 tokens per project per property per hour on a standard property, plus a 10-concurrent-request cap."}
            </p>
          </div>
          <div className="block relative my-8 p-7 rounded-[18px] overflow-hidden text-background bg-foreground">
            <div className="w-100 h-100 block absolute -top-[12.8375rem] -right-[3.525rem] pointer-events-none max-md:top-[-273.3px] max-md:right-[-32.7px] md:max-lg:top-[-182.5px] md:max-lg:-right-[4.4rem] 2xl:top-[-199.3px] 2xl:-right-[3.775rem]" style={{ backgroundImage: "radial-gradient(circle, var(--clr-8), var(--clr-0) 60%)" }} aria-hidden="true" />
            <div className="flex relative mb-4 flex-wrap justify-between items-baseline gap-4">
              <h4 className="block text-[1.0625rem] font-medium leading-[1.625rem] tracking-[-0.17px]" data-component="heading">
                GA4 Data API Core token buckets · the ceiling your agent actually hits is the smallest one
              </h4>
              <span className="block text-color-005 [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.26px] uppercase">
                Source: GA4 Data API quotas page (developers.google.com, page last updated 2026-04-22 UTC)
              </span>
            </div>
            <div className="block relative">
              {tile3Data.map((d, i) => <Tile3 key={i} d={d} styles={Tile3_styles[i]} />)}
            </div>
          </div>
          <div className="block max-w-180">
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              {"Two practical mitigations. First, add "}
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface">
                "returnPropertyQuota": true
              </code>
              {" to report requests during development — the response tells you exactly how many tokens each query consumed, which turns quota design from guesswork into measurement. Second, put aggregation instructions in the agent’s prompt or project memory: ask for totals and top-N breakdowns, not row-level dumps. (Google’s docs have also listed a separate, simpler general ceiling — on the order of tens of thousands of requests per project per day plus a per-IP queries-per-second cap, as documented at the time of writing — but the token buckets above are the binding constraint to design against.)"}
            </p>
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              {"On the Search Console side the arithmetic is about rows. "}
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface">
                searchanalytics.query
              </code>
              {" caps at 25,000 rows per request and 50,000 rows per day per site per search type (web, image, and video count separately) — so an agent pulling a full year of query-level data must paginate, and a two-day pull may be the honest answer for very large sites. Project-level quotas are generous (40,000 QPM, 30,000,000 queries per day, 1,200 QPM per site per user), but a separate “load” quota — a short-term ten-minute bucket plus a one-day bucket — can trigger quota-exceeded errors independently, especially on page and query-string groupings over long date ranges. Teach the agent to narrow date windows and dimensions when it hits one, rather than retrying the same heavy query."}
            </p>
          </div>
          <h2 className="block mt-14 mb-5 text-4xl leading-[2.5625rem] tracking-[-0.9px] max-lg:text-[1.625rem] max-lg:leading-[1.875rem] max-lg:tracking-[-0.65px]" data-component="heading" id="playbook">
            <span className="block mb-3.5 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] font-medium leading-[0.8125rem] tracking-[1.32px] uppercase">
              08 — Now Use It
            </span>
            {"First prompts, and where this "}
            <em className="inline text-accent [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] italic">
              goes next
            </em>
            .
          </h2>
          <div className="block max-w-180">
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              {"With both servers connected, the first working session writes itself: ask Claude for last month’s organic sessions by landing page from GA4, the top rising queries from Search Console over the same window, and a joined narrative — which pages are earning impressions they don’t convert, which queries rank on page two with real click volume. That cross-surface join is the thing neither Google UI gives you in one place, and it is where an analyst-agent starts paying for its setup time in the first hour. For what a full rollout looks like past the first session — adoption, prompt patterns, the failure modes — "}
              <a className="border-b border-solid border-b-primary inline pb-px text-foreground font-medium cursor-pointer hover:bg-clr-6 hover:text-primary hover:[text-decoration-color:var(--primary)]" data-component="link" href="/blog/case-study-mcp-server-rollout-marketing-agency-2026">
                our own agency MCP rollout case study
              </a>
              {" is the honest after-picture, and "}
              <a className="border-b border-solid border-b-primary inline pb-px text-foreground font-medium cursor-pointer hover:bg-clr-6 hover:text-primary hover:[text-decoration-color:var(--primary)]" data-component="link" href="/blog/ga4-ai-analytics-dashboards-predictive-reporting-guide">
                predictive GA4 reporting once the data’s flowing
              </a>
              {" is the natural next build."}
            </p>
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              The trend worth reading here is the asymmetry itself. Google maintaining an official GA4 MCP server — with versioned releases and a deliberate read-only boundary — while Search Console remains community-only tells you where Google currently believes agent-mediated access is safe: reporting data first, configuration surfaces not at all. The December 2025 announcement wave (Maps, BigQuery, Compute Engine, GKE) points the same direction, and its IAM-and-audit-logging framing suggests that when official servers do expand, they are likely to arrive governance-first rather than capability-first. We’d expect the GSC gap to close eventually — but building on a community server with capped permissions today is not wasted work, because the grants, scopes, and quota discipline transfer unchanged to whatever official server may follow.
            </p>
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              {"If you’d rather hand this whole build — and the reporting layer on top of it — to a team that has already made the mistakes, our "}
              <a className="border-b border-solid border-b-primary inline pb-px text-foreground font-medium cursor-pointer hover:bg-clr-6 hover:text-primary hover:[text-decoration-color:var(--primary)]" data-component="link" href="/services/analytics">
                analytics services
              </a>
              {" cover exactly this stack, and "}
              <a className="border-b border-solid border-b-primary inline pb-px text-foreground font-medium cursor-pointer hover:bg-clr-6 hover:text-primary hover:[text-decoration-color:var(--primary)]" data-component="link" href="/services/agentic-seo">
                agentic SEO engagements
              </a>
              {" are where the GSC half of this wiring earns its keep week over week."}
            </p>
          </div>
          <h2 className="block mt-14 mb-5 text-4xl leading-[2.5625rem] tracking-[-0.9px] max-lg:text-[1.625rem] max-lg:leading-[1.875rem] max-lg:tracking-[-0.65px]" data-component="heading" id="conclusion">
            <span className="block mb-3.5 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] font-medium leading-[0.8125rem] tracking-[1.32px] uppercase">
              09 — Conclusion
            </span>
            {"Two grants, two scopes, one "}
            <em className="inline text-accent [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] italic">
              working analyst
            </em>
            .
          </h2>
          <div className="block relative my-10 p-8 rounded-[18px] overflow-hidden text-background bg-foreground">
            <div className="w-100 h-100 block absolute -right-[7.05rem] bottom-[-194.3px] pointer-events-none max-md:-right-[4.0875rem] max-md:-bottom-[19.825rem] md:max-lg:-right-[8.8rem] md:max-lg:bottom-[-155.7px] 2xl:-right-[7.55rem] 2xl:-bottom-[11.1875rem]" style={{ backgroundImage: "radial-gradient(circle, var(--clr-10), var(--clr-0) 60%)" }} aria-hidden="true" />
            <div className="flex relative mb-3.5 items-center gap-2.5 text-accent [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.47px] uppercase">
              <span className="w-1.5 h-1.5 block rounded-full bg-primary shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--primary)_0px_0px_6px_0px]" />
              The build, compressed
            </div>
            <h3 className="block relative mb-4 text-[1.375rem] font-medium leading-[1.625rem] tracking-[-0.33px]" data-component="heading">
              The connection is easy. The scoping is the actual work.
            </h3>
            <div className="block relative text-color-008 text-base leading-[1.625rem]">
              <p className="block mb-3">
                {"Wiring GA4 and Search Console into Claude Code is genuinely a one-evening build: "}
                <code className="inline [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace]">
                  pipx run analytics-mcp
                </code>
                {" for the official Google server, a vetted community server like "}
                <code className="inline [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace]">
                  mcp-gsc
                </code>
                {" for Search Console, and one "}
                <code className="inline [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace]">
                  claude mcp add
                </code>
                {" each. What separates a production setup from a demo is everything around the connection — the service account granted "}
                <em className="inline text-accent [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] italic">
                  one
                </em>
                {" property and one site, the read-only scopes, the Full-not-Owner invite, the committed config that expands env vars instead of embedding keys."}
              </p>
              <p className="block mb-3">
                The asymmetry is the strategic takeaway: Google stands behind the GA4 server; the GSC side is yours to vet and cap. Treat the community server accordingly — read its code, pin its version, and let permissions rather than trust do the enforcement. And teach the agent the quota math up front, because token buckets and row caps are cheaper to design around than to discover mid-report.
              </p>
              <p className="block">
                Do it in this order — auth, grant, add, verify, then prompt — and you end up with something most teams still don’t have in 2026: an analyst that can read both organic surfaces in one conversation, and provably can’t change either.
              </p>
            </div>
          </div>
        </article>
        <aside className="w-70 h-[41.925rem] flex sticky top-21 flex-col self-start gap-5 max-lg:hidden">
          <div className="border border-solid border-border block p-5 rounded-[18px] bg-background">
            <span className="block mb-3.5 text-muted [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.26px] uppercase">
              Share dispatch
            </span>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-2">
                <a className="w-[7.1875rem] border border-solid border-border flex min-w-0 px-3 rounded-lg justify-center items-center flex-1 gap-1.5 text-muted-foreground text-[0.8125rem] font-medium leading-[1.1875rem] bg-background cursor-pointer h-9 hover:bg-surface hover:border-color-010 hover:text-foreground hover:[text-decoration-color:var(--foreground)]" data-component="button" aria-label="Share on X" href={"https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.digitalapplied.com%2Fblog%2Fconnect-ga4-search-console-claude-mcp-build-2026&text=Connect%20GA4%20%2B%20Search%20Console%20to%20Claude%20via%20MCP%202026"} rel="noopener noreferrer" target="_blank">
                  <Icon2 />
                  {" X"}
                </a>
                <a className="w-[7.1875rem] border border-solid border-border flex min-w-0 px-3 rounded-lg justify-center items-center flex-1 gap-1.5 text-muted-foreground text-[0.8125rem] font-medium leading-[1.1875rem] bg-background cursor-pointer h-9 hover:bg-surface hover:border-color-010 hover:text-foreground hover:[text-decoration-color:var(--foreground)]" data-component="button" aria-label="Share on LinkedIn" href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.digitalapplied.com%2Fblog%2Fconnect-ga4-search-console-claude-mcp-build-2026" rel="noopener noreferrer" target="_blank">
                  <Icon3 />
                  {" LinkedIn"}
                </a>
              </div>
              <button className="w-59.5 border border-solid border-border flex min-w-0 px-3 rounded-lg justify-center items-center flex-1 gap-1.5 text-muted-foreground text-[0.8125rem] font-medium leading-[1.1875rem] text-center bg-background cursor-default h-[20.75px] max-lg:h-9 hover:bg-surface hover:border-color-010 hover:text-foreground hover:[text-decoration-color:var(--foreground)]" data-component="button" type="button">
                <Icon4 />
                Copy link
              </button>
            </div>
          </div>
          <div className="block relative p-5 rounded-[18px] overflow-hidden text-background bg-foreground">
            <div className="w-70.5 h-full block absolute -top-px -left-px p-px rounded-[14px] pointer-events-none" style={{ backgroundImage: "linear-gradient(135deg, var(--clr-7), var(--clr-0) 60%)", maskImage: "linear-gradient(var(--background) 0px, var(--background) 0px), linear-gradient(var(--background) 0px, var(--background) 0px)" }} aria-hidden="true" />
            <span className="block mb-3.5 text-accent [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.26px] uppercase">
              AI Insights
            </span>
            <h4 className="block mb-2.5 text-[0.9375rem] font-medium leading-[1.25rem] tracking-[-0.15px]" data-component="heading">
              Deep dives on AI marketing and development.
            </h4>
            <p className="block mb-3.5 text-color-014 text-[0.8125rem] leading-[1.1875rem]">
              Agentic development, frontier AI models, and data-driven strategies. No recycled AI takes.
            </p>
            <form className="flex flex-col gap-2">
              <input className="w-full h-10.5 border border-solid border-surface-3 block py-2.5 px-3 rounded-lg overflow-clip text-[0.8125rem] leading-[1.25rem] bg-clr-11 cursor-text focus:border-primary" data-ditto-id="style-email-address" data-component="input" aria-label="Email address" name="email" placeholder="you@work.com" type="email" value="" />
              <button className="flex py-2.5 rounded-lg justify-center items-center text-foreground text-[0.8125rem] font-medium leading-[1.25rem] text-center bg-background cursor-default h-auto w-full hover:bg-clr-14" data-component="button" type="submit">
                Subscribe
              </button>
            </form>
          </div>
          <div className="border border-solid border-border block p-5 rounded-[18px] bg-background">
            <span className="block mb-3.5 text-muted [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.26px] uppercase">
              Build snapshot
            </span>
            <h4 className="block mb-2.5 text-[0.9375rem] font-medium leading-[1.4375rem]" data-component="heading">
              As of July 8, 2026
            </h4>
            <div className="block mb-1 [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-xs leading-4.5">
              analytics-mcp v0.6.0 · mcp-gsc v0.3.2
            </div>
            <p className="block text-muted text-xs leading-4.5">
              Star counts, release versions, and quota figures move — verify against the GitHub repos and Google’s quota pages before you wire anything into a client stack.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
