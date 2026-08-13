import Icon6 from "../svgs/svg-icon6";
import MediaTile, { type MediaTileData } from "../components/media-tile";
import { MediaTile_meta } from "../ditto-meta";
const MediaTile_data: MediaTileData[] = [
    { ariacontrols: "faq-answer-1", label: "Is there an official MCP server for Search Console?" },
    { ariacontrols: "faq-answer-2", label: "What permissions and scopes does the full setup actually need?" },
    { ariacontrols: "faq-answer-3", label: "Can the GA4 MCP server change my analytics settings?" },
    { ariacontrols: "faq-answer-4", label: "How do I add these servers to Claude Code?" },
    { ariacontrols: "faq-answer-5", label: "What quotas should the agent be designed around?" },
    { ariacontrols: "faq-answer-6", label: "Should the service account be an Owner in Search Console?" },
    { ariacontrols: "faq-answer-7", label: "Can my team share this MCP config safely in a repo?" }
];
/** Questions We Get section. */
export default function QuestionsWeGetSection({ mediaTileData = MediaTile_data } = {}) {
  return (
    <section className="border-t border-solid border-t-border block py-24 bg-background" id="faq">
      <div className="block max-w-240 mx-auto px-8 max-md:px-4">
        <div className="block mb-12">
          <div className="inline-flex mb-3.5 items-center gap-2.5 text-muted [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1.0625rem] tracking-[1.54px] uppercase">
            <span className="block bg-primary h-px w-5" />
            FAQ · GA4 + GSC via MCP
          </div>
          <h2 className="block text-5xl leading-[3.125rem] tracking-[-1.44px] max-lg:text-[2rem] max-lg:leading-[2.125rem] max-lg:tracking-[-0.96px]" data-component="heading">
            {"The questions we get "}
            <em className="inline [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] italic">
              every week.
            </em>
          </h2>
        </div>
        <div className="border-t border-solid border-t-border block">
          <div className="border-b border-solid border-b-border block py-5">
            <button className="flex justify-between items-center gap-4 text-[1.0625rem] font-medium leading-[1.625rem] tracking-[-0.17px] text-left cursor-pointer w-full" data-component="button" aria-controls="faq-answer-0" aria-expanded="true" type="button">
              <span className="block">
                Is there an official Google MCP server for GA4?
              </span>
              <span className="w-7 h-7 border border-solid border-primary flex rounded-full justify-center items-center shrink-0 text-background bg-primary [rotate:45deg] 2xl:border-border 2xl:text-muted-foreground 2xl:bg-[initial] 2xl:[rotate:initial]">
                <Icon6 />
              </span>
            </button>
            <div className="w-full max-w-190 block mt-3.5 text-muted-foreground text-[0.9375rem] leading-[1.5625rem] 2xl:hidden" id="faq-answer-0">
              Yes. Google publishes and maintains an official GA4 MCP server at github.com/googleanalytics/google-analytics-mcp under an Apache-2.0 license, with its own page on the Google Analytics developer docs. It runs locally via pipx run analytics-mcp (Python 3.10+), authenticates through Application Default Credentials scoped to analytics.readonly, and interacts with the Admin API and Data API. As of July 8, 2026 it stood at 2.6k GitHub stars with v0.6.0 released May 21, 2026 — an actively maintained project, not an experiment. It exposes seven tools, including run_report, run_funnel_report, run_realtime_report, and property and account discovery tools.
            </div>
          </div>
          {mediaTileData.map((d, i) => <MediaTile key={i} d={d} meta={MediaTile_meta[i]} />)}
        </div>
      </div>
    </section>
  );
}
