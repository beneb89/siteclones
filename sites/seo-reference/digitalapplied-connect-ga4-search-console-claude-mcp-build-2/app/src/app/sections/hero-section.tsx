import Tile, { type TileData } from "../components/tile";
import { Tile_styles } from "../_styles";
const Tile_data: TileData[] = [
    { text: "Published", text2: "July 8, 2026" },
    { text: "Read time", text2: "12 min" },
    { text: "Sources", text2: "Google + Anthropic docs" }
];
/** Hero section — the page's lead block. */
export default function HeroSection({ tileData = Tile_data } = {}) {
  return (
    <section className="block relative isolate pt-14 overflow-hidden text-background bg-foreground">
      <div className="h-full block absolute top-0 inset-x-0 [background-size:56px_56px,_56px_56px] [background-position:0%_0%,_0%_0%] [background-repeat:repeat,_repeat] [background-clip:border-box,_border-box] [background-origin:padding-box,_padding-box] [background-attachment:scroll,_scroll] [background-blend-mode:normal,_normal] [-webkit-background-clip:border-box,_border-box] pointer-events-none" style={{ backgroundImage: "linear-gradient(var(--surface-6) 1px, var(--clr-0) 1px), linear-gradient(90deg, var(--surface-6) 1px, var(--clr-0) 1px)", maskImage: "radial-gradient(at 50% 30%, var(--clr-1) 20%, var(--clr-0) 75%)" }} aria-hidden="true" />
      <div className="w-155 h-155 block absolute top-[-40.7px] -left-16 [filter:blur(40px)] pointer-events-none max-md:-top-[4.275rem] max-md:left-[-18.7px] md:max-lg:top-[-42.3px] md:max-lg:-left-[2.4rem] 2xl:-top-[2.5875rem] 2xl:-left-24" style={{ backgroundImage: "radial-gradient(circle, var(--clr-2), var(--clr-3) 40%, var(--clr-0) 70%)" }} aria-hidden="true" />
      <div className="w-130 h-130 block absolute top-[10.175rem] -right-16 [filter:blur(40px)] pointer-events-none max-md:top-[17.1125rem] max-md:right-[-18.7px] md:max-lg:top-[169.3px] md:max-lg:-right-[2.4rem] 2xl:top-[10.3625rem] 2xl:-right-24" style={{ backgroundImage: "radial-gradient(circle, var(--clr-4), var(--clr-5) 40%, var(--clr-0) 70%)" }} aria-hidden="true" />
      <div className="block relative z-2 max-w-330 px-8 mx-auto max-md:px-4">
        <div className="flex mb-9 flex-wrap items-center gap-3">
          <span className="border border-solid border-color-011 block py-1.5 px-3 rounded-md text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1.0625rem] tracking-[1.54px] uppercase bg-clr-6">
            AI Development
          </span>
          <span className="block py-1.5 px-3 rounded-md text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] font-medium leading-[1.0625rem] tracking-[1.54px] uppercase bg-accent">
            <span className="w-[0.3125rem] h-[0.3125rem] inline-block opacity-[0.60719] mr-1.5 rounded-full [vertical-align:1px] bg-foreground [animation-name:ignition-pulse] [animation-duration:1.2s] [animation-iteration-count:infinite]" />
            Playbook
          </span>
          <span className="border border-solid border-surface-3 block py-1.5 px-3 rounded-md text-color-014 [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1.0625rem] tracking-[1.54px] uppercase">
            12 min read
          </span>
          <span className="border border-solid border-surface-3 block py-1.5 px-3 rounded-md text-color-014 [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1.0625rem] tracking-[1.54px] uppercase">
            Published July 8, 2026
          </span>
        </div>
        <p className="w-full max-w-225 block mb-4.5 text-color-007 text-[1.0625rem] leading-[1.625rem] tracking-[-0.08px]">
          {"Two Google data surfaces · one Claude Code session · "}
          <span className="inline text-accent [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] italic">
            read-only by design
          </span>
        </p>
        <h1 className="w-full max-w-275 block mb-6 text-[4.3125rem] leading-[4.3125rem] tracking-[-2.42px] max-md:text-[2.5rem] max-md:leading-10 max-md:tracking-[-1.4px] md:max-lg:text-[2.625rem] md:max-lg:leading-[2.625rem] md:max-lg:tracking-[-1.45px] 2xl:text-[4.75rem] 2xl:leading-19 2xl:tracking-[-2.66px]" data-component="heading">
          {"Connect GA4 + Search Console to Claude via "}
          <em className="inline text-accent [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] italic">
            MCP
          </em>
        </h1>
        <p className="w-full max-w-190 block mb-11 text-color-007 text-lg leading-[1.8125rem]">
          Google ships and maintains an official GA4 MCP server. Search Console has no official equivalent — every option is community-built. This is the end-to-end build for wiring both into one Claude Code session: service-account auth, read-only scopes, per-property grants, and the quota ceilings your agent has to respect.
        </p>
        <div className="flex mb-12 flex-wrap items-center gap-5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 flex rounded-full justify-center items-center text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-sm font-medium leading-[1.3125rem] max-md:w-[2.6875rem]" style={{ backgroundImage: "linear-gradient(135deg, var(--primary), var(--accent))" }}>
              DA
            </div>
            <div className="block">
              <div className="block text-sm font-medium leading-[1.0625rem]">
                Digital Applied Team
              </div>
              <div className="block mt-0.5 text-color-004 [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[0.84px] uppercase">
                Senior strategists · Published July 8, 2026
              </div>
            </div>
          </div>
          <div className="border-l border-solid border-l-surface-2 flex pl-6 flex-wrap gap-y-2 gap-x-6 text-color-005 [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1.0625rem] tracking-[1.1px] uppercase max-md:gap-x-4 max-md:border-l-[0] max-md:border-initial max-md:border-l-[initial] max-md:pl-0">
            {tileData.map((d, i) => <Tile key={i} d={d} styles={Tile_styles[i]} />)}
          </div>
        </div>
        <div className="w-full border border-solid border-surface-2 grid mb-14 rounded-[18px] gap-px overflow-hidden bg-surface-2 grid-cols-2 md:grid-cols-4">
          <div className="block relative py-6 px-5 bg-foreground">
            <span className="block mb-3.5 text-color-005 [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.26px] uppercase">
              Official GA4 MCP server
            </span>
            <div className="flex items-baseline gap-1 text-[2.5rem] font-light leading-10 tracking-[-1.2px]">
              2.6
              <span className="block ml-0.5 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-base leading-4">
                k
              </span>
            </div>
            <div className="block mt-3 text-color-004 text-xs leading-[1rem]">
              GitHub stars · v0.6.0
            </div>
            <div className="inline-flex mt-3 items-center gap-1 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.26px] uppercase">
              <span className="block" aria-hidden="true">
                ▼
              </span>
              as of Jul 8, 2026
            </div>
          </div>
          <div className="block relative py-6 px-5 bg-foreground">
            <span className="block mb-3.5 text-color-005 [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.26px] uppercase">
              Official GSC MCP servers
            </span>
            <div className="flex items-baseline gap-1 text-[2.5rem] font-light leading-10 tracking-[-1.2px]">
              0
            </div>
            <div className="block mt-3 text-color-004 text-xs leading-[1rem]">
              every option is community-built
            </div>
          </div>
          <div className="block relative py-6 px-5 bg-foreground">
            <span className="block mb-3.5 text-color-005 [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.26px] uppercase">
              GA4 Core tokens / day
            </span>
            <div className="flex items-baseline gap-1 text-[2.5rem] font-light leading-10 tracking-[-1.2px]">
              200
              <span className="block ml-0.5 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-base leading-4">
                K
              </span>
            </div>
            <div className="block mt-3 text-color-004 text-xs leading-[1rem]">
              standard property quota
            </div>
          </div>
          <div className="block relative py-6 px-5 bg-foreground">
            <span className="block mb-3.5 text-color-005 [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.26px] uppercase">
              GSC rows / request
            </span>
            <div className="flex items-baseline gap-1 text-[2.5rem] font-light leading-10 tracking-[-1.2px]">
              25
              <span className="block ml-0.5 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-base leading-4">
                K
              </span>
            </div>
            <div className="block mt-3 text-color-004 text-xs leading-[1rem]">
              searchanalytics.query cap
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
