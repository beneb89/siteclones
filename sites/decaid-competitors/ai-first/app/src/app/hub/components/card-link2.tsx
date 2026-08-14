import type { CardLink2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type CardLink2Data = {
  label: string;
  title: string;
  description: string;
};
/** A linked card. */
export default function CardLink2({ d, styles }: { d: CardLink2Data; styles: CardLink2Styles }) {
  return (
    <a className="flex relative flex-col overflow-hidden bg-accent cursor-pointer aspect-[3/4]" style={{ maskImage: "radial-gradient(4px at 4px 0px, var(--clr-2) 97%, var(--background)), radial-gradient(4px at 4px 100%, var(--clr-2) 97%, var(--background)), radial-gradient(4px at 0px 4px, var(--clr-2) 97%, var(--background)), radial-gradient(4px at 100% 4px, var(--clr-2) 97%, var(--background))" }} data-component="link" href="/hub/ab-testing-ideen">
      <div className="h-[381.5px] block absolute top-[0.4125rem] inset-x-[0.3125rem] z-0 min-w-0 bg-color-001 pointer-events-none md:max-lg:h-[453.7px] md:max-lg:top-2 md:max-lg:inset-x-1.5" />
      <div className="h-full flex absolute top-0 inset-x-0 z-17 min-w-0 p-[0.3125rem] justify-start items-start [filter:drop-shadow(var(--clr-17)_0px_1px_3px)] pointer-events-none md:max-lg:p-1.5">
        <div className="flex py-[0.3rem] px-2.5 rounded-br-[14px] justify-center items-center gap-[0.3rem] text-xs leading-4.5 bg-accent pointer-events-none">
          <span className="block shrink-0 text-color-002 [font-family:'Material_Symbols_Sharp'] text-sm leading-[0.875rem] whitespace-nowrap text-nowrap [font-feature-settings:'liga'] pointer-events-none">
            account_tree
          </span>
          <span className="block text-color-002 font-semibold leading-[0.875rem] whitespace-nowrap text-nowrap pointer-events-none">
            Workflows
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
            <img className="w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-contain align-middle text-clr-2" data-component="image" alt="" sizes="200px" src="/assets/cloned/images/8f70267ff301.jpg" srcSet="/assets/cloned/images/af7bd3035188.jpg 32w, /assets/cloned/images/2a76afa3048f.jpg 48w, /assets/cloned/images/711f7684b33a.jpg 64w, /assets/cloned/images/045209deaeb7.jpg 96w, /assets/cloned/images/879f75cae082.jpg 128w, /assets/cloned/images/ff1fb144f03c.avif 256w, /assets/cloned/images/2110148c5472.jpg 384w, /assets/cloned/images/8e3291f42fb4.jpg 640w, /assets/cloned/images/06fe748618e4.jpg 750w, /assets/cloned/images/cbf5a031cd72.jpg 828w, /assets/cloned/images/21443674d025.jpg 1080w, /assets/cloned/images/5cb8a2f9f902.jpg 1200w, /assets/cloned/images/c3c96b15caa5.jpg 1920w, /assets/cloned/images/e2946884c011.jpg 2048w, /assets/cloned/images/8f70267ff301.jpg 3840w" />
          </div>
          <span className="w-19 h-19 block absolute top-[clamp(86.8px,_50%,_calc(100%_-_86.8px))] left-[clamp(92px,_53%,_calc(100%_-_92px))] text-accent [font-family:'Material_Symbols_Sharp'] text-[4.75rem] leading-19 whitespace-nowrap text-nowrap [font-feature-settings:'liga'] [filter:drop-shadow(var(--clr-17)_1px_2px_4px)] transform-[matrix(1,0,0,1,-38,-38)]">
            {d.label}
          </span>
          <div className="h-[156.3px] block absolute top-[8.7px] inset-x-[8.7px] md:max-lg:h-[185.9px] md:max-lg:top-[10.3px] md:max-lg:inset-x-[10.3px]">
            <img className="w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-contain align-middle text-clr-2" data-component="image" alt="" sizes="200px" src="/assets/cloned/images/3adc6163270f.jpg" srcSet="/assets/cloned/images/748dbf5e4ec8.jpg 32w, /assets/cloned/images/4498700611bd.jpg 48w, /assets/cloned/images/bdd6bd366192.jpg 64w, /assets/cloned/images/9091f541666f.jpg 96w, /assets/cloned/images/c46579febe06.jpg 128w, /assets/cloned/images/9300f9eb0b6d.avif 256w, /assets/cloned/images/0b094f986ed7.jpg 384w, /assets/cloned/images/8147d76af793.jpg 640w, /assets/cloned/images/7de12ba67b27.jpg 750w, /assets/cloned/images/1f8b2001f435.jpg 828w, /assets/cloned/images/45160f7541ed.jpg 1080w, /assets/cloned/images/7ee5c2f13505.jpg 1200w, /assets/cloned/images/21061162d93c.jpg 1920w, /assets/cloned/images/945eb93076d0.jpg 2048w, /assets/cloned/images/3adc6163270f.jpg 3840w" />
          </div>
        </div>
      </div>
      <div className="h-[381.5px] block absolute top-[0.4125rem] inset-x-[0.3125rem] z-15 min-w-0 md:max-lg:h-[453.7px] md:max-lg:top-2 md:max-lg:inset-x-1.5" style={{ backgroundImage: "linear-gradient(to top, var(--color-001) 0%, var(--color-001) 55%, var(--clr-2) 100%)" }} />
      <div className={cn("h-[14.8rem] grid relative z-25 p-[0.925rem] gap-3 overflow-hidden md:max-lg:h-[17.6rem] md:max-lg:p-[1.1rem]", styles.className)}>
        <div className="flex items-end">
          <h3 className={cn("block text-color-002 font-bold text-balance", styles.className2)} data-component="heading" lang="de">
            {d.title}
          </h3>
        </div>
        <div className={cn("block overflow-hidden", styles.className3)}>
          <p className={cn("block text-color-007 [font-family:'Martina_Plantijn',_Georgia,_serif] text-pretty [font-feature-settings:'calt',_'liga',_'onum']", styles.className4)} lang="de">
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
