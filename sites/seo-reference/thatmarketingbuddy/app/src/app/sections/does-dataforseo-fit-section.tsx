import FeatureCard2, { type FeatureCard2Data } from "../components/feature-card2";
import { FeatureCard2_styles } from "../_styles";
const FeatureCard2_data: FeatureCard2Data[] = [
    { text: "Risk", title: "Where AI Is Catching Up", description: "AI is getting better at analyzing SEO data once you have it. Claude can now take your SERP export from DataForSEO and write strategic recommendations, identify ranking gaps, or spot patterns in competitor tactics. The real risk isn't to DataForSEO's data collection, it's to their analysis layer.", description2: "If you're using DataForSEO mainly for reports that summarize ranking changes, AI tools will increasingly handle that synthesis work for free." },
    { text: "API", title: "API & Integrations", description: "The API has full endpoint coverage for domain rankings, SERP analysis, keyword research, and backlink data. Documentation is clear and technical. No rate limit walls across the plans. The major limitation is the lack of Zapier or Make integrations, which means you'll need custom code or a developer to pipe data into your other tools.", description2: "That's not ideal for a marketing team that wants to auto-sync rankings into a spreadsheet or Slack." },
    { text: "MCP", title: "MCP & CLI", description: "DataForSEO ships an official MCP server, and there are three ways to run it. Install it locally with npx -y dataforseo-mcp-server or the official Docker image, or skip local setup entirely and point Claude Code, Claude Desktop, or Cursor at the hosted remote endpoint at https://mcp.dataforseo.com/mcp, authenticating with your API credentials as Basic auth.", description2: "The server exposes the full platform, including the newer AI Optimization and LLM Mentions modules, so an agent can pull live rankings or AI answer visibility data directly. There is no standalone CLI tool, but the hosted MCP makes that a non-issue." }
];
/** Does Dataforseo Fit section. */
export default function DoesDataforseoFitSection({ featureCard2Data = FeatureCard2_data } = {}) {
  return (
    <section className="border-b border-solid border-b-color-005 block mb-10 pb-10" id="ai-stack">
      <p className="block mb-2 text-muted-foreground [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[1px] uppercase">
        {"AI & Tech Stack"}
      </p>
      <h2 className="block mb-6 text-color-001 text-2xl font-black leading-8 tracking-[-0.6px]" data-component="heading">
        Does DataForSEO fit your AI stack?
      </h2>
      <div className="grid mb-6 gap-4 grid-cols-2 max-md:grid-cols-1">
        <div className="block p-5 rounded-xl bg-foreground">
          <div className="flex mb-2.5 items-center gap-2">
            <span className="block py-0.5 px-2 rounded-full text-color-006 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[0.5px] uppercase bg-clr-8">
              Core
            </span>
            <h3 className="block text-background text-sm font-bold leading-5" data-component="heading">
              What AI Can't Replace
            </h3>
          </div>
          <div className="block">
            <p className="block mb-3 text-color-002 text-sm leading-[1.4375rem]">
              DataForSEO's real moat is access to real-time search data at scale. It crawls SERPs, pulls actual ranking positions, tracks competitors across keywords, and monitors local search results across thousands of locations. No AI model can replace this because Claude and ChatGPT have training data cutoffs and no live access to Google's current rankings.
            </p>
            <p className="block mb-3 text-color-002 text-sm leading-[1.4375rem]">
              You need DataForSEO's infrastructure to answer questions like 'What keywords did my competitor rank for last week that they've now lost'. In 2026 DataForSEO extended this into AI answers: its LLM Mentions API tracks how brands and competitors are cited inside ChatGPT and Google AI Overviews, live data no model can generate on its own.
            </p>
            <p className="block text-color-002 text-sm leading-[1.4375rem]">
              That makes DataForSEO a source of truth for both classic rankings and generative engine (GEO) visibility.
            </p>
          </div>
        </div>
        {featureCard2Data.map((d, i) => <FeatureCard2 key={i} d={d} styles={FeatureCard2_styles[i]} />)}
      </div>
      <div className="block p-5 rounded-2xl text-background bg-foreground">
        <p className="block mb-2 text-color-003 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[1px] uppercase">
          Stack Verdict
        </p>
        <p className="block text-color-002 text-sm leading-[1.4375rem]">
          {"Use DataForSEO as your "}
          <strong className="inline font-semibold">
            {" live ranking source of truth "}
          </strong>
          {" and let "}
          <strong className="inline font-semibold">
            {" Claude or your AI tools do the analysis "}
          </strong>
          {" on top of it. Without the Zapier glue, you'll need a developer to automate data flows."}
        </p>
      </div>
      <div className="block mt-6 p-5 rounded-xl bg-foreground">
        <p className="block mb-4 text-color-003 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[1px] uppercase">
          Connects with
        </p>
        <div className="grid mb-4 gap-3 grid-cols-3 max-md:grid-cols-2">
          <div className="flex p-2.5 rounded-lg items-start gap-2.5 bg-surface-3">
            <span className="block mt-0.5 text-color-006 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-sm leading-5">
              ✓
            </span>
            <div className="h-full block">
              <span className="inline text-background text-sm leading-5">
                MCP Server
              </span>
              <span className="block text-color-003 text-xs leading-4">
                Claude, Cursor, Windsurf
              </span>
            </div>
          </div>
          <div className="flex p-2.5 rounded-lg items-start gap-2.5 bg-surface-3">
            <span className="block mt-0.5 text-color-006 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-sm leading-5">
              ✓
            </span>
            <div className="block">
              <span className="inline text-background text-sm leading-5">
                REST API
              </span>
            </div>
          </div>
        </div>
        <div className="border-t border-solid border-t-surface block pt-4">
          <p className="block mb-3 text-color-003 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[1px] uppercase">
            Security
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="block py-1 px-2.5 rounded-full text-color-004 text-xs leading-4">
              <span className="inline mr-1 text-muted [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace]">
                ✗
              </span>
              SSO
            </span>
            <span className="block py-1 px-2.5 rounded-full text-color-004 text-xs leading-4">
              <span className="inline mr-1 text-muted [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace]">
                ✗
              </span>
              2FA
            </span>
          </div>
        </div>
      </div>
      <div className="flex mt-6 flex-wrap items-center gap-y-2 gap-x-6 text-muted-foreground text-xs leading-4">
        <span className="block">
          {"Founded "}
          <strong className="inline text-color-004 font-bold">
            2014
          </strong>
        </span>
        <span className="block">
          {"HQ "}
          <strong className="inline text-color-004 font-bold">
            UA
          </strong>
        </span>
      </div>
    </section>
  );
}
