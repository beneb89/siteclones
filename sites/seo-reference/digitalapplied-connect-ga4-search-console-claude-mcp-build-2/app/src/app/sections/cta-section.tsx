import Icon5 from "../svgs/svg-icon5";
import Tile4, { type Tile4Data } from "../components/tile4";
import ListRow5, { type ListRow5Data } from "../components/list-row5";
import { ListRow5_styles } from "../_styles";
import { ctaSectionContent } from "../content";
const Tile4_data: Tile4Data[] = [
    { text: "Free consultation" },
    { text: "Expert guidance" },
    { text: "Tailored solutions" }
];
const ListRow5_data: ListRow5Data[] = [
    { text: "GA4 + GSC MCP setup with least-privilege service accounts" },
    { text: "Quota-aware agent prompting and reporting templates" },
    { text: "Cross-surface organic reporting — GA4 sessions × GSC queries" },
    { text: "Team rollouts — project-scoped configs, approval workflows" },
    { text: "Governance reviews for community MCP servers" }
];
/** Cta section. */
export default function CtaSection({ tile4Data = Tile4_data, listRow5Data = ListRow5_data, content = ctaSectionContent } = {}) {
  return (
    <section className="block relative isolate py-20 overflow-hidden text-background bg-foreground">
      <div className="h-full block absolute top-0 inset-x-0 [background-size:56px_56px,_56px_56px] [background-position:0%_0%,_0%_0%] [background-repeat:repeat,_repeat] [background-clip:border-box,_border-box] [background-origin:padding-box,_padding-box] [background-attachment:scroll,_scroll] [background-blend-mode:normal,_normal] [-webkit-background-clip:border-box,_border-box] pointer-events-none" style={{ backgroundImage: "linear-gradient(var(--surface-6) 1px, var(--clr-0) 1px), linear-gradient(90deg, var(--surface-6) 1px, var(--clr-0) 1px)", maskImage: "radial-gradient(var(--clr-1) 30%, var(--clr-0) 75%)" }} aria-hidden="true" />
      <div className="w-225 h-225 block absolute top-[clamp(298.7px,_50%,_calc(100%_-_298.7px))] left-[clamp(187.5px,_50%,_calc(100%_-_187.5px))] [filter:blur(30px)] [translate:-50%_-50%] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, var(--clr-2), var(--clr-3) 30%, var(--clr-0) 65%)" }} aria-hidden="true" />
      <div className="grid relative z-2 max-w-330 px-8 items-center gap-14 mx-auto grid-cols-[1.3fr_1fr] max-md:px-4 max-lg:grid-cols-1">
        <div className="block">
          <span className="inline-flex mb-4.5 items-center gap-2.5 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1.0625rem] tracking-[1.54px] uppercase">
            <span className="block bg-primary h-px w-5 max-md:w-[1.125rem]" />
            Wire your organic data into an AI analyst
          </span>
          <h2 className="block mb-4.5 text-[3.0625rem] font-light leading-[3.1875rem] tracking-[-1.46px] max-lg:text-3xl max-lg:leading-[1.9375rem] max-lg:tracking-[-0.9px] 2xl:text-[3.125rem] 2xl:leading-13 2xl:tracking-[-1.5px]" data-component="heading">
            {"Your GA4 and Search Console data, one AI analyst, "}
            <em className="inline text-clr-0 [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] font-normal italic [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:var(--clr-0)]" style={{ backgroundImage: "linear-gradient(var(--background) 40%, var(--accent) 80%, var(--primary) 100%)" }}>
              {content.title}
            </em>
            .
          </h2>
          <p className="w-full max-w-130 block mb-7 text-color-007 leading-[1.625rem]">
            Our team builds agent-connected analytics stacks — GA4 and Search Console wired into Claude with least-privilege auth, quota-aware prompting, and the reporting layer on top — delivered in days, not quarters.
          </p>
          <div className="flex mb-6 flex-wrap gap-3">
            <a className="flex relative px-7 rounded-[10px] justify-center items-center gap-2 overflow-hidden text-[0.9375rem] font-medium leading-[1.4375rem] bg-foreground shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--foreground)_0px_0px_0px_1px,var(--clr-12)_0px_10px_30px_-10px] cursor-pointer h-[3.25rem]" data-component="link" href={content.actions[0].href}>
              <span className="block relative z-1">
                {content.actions[0].label}
              </span>
              <Icon5 />
            </a>
            <a className="border border-solid border-surface-3 flex px-7 rounded-[10px] justify-center items-center gap-2 text-[0.9375rem] font-medium leading-[1.4375rem] bg-surface-6 cursor-pointer h-[3.25rem] hover:bg-surface-2 hover:border-clr-15" data-component="button" href={content.actions[1].href}>
              {content.actions[1].label}
            </a>
          </div>
          <div className="flex flex-wrap gap-y-2 gap-x-7 text-color-004 [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1.0625rem] tracking-[1.1px] uppercase">
            {tile4Data.map((d, i) => <Tile4 key={i} d={d} />)}
          </div>
        </div>
        <div className="border border-solid border-surface-2 block relative p-7 rounded-[18px] overflow-hidden bg-surface-6">
          <div className="w-[31.525rem] h-full block absolute -top-px -left-px p-px rounded-[18px] pointer-events-none max-md:w-[21.4375rem] md:max-lg:w-176 2xl:w-[32.6125rem]" style={{ backgroundImage: "linear-gradient(135deg, var(--clr-7), var(--clr-0) 60%)", maskImage: "linear-gradient(var(--background) 0px, var(--background) 0px), linear-gradient(var(--background) 0px, var(--background) 0px)" }} aria-hidden="true" />
          <span className="block mb-3.5 text-accent [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1.0625rem] tracking-[1.54px] uppercase">
            What we work on
          </span>
          <h4 className="block mb-3.5 text-[1.1875rem] font-medium leading-[1.8125rem] tracking-[-0.19px]" data-component="heading">
            Agent-connected analytics engagements
          </h4>
          <ul className="block [list-style-type:none] list-outside">
            {listRow5Data.map((d, i) => <ListRow5 key={i} d={d} styles={ListRow5_styles[i]} />)}
          </ul>
        </div>
      </div>
    </section>
  );
}
