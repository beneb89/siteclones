import type { MediaTile3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTile3Data = {
  href: string;
  description: string;
  description2: string;
};
/** A media tile. */
export default function MediaTile3({ d, styles }: { d: MediaTile3Data; styles: MediaTile3Styles }) {
  return (
    <div className="w-full h-11.5 block relative shrink-0">
      <div className="contents">
        <a className="w-312 h-11.5 flex relative justify-start items-center content-center text-primary bg-clr-50 cursor-pointer max-md:w-[21.4375rem] md:max-lg:w-184 2xl:w-472" data-component="link" href={d.href} rel="noopener" target="_blank">
          <div className="w-1/4 h-full block relative shrink-0 overflow-hidden after:content-[''] after:block after:absolute after:inset-0 after:h-11.5">
            <div className={cn("w-[29.9px] h-[1.4rem] flex absolute top-[1.4375rem] left-2 flex-col justify-start shrink-0 whitespace-pre text-nowrap transform-[matrix(1,0,0,1,0,-11.2031)] max-lg:h-[1.2rem] max-lg:transform-[matrix(1,0,0,1,0,-9.60156)]", styles.className)}>
              <p className="block text-color-002 [font-family:'Raveo_Variable_Variable',_sans-serif] text-sm [font-weight:1000] leading-[1.375rem] tracking-[-0.28px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[1.1875rem] max-lg:tracking-[-0.24px] max-lg:[font-size:inherit]" dir="auto">
                {d.description}
              </p>
            </div>
          </div>
          <div className="w-1/4 h-full block relative shrink-0 overflow-hidden max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:h-11.5 max-lg:after:hidden">
            <div className="w-[55.5px] h-[1.4rem] flex absolute top-[1.4375rem] left-2 flex-col justify-start shrink-0 whitespace-pre text-nowrap transform-[matrix(1,0,0,1,0,-11.2031)] max-lg:hidden">
              <p className="block text-accent [font-family:'Raveo_Variable_Variable',_sans-serif] text-sm [font-weight:1000] leading-[1.375rem] tracking-[-0.28px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:hidden" dir="auto">
                Interview
              </p>
            </div>
          </div>
          <div className="w-1/2 h-full block relative grow shrink-0 basis-0 overflow-hidden max-lg:w-3/4 after:content-[''] after:block after:absolute after:inset-0 after:h-11.5">
            <div className="w-11.5 h-full block absolute top-0 right-0 z-2 shrink-0 overflow-hidden aspect-square bg-clr-2">
              <div className="w-4.5 h-4.5 block absolute top-3.5 left-3.5 shrink-0 text-foreground" aria-hidden="true">
                <div className="block">
                  <svg className="w-auto h-4.5 block overflow-hidden" data-component="icon" height="100%" viewBox="0 0 18 18" width="100%" preserveAspectRatio="none" fill="currentColor">
                    <use href="#svg2140677781_223" />
                  </svg>
                </div>
              </div>
              <div className="w-4.5 h-4.5 block absolute top-3.5 -left-8 shrink-0 text-foreground" aria-hidden="true">
                <div className="block">
                  <svg className="w-auto h-4.5 block overflow-hidden" data-component="icon" height="100%" viewBox="0 0 18 18" width="100%" preserveAspectRatio="none" fill="currentColor">
                    <use href="#svg2140677781_223" />
                  </svg>
                </div>
              </div>
            </div>
            <div className={cn("h-[1.4rem] flex absolute top-[1.4375rem] left-2 flex-col justify-start shrink-0 whitespace-pre text-nowrap transform-[matrix(1,0,0,1,0,-11.2031)] max-lg:h-[1.2rem] max-lg:transform-[matrix(1,0,0,1,0,-9.60156)]", styles.className2)}>
              <p className="block text-color-002 [font-family:'Raveo_Variable_Variable',_sans-serif] text-sm [font-weight:1000] leading-[1.375rem] tracking-[-0.28px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:leading-[1.1875rem] max-lg:tracking-[-0.24px] max-lg:[font-size:inherit]" dir="auto">
                {d.description2}
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
