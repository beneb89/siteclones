import ListRow2, { type ListRow2Data } from "../components/list-row2";
import ListRow3, { type ListRow3Data } from "../components/list-row3";
import Tile2, { type Tile2Data } from "../components/tile2";
import FeatureCard, { type FeatureCardData } from "../components/feature-card";
import Icon2 from "../svgs/svg-icon2";
import Icon3 from "../svgs/svg-icon3";
import Icon4 from "../svgs/svg-icon4";
import { ListRow2_styles, ListRow3_styles, Tile2_styles, FeatureCard_styles } from "../_styles";
const ListRow2_data: ListRow2Data[] = [
    { href: "#takeaways", label: "00", label2: "Key takeaways" },
    { href: "#shipped", label: "01", label2: "What actually shipped" },
    { href: "#matrix", label: "02", label2: "Capability matrix" },
    { href: "#meta", label: "03", label2: "Meta: read/write, 29 tools" },
    { href: "#google", label: "04", label2: "Google: read-only by design" },
    { href: "#tiktok", label: "05", label2: "TikTok: full lifecycle" },
    { href: "#why", label: "06", label2: "Why platforms build their own" },
    { href: "#playbook", label: "07", label2: "The 30/60/90 playbook" },
    { href: "#risks", label: "08", label2: "Risks & guardrails" },
    { href: "#conclusion", label: "09", label2: "Conclusion" },
    { href: "#faq", label: "10", label2: "FAQ" }
];
const ListRow3_data: ListRow3Data[] = [
    { text: "01", text2: "Official beats community — that's the structural news.", text3: "Every major platform had unofficial connectors before April 2026. The news is vendor-blessed, OAuth-native servers from Google, Meta, and TikTok (plus Amazon earlier), which removes the personal-access-token ban risk that made early adopters cautious." },
    { text: "02", text2: "The three platforms chose three different architectures.", text3: "Meta shipped read/write (29 tools, hosted endpoint, Business OAuth). Google shipped read-only by design (3 tools, open-source, self-hosted). TikTok shipped read/write across the full campaign lifecycle. The contrast reveals each platform's priorities." },
    { text: "03", text2: "Paused-by-default is the guardrail to build around.", text3: "Every entity created via Meta's official server lands paused by default — a hard-coded safety guardrail. A campaign only goes live after a human activates it. That pattern is the backbone of any safe staged-adoption plan." },
    { text: "04", text2: "These servers are single-platform by design.", text3: "No official MCP supports cross-platform agent workflows. Each server keeps query patterns, conversion signals, and audience data flowing through its own perimeter — which makes a unified cross-channel agent harder, not easier, to build on official rails alone." },
    { text: "05", text2: "Read-only first, paused next, live budget last.", text3: "The playbook is sequenced for a reason: start with reporting (weeks 1-4), move to writes on paused campaigns (weeks 5-8), then add explicit approval gates before any live budget mutation (week 9+). Skipping the order is where teams get burned." }
];
const Tile2_data: Tile2Data[] = [
    { text: "Launch", text2: "Apr 29, 2026 · open beta", text3: "Apr 28, 2026 · open source", text4: "May 13, 2026 · TikTok World", text5: "Feb 2026 · open beta" },
    { text: "Tool count", text2: "29 tools, 5 categories", text3: "3 tools + 4 resources", text4: "Not publicly documented", text5: "Bundled tool packs" },
    { text: "Read", text2: "Yes", text3: "Yes", text4: "Yes", text5: "Yes" },
    { text: "Write", text2: "Yes (paused by default)", text3: "No (by design)", text4: "Yes (full lifecycle)", text5: "Yes (campaigns + billing)" },
    { text: "Auth", text2: "Business OAuth, 3 scope tiers", text3: "OAuth proxy or ADC + dev token", text4: "TikTok Ads API auth", text5: "Amazon Ads auth" },
    { text: "Hosting", text2: "Hosted (mcp.facebook.com/ads)", text3: "Self-hosted (you run it)", text4: "Platform-provided", text5: "Platform-provided" },
    { text: "Cost", text2: "Free in beta; pricing TBD", text3: "Free (open source)", text4: "Not announced", text5: "Not announced" }
];
const FeatureCard_data: FeatureCardData[] = [
    { text: "Risk", title: "Hallucinated metrics", text2: "underspecified prompts", description: "Vague prompts can produce invented-but-confident numbers. Mitigation: every query names the date range, metric, campaign ID, and attribution window — and a human verifies key figures against the platform UI during early phases.", text3: "Phase 1 discipline" },
    { text: "Risk", title: "Learning-phase resets", kind: "badge", text2: "over-frequent edits", description: "Editing budgets or audiences more than roughly once per day can reset Meta's learning phase regardless of whether a human or agent made the change. Mitigation: rate-limit agent mutations; batch changes.", text3: "Phase 3 caution" },
    { text: "Risk", title: "Over-broad OAuth scope", text2: "read/write/financial by default", description: "Granting the financial tier when read-only would do is the classic mistake. Mitigation: use the narrowest scope each phase needs; reserve the financial tier for explicitly approved billing operations.", text3: "Throughout" },
    { text: "Limit", title: "No cross-platform joins", text2: "single-platform by design", description: "No official server spans platforms. Mitigation: accept single-platform agents on official rails, or build your own wrapper — but treat cross-platform unofficial tools as the higher-risk path they are.", text3: "Architecture" }
];
/** What Shipped Four section. */
export default function WhatShippedFourSection({ listRow2Data = ListRow2_data, listRow3Data = ListRow3_data, tile2Data = Tile2_data, featureCardData = FeatureCard_data } = {}) {
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
              The ads MCP server is now table stakes. In a roughly three-month window, Google (April 28), Meta (April 29), and TikTok (May 13) each shipped a platform-official Model Context Protocol server — a vendor-blessed bridge that lets an AI agent read and, in some cases, act on your ad account. These are not the unofficial community connectors marketers experimented with last year; they are the real thing, shipped by the platform teams themselves.
            </p>
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              That distinction matters more than the launches look at first glance. Until April 2026, an agency that wanted AI-agent access to Meta or Google Ads faced an uncomfortable choice: paste a personal access token into a third-party connector and accept account-ban risk, or go without. The official servers close that gap with proper OAuth — and in doing so, they quietly set the terms for how the agentic AI layer plugs into paid media for years to come.
            </p>
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              {"This guide maps what actually shipped on each platform, compares the three deliberately different architectural choices in a single matrix, explains why every platform is building its own server rather than opening up to third parties, and lays out a staged 30/60/90-day rollout that keeps a human between the agent and any live budget. If you want the setup mechanics for one platform first, our "}
              <a className="border-b border-solid border-b-primary inline pb-px text-foreground font-medium cursor-pointer hover:bg-color-008 hover:text-primary hover:[text-decoration-color:var(--primary)]" data-component="link" href="/blog/google-ads-mcp-server-claude-gemini-setup-guide">
                guide to setting up Google Ads MCP with Claude or Gemini
              </a>
              {" is the companion piece."}
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
          <h2 className="block mt-14 mb-5 text-4xl leading-[2.5625rem] tracking-[-0.9px] max-lg:text-[1.625rem] max-lg:leading-[1.875rem] max-lg:tracking-[-0.65px]" data-component="heading" id="shipped">
            <span className="block mb-3.5 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] font-medium leading-[0.8125rem] tracking-[1.32px] uppercase">
              01 — What Shipped
            </span>
            {"Four platforms, "}
            <em className="inline text-accent [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] italic">
              one quarter
            </em>
            , official servers.
          </h2>
          <div className="block max-w-180">
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              {"The sequence is tight. Google released its official Google Ads MCP server on "}
              <strong className="inline text-foreground font-semibold">
                April 28, 2026
              </strong>
              {" as an open-source, read-only implementation maintained directly by the Google Ads API team. One day later, on "}
              <strong className="inline text-foreground font-semibold">
                April 29
              </strong>
              {", Meta launched its Meta Ads AI Connectors — an official MCP server and CLI — in open beta at the hosted endpoint "}
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface-2">
                mcp.facebook.com/ads
              </code>
              {". Then, at TikTok World on "}
              <strong className="inline text-foreground font-semibold">
                May 13
              </strong>
              , TikTok announced its Ads MCP Server, making it the fourth major ad platform to ship MCP infrastructure after Amazon, which launched its own server in open beta at the IAB leadership meeting back in February 2026.
            </p>
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              Each of these is platform-official — that is the load-bearing word. Google's own community had preceded the official release with an unofficial Google Ads MCP at a separate repository, which was later archived in favor of the new official one. That archive is the clearest possible signal of the pattern this whole post is about: community server first, platform-official server second, with the official version becoming the canonical surface that agencies are expected to build on.
            </p>
          </div>
          <div className="flex my-8 flex-col gap-4">
            <div className="border border-solid border-surface flex relative p-7 rounded-[18px] gap-8 overflow-hidden text-background bg-foreground max-md:p-6 max-md:flex-col max-md:gap-5">
              <div className="w-141 h-full block absolute -top-px -left-px min-w-0 p-px rounded-2xl pointer-events-none max-md:w-[20.4375rem] md:max-lg:w-176 2xl:w-151" style={{ backgroundImage: "linear-gradient(135deg, var(--clr-7), var(--clr-0) 60%)", maskImage: "linear-gradient(var(--background) 0px, var(--background) 0px), linear-gradient(var(--background) 0px, var(--background) 0px)" }} aria-hidden="true" />
              <div className="w-55 flex flex-col shrink-0 gap-3 max-md:w-[17.3125rem] max-md:shrink-[initial]">
                <div className="flex items-center gap-2 text-accent [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.47px] uppercase">
                  <span className="w-1.5 h-1.5 block rounded-full bg-accent" />
                  Read / Write
                </div>
                <h5 className="block text-[1.375rem] font-medium leading-[1.625rem] tracking-[-0.44px]" data-component="heading">
                  {"Meta Ads "}
                  <em className="inline text-accent [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] font-normal italic">
                    AI Connectors
                  </em>
                </h5>
                <div className="block self-start">
                  <span className="inline-block py-1.5 px-2.5 rounded-lg text-accent [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-xs leading-4.5 tracking-[-0.12px] bg-color-008">
                    29 tools · hosted · Business OAuth
                  </span>
                </div>
              </div>
              <div className="block self-stretch bg-surface-4 w-px max-md:hidden" />
              <div className="flex flex-col justify-between flex-1 gap-4">
                <p className="block text-color-007 text-sm leading-[1.375rem]">
                  Official MCP server + CLI in open beta at mcp.facebook.com/ads. Full read/write across catalog, insights, campaign management, and diagnostics. Works with Claude, ChatGPT, and Perplexity.
                </p>
                <div className="block pt-1 self-end max-md:self-start">
                  <span className="inline-block py-1 px-2 rounded-md text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[1.2px] uppercase bg-color-008 whitespace-nowrap">
                    Launched April 29, 2026
                  </span>
                </div>
              </div>
            </div>
            <div className="border border-solid border-border flex relative p-7 rounded-[18px] gap-8 overflow-hidden bg-background max-md:p-6 max-md:flex-col max-md:gap-5">
              <div className="w-55 flex flex-col shrink-0 gap-3 max-md:w-[17.3125rem] max-md:shrink-[initial]">
                <div className="flex items-center gap-2 text-muted [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.47px] uppercase">
                  <span className="w-1.5 h-1.5 block rounded-full bg-muted" />
                  Read-Only
                </div>
                <h5 className="block text-[1.375rem] font-medium leading-[1.625rem] tracking-[-0.44px]" data-component="heading">
                  {"Google Ads "}
                  <em className="inline text-accent [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] font-normal italic">
                    MCP
                  </em>
                </h5>
                <div className="block self-start">
                  <span className="inline-block py-1.5 px-2.5 rounded-lg text-color-002 [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-xs leading-4.5 tracking-[-0.12px] bg-surface-2">
                    3 tools + 4 resources · open source
                  </span>
                </div>
              </div>
              <div className="block self-stretch bg-surface-4 w-px max-md:hidden" />
              <div className="flex flex-col justify-between flex-1 gap-4">
                <p className="block text-muted-foreground text-sm leading-[1.375rem]">
                  Open-source, self-hosted, read-only by design — maintained by the Google Ads API team. Mutations deliberately stay in the REST/gRPC API. Earned 177+ stars and 57+ forks within weeks.
                </p>
                <div className="block pt-1 self-end max-md:self-start">
                  <span className="inline-block py-1 px-2 rounded-md text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[1.2px] uppercase bg-color-008 whitespace-nowrap">
                    Launched April 28, 2026
                  </span>
                </div>
              </div>
            </div>
            <div className="border border-solid border-border flex relative p-7 rounded-[18px] gap-8 overflow-hidden bg-background max-md:p-6 max-md:flex-col max-md:gap-5">
              <div className="w-55 flex flex-col shrink-0 gap-3 max-md:w-[17.3125rem] max-md:shrink-[initial]">
                <div className="flex items-center gap-2 text-muted [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.47px] uppercase">
                  <span className="w-1.5 h-1.5 block rounded-full bg-muted" />
                  Full Lifecycle
                </div>
                <h5 className="block text-[1.375rem] font-medium leading-[1.625rem] tracking-[-0.44px]" data-component="heading">
                  {"TikTok Ads "}
                  <em className="inline text-accent [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] font-normal italic">
                    MCP
                  </em>
                </h5>
                <div className="block self-start">
                  <span className="inline-block py-1.5 px-2.5 rounded-lg text-color-002 [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-xs leading-4.5 tracking-[-0.12px] bg-surface-2">
                    read/write · planning → optimization
                  </span>
                </div>
              </div>
              <div className="block self-stretch bg-surface-4 w-px max-md:hidden" />
              <div className="flex flex-col justify-between flex-1 gap-4">
                <p className="block text-muted-foreground text-sm leading-[1.375rem]">
                  Announced at TikTok World with TikTok Ads Skills alongside. Gives agents structured access for campaign planning, launch, bid and budget adjustments, targeting, and performance optimization.
                </p>
                <div className="block pt-1 self-end max-md:self-start">
                  <span className="inline-block py-1 px-2 rounded-md text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[1.2px] uppercase bg-color-008 whitespace-nowrap">
                    Announced May 13, 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="block relative my-7 py-5.5 px-7 rounded-[14px] overflow-hidden text-background bg-foreground">
            <span className="h-full block absolute top-0 left-0 bg-primary w-[0.1875rem]" aria-hidden="true" />
            <span className="block mb-2 text-accent [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.47px] uppercase">
              Launch snapshot
            </span>
            <div className="block text-base leading-[1.5625rem]">
              {"Four official ad-platform MCP servers shipped inside a single quarter: "}
              <em className="inline [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] italic">
                Amazon
              </em>
              {" (February, IAB leadership meeting), "}
              <em className="inline [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] italic">
                Google
              </em>
              {" (April 28, open source), "}
              <em className="inline [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] italic">
                Meta
              </em>
              {" (April 29, open beta), and "}
              <em className="inline [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] italic">
                TikTok
              </em>
              {" (May 13, TikTok World). The MCP spec itself is at version 2025-11-25, with JSON-RPC 2.0 over stdio or Streamable HTTP as the wire format."}
            </div>
          </div>
          <div className="block max-w-180">
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              {"For context on how fast the broader ecosystem is moving: third-party registries tracked roughly 10,000+ total MCP servers by April 2026, up from around 6,800 at the end of 2025. Ad-platform servers are a small but strategically high-value slice of that count — these are the servers attached to the budgets. If you want the full ecosystem numbers, see our "}
              <a className="border-b border-solid border-b-primary inline pb-px text-foreground font-medium cursor-pointer hover:bg-color-008 hover:text-primary hover:[text-decoration-color:var(--primary)]" data-component="link" href="/blog/mcp-adoption-statistics-2026-model-context-protocol">
                MCP adoption statistics for 2026
              </a>
              .
            </p>
          </div>
          <h2 className="block mt-14 mb-5 text-4xl leading-[2.5625rem] tracking-[-0.9px] max-lg:text-[1.625rem] max-lg:leading-[1.875rem] max-lg:tracking-[-0.65px]" data-component="heading" id="matrix">
            <span className="block mb-3.5 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] font-medium leading-[0.8125rem] tracking-[1.32px] uppercase">
              02 — Capability Matrix
            </span>
            {"One table, every "}
            <em className="inline text-accent [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] italic">
              dimension
            </em>
            {" that matters."}
          </h2>
          <div className="block max-w-180">
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              No published comparison yet covers all four official platforms across the same dimensions. The matrix below does — separating launch posture (open beta vs open source), read versus write capability, auth model, and where each server is hosted. The single most decision-relevant column is the read/write split: Meta and TikTok let an agent mutate; Google deliberately does not.
            </p>
          </div>
          <figure className="border border-solid border-border block my-8 rounded-[18px] overflow-auto">
            <table className="table text-[0.8125rem] leading-[1.25rem] text-left [border-collapse:collapse] [border-spacing:2px] w-full">
              <caption className="w-px h-px block absolute -m-px overflow-hidden [text-align:-webkit-center] whitespace-nowrap text-nowrap [clip-path:inset(50%)] [border-collapse:collapse] [border-spacing:2px]">
                Platform MCP capability matrix for Meta, Google, TikTok, and Amazon official ads MCP servers as of June 2026.
              </caption>
              <thead className="table-header-group align-middle [border-collapse:collapse] [border-spacing:2px]">
                <tr className="table-row align-middle text-background bg-foreground [border-collapse:collapse] [border-spacing:2px]">
                  <th className="table-cell py-3 px-4 align-middle text-[0.6875rem] font-medium leading-[1.0625rem] tracking-[0.88px] uppercase [border-collapse:collapse] [border-spacing:2px]">
                    Dimension
                  </th>
                  <th className="table-cell py-3 px-4 align-middle text-[0.6875rem] font-medium leading-[1.0625rem] tracking-[0.88px] uppercase [border-collapse:collapse] [border-spacing:2px]">
                    Meta Ads MCP
                  </th>
                  <th className="table-cell py-3 px-4 align-middle text-[0.6875rem] font-medium leading-[1.0625rem] tracking-[0.88px] uppercase [border-collapse:collapse] [border-spacing:2px]">
                    Google Ads MCP
                  </th>
                  <th className="table-cell py-3 px-4 align-middle text-[0.6875rem] font-medium leading-[1.0625rem] tracking-[0.88px] uppercase [border-collapse:collapse] [border-spacing:2px]">
                    TikTok Ads MCP
                  </th>
                  <th className="table-cell py-3 px-4 align-middle text-[0.6875rem] font-medium leading-[1.0625rem] tracking-[0.88px] uppercase [border-collapse:collapse] [border-spacing:2px]">
                    Amazon Ads MCP
                  </th>
                </tr>
              </thead>
              <tbody className="table-row-group align-middle [border-collapse:collapse] [border-spacing:2px]">
                {tile2Data.map((d, i) => <Tile2 key={i} d={d} styles={Tile2_styles[i]} />)}
              </tbody>
            </table>
          </figure>
          <div className="block relative my-7 py-5.5 px-7 rounded-[14px] overflow-hidden text-background bg-foreground">
            <span className="h-full block absolute top-0 left-0 bg-primary w-[0.1875rem]" aria-hidden="true" />
            <span className="block mb-2 text-accent [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.47px] uppercase">
              Reading the matrix
            </span>
            <div className="block text-base leading-[1.5625rem]">
              {"The decisive cell is the "}
              <em className="inline [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] italic">
                Write
              </em>
              {" row. Google's read-only stance is a design choice, not a technical limit — the Google Ads API itself supports full mutations via REST and gRPC. Google simply kept those mutations out of the MCP surface, so an agent can query freely but cannot change a bid or pause a campaign through the server. Meta and TikTok went the other way and let agents act, which is exactly why the staged playbook below matters most for them."}
            </div>
          </div>
          <h2 className="block mt-14 mb-5 text-4xl leading-[2.5625rem] tracking-[-0.9px] max-lg:text-[1.625rem] max-lg:leading-[1.875rem] max-lg:tracking-[-0.65px]" data-component="heading" id="meta">
            <span className="block mb-3.5 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] font-medium leading-[0.8125rem] tracking-[1.32px] uppercase">
              03 — Meta
            </span>
            {"Meta: "}
            <em className="inline text-accent [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] italic">
              29 tools
            </em>
            , read/write, paused by default.
          </h2>
          <div className="block max-w-180">
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              {"Meta's official server exposes exactly 29 tools across five categories: Product Catalog (10 tools), Insights & Benchmarks (7), Campaign Management (5), Dataset & Tracking Diagnostics (4), and Accounts/Pages/Assets (3). Authentication runs through Meta Business OAuth — no Developer App registration and no personal access token required, which is the headline security improvement over the early community connectors that asked users to paste long-lived tokens."}
            </p>
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              {"The most important behavior is the safety guardrail. "}
              <strong className="inline text-foreground font-semibold">
                Every entity created via Meta's official MCP server lands in a paused state by default
              </strong>
              {". Campaigns only go live after a human activates them in Ads Manager. The companion CLI shares the same API surface but creates active by default — so if you script with the CLI, you need an explicit "}
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface-2">
                --status PAUSED
              </code>
              {" override to match the MCP's safer behavior. That asymmetry is worth memorizing before you let any automation touch a real account."}
            </p>
          </div>
          <div className="flex my-8 flex-col gap-4">
            <div className="border border-solid border-border flex relative p-7 rounded-[18px] gap-8 bg-background max-md:p-6 max-md:flex-col max-md:gap-5">
              <div className="w-55 flex flex-col items-start shrink-0 gap-3 max-md:w-[17.3125rem] max-md:gap-4 max-md:[flex-direction:initial] max-md:shrink-[initial]">
                <div className="flex flex-col flex-1 gap-1.5">
                  <div className="block text-muted [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.26px] uppercase">
                    Tool surface
                  </div>
                  <h5 className="block text-lg font-medium leading-[1.4375rem] tracking-[-0.18px]" data-component="heading">
                    Five categories
                  </h5>
                </div>
                <div className="flex items-baseline order-[-9999] gap-1 text-color-010 text-5xl font-light leading-12 tracking-[-1.44px] max-md:order-[initial]">
                  29
                  <span className="block text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-sm font-normal leading-3.5">
                    tools
                  </span>
                </div>
              </div>
              <div className="block self-stretch bg-surface-4 w-px max-md:hidden" />
              <div className="flex flex-col justify-between flex-1 gap-4">
                <p className="block text-muted-foreground text-sm leading-[1.375rem]">
                  {"Product Catalog (10), Insights & Benchmarks (7), Campaign Management (5), Dataset & Tracking Diagnostics (4), and Accounts/Pages/Assets (3). Full read/write coverage of the standard ad-ops surface."}
                </p>
                <div className="border-t border-solid border-t-surface-2 block pt-2 self-end text-right w-full max-md:self-start max-md:text-left">
                  <span className="inline text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[1px] uppercase">
                    Business OAuth
                  </span>
                </div>
              </div>
            </div>
            <div className="border border-solid border-border flex relative p-7 rounded-[18px] gap-8 bg-background max-md:p-6 max-md:flex-col max-md:gap-5">
              <div className="w-55 flex flex-col items-start shrink-0 gap-3 max-md:w-[17.3125rem] max-md:gap-4 max-md:[flex-direction:initial] max-md:shrink-[initial]">
                <div className="flex flex-col flex-1 gap-1.5">
                  <div className="block text-muted [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.26px] uppercase">
                    Scope tiers
                  </div>
                  <h5 className="block text-lg font-medium leading-[1.4375rem] tracking-[-0.18px]" data-component="heading">
                    Granular OAuth
                  </h5>
                </div>
                <div className="flex items-baseline order-[-9999] gap-1 text-color-010 text-5xl font-light leading-12 tracking-[-1.44px] max-md:order-[initial]">
                  3
                </div>
              </div>
              <div className="block self-stretch bg-surface-4 w-px max-md:hidden" />
              <div className="flex flex-col justify-between flex-1 gap-4">
                <p className="block text-muted-foreground text-sm leading-[1.375rem]">
                  Read-only, read/write, and read/write/financial — granted per-user per-account, with no long-lived tokens stored outside the OAuth flow. This removes the token-pasting risk of early community connectors.
                </p>
                <div className="border-t border-solid border-t-surface-2 block pt-2 self-end text-right w-full max-md:self-start max-md:text-left">
                  <span className="inline text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[1px] uppercase">
                    per-account grants
                  </span>
                </div>
              </div>
            </div>
            <div className="border border-solid border-border flex relative p-7 rounded-[18px] gap-8 bg-background max-md:p-6 max-md:flex-col max-md:gap-5">
              <div className="w-55 flex flex-col items-start shrink-0 gap-3 max-md:w-[17.3125rem] max-md:gap-4 max-md:[flex-direction:initial] max-md:shrink-[initial]">
                <div className="flex flex-col flex-1 gap-1.5">
                  <div className="block text-muted [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.26px] uppercase">
                    Default state
                  </div>
                  <h5 className="block text-lg font-medium leading-[1.4375rem] tracking-[-0.18px]" data-component="heading">
                    Hard-coded guardrail
                  </h5>
                </div>
                <div className="flex items-baseline order-[-9999] gap-1 text-color-010 text-5xl font-light leading-12 tracking-[-1.44px] max-md:order-[initial]">
                  Paused
                </div>
              </div>
              <div className="block self-stretch bg-surface-4 w-px max-md:hidden" />
              <div className="flex flex-col justify-between flex-1 gap-4">
                <p className="block text-muted-foreground text-sm leading-[1.375rem]">
                  Anything the MCP creates is paused until a human activates it in Ads Manager. The CLI creates active by default — use --status PAUSED to match the server's behavior when scripting.
                </p>
                <div className="border-t border-solid border-t-surface-2 block pt-2 self-end text-right w-full max-md:self-start max-md:text-left">
                  <span className="inline text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[1px] uppercase">
                    human-in-the-loop
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="block max-w-180">
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              What Meta's server deliberately cannot do is as instructive as what it can. It has no vision capability — it cannot access creative content (images, video, thumbnails) and therefore cannot judge hook strength, visual hierarchy, or format fit. It also cannot read Meta Ad Library competitor data, and it does not integrate with external tools like Shopify, Klaviyo, or GA4. In other words, it sees performance data and campaign structure, not the creative itself or anything outside Meta's walls.
            </p>
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              Two operational constraints carry over from Meta's algorithm regardless of whether a human or an agent makes the edit. Editing budgets or audiences more than roughly once per day can reset the learning phase — a constraint widely reported among practitioners rather than published as Meta policy, so treat the exact threshold as community lore and the principle as real. And on API-based usage (versus the native Claude or ChatGPT apps), the tool descriptions alone carry a substantial token overhead per session — a third-party measured figure, not a Meta-official one, but enough that agencies running many accounts should account for it in cost planning.
            </p>
          </div>
          <div className="block relative my-7 py-5.5 px-7 rounded-[14px] overflow-hidden text-background bg-foreground">
            <span className="h-full block absolute top-0 left-0 bg-primary w-[0.1875rem]" aria-hidden="true" />
            <span className="block mb-2 text-accent [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.47px] uppercase">
              The hallucinated-metrics trap
            </span>
            <div className="block text-base leading-[1.5625rem]">
              {"Early testers report that when a prompt lacks specificity — no time window, no metric definition, no filter — the agent may invent precise numbers rather than ask for clarification, and the output reads equally confident whether the figure is verified or fabricated. The mitigation is mechanical: "}
              <em className="inline [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] italic">
                always include the date range, metric name, campaign ID, and attribution window
              </em>
              {" in every query. This is the single biggest reason to keep a human reviewing agent output during the early phases."}
            </div>
          </div>
          <h2 className="block mt-14 mb-5 text-4xl leading-[2.5625rem] tracking-[-0.9px] max-lg:text-[1.625rem] max-lg:leading-[1.875rem] max-lg:tracking-[-0.65px]" data-component="heading" id="google">
            <span className="block mb-3.5 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] font-medium leading-[0.8125rem] tracking-[1.32px] uppercase">
              04 — Google
            </span>
            {"Google: "}
            <em className="inline text-accent [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] italic">
              read-only
            </em>
            {" by design, not by limit."}
          </h2>
          <div className="block max-w-180">
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              {"Google took the opposite stance. Its official Google Ads MCP server is open source, self-hosted, and read-only — and the read-only posture is a deliberate design choice, not a constraint of MCP. The server exposes three tools: "}
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface-2">
                list_accessible_customers
              </code>
              {", "}
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface-2">
                search
              </code>
              {" (for GAQL queries), and "}
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface-2">
                get_resource_metadata
              </code>
              {". It adds four MCP Resources for context — "}
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface-2">
                discovery-document
              </code>
              {", "}
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface-2">
                metrics
              </code>
              {", "}
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface-2">
                segments
              </code>
              {", and "}
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface-2">
                release-notes
              </code>
              . Mutations like bid changes, campaign pauses, and asset creation stay in the REST/gRPC API and are excluded from the MCP surface on purpose.
            </p>
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              {"The trade-off is in setup. Google's server supports two authentication paths: a FastMCP OAuth Proxy for hosted or web-service deployments (which triggers the "}
              <code className="inline py-0.5 px-1.5 rounded-sm text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] leading-[1.5625rem] bg-surface-2">
                streamable-http
              </code>
              {" transport) and Application Default Credentials for local, stdio-based setups. Both are more demanding than Meta's single-click Business OAuth, and both require a Developer Token with at least Explorer access. The payoff is that you self-host, so your query patterns run inside your own infrastructure rather than a vendor's hosted endpoint."}
            </p>
          </div>
          <div className="block relative my-8 p-7 rounded-[18px] overflow-hidden text-background bg-foreground">
            <div className="w-100 h-100 block absolute -top-[5.65rem] -right-[3.525rem] pointer-events-none max-md:top-[-141.9px] max-md:right-[-32.7px] md:max-lg:top-[-85.7px] md:max-lg:-right-[4.4rem] 2xl:top-[-85.7px] 2xl:-right-[3.775rem]" style={{ backgroundImage: "radial-gradient(circle, var(--clr-8), var(--clr-0) 60%)" }} aria-hidden="true" />
            <div className="flex relative mb-4 flex-wrap justify-between items-baseline gap-4">
              <h4 className="block text-[1.0625rem] font-medium leading-[1.625rem] tracking-[-0.17px]" data-component="heading">
                Tool surface · Meta vs Google official servers
              </h4>
              <span className="block text-color-006 [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.26px] uppercase">
                Source: Soku.ai (Meta), GitHub googleads/google-ads-mcp README (Google)
              </span>
            </div>
            <div className="block relative">
              <div className="border-b border-solid border-b-surface grid py-3 items-center gap-3.5 grid-cols-[1.2fr_2fr_62px_auto] max-md:grid-cols-1">
                <div className="block text-sm font-medium leading-[1.25rem] tracking-[-0.07px]">
                  Meta Ads MCP
                  <span className="block mt-0.5 text-color-006 [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] font-normal leading-[1rem] tracking-[0.42px]">
                    29 tools across 5 categories · read/write
                  </span>
                </div>
                <div className="block col-start-[span_1] col-end-[span_1]">
                  <div className="block relative rounded-[3px] overflow-hidden bg-surface h-2.5">
                    <div className="h-full block absolute top-0 inset-x-0 rounded-[3px]" style={{ backgroundImage: "linear-gradient(90deg, var(--primary), var(--accent))" }} />
                  </div>
                </div>
                <div className="block [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-sm font-medium leading-[1.3125rem] tracking-[-0.14px] text-right">
                  29
                </div>
                <div className="block" />
              </div>
              <div className="grid py-3 items-center gap-3.5 grid-cols-[1.2fr_2fr_62px_auto] max-md:grid-cols-1">
                <div className="block text-sm font-medium leading-[1.25rem] tracking-[-0.07px]">
                  Google Ads MCP
                  <span className="block mt-0.5 text-color-006 [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] font-normal leading-[1rem] tracking-[0.42px]">
                    3 tools + 4 resources · read-only by design
                  </span>
                </div>
                <div className="block col-start-[span_1] col-end-[span_1]">
                  <div className="block relative rounded-[3px] overflow-hidden bg-surface h-2.5">
                    <div className="w-[3.7875rem] h-full block absolute top-0 left-0 rounded-[3px] max-md:w-[4.0625rem] md:max-lg:w-[5.1rem] 2xl:w-[4.1625rem]" style={{ backgroundImage: "linear-gradient(90deg, var(--primary), var(--accent))" }} />
                  </div>
                </div>
                <div className="block [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-sm font-medium leading-[1.3125rem] tracking-[-0.14px] text-right">
                  3 + 4
                </div>
                <div className="block" />
              </div>
            </div>
          </div>
          <div className="block max-w-180">
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              {"That a one-day-apart pair of launches landed on opposite ends of the read/write spectrum is the most revealing fact in this whole story. Google wants agents to query its platform deeply while keeping every mutation behind the authenticated, fully-audited API. Meta wants agents to act — within a paused-by-default cage. Neither is wrong; they simply encode different theories of how much autonomy the platform is willing to hand to an AI agent in 2026. For teams that need to go beyond what either official server offers, our walkthrough on "}
              <a className="border-b border-solid border-b-primary inline pb-px text-foreground font-medium cursor-pointer hover:bg-color-008 hover:text-primary hover:[text-decoration-color:var(--primary)]" data-component="link" href="/blog/build-mcp-server-typescript-tutorial-from-scratch-2026">
                building a custom MCP server in TypeScript
              </a>
              {" covers the wrapper pattern."}
            </p>
          </div>
          <h2 className="block mt-14 mb-5 text-4xl leading-[2.5625rem] tracking-[-0.9px] max-lg:text-[1.625rem] max-lg:leading-[1.875rem] max-lg:tracking-[-0.65px]" data-component="heading" id="tiktok">
            <span className="block mb-3.5 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] font-medium leading-[0.8125rem] tracking-[1.32px] uppercase">
              05 — TikTok
            </span>
            {"TikTok: "}
            <em className="inline text-accent [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] italic">
              full lifecycle
            </em>
            , plus a developer SDK.
          </h2>
          <div className="block max-w-180">
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              TikTok announced its Ads MCP Server at TikTok World, its annual global advertising product summit. The server gives AI agents structured access to TikTok's Ads API for autonomous campaign planning, launch, bid adjustments, budget allocation, targeting refinement, and performance optimization — the full lifecycle, in TikTok's framing. Alongside it, TikTok announced TikTok Ads Skills, a developer SDK layer that provides building blocks for creating custom AI tools covering campaign creation, performance analysis, creative evaluation, audience discovery, and budget management.
            </p>
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              A deliberate note on precision: as of this writing, TikTok and the trade press confirmed the server exists and described its high-level capabilities, but did not publish a specific tool inventory or named API endpoints. So this section describes capabilities — bids, budgets, targeting, creative evaluation — without naming tools that have not been documented. If you see a confident list of TikTok MCP method names elsewhere, treat it with suspicion until TikTok publishes the reference itself.
            </p>
          </div>
          <blockquote className="border-l-[3px] border-solid border-l-primary block my-7 py-5 px-6 [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] text-[1.1875rem] italic leading-[1.8125rem] tracking-[-0.09px] bg-clr-1">
            "In an agentic world, [first-party signal is] your most valuable signal, which you don't want to hand to a third party."
            <cite className="block mt-3 text-muted [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] font-medium not-italic leading-[1.0625rem] tracking-[1.1px] uppercase">
              — Shirley Marschall, adtech industry expert (via Digiday)
            </cite>
          </blockquote>
          <div className="block max-w-180">
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              Marschall's point — quoted by Digiday as context for the TikTok launch — is the cleanest one-line explanation of why every platform is building its own server. The MCP is not pure developer goodwill; it is a way to keep the most valuable signal inside the platform's own perimeter. According to TikTok's product leadership, the goal is to let marketers connect their own AI agents directly to the ads platform so those systems can plan, launch, and optimize campaigns without manual intervention. The same logic explains TikTok's write-heavy design: the platform wants the agent acting on TikTok, with TikTok's signals, on TikTok's rails.
            </p>
          </div>
          <h2 className="block mt-14 mb-5 text-4xl leading-[2.5625rem] tracking-[-0.9px] max-lg:text-[1.625rem] max-lg:leading-[1.875rem] max-lg:tracking-[-0.65px]" data-component="heading" id="why">
            <span className="block mb-3.5 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] font-medium leading-[0.8125rem] tracking-[1.32px] uppercase">
              06 — The Strategy
            </span>
            {"Why platforms build their "}
            <em className="inline text-accent [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] italic">
              own
            </em>
            {" servers."}
          </h2>
          <div className="block max-w-180">
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              {"Here is the part most coverage underplays. These official servers are framed as openness — and they genuinely are, relative to the token-pasting era. But each one is also a way to keep query patterns, conversion signals, and audience data flowing through the platform's own infrastructure rather than through a neutral third-party connector. The data-sovereignty incentive runs in exactly one direction: toward the platform. The same logic now shows up wherever the data lives, including the "}
              <a className="border-b border-solid border-b-primary inline pb-px text-foreground font-medium cursor-pointer hover:bg-color-008 hover:text-primary hover:[text-decoration-color:var(--primary)]" data-component="link" href="/blog/snowflake-coco-warehouse-coding-agent-2026-analysis">
                coding agent that runs inside the warehouse
              </a>
              {" so query patterns and first-party signal never leave the perimeter."}
            </p>
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              The strategic consequence is counterintuitive. Every new platform-official MCP makes a unified cross-platform agent workflow harder, not easier, because each server is single-platform by design. An agency that wants one assistant to manage Meta, Google, and TikTok spend in a single conversation cannot do it on official rails alone — it has to either stitch three servers together itself or fall back to an unofficial cross-platform tool. The platforms are, in effect, competing to own the agent's point of contact with the budget.
            </p>
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              Industry coverage echoes the cautious version of this. Some analysts describe Meta's move as a simultaneous opening-up and a subtle form of lock-in — agencies get unprecedented AI access, but data flows and optimization signals stay within Meta's ecosystem, which prevents the cross-platform joins that would make agency-side optimization genuinely portable. Read the launches as infrastructure decisions with long-term lock-in implications, not as novelties.
            </p>
          </div>
          <div className="block relative my-7 py-5.5 px-7 rounded-[14px] overflow-hidden text-background bg-foreground">
            <span className="h-full block absolute top-0 left-0 bg-primary w-[0.1875rem]" aria-hidden="true" />
            <span className="block mb-2 text-accent [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.47px] uppercase">
              Industry read
            </span>
            <div className="block text-base leading-[1.5625rem]">
              Ad Age, reporting on the cross-platform shift, framed MCP adoption as something that could change how advertisers manage campaigns — a new era of cross-platform centralization where media buyers manage ads through their AI assistant of choice. Separately, eMarketer's coverage of AI media buying cites survey data showing the majority of US ad buyers had already used or planned to use AI-powered buying products, and that the overwhelming majority of senior agency professionals expect AI to shape the next decade of digital advertising. The direction of travel is not in dispute; the governance discipline is what separates winners from casualties.
            </div>
          </div>
          <h2 className="block mt-14 mb-5 text-4xl leading-[2.5625rem] tracking-[-0.9px] max-lg:text-[1.625rem] max-lg:leading-[1.875rem] max-lg:tracking-[-0.65px]" data-component="heading" id="playbook">
            <span className="block mb-3.5 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] font-medium leading-[0.8125rem] tracking-[1.32px] uppercase">
              07 — The Playbook
            </span>
            {"The 30/60/90-day "}
            <em className="inline text-accent [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] italic">
              rollout
            </em>
            {" that protects budget."}
          </h2>
          <div className="block max-w-180">
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              The paused-by-default pattern is not just a safety feature — it is the blueprint for staged adoption. A structured rollout for ad MCP servers does not really exist anywhere in published form yet, so here is the one we use: observe before you propose, propose before you execute, and never let week one's agent touch week nine's budget. The phases map cleanly onto the read/write capability of each platform.
            </p>
          </div>
          <div className="flex my-8 flex-col gap-4">
            <div className="border border-solid border-border flex relative p-7 rounded-[18px] gap-8 overflow-hidden bg-background max-md:p-6 max-md:flex-col max-md:gap-5">
              <div className="w-55 flex flex-col shrink-0 gap-3 max-md:w-[17.3125rem] max-md:shrink-[initial]">
                <div className="flex items-center gap-2 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.47px] uppercase">
                  <span className="w-1.5 h-1.5 block rounded-full bg-primary shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--primary)_0px_0px_6px_0px]" />
                  Days 1–30 · Observe
                </div>
                <h5 className="block text-[1.375rem] font-medium leading-[1.5625rem] tracking-[-0.44px]" data-component="heading">
                  Read-only reporting
                </h5>
              </div>
              <div className="block self-stretch bg-surface-4 w-px max-md:hidden" />
              <div className="flex flex-col justify-between flex-1 gap-4">
                <p className="block text-muted-foreground text-sm leading-[1.375rem]">
                  Wire the agent to read-only scope (or use Google's read-only server as-is). Pull reports, surface anomalies, and let the team build trust in the data layer. Every prompt names the date range, metric, campaign ID, and attribution window to avoid hallucinated numbers.
                </p>
                <div className="block pt-1 self-end max-md:self-start">
                  <span className="inline-block py-1.5 px-3 rounded-lg [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-xs font-medium leading-[1.0625rem] tracking-[-0.11px] bg-surface-2 whitespace-nowrap" data-component="badge">
                    Risk: low
                  </span>
                </div>
              </div>
            </div>
            <div className="border border-solid border-surface flex relative p-7 rounded-[18px] gap-8 overflow-hidden text-background bg-foreground max-md:p-6 max-md:flex-col max-md:gap-5">
              <div className="w-141 h-full block absolute -top-px -left-px min-w-0 p-px rounded-2xl pointer-events-none max-md:w-[20.4375rem] md:max-lg:w-176 2xl:w-151" style={{ backgroundImage: "linear-gradient(135deg, var(--clr-7), var(--clr-0) 60%)", maskImage: "linear-gradient(var(--background) 0px, var(--background) 0px), linear-gradient(var(--background) 0px, var(--background) 0px)" }} aria-hidden="true" />
              <div className="w-55 flex flex-col shrink-0 gap-3 max-md:w-[17.3125rem] max-md:shrink-[initial]">
                <div className="flex items-center gap-2 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.47px] uppercase">
                  <span className="w-1.5 h-1.5 block rounded-full bg-primary shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--primary)_0px_0px_6px_0px]" />
                  Days 31–60 · Propose
                </div>
                <h5 className="block text-[1.375rem] font-medium leading-[1.5625rem] tracking-[-0.44px]" data-component="heading">
                  {"Write on "}
                  <em className="inline text-accent [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] font-normal italic">
                    paused
                  </em>
                  {" campaigns"}
                </h5>
              </div>
              <div className="block self-stretch bg-surface-4 w-px max-md:hidden" />
              <div className="flex flex-col justify-between flex-1 gap-4">
                <p className="block text-color-007 text-sm leading-[1.375rem]">
                  Move to read/write scope but only on paused campaigns and test ad sets. Lean on Meta's paused-by-default behavior. The agent drafts campaigns, budgets, and audiences; a human reviews everything in Ads Manager before any activation.
                </p>
                <div className="block pt-1 self-end max-md:self-start">
                  <span className="inline-block py-1.5 px-3 rounded-lg text-accent [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-xs font-medium leading-[1.0625rem] tracking-[-0.11px] bg-color-008 whitespace-nowrap" data-component="badge">
                    Risk: medium
                  </span>
                </div>
              </div>
            </div>
            <div className="border border-solid border-border flex relative p-7 rounded-[18px] gap-8 overflow-hidden bg-background max-md:p-6 max-md:flex-col max-md:gap-5">
              <div className="w-55 flex flex-col shrink-0 gap-3 max-md:w-[17.3125rem] max-md:shrink-[initial]">
                <div className="flex items-center gap-2 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.47px] uppercase">
                  <span className="w-1.5 h-1.5 block rounded-full bg-primary shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--primary)_0px_0px_6px_0px]" />
                  Days 61–90 · Execute
                </div>
                <h5 className="block text-[1.375rem] font-medium leading-[1.5625rem] tracking-[-0.44px]" data-component="heading">
                  Live mutations, gated
                </h5>
              </div>
              <div className="block self-stretch bg-surface-4 w-px max-md:hidden" />
              <div className="flex flex-col justify-between flex-1 gap-4">
                <p className="block text-muted-foreground text-sm leading-[1.375rem]">
                  Allow live budget and bid mutations only behind explicit approval gates and change caps. Respect the once-per-day-edit constraint on Meta to protect the learning phase. Log every agent action for audit. Start with one account, not the whole book.
                </p>
                <div className="block pt-1 self-end max-md:self-start">
                  <span className="inline-block py-1.5 px-3 rounded-lg [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-xs font-medium leading-[1.0625rem] tracking-[-0.11px] bg-surface-2 whitespace-nowrap" data-component="badge">
                    Risk: high
                  </span>
                </div>
              </div>
            </div>
            <div className="border border-solid border-border flex relative p-7 rounded-[18px] gap-8 overflow-hidden bg-background max-md:p-6 max-md:flex-col max-md:gap-5">
              <div className="w-55 flex flex-col shrink-0 gap-3 max-md:w-[17.3125rem] max-md:shrink-[initial]">
                <div className="flex items-center gap-2 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.47px] uppercase">
                  <span className="w-1.5 h-1.5 block rounded-full bg-primary shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--primary)_0px_0px_6px_0px]" />
                  Throughout
                </div>
                <h5 className="block text-[1.375rem] font-medium leading-[1.5625rem] tracking-[-0.44px]" data-component="heading">
                  Governance baseline
                </h5>
              </div>
              <div className="block self-stretch bg-surface-4 w-px max-md:hidden" />
              <div className="flex flex-col justify-between flex-1 gap-4">
                <p className="block text-muted-foreground text-sm leading-[1.375rem]">
                  Use the narrowest OAuth scope tier each phase needs, never the read/write/financial tier by default. Keep a human approving spend changes. Treat any confident-but-unsourced metric as suspect until verified against the platform UI.
                </p>
                <div className="block pt-1 self-end max-md:self-start">
                  <span className="inline-block py-1.5 px-3 rounded-lg [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-xs font-medium leading-[1.0625rem] tracking-[-0.11px] bg-surface-2 whitespace-nowrap" data-component="badge">
                    Non-negotiable
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="block max-w-180">
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              The sequence is not arbitrary. Two real constraints make it necessary rather than merely prudent. First, the paused-by-default guardrail is only protective if you actually use the early phases to build review habits before live mutations are on the table. Second, the once-per-day budget edit constraint means an over-eager agent making frequent live changes can degrade campaign performance on its own — so the execute phase has to pair autonomy with rate limits, not just approval gates. Skip the order and you inherit both risks at once.
            </p>
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              {"If your team is weighing whether to run this in-house or with a partner, this is precisely the kind of staged, governance-first rollout our "}
              <a className="border-b border-solid border-b-primary inline pb-px text-foreground font-medium cursor-pointer hover:bg-color-008 hover:text-primary hover:[text-decoration-color:var(--primary)]" data-component="link" href="/services/paid-media">
                paid media management
              </a>
              {" and "}
              <a className="border-b border-solid border-b-primary inline pb-px text-foreground font-medium cursor-pointer hover:bg-color-008 hover:text-primary hover:[text-decoration-color:var(--primary)]" data-component="link" href="/services/ai-transformation">
                AI transformation engagements
              </a>
              {" are built around — agentic capability paired with senior human judgment on the budget decisions that matter."}
            </p>
          </div>
          <h2 className="block mt-14 mb-5 text-4xl leading-[2.5625rem] tracking-[-0.9px] max-lg:text-[1.625rem] max-lg:leading-[1.875rem] max-lg:tracking-[-0.65px]" data-component="heading" id="risks">
            <span className="block mb-3.5 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] font-medium leading-[0.8125rem] tracking-[1.32px] uppercase">
              {"08 — Risks & Guardrails"}
            </span>
            {"What can go "}
            <em className="inline text-accent [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] italic">
              wrong
            </em>
            , and how to contain it.
          </h2>
          <div className="block max-w-180">
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              The MCP spec (version 2025-11-25) already builds in part of the answer: for remote servers like Meta's hosted endpoint, the spec requires OAuth 2.1 with PKCE and Protected Resource Metadata rather than static API keys or manually pasted tokens. That is a real security upgrade over the community-connector era. But protocol-level auth does not fix the application-level risks, and those are where budgets actually get burned.
            </p>
          </div>
          <div className="flex my-8 flex-col gap-4">
            {featureCardData.map((d, i) => <FeatureCard key={i} d={d} styles={FeatureCard_styles[i]} />)}
          </div>
          <div className="block max-w-180">
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              A few claims circulating in vendor and trade coverage deserve a skeptic label. A study by Butler/Till reported a target of around a 40% cost reduction in media-plan execution through agentic AI agents — but that is a vendor-stated target the firm reported about its own approach, not an independently verified benchmark, so treat it as a directional ambition rather than a number to plan against. Likewise, claims of dramatic setup-time reductions (the "forty-five minutes becomes one prompt" style of headline) are not backed by a retrievable primary source; early adopters report efficiency gains, but the specific magnitudes are anecdotal. When the figure matters to a budget decision, verify it against the platform's own UI before you act on it.
            </p>
            <p className="block mb-5 text-color-003 text-[1.0625rem] leading-[1.8125rem] text-pretty">
              {"The broader enterprise-SaaS picture rhymes with the ad-platform one: CRM and marketing platforms are shipping official MCP servers on the same logic of keeping signal inside the perimeter. Our look at "}
              <a className="border-b border-solid border-b-primary inline pb-px text-foreground font-medium cursor-pointer hover:bg-color-008 hover:text-primary hover:[text-decoration-color:var(--primary)]" data-component="link" href="/blog/hubspot-mcp-server-ai-agent-integration-guide">
                HubSpot's official MCP server
              </a>
              {" shows the same official-versus-community dynamic playing out beyond paid media."}
            </p>
          </div>
          <h2 className="block mt-14 mb-5 text-4xl leading-[2.5625rem] tracking-[-0.9px] max-lg:text-[1.625rem] max-lg:leading-[1.875rem] max-lg:tracking-[-0.65px]" data-component="heading" id="conclusion">
            <span className="block mb-3.5 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] font-medium leading-[0.8125rem] tracking-[1.32px] uppercase">
              09 — Conclusion
            </span>
            {"The agentic ad layer is "}
            <em className="inline text-accent [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] italic">
              here
            </em>
            {" — build for it carefully."}
          </h2>
          <div className="block relative my-10 p-8 rounded-[18px] overflow-hidden text-background bg-foreground">
            <div className="w-100 h-100 block absolute -right-[7.05rem] bottom-[-217.3px] pointer-events-none max-md:-right-[4.0875rem] max-md:-bottom-[23.475rem] md:max-lg:-right-[8.8rem] md:max-lg:-bottom-[11.6625rem] 2xl:-right-[7.55rem] 2xl:-bottom-[13.1rem]" style={{ backgroundImage: "radial-gradient(circle, var(--clr-9), var(--clr-0) 60%)" }} aria-hidden="true" />
            <div className="flex relative mb-3.5 items-center gap-2.5 text-accent [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.47px] uppercase">
              <span className="w-1.5 h-1.5 block rounded-full bg-primary shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--primary)_0px_0px_6px_0px] max-md:w-[4.5px]" />
              The shape of agentic media buying, June 2026
            </div>
            <h3 className="block relative mb-4 text-[1.375rem] font-medium leading-[1.625rem] tracking-[-0.33px]" data-component="heading">
              Official ads MCP servers are infrastructure decisions, not novelties.
            </h3>
            <div className="block relative text-color-012 text-base leading-[1.625rem]">
              <p className="block mb-3">
                {"In a single quarter, paid media gained a vendor-blessed way for AI agents to plug directly into ad accounts. The launches look similar from a distance, but the three platforms made "}
                <em className="inline text-accent [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] italic">
                  materially different
                </em>
                {" choices: Meta read/write with a paused-by-default cage, Google read-only by design, TikTok write-heavy across the full lifecycle. Those choices encode each platform's theory of how much autonomy it will hand an agent — and they shape what you can safely automate today."}
              </p>
              <p className="block mb-3">
                The strategic subtext is the part to internalize. Every official server keeps query patterns and conversion signals inside its own perimeter, which makes a single cross-platform agent harder, not easier, to build on official rails. The upside is real OAuth security and the end of token-pasting risk; the cost is a more fragmented agent landscape where each platform owns its own point of contact with your budget.
              </p>
              <p className="block">
                The practical move is unglamorous and correct: adopt in stages. Read-only reporting first, writes on paused campaigns next, live budget mutation last and only behind approval gates. The paused-by-default guardrail is your friend — use the early phases to build the review habits that make the later ones safe. Run your own evals on your own accounts, keep a human on the spend decisions that matter, and treat every confident-but-unsourced metric as suspect until you have checked it yourself.
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
                <a className="w-[7.1875rem] border border-solid border-border flex min-w-0 px-3 rounded-lg justify-center items-center flex-1 gap-1.5 text-muted-foreground text-[0.8125rem] font-medium leading-[1.1875rem] bg-background cursor-pointer h-9 hover:bg-surface-2 hover:border-color-010 hover:text-foreground hover:[text-decoration-color:var(--foreground)]" data-component="button" aria-label="Share on X" href={"https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.digitalapplied.com%2Fblog%2Fofficial-ads-mcp-servers-meta-google-tiktok-2026-playbook&text=Meta%2C%20Google%2C%20TikTok%20Ship%20Official%20Ads%20MCP%20Servers"} rel="noopener noreferrer" target="_blank">
                  <Icon2 />
                  {" X"}
                </a>
                <a className="w-[7.1875rem] border border-solid border-border flex min-w-0 px-3 rounded-lg justify-center items-center flex-1 gap-1.5 text-muted-foreground text-[0.8125rem] font-medium leading-[1.1875rem] bg-background cursor-pointer h-9 hover:bg-surface-2 hover:border-color-010 hover:text-foreground hover:[text-decoration-color:var(--foreground)]" data-component="button" aria-label="Share on LinkedIn" href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.digitalapplied.com%2Fblog%2Fofficial-ads-mcp-servers-meta-google-tiktok-2026-playbook" rel="noopener noreferrer" target="_blank">
                  <Icon3 />
                  {" LinkedIn"}
                </a>
              </div>
              <button className="w-59.5 border border-solid border-border flex min-w-0 px-3 rounded-lg justify-center items-center flex-1 gap-1.5 text-muted-foreground text-[0.8125rem] font-medium leading-[1.1875rem] text-center bg-background cursor-default h-[20.75px] max-lg:h-9 hover:bg-surface-2 hover:border-color-010 hover:text-foreground hover:[text-decoration-color:var(--foreground)]" data-component="button" type="button">
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
            <p className="block mb-3.5 text-color-015 text-[0.8125rem] leading-[1.1875rem]">
              Agentic development, frontier AI models, and data-driven strategies. No recycled AI takes.
            </p>
            <form className="flex flex-col gap-2">
              <input className="w-full h-10.5 border border-solid border-surface-3 block py-2.5 px-3 rounded-lg overflow-clip text-[0.8125rem] leading-[1.25rem] bg-clr-10 cursor-text focus:border-primary" data-ditto-id="style-email-address" data-component="input" aria-label="Email address" name="email" placeholder="you@work.com" type="email" value="" />
              <button className="flex py-2.5 rounded-lg justify-center items-center text-foreground text-[0.8125rem] font-medium leading-[1.25rem] text-center bg-background cursor-default h-auto w-full hover:bg-clr-13" data-component="button" type="submit">
                Subscribe
              </button>
            </form>
          </div>
          <div className="border border-solid border-border block p-5 rounded-[18px] bg-background">
            <span className="block mb-3.5 text-muted [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.26px] uppercase">
              Launch window
            </span>
            <h4 className="block mb-2.5 text-[0.9375rem] font-medium leading-[1.4375rem]" data-component="heading">
              Apr 28 – May 13, 2026
            </h4>
            <div className="block mb-1 [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-xs leading-4.5">
              Google · Meta · TikTok
            </div>
            <p className="block text-muted text-xs leading-4.5">
              These servers are evolving fast and several ship in open beta — verify tool counts, scopes, and pricing on each platform's own docs before wiring an agent into a live account.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
