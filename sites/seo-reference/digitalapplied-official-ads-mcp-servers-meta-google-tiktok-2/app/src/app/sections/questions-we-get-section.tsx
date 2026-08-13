import Icon6 from "../svgs/svg-icon6";
import MediaTile, { type MediaTileData } from "../components/media-tile";
import { MediaTile_meta } from "../ditto-meta";
const MediaTile_data: MediaTileData[] = [
    { ariacontrols: "faq-answer-1", label: "How do Meta, Google, and TikTok's MCP servers differ?" },
    { ariacontrols: "faq-answer-2", label: "Is it safe to let an AI agent run live ad campaigns?" },
    { ariacontrols: "faq-answer-3", label: "Can one agent manage Meta, Google, and TikTok together?" },
    { ariacontrols: "faq-answer-4", label: "Why is Google's Ads MCP server read-only when Meta's is read/write?" },
    { ariacontrols: "faq-answer-5", label: "What authentication do these servers require?" },
    { ariacontrols: "faq-answer-6", label: "What is the recommended way to start adopting these?" },
    { ariacontrols: "faq-answer-7", label: "Do these servers help with creative, or only campaign data?" }
];
/** Questions We Get section. */
export default function QuestionsWeGetSection({ mediaTileData = MediaTile_data } = {}) {
  return (
    <section className="border-t border-solid border-t-border block py-24 bg-background" id="faq">
      <div className="block max-w-240 mx-auto px-8 max-md:px-4">
        <div className="block mb-12">
          <div className="inline-flex mb-3.5 items-center gap-2.5 text-muted [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1.0625rem] tracking-[1.54px] uppercase">
            <span className="block bg-primary h-px w-5" />
            FAQ · Official ads MCP servers
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
            <button className="h-7 flex justify-between items-center gap-4 text-[1.0625rem] font-medium leading-[1.625rem] tracking-[-0.17px] text-left cursor-pointer w-full" data-component="button" aria-controls="faq-answer-0" aria-expanded="true" type="button">
              <span className="block">
                What is an official ads MCP server?
              </span>
              <span className="w-7 h-7 border border-solid border-primary flex rounded-full justify-center items-center shrink-0 text-background bg-primary [rotate:45deg] 2xl:border-border 2xl:text-muted-foreground 2xl:bg-[initial] 2xl:[rotate:initial]">
                <Icon6 />
              </span>
            </button>
            <div className="w-full max-w-190 block mt-3.5 text-muted-foreground text-[0.9375rem] leading-[1.5625rem] 2xl:hidden" id="faq-answer-0">
              An ads MCP server is a Model Context Protocol bridge that lets an AI agent read and, on some platforms, act on an ad account. An official server is one shipped and maintained by the platform itself, rather than an unofficial community connector. Google released its official Google Ads MCP server on April 28, 2026, Meta launched its Meta Ads AI Connectors on April 29, and TikTok announced its Ads MCP Server at TikTok World on May 13. Amazon shipped one earlier, in February 2026. The key practical difference from community connectors is authentication: official servers use proper OAuth flows instead of asking users to paste personal access tokens, which removes a significant account-ban and security risk.
            </div>
          </div>
          {mediaTileData.map((d, i) => <MediaTile key={i} d={d} meta={MediaTile_meta[i]} />)}
        </div>
      </div>
    </section>
  );
}
