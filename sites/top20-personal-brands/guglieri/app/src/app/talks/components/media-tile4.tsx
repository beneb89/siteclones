import type { ReactNode } from "react";
import type { MediaTile4Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTile4Data = {
  description: string;
  description2: string;
  icon: ReactNode;
  description3: string;
  description4: string;
  description5: string;
  icon2: ReactNode;
  description6: string;
};
/** A media tile. */
export default function MediaTile4({ d, styles }: { d: MediaTile4Data; styles: MediaTile4Styles }) {
  return (
    <div className="contents min-w-0 2xl:w-472 2xl:h-11.5 2xl:block 2xl:relative 2xl:shrink-0">
      <a className="hidden 2xl:w-472 2xl:h-11.5 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-center 2xl:content-center 2xl:overflow-hidden 2xl:bg-foreground">
        <div className="hidden 2xl:w-118 2xl:h-full 2xl:block 2xl:relative 2xl:shrink-0 2xl:overflow-hidden after:content-[''] after:block after:absolute after:inset-0 after:w-118 after:h-11.5 max-lg:after:hidden">
          <div className={cn("hidden 2xl:h-[1.4rem] 2xl:flex 2xl:absolute 2xl:top-[1.4375rem] 2xl:left-2 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap 2xl:transform-[matrix(1,0,0,1,0,-11.2031)]", styles.className)}>
            <p className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:'Raveo_Variable_Variable',_sans-serif] 2xl:text-sm 2xl:[font-weight:1000] 2xl:leading-[1.375rem] 2xl:tracking-[-0.28px] 2xl:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
              {d.description}
            </p>
          </div>
        </div>
        <div className="hidden 2xl:w-118 2xl:h-full 2xl:block 2xl:relative 2xl:shrink-0 2xl:overflow-hidden after:content-[''] after:block after:absolute after:inset-0 after:w-118 after:h-11.5 max-lg:after:hidden">
          <div className={cn("hidden 2xl:h-[1.4rem] 2xl:flex 2xl:absolute 2xl:top-[1.4375rem] 2xl:left-2 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap 2xl:transform-[matrix(1,0,0,1,0,-11.2031)]", styles.className2)}>
            <p className={cn("hidden 2xl:block 2xl:[font-family:'Raveo_Variable_Variable',_sans-serif] 2xl:text-sm 2xl:[font-weight:1000] 2xl:leading-[1.375rem] 2xl:tracking-[-0.28px] 2xl:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']", styles.className3)} dir="auto">
              {d.description2}
            </p>
          </div>
        </div>
        <div className="hidden 2xl:w-236 2xl:h-full 2xl:block 2xl:relative 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:overflow-hidden after:content-[''] after:block after:absolute after:inset-0 after:w-236 after:h-11.5 max-lg:after:hidden">
          <div className={cn("hidden 2xl:w-11.5 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:right-0 2xl:z-2 2xl:shrink-0 2xl:aspect-square 2xl:bg-clr-2", styles.className4)}>
            <div className="hidden 2xl:w-4.5 2xl:h-4.5 2xl:block 2xl:absolute 2xl:top-3.5 2xl:left-3.5 2xl:opacity-20 2xl:shrink-0" aria-hidden="true">
              <div className="hidden 2xl:block">
                <svg className="hidden 2xl:w-4.5 2xl:h-4.5 2xl:block 2xl:overflow-hidden" height="100%" viewBox="0 0 18 18" width="100%" preserveAspectRatio="none" fill="currentColor">
                  <use href="#svg2140677781_223" />
                </svg>
              </div>
            </div>
            <div className={cn("hidden 2xl:w-4.5 2xl:h-4.5 2xl:block 2xl:absolute 2xl:top-3.5 2xl:-left-8 2xl:shrink-0", styles.className5)} aria-hidden="true">
              <div className="hidden 2xl:block">
                <svg className="hidden 2xl:w-4.5 2xl:h-4.5 2xl:block 2xl:overflow-hidden" height="100%" viewBox="0 0 18 18" width="100%" preserveAspectRatio="none" fill="currentColor">{d.icon}</svg>
              </div>
            </div>
            <div className="hidden" aria-hidden="true">
              <div className="hidden 2xl:block">
                <svg className="hidden 2xl:w-6 2xl:h-6 2xl:block 2xl:overflow-hidden" height="100%" viewBox="0 0 24 24" width="100%" preserveAspectRatio="none" fill="currentColor">
                  <use href="#svg1172868033_793" />
                </svg>
              </div>
            </div>
          </div>
          <div className={cn("hidden 2xl:h-[1.4rem] 2xl:flex 2xl:absolute 2xl:top-[1.4375rem] 2xl:left-2 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap 2xl:transform-[matrix(1,0,0,1,0,-11.2031)]", styles.className6)}>
            <p className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:'Raveo_Variable_Variable',_sans-serif] 2xl:text-sm 2xl:[font-weight:1000] 2xl:leading-[1.375rem] 2xl:tracking-[-0.28px] 2xl:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
              {d.description3}
            </p>
          </div>
        </div>
      </a>
      <div className="w-full h-11.5 block relative shrink-0 2xl:hidden">
        <a className="h-11.5 flex relative justify-start items-center content-center overflow-hidden bg-foreground 2xl:hidden">
          <div className="w-1/4 h-full block relative shrink-0 overflow-hidden 2xl:hidden after:content-[''] after:block after:absolute after:inset-0 after:h-11.5 2xl:after:hidden">
            <div className={cn("h-[1.4rem] flex absolute top-[1.4375rem] left-2 flex-col justify-start shrink-0 whitespace-pre text-nowrap transform-[matrix(1,0,0,1,0,-11.2031)] max-lg:h-[1.2rem] max-lg:transform-[matrix(1,0,0,1,0,-9.60156)] 2xl:hidden", styles.className7)}>
              <p className="block text-color-001 [font-family:'Raveo_Variable_Variable',_sans-serif] text-sm [font-weight:1000] leading-[1.375rem] tracking-[-0.28px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[1.1875rem] max-lg:tracking-[-0.24px] max-lg:[font-size:inherit] 2xl:hidden" dir="auto">
                {d.description4}
              </p>
            </div>
          </div>
          <div className="w-78 h-full block relative shrink-0 overflow-hidden max-lg:hidden 2xl:hidden after:content-[''] after:block after:absolute after:inset-0 after:w-78 after:h-11.5 max-lg:after:hidden 2xl:after:hidden">
            <div className={cn("h-[1.4rem] flex absolute top-[1.4375rem] left-2 flex-col justify-start shrink-0 whitespace-pre text-nowrap transform-[matrix(1,0,0,1,0,-11.2031)] max-lg:hidden 2xl:hidden", styles.className8)}>
              <p className={cn("block [font-family:'Raveo_Variable_Variable',_sans-serif] text-sm [font-weight:1000] leading-[1.375rem] tracking-[-0.28px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:hidden 2xl:hidden", styles.className9)} dir="auto">
                {d.description5}
              </p>
            </div>
          </div>
          <div className="w-1/2 h-full block relative grow shrink-0 basis-0 overflow-hidden max-lg:w-3/4 2xl:hidden after:content-[''] after:block after:absolute after:inset-0 after:h-11.5 2xl:after:hidden">
            <div className={cn("w-11.5 h-full block absolute top-0 right-0 z-2 shrink-0 aspect-square bg-clr-2 2xl:hidden", styles.className10)}>
              <div className="w-4.5 h-4.5 block absolute top-3.5 left-3.5 opacity-20 shrink-0 2xl:hidden" aria-hidden="true">
                <div className="block 2xl:hidden">
                  <svg className="w-auto h-4.5 block overflow-hidden 2xl:hidden" data-component="icon" height="100%" viewBox="0 0 18 18" width="100%" preserveAspectRatio="none" fill="currentColor">
                    <use href="#svg2140677781_223" />
                  </svg>
                </div>
              </div>
              <div className={cn("w-4.5 h-4.5 block absolute top-3.5 -left-8 shrink-0 2xl:hidden", styles.className11)} aria-hidden="true">
                <div className="block 2xl:hidden">
                  <svg className="w-auto h-4.5 block overflow-hidden 2xl:hidden" data-component="icon" height="100%" viewBox="0 0 18 18" width="100%" preserveAspectRatio="none" fill="currentColor">{d.icon2}</svg>
                </div>
              </div>
              <div className="w-6 h-6 block absolute top-[0.6875rem] -left-10 opacity-0 shrink-0 2xl:hidden" aria-hidden="true">
                <div className="block 2xl:hidden">
                  <svg className="w-auto h-6 block overflow-hidden 2xl:hidden" data-component="icon" height="100%" viewBox="0 0 24 24" width="100%" preserveAspectRatio="none" fill="currentColor">
                    <use href="#svg1172868033_793" />
                  </svg>
                </div>
              </div>
            </div>
            <div className={cn("h-[1.4rem] flex absolute top-[1.4375rem] left-2 flex-col justify-start shrink-0 whitespace-pre text-nowrap transform-[matrix(1,0,0,1,0,-11.2031)] max-lg:h-[1.2rem] max-lg:transform-[matrix(1,0,0,1,0,-9.60156)] 2xl:hidden", styles.className12)}>
              <p className="block text-color-001 [font-family:'Raveo_Variable_Variable',_sans-serif] text-sm [font-weight:1000] leading-[1.375rem] tracking-[-0.28px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[1.1875rem] max-lg:tracking-[-0.24px] max-lg:[font-size:inherit] 2xl:hidden" dir="auto">
                {d.description6}
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
