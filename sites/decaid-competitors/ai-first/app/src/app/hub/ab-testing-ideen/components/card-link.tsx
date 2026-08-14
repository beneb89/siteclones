import type { CardLinkStyles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type CardLinkData = {
  label: string;
  title: string;
  description: string;
};
/** A linked card. */
export default function CardLink({ d, styles }: { d: CardLinkData; styles: CardLinkStyles }) {
  return (
    <a className="flex relative flex-col overflow-hidden bg-primary cursor-pointer aspect-[3/4]" style={{ maskImage: "radial-gradient(4px at 4px 0px, var(--clr-2) 97%, var(--background)), radial-gradient(4px at 4px 100%, var(--clr-2) 97%, var(--background)), radial-gradient(4px at 0px 4px, var(--clr-2) 97%, var(--background)), radial-gradient(4px at 100% 4px, var(--clr-2) 97%, var(--background))" }} data-component="link" href="/hub/ab-testing-ideen">
      <div className="h-[335.1px] block absolute top-1.5 inset-x-[4.3px] z-0 min-w-0 bg-color-001 pointer-events-none md:max-lg:h-[27.7125rem] md:max-lg:top-[0.475rem] md:max-lg:inset-x-[5.7px]" />
      <div className="h-full flex absolute top-0 inset-x-0 z-17 min-w-0 p-[4.3px] justify-end items-start [filter:drop-shadow(var(--clr-17)_0px_1px_3px)] pointer-events-none md:max-lg:p-[5.7px]">
        <div className="flex py-[0.3rem] px-2.5 rounded-bl-[14px] justify-center items-center gap-[0.3rem] text-xs leading-4.5 bg-primary pointer-events-none">
          <span className="block shrink-0 text-color-002 [font-family:'Material_Symbols_Sharp'] text-sm leading-[0.875rem] whitespace-nowrap text-nowrap [font-feature-settings:'liga'] pointer-events-none">
            domino_mask
          </span>
          <span className="block text-color-002 font-semibold leading-[0.875rem] whitespace-nowrap text-nowrap pointer-events-none">
            Agenten
          </span>
        </div>
      </div>
      <div className="h-full block absolute top-0 inset-x-0 z-0 min-w-0 p-[4.3px] overflow-hidden pointer-events-none md:max-lg:p-[5.7px]">
        <div className="block relative pointer-events-none h-full w-full">
          <div className="w-px block absolute top-0 left-[0.5625rem] bg-surface pointer-events-none h-full md:max-lg:left-3" />
          <div className="w-px block absolute top-0 left-[1.125rem] bg-surface pointer-events-none h-full md:max-lg:left-6" />
          <div className="w-px block absolute top-0 left-[1.6875rem] bg-surface pointer-events-none h-full md:max-lg:left-[2.225rem]" />
          <div className="w-px block absolute top-0 left-9 bg-surface pointer-events-none h-full md:max-lg:left-[47.5px]" />
          <div className="w-px block absolute top-0 left-[44.9px] bg-surface pointer-events-none h-full md:max-lg:left-[3.7125rem]" />
          <div className="w-px block absolute top-0 left-[53.9px] bg-surface pointer-events-none h-full md:max-lg:left-[71.3px]" />
          <div className="w-px block absolute top-0 left-[3.925rem] bg-surface pointer-events-none h-full md:max-lg:left-[83.1px]" />
          <div className="w-px block absolute top-0 left-[4.4875rem] bg-surface pointer-events-none h-full md:max-lg:left-[5.9375rem]" />
          <div className="w-px block absolute top-0 left-[5.05rem] bg-surface pointer-events-none h-full md:max-lg:left-[106.9px]" />
          <div className="w-px block absolute top-0 left-[5.6125rem] bg-surface pointer-events-none h-full md:max-lg:left-[7.425rem]" />
          <div className="w-px block absolute top-0 left-[98.7px] bg-surface pointer-events-none h-full md:max-lg:left-[8.1625rem]" />
          <div className="w-px block absolute top-0 left-[107.7px] bg-surface pointer-events-none h-full md:max-lg:left-[142.5px]" />
          <div className="w-px block absolute top-0 left-[116.7px] bg-surface pointer-events-none h-full md:max-lg:left-[9.65rem]" />
          <div className="w-px block absolute top-0 left-[125.7px] bg-surface pointer-events-none h-full md:max-lg:left-[166.3px]" />
          <div className="w-px block absolute top-0 left-[8.4125rem] bg-surface pointer-events-none h-full md:max-lg:left-[11.1375rem]" />
          <div className="w-px block absolute top-0 left-[8.975rem] bg-surface pointer-events-none h-full md:max-lg:left-[11.875rem]" />
          <div className="w-px block absolute top-0 left-[9.5375rem] bg-surface pointer-events-none h-full md:max-lg:left-[12.625rem]" />
          <div className="w-px block absolute top-0 left-[10.1rem] bg-surface pointer-events-none h-full md:max-lg:left-[13.3625rem]" />
          <div className="w-px block absolute top-0 left-[170.5px] bg-surface pointer-events-none h-full md:max-lg:left-[225.7px]" />
          <div className="w-px block absolute top-0 left-[179.5px] bg-surface pointer-events-none h-full md:max-lg:left-[237.5px]" />
          <div className="w-px block absolute top-0 left-[188.5px] bg-surface pointer-events-none h-full md:max-lg:left-[15.5875rem]" />
          <div className="w-px block absolute top-0 left-[197.5px] bg-surface pointer-events-none h-full md:max-lg:left-[261.3px]" />
          <div className="w-px block absolute top-0 left-[206.5px] bg-surface pointer-events-none h-full md:max-lg:left-[17.075rem]" />
          <div className="w-px block absolute top-0 left-[13.4625rem] bg-surface pointer-events-none h-full md:max-lg:left-[17.8125rem]" />
          <div className="w-px block absolute top-0 left-[14.025rem] bg-surface pointer-events-none h-full md:max-lg:left-[18.5625rem]" />
          <div className="w-px block absolute top-0 left-[14.5875rem] bg-surface pointer-events-none h-full md:max-lg:left-[19.3rem]" />
          <div className="w-px block absolute top-0 left-[15.15rem] bg-surface pointer-events-none h-full md:max-lg:left-[320.7px]" />
        </div>
      </div>
      <div className="flex relative z-19 justify-center items-center flex-1">
        <div className="h-[152.5px] block relative [translate:0px_5%] aspect-square md:max-lg:h-[12.6125rem]">
          <div className="h-[137.3px] block absolute top-[0.475rem] inset-x-[0.475rem] md:max-lg:h-[181.7px] md:max-lg:top-2.5 md:max-lg:inset-x-2.5">
            <img className="w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-contain align-middle text-clr-2" data-component="image" alt="" sizes="200px" src="/assets/cloned/images/f0f60b33055f.jpg" srcSet="/assets/cloned/images/ba82a65ce55c.jpg 32w, /assets/cloned/images/7b6cb3fcf4ac.jpg 48w, /assets/cloned/images/94b30c556542.jpg 64w, /assets/cloned/images/b57807895c77.jpg 96w, /assets/cloned/images/26f42d352715.jpg 128w, /assets/cloned/images/3be97c0021ae.avif 256w, /assets/cloned/images/aff6ecc0c177.jpg 384w, /assets/cloned/images/7b49f67e9238.jpg 640w, /assets/cloned/images/b489245bf215.jpg 750w, /assets/cloned/images/8972289737d8.jpg 828w, /assets/cloned/images/cee39aa1fe17.jpg 1080w, /assets/cloned/images/94e576b97dad.jpg 1200w, /assets/cloned/images/9110105b6498.jpg 1920w, /assets/cloned/images/ad6d7a472eee.jpg 2048w, /assets/cloned/images/f0f60b33055f.jpg 3840w" />
          </div>
          <span className="w-16 h-16 block absolute top-[91.5px] left-[clamp(76.3px,_50%,_calc(100%_-_76.3px))] text-color-029 [font-family:'Material_Symbols_Sharp'] text-[4rem] leading-16 whitespace-nowrap text-nowrap [font-feature-settings:'liga'] [filter:drop-shadow(var(--clr-16)_1px_2px_3px)] transform-[matrix(1,0,0,1,-32,-32)] md:max-lg:top-[7.5625rem]">
            {d.label}
          </span>
        </div>
      </div>
      <div className="h-[335.1px] block absolute top-1.5 inset-x-[4.3px] z-15 min-w-0 md:max-lg:h-[27.7125rem] md:max-lg:top-[0.475rem] md:max-lg:inset-x-[5.7px]" style={{ backgroundImage: "linear-gradient(to top, var(--color-001) 0%, var(--color-001) 55%, var(--clr-2) 100%)" }} />
      <div className="h-52 grid relative z-25 p-[0.8125rem] gap-3 overflow-hidden grid-cols-1 md:max-lg:h-[17.2rem] md:max-lg:p-[1.075rem]">
        <div className="flex items-end">
          <h3 className={cn("block text-color-002 font-bold text-balance", styles.className)} data-component="heading" lang="de">
            {d.title}
          </h3>
        </div>
        <div className={cn("block overflow-hidden", styles.className2)}>
          <p className={cn("block text-color-007 [font-family:'Martina_Plantijn',_Georgia,_serif] text-pretty [font-feature-settings:'calt',_'liga',_'onum']", styles.className3)} lang="de">
            {d.description}
          </p>
        </div>
      </div>
      <div className="h-full block absolute top-0 inset-x-0 z-18 min-w-0 p-[4.3px] pointer-events-none md:max-lg:p-[5.7px]">
        <div className="border border-solid border-border block pointer-events-none h-full w-full" />
      </div>
    </a>
  );
}
