import Tile, { type TileData } from "../components/tile";
import FeatureGridItem from "../components/feature-grid-item";
import { Tile_styles } from "../_styles";
import { features as featuresContent } from "../content";
const Tile_data: TileData[] = [
    { text: "Published", text2: "Jun 7, 2026" },
    { text: "Read time", text2: "13 min" },
    { text: "Sources", text2: "10 primary + industry" }
];
/** Hero section — the page's lead block. */
export default function HeroSection({ tileData = Tile_data, features = featuresContent } = {}) {
  return (
    <section className="block relative isolate pt-14 overflow-hidden text-background bg-foreground">
      <div className="h-full block absolute top-0 inset-x-0 [background-size:56px_56px,_56px_56px] [background-position:0%_0%,_0%_0%] [background-repeat:repeat,_repeat] [background-clip:border-box,_border-box] [background-origin:padding-box,_padding-box] [background-attachment:scroll,_scroll] [background-blend-mode:normal,_normal] [-webkit-background-clip:border-box,_border-box] pointer-events-none" style={{ backgroundImage: "linear-gradient(var(--surface-5) 1px, var(--clr-0) 1px), linear-gradient(90deg, var(--surface-5) 1px, var(--clr-0) 1px)", maskImage: "radial-gradient(at 50% 30%, var(--clr-2) 20%, var(--clr-0) 75%)" }} aria-hidden="true" />
      <div className="w-155 h-155 block absolute top-[-42.1px] -left-16 [filter:blur(40px)] pointer-events-none max-md:top-[-71.3px] max-md:left-[-18.7px] md:max-lg:top-[-43.1px] md:max-lg:-left-[2.4rem] 2xl:top-[-42.9px] 2xl:-left-24" style={{ backgroundImage: "radial-gradient(circle, var(--clr-3), var(--clr-4) 40%, var(--clr-0) 70%)" }} aria-hidden="true" />
      <div className="w-130 h-130 block absolute top-[10.5375rem] -right-16 [filter:blur(40px)] pointer-events-none max-md:top-[17.8375rem] max-md:right-[-18.7px] md:max-lg:top-[172.5px] md:max-lg:-right-[2.4rem] 2xl:top-[10.725rem] 2xl:-right-24" style={{ backgroundImage: "radial-gradient(circle, var(--clr-5), var(--clr-6) 40%, var(--clr-0) 70%)" }} aria-hidden="true" />
      <div className="block relative z-2 max-w-330 px-8 mx-auto max-md:px-4">
        <div className="flex mb-9 flex-wrap items-center gap-3">
          <span className="border border-solid border-color-011 block py-1.5 px-3 rounded-md text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1.0625rem] tracking-[1.54px] uppercase bg-color-008">
            AI Development
          </span>
          <span className="block py-1.5 px-3 rounded-md text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] font-medium leading-[1.0625rem] tracking-[1.54px] uppercase bg-accent">
            <span className="w-[0.3125rem] h-[0.3125rem] inline-block opacity-[0.680532] mr-1.5 rounded-full [vertical-align:1px] bg-foreground [animation-name:ignition-pulse] [animation-duration:1.2s] [animation-iteration-count:infinite]" />
            Playbook
          </span>
          <span className="border border-solid border-surface-3 block py-1.5 px-3 rounded-md text-color-015 [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1.0625rem] tracking-[1.54px] uppercase">
            13 min read
          </span>
          <span className="border border-solid border-surface-3 block py-1.5 px-3 rounded-md text-color-015 [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1.0625rem] tracking-[1.54px] uppercase">
            Published June 7, 2026
          </span>
        </div>
        <p className="w-full max-w-225 block mb-4.5 text-color-007 text-[1.0625rem] leading-[1.625rem] tracking-[-0.08px]">
          {"Three official servers · "}
          <span className="inline text-background [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.9375rem] font-medium leading-[1.4375rem]">
            OAuth-native
          </span>
          {" · the "}
          <span className="inline text-accent [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] italic">
            paused-by-default
          </span>
          {" rollout"}
        </p>
        <h1 className="w-full max-w-275 block mb-6 text-[4.3125rem] leading-[4.3125rem] tracking-[-2.42px] max-md:text-[2.5rem] max-md:leading-10 max-md:tracking-[-1.4px] md:max-lg:text-[2.625rem] md:max-lg:leading-[2.625rem] md:max-lg:tracking-[-1.45px] 2xl:text-[4.75rem] 2xl:leading-19 2xl:tracking-[-2.66px]" data-component="heading">
          {"Meta, Google, TikTok Ship "}
          <span className="inline font-light">
            Official
          </span>
          {" Ads "}
          <em className="inline text-accent [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] italic">
            MCP
          </em>
          {" Servers"}
        </h1>
        <p className="w-full max-w-190 block mb-11 text-color-007 text-lg leading-[1.8125rem]">
          Within roughly three months, Google, Meta, and TikTok each shipped a platform-official ads MCP server — vendor-blessed, OAuth-native, and distinct from the unofficial community connectors that came before. Each platform made a deliberately different architectural choice. This playbook maps those choices and gives you a staged way to adopt them without torching a live budget.
        </p>
        <div className="flex mb-12 flex-wrap items-center gap-5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 flex rounded-full justify-center items-center text-foreground [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-sm font-medium leading-[1.3125rem]" style={{ backgroundImage: "linear-gradient(135deg, var(--primary), var(--accent))" }}>
              DA
            </div>
            <div className="block">
              <div className="block text-sm font-medium leading-[1.0625rem]">
                Digital Applied Team
              </div>
              <div className="block mt-0.5 text-color-004 [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[0.84px] uppercase">
                Senior strategists · Published Jun 7, 2026
              </div>
            </div>
          </div>
          <div className="border-l border-solid border-l-surface flex pl-6 flex-wrap gap-y-2 gap-x-6 text-color-006 [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1.0625rem] tracking-[1.1px] uppercase max-md:gap-x-4 max-md:border-l-[0] max-md:border-initial max-md:border-l-[initial] max-md:pl-0">
            {tileData.map((d, i) => <Tile key={i} d={d} styles={Tile_styles[i]} />)}
          </div>
        </div>
        <div className="w-full border border-solid border-surface grid mb-14 rounded-[18px] gap-px overflow-hidden bg-surface grid-cols-2 md:grid-cols-4">
          {features.map((d) => <FeatureGridItem key={d.variant} d={d} />)}
        </div>
      </div>
    </section>
  );
}
