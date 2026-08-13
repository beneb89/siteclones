import Icon5 from "../svgs/svg-icon5";
import Tile3, { type Tile3Data } from "../components/tile3";
import ListRow4, { type ListRow4Data } from "../components/list-row4";
import { ListRow4_styles } from "../_styles";
import { ctaSectionContent } from "../content";
const Tile3_data: Tile3Data[] = [
    { text: "Free consultation" },
    { text: "Expert guidance" },
    { text: "Tailored solutions" }
];
const ListRow4_data: ListRow4Data[] = [
    { text: "Staged 30/60/90 MCP rollout — read-only to gated live writes" },
    { text: "OAuth scope governance — narrowest-tier-per-phase discipline" },
    { text: "Paused-by-default workflows with human approval gates" },
    { text: "Cross-platform agent strategy — Meta / Google / TikTok" },
    { text: "Hallucinated-metric controls and audit logging" }
];
/** Cta section. */
export default function CtaSection({ tile3Data = Tile3_data, listRow4Data = ListRow4_data, content = ctaSectionContent } = {}) {
  return (
    <section className="block relative isolate py-20 overflow-hidden text-background bg-foreground">
      <div className="h-full block absolute top-0 inset-x-0 [background-size:56px_56px,_56px_56px] [background-position:0%_0%,_0%_0%] [background-repeat:repeat,_repeat] [background-clip:border-box,_border-box] [background-origin:padding-box,_padding-box] [background-attachment:scroll,_scroll] [background-blend-mode:normal,_normal] [-webkit-background-clip:border-box,_border-box] pointer-events-none" style={{ backgroundImage: "linear-gradient(var(--surface-5) 1px, var(--clr-0) 1px), linear-gradient(90deg, var(--surface-5) 1px, var(--clr-0) 1px)", maskImage: "radial-gradient(var(--clr-2) 30%, var(--clr-0) 75%)" }} aria-hidden="true" />
      <div className="w-225 h-225 block absolute top-[clamp(272.9px,_50%,_calc(100%_-_272.9px))] left-[clamp(187.5px,_50%,_calc(100%_-_187.5px))] [filter:blur(30px)] [translate:-50%_-50%] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, var(--clr-3), var(--clr-4) 30%, var(--clr-0) 65%)" }} aria-hidden="true" />
      <div className="grid relative z-2 max-w-330 px-8 items-center gap-14 mx-auto grid-cols-[1.3fr_1fr] max-md:px-4 max-lg:grid-cols-1">
        <div className="block">
          <span className="inline-flex mb-4.5 items-center gap-2.5 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1.0625rem] tracking-[1.54px] uppercase">
            <span className="block bg-primary h-px w-5 max-md:w-[14.91px]" />
            Adopt agentic media buying without torching budget
          </span>
          <h2 className="block mb-4.5 text-[3.0625rem] font-light leading-[3.1875rem] tracking-[-1.46px] max-lg:text-3xl max-lg:leading-[1.9375rem] max-lg:tracking-[-0.9px] 2xl:text-[3.125rem] 2xl:leading-13 2xl:tracking-[-1.5px]" data-component="heading">
            {"Let agents do the work, keep humans on the "}
            <em className="inline text-clr-0 [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] font-normal italic [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:var(--clr-0)]" style={{ backgroundImage: "linear-gradient(var(--background) 40%, var(--accent) 80%, var(--primary) 100%)" }}>
              {content.title}
            </em>
            .
          </h2>
          <p className="w-full max-w-130 block mb-7 text-color-007 leading-[1.625rem]">
            Our team helps agencies and in-house teams adopt official ads MCP servers safely — staged rollouts, OAuth governance, paused-by-default workflows, and agentic media buying paired with senior human judgment on every budget decision.
          </p>
          <div className="flex mb-6 flex-wrap gap-3">
            <a className="flex relative px-7 rounded-[10px] justify-center items-center gap-2 overflow-hidden text-[0.9375rem] font-medium leading-[1.4375rem] bg-foreground shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--foreground)_0px_0px_0px_1px,var(--clr-11)_0px_10px_30px_-10px] cursor-pointer h-[3.25rem]" data-component="link" href={content.actions[0].href}>
              <span className="block relative z-1">
                {content.actions[0].label}
              </span>
              <Icon5 />
            </a>
            <a className="border border-solid border-surface-3 flex px-7 rounded-[10px] justify-center items-center gap-2 text-[0.9375rem] font-medium leading-[1.4375rem] bg-surface-5 cursor-pointer h-[3.25rem] hover:bg-surface hover:border-clr-14" data-component="button" href={content.actions[1].href}>
              {content.actions[1].label}
            </a>
          </div>
          <div className="flex flex-wrap gap-y-2 gap-x-7 text-color-004 [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1.0625rem] tracking-[1.1px] uppercase">
            {tile3Data.map((d, i) => <Tile3 key={i} d={d} />)}
          </div>
        </div>
        <div className="border border-solid border-surface block relative p-7 rounded-[18px] overflow-hidden bg-surface-5">
          <div className="w-[31.525rem] h-full block absolute -top-px -left-px p-px rounded-[18px] pointer-events-none max-md:w-[21.4375rem] md:max-lg:w-176 2xl:w-[32.6125rem]" style={{ backgroundImage: "linear-gradient(135deg, var(--clr-7), var(--clr-0) 60%)", maskImage: "linear-gradient(var(--background) 0px, var(--background) 0px), linear-gradient(var(--background) 0px, var(--background) 0px)" }} aria-hidden="true" />
          <span className="block mb-3.5 text-accent [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1.0625rem] tracking-[1.54px] uppercase">
            What we work on
          </span>
          <h4 className="block mb-3.5 text-[1.1875rem] font-medium leading-[1.8125rem] tracking-[-0.19px]" data-component="heading">
            Agentic ad-ops engagements
          </h4>
          <ul className="block [list-style-type:none] list-outside">
            {listRow4Data.map((d, i) => <ListRow4 key={i} d={d} styles={ListRow4_styles[i]} />)}
          </ul>
        </div>
      </div>
    </section>
  );
}
