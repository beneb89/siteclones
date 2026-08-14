import type { CardLink4Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type CardLink4Data = {
  imgSrc: string;
  title: string;
  description: string;
};
/** A linked card. */
export default function CardLink4({ d, styles }: { d: CardLink4Data; styles: CardLink4Styles }) {
  return (
    <a className="flex relative flex-col overflow-hidden bg-color-037 cursor-pointer aspect-[3/4]" style={{ maskImage: "radial-gradient(4px at 4px 0px, var(--clr-2) 97%, var(--background)), radial-gradient(4px at 4px 100%, var(--clr-2) 97%, var(--background)), radial-gradient(4px at 0px 4px, var(--clr-2) 97%, var(--background)), radial-gradient(4px at 100% 4px, var(--clr-2) 97%, var(--background))" }} data-component="link" href="/hub/ab-testing-ideen">
      <div className="h-[381.5px] block absolute top-[0.4125rem] inset-x-[0.3125rem] z-0 min-w-0 bg-color-001 pointer-events-none md:max-lg:h-[453.7px] md:max-lg:top-2 md:max-lg:inset-x-1.5" />
      <div className="h-full flex absolute top-0 inset-x-0 z-17 min-w-0 p-[0.3125rem] justify-start items-start [filter:drop-shadow(var(--clr-17)_0px_1px_3px)] pointer-events-none md:max-lg:p-1.5">
        <div className="flex py-[0.3rem] px-2.5 rounded-br-[14px] justify-center items-center gap-[0.3rem] text-xs leading-4.5 bg-color-037 pointer-events-none">
          <span className="block shrink-0 text-color-002 [font-family:'Material_Symbols_Sharp'] text-sm leading-[0.875rem] whitespace-nowrap text-nowrap [font-feature-settings:'liga'] pointer-events-none">
            home_repair_service
          </span>
          <span className="block text-color-002 font-semibold leading-[0.875rem] whitespace-nowrap text-nowrap pointer-events-none">
            Tools
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
          <div className="h-[130.3px] block absolute top-[1.625rem] inset-x-[1.0875rem] z-1 md:max-lg:h-[154.9px] md:max-lg:top-[1.9375rem] md:max-lg:inset-x-[1.2875rem]">
            <img className="w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-contain align-middle text-clr-2" data-component="image" alt="" sizes="200px" src="/assets/cloned/images/02cfa81c3a00.jpg" srcSet="/assets/cloned/images/acd49073b65b.jpg 32w, /assets/cloned/images/fd4fefb962f4.jpg 48w, /assets/cloned/images/84c5b6ee0471.jpg 64w, /assets/cloned/images/e0ae0bd8f731.jpg 96w, /assets/cloned/images/2ab453451f2a.jpg 128w, /assets/cloned/images/0e439458eb94.avif 256w, /assets/cloned/images/ae6df8df05b9.jpg 384w, /assets/cloned/images/965c4d8d626b.jpg 640w, /assets/cloned/images/da4a826712a1.jpg 750w, /assets/cloned/images/9caa238144e4.jpg 828w, /assets/cloned/images/286c6861ed23.jpg 1080w, /assets/cloned/images/da0d0f37fe02.jpg 1200w, /assets/cloned/images/b2ffb2ef6c5c.jpg 1920w, /assets/cloned/images/dee7f56f5160.jpg 2048w, /assets/cloned/images/02cfa81c3a00.jpg 3840w" />
          </div>
          <div className="w-[95.5px] h-[95.5px] block absolute top-[clamp(83.3px,_48%,_calc(100%_-_83.3px))] left-[clamp(86.8px,_50%,_calc(100%_-_86.8px))] z-2 rounded-[50%] [filter:blur(8px)] transform-[matrix(1,0,0,1,-47.75,-47.75)] pointer-events-none md:max-lg:w-[7.1rem] md:max-lg:h-[7.1rem] md:max-lg:transform-[matrix(1,0,0,1,-56.7812,-56.7812)]" style={{ backgroundImage: "radial-gradient(circle, var(--clr-24) 0%, var(--clr-15) 55%, var(--clr-25) 100%)" }} />
          <div className="w-[3.475rem] h-[3.475rem] grid absolute top-[clamp(83.3px,_48%,_calc(100%_-_83.3px))] left-[clamp(86.8px,_50%,_calc(100%_-_86.8px))] z-10 items-center justify-items-center [filter:brightness(0)_invert(1)_drop-shadow(var(--clr-17)_1px_2px_3px)] transform-[matrix(1,0,0,1,-27.7812,-27.7812)] grid-cols-1 md:max-lg:w-[4.125rem] md:max-lg:h-[4.125rem] md:max-lg:transform-[matrix(1,0,0,1,-33.0391,-33.0391)]">
            <img className="w-full block max-w-full overflow-clip object-contain align-middle h-full" data-component="image" alt="" src={d.imgSrc} />
          </div>
        </div>
      </div>
      <div className="h-[381.5px] block absolute top-[0.4125rem] inset-x-[0.3125rem] z-15 min-w-0 md:max-lg:h-[453.7px] md:max-lg:top-2 md:max-lg:inset-x-1.5" style={{ backgroundImage: "linear-gradient(to top, var(--color-001) 0%, var(--color-001) 55%, var(--clr-2) 100%)" }} />
      <div className="h-[14.8rem] grid relative z-25 p-[0.925rem] gap-3 overflow-hidden grid-cols-1 md:max-lg:h-[17.6rem] md:max-lg:p-[1.1rem]">
        <div className="flex items-end">
          <h3 className="block text-color-002 text-[2.6875rem] font-bold leading-[2.8125rem] tracking-[-0.86px] text-balance" data-component="heading" lang="de">
            {d.title}
          </h3>
        </div>
        <div className="h-[9.375rem] block overflow-hidden md:max-lg:h-[189.1px]">
          <p className={cn("block text-color-007 [font-family:'Martina_Plantijn',_Georgia,_serif] text-pretty [font-feature-settings:'calt',_'liga',_'onum']", styles.className)} lang="de">
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
