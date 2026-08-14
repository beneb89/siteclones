import type { CardLink3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type CardLink3Data = {
  label: string;
  title: string;
  description: string;
};
/** A linked card. */
export default function CardLink3({ d, styles }: { d: CardLink3Data; styles: CardLink3Styles }) {
  return (
    <a className="flex relative flex-col overflow-hidden bg-primary cursor-pointer aspect-[3/4]" style={{ maskImage: "radial-gradient(4px at 4px 0px, var(--clr-2) 97%, var(--background)), radial-gradient(4px at 4px 100%, var(--clr-2) 97%, var(--background)), radial-gradient(4px at 0px 4px, var(--clr-2) 97%, var(--background)), radial-gradient(4px at 100% 4px, var(--clr-2) 97%, var(--background))" }} data-component="link" href="/hub/ab-testing-ideen">
      <div className="h-[381.5px] block absolute top-[0.4125rem] inset-x-[0.3125rem] z-0 min-w-0 bg-color-001 pointer-events-none md:max-lg:h-[453.7px] md:max-lg:top-2 md:max-lg:inset-x-1.5" />
      <div className="h-full flex absolute top-0 inset-x-0 z-17 min-w-0 p-[0.3125rem] justify-end items-start [filter:drop-shadow(var(--clr-17)_0px_1px_3px)] pointer-events-none md:max-lg:p-1.5">
        <div className="flex py-[0.3rem] px-2.5 rounded-bl-[14px] justify-center items-center gap-[0.3rem] text-xs leading-4.5 bg-primary pointer-events-none">
          <span className="block shrink-0 text-color-002 [font-family:'Material_Symbols_Sharp'] text-sm leading-[0.875rem] whitespace-nowrap text-nowrap [font-feature-settings:'liga'] pointer-events-none">
            domino_mask
          </span>
          <span className="block text-color-002 font-semibold leading-[0.875rem] whitespace-nowrap text-nowrap pointer-events-none">
            Agenten
          </span>
        </div>
      </div>
      <div className="h-full block absolute top-0 inset-x-0 z-0 min-w-0 p-[0.3125rem] overflow-hidden pointer-events-none md:max-lg:p-1.5">
        <div className="block relative pointer-events-none h-full w-full">
          <div className="w-px block absolute top-0 left-2.5 bg-surface pointer-events-none h-full md:max-lg:left-3" />
          <div className="w-px block absolute top-0 left-[1.275rem] bg-surface pointer-events-none h-full md:max-lg:left-[24.3px]" />
          <div className="w-px block absolute top-0 left-[30.7px] bg-surface pointer-events-none h-full md:max-lg:left-[36.5px]" />
          <div className="w-px block absolute top-0 left-[40.9px] bg-surface pointer-events-none h-full md:max-lg:left-[3.0375rem]" />
          <div className="w-px block absolute top-0 left-[3.1875rem] bg-surface pointer-events-none h-full md:max-lg:left-[3.8rem]" />
          <div className="w-px block absolute top-0 left-[61.3px] bg-surface pointer-events-none h-full md:max-lg:left-[4.5625rem]" />
          <div className="w-px block absolute top-0 left-[71.5px] bg-surface pointer-events-none h-full md:max-lg:left-[5.3125rem]" />
          <div className="w-px block absolute top-0 left-[5.1125rem] bg-surface pointer-events-none h-full md:max-lg:left-[6.075rem]" />
          <div className="w-px block absolute top-0 left-[5.75rem] bg-surface pointer-events-none h-full md:max-lg:left-[6.8375rem]" />
          <div className="w-px block absolute top-0 left-[6.3875rem] bg-surface pointer-events-none h-full md:max-lg:left-[121.5px]" />
          <div className="w-px block absolute top-0 left-[7.025rem] bg-surface pointer-events-none h-full md:max-lg:left-[133.7px]" />
          <div className="w-px block absolute top-0 left-[7.6625rem] bg-surface pointer-events-none h-full md:max-lg:left-[9.1125rem]" />
          <div className="w-px block absolute top-0 left-[8.3rem] bg-surface pointer-events-none h-full md:max-lg:left-[9.875rem]" />
          <div className="w-px block absolute top-0 left-[8.9375rem] bg-surface pointer-events-none h-full md:max-lg:left-[170.1px]" />
          <div className="w-px block absolute top-0 left-[153.3px] bg-surface pointer-events-none h-full md:max-lg:left-[182.3px]" />
          <div className="w-px block absolute top-0 left-[163.5px] bg-surface pointer-events-none h-full md:max-lg:left-[12.15rem]" />
          <div className="w-px block absolute top-0 left-[173.7px] bg-surface pointer-events-none h-full md:max-lg:left-[12.9125rem]" />
          <div className="w-px block absolute top-0 left-[11.5rem] bg-surface pointer-events-none h-full md:max-lg:left-[13.675rem]" />
          <div className="w-px block absolute top-0 left-[12.1375rem] bg-surface pointer-events-none h-full md:max-lg:left-[230.9px]" />
          <div className="w-px block absolute top-0 left-[12.775rem] bg-surface pointer-events-none h-full md:max-lg:left-[15.1875rem]" />
          <div className="w-px block absolute top-0 left-[13.4125rem] bg-surface pointer-events-none h-full md:max-lg:left-[15.95rem]" />
          <div className="w-px block absolute top-0 left-[14.05rem] bg-surface pointer-events-none h-full md:max-lg:left-[16.7125rem]" />
          <div className="w-px block absolute top-0 left-[14.6875rem] bg-surface pointer-events-none h-full md:max-lg:left-[279.5px]" />
          <div className="w-px block absolute top-0 left-[245.3px] bg-surface pointer-events-none h-full md:max-lg:left-[291.7px]" />
          <div className="w-px block absolute top-0 left-[255.5px] bg-surface pointer-events-none h-full md:max-lg:left-[18.9875rem]" />
          <div className="w-px block absolute top-0 left-[265.7px] bg-surface pointer-events-none h-full md:max-lg:left-[19.75rem]" />
          <div className="w-px block absolute top-0 left-[17.25rem] bg-surface pointer-events-none h-full md:max-lg:left-[328.1px]" />
        </div>
      </div>
      <div className="flex relative z-19 justify-center items-center flex-1">
        <div className="h-[173.7px] block relative [translate:0px_5%] aspect-square md:max-lg:h-[206.5px]">
          <div className="h-[156.3px] block absolute top-[8.7px] inset-x-[8.7px] md:max-lg:h-[185.9px] md:max-lg:top-[10.3px] md:max-lg:inset-x-[10.3px]">
            <img className="w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-contain align-middle text-clr-2" data-component="image" alt="" sizes="200px" src="/assets/cloned/images/f0f60b33055f.jpg" srcSet="/assets/cloned/images/ba82a65ce55c.jpg 32w, /assets/cloned/images/7b6cb3fcf4ac.jpg 48w, /assets/cloned/images/94b30c556542.jpg 64w, /assets/cloned/images/b57807895c77.jpg 96w, /assets/cloned/images/26f42d352715.jpg 128w, /assets/cloned/images/3be97c0021ae.avif 256w, /assets/cloned/images/aff6ecc0c177.jpg 384w, /assets/cloned/images/7b49f67e9238.jpg 640w, /assets/cloned/images/b489245bf215.jpg 750w, /assets/cloned/images/8972289737d8.jpg 828w, /assets/cloned/images/cee39aa1fe17.jpg 1080w, /assets/cloned/images/94e576b97dad.jpg 1200w, /assets/cloned/images/9110105b6498.jpg 1920w, /assets/cloned/images/ad6d7a472eee.jpg 2048w, /assets/cloned/images/f0f60b33055f.jpg 3840w" />
          </div>
          <span className="w-16 h-16 block absolute top-[6.5125rem] left-[clamp(86.8px,_50%,_calc(100%_-_86.8px))] text-color-029 [font-family:'Material_Symbols_Sharp'] text-[4rem] leading-16 whitespace-nowrap text-nowrap [font-feature-settings:'liga'] [filter:drop-shadow(var(--clr-16)_1px_2px_3px)] transform-[matrix(1,0,0,1,-32,-32)] md:max-lg:top-[123.9px]">
            {d.label}
          </span>
        </div>
      </div>
      <div className="h-[381.5px] block absolute top-[0.4125rem] inset-x-[0.3125rem] z-15 min-w-0 md:max-lg:h-[453.7px] md:max-lg:top-2 md:max-lg:inset-x-1.5" style={{ backgroundImage: "linear-gradient(to top, var(--color-001) 0%, var(--color-001) 55%, var(--clr-2) 100%)" }} />
      <div className="h-[14.8rem] grid relative z-25 p-[0.925rem] gap-3 overflow-hidden grid-cols-1 md:max-lg:h-[17.6rem] md:max-lg:p-[1.1rem]">
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
      <div className="h-full block absolute top-0 inset-x-0 z-18 min-w-0 p-[0.3125rem] pointer-events-none md:max-lg:p-1.5">
        <div className="border border-solid border-border block pointer-events-none h-full w-full" />
      </div>
    </a>
  );
}
