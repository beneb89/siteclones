import type { MediaTileStyles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type MediaTileData = {
  imgSrc: string;
  srcSet: string;
  description: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <div className="w-full flex relative flex-wrap justify-start items-center content-center [align-self:start] shrink-0 gap-10 max-lg:[align-self:initial]">
      <div className="basis-0 shrink-0 block relative grow">
        <a className="flex relative flex-col justify-start items-start content-start gap-2.5 overflow-hidden text-primary cursor-pointer" data-component="link" aria-label="project-item" href="/work/alan">
          <div className="w-px h-full block absolute top-0 -right-px z-3 min-w-0 shrink-0 bg-accent" />
          <div className="w-100 block relative shrink-0 max-md:w-[20.9375rem] md:max-lg:w-182 2xl:w-[453.3px]">
            <div className="flex justify-center items-center content-center justify-items-center">
              <img className={cn("w-auto block max-w-full max-h-full overflow-clip", styles.className)} data-component="image" alt="" src={d.imgSrc} srcSet={d.srcSet} />
              <div className={cn("block absolute top-0 inset-x-0 min-w-0 pointer-events-none", styles.className2)} />
            </div>
          </div>
          <div className={cn("h-[2.4625rem] flex absolute bottom-0 z-2 min-w-0 py-3 px-4 justify-start items-center content-center shrink-0 gap-6 overflow-hidden bg-background", styles.className3)}>
            <div className="basis-full shrink-0 flex relative justify-start items-center content-center gap-2 overflow-hidden">
              <div className="w-[11.7px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                <p className="block text-color-001 [font-family:'Suisse_Int'l_Regular',_'Suisse_Int'l_Regular_Placeholder',_sans-serif] text-sm leading-[0.9375rem] tracking-[0.7px] text-left uppercase">
                  →
                </p>
              </div>
              <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap", styles.className4)}>
                <p className="block text-color-001 [font-family:'Suisse_Int'l_Regular',_'Suisse_Int'l_Regular_Placeholder',_sans-serif] text-sm leading-[0.9375rem] tracking-[0.7px] text-left uppercase">
                  {d.description}
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
