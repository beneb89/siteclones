import Tile3, { type Tile3Data } from "../components/tile3";
import { Tile3_styles } from "../_styles";
const Tile3_data: Tile3Data[] = [
    { text: "What is the Meta Ads CLI?", text2: "The Meta Ads CLI is an official command-line tool released by Meta on April 29, 2026 that wraps the Meta Marketing API into terminal commands. It lets developers and AI agents create, list, update and delete campaigns, ad sets, ads, creatives, catalogs and conversion pixels without writing custom API code. It requires Python 3.12+ and installs via pip or uv. New resources default to PAUSED status as a safety guardrail, and outputs are available as a human-readable table, JSON (compatible with jq) or tab-separated values for shell pipelines." },
    { text: "How do you use Meta Ads CLI with Claude or ChatGPT?", text2: "The CLI is the deterministic execution layer; Claude or ChatGPT is the planning layer that generates and runs CLI commands through an MCP (Model Context Protocol) server or Code Interpreter. The pattern Baker uses is: install the CLI in a sandboxed environment, expose it to the model with read-only credentials first, and let the model translate natural language briefs into commands like `meta ads insights get --campaign_id 12345 --fields=impressions,conversions --date-preset last_7d`. Always start with --no-input and --force disabled so the human reviews each write before it executes." },
    { text: "What is MCP and how does it relate to the Meta Ads CLI?", text2: "MCP (Model Context Protocol) is the open standard that lets AI assistants like Claude and ChatGPT call external tools through a standardised server interface. With an MCP server wrapped around the Meta Ads CLI, an assistant can run audits, build campaigns and pull insights in natural language. Pipboard already operates a third-party MCP for Meta Ads that allows pulling visualisations into Claude and executing live optimisations like pausing campaigns or reallocating budgets without logging into Business Manager." },
    { text: "Is the Meta Ads CLI safe to use in production accounts?", text2: "It is safe when scoped correctly. The CLI ships three safety defaults: new campaigns, ad sets and ads are created in PAUSED state, exit codes are standardised (0 success, 3 auth error, 4 API error) so CI/CD pipelines can fail fast, and --no-input plus --force flags must be explicitly passed for unattended runs. Baker's rule for production: read-only token in the AI assistant's MCP server, write-enabled token only in human-reviewed CI workflows, and an approval step on every spend-changing command." },
    { text: "What can you automate with the Meta Ads CLI in 2026?", text2: "Five workflows have an immediate ROI when automated: daily creative fatigue audits (pull hook rate and frequency, flag ads above thresholds), weekly Andromeda diagnostics (entity ID diversity, campaign consolidation checks), CAPI Event Match Quality monitoring, ad set duplication for new geographies (apply settings in bulk via JSON output piped into shell), and ENCAC reporting that joins CLI insights with CRM exports. According to Session Media, custom agency MCPs prevent the manual setup errors that plague bulk campaign work, like leaving audience expansion enabled by default." },
    { text: "What are the limitations of the Meta Ads CLI?", text2: "The CLI inherits Meta Marketing API rate limits, requires Python 3.12+ (older runtimes are unsupported), and currently does not handle every Business Manager surface (catalog and offline conversion paths exist but some lifecycle operations still require Ads Manager). When orchestrated by AI agents, the failure modes documented for Manus AI on Meta still apply: budget formatting confusion (monthly vs daily), objective mixing inside a single campaign, and over-rotation toward retargeting at the expense of prospecting. Human review on the first PAUSED draft prevents all three." },
    { text: "Will the Meta Ads CLI replace Meta Ads Manager?", text2: "No, it changes who uses Ads Manager and when. The CLI absorbs repeatable, structured operations (creation, duplication, reporting, bulk edits) that Ads Manager makes slow. Ads Manager remains the system of record for asset upload, creative preview, manual review and the policy review surface. Multi-expert consensus across Pipboard, Session Media and the Google Ads MCP rollout is that AI-driven CLIs handle 70-80% of recurring tasks, freeing media buyers to spend the remaining time on offer, creative angle and account strategy." }
];
/** Faq section. */
export default function FaqSection({ tile3Data = Tile3_data } = {}) {
  return (
    <section className="block mt-12">
      <h2 className="block text-color-001 text-[1.625rem] font-bold leading-[2.0625rem] tracking-[-0.52px]" data-component="heading">
        FAQ
      </h2>
      {" "}
      <dl className="block mt-4">
        {tile3Data.map((d, i) => <Tile3 key={i} d={d} styles={Tile3_styles[i]} />)}
      </dl>
      {" "}
    </section>
  );
}
