import type { MediaTileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTileData = {
  imgSrc: string;
  srcSet: string;
  description: string;
  height: string;
  imgSrc2: string;
  srcSet2: string;
  width: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <div className="w-full flex relative flex-wrap justify-start items-center content-center [align-self:start] shrink-0 gap-10 max-lg:[align-self:initial]">
      <div className="basis-0 shrink-0 block relative grow">
        <a className={cn("h-112.5 flex relative flex-col justify-start items-start content-start gap-2.5 overflow-hidden text-primary cursor-pointer", styles.className)} data-component="link" aria-label="project-item" href="/work/alan">
          <div className="w-px h-full block absolute top-0 -right-px z-3 min-w-0 shrink-0 bg-accent" />
          <div className="hidden max-md:w-[20.9375rem] max-lg:h-full max-lg:block max-lg:relative max-lg:shrink-0 md:max-lg:w-182">
            <div className="hidden max-lg:h-full max-lg:flex max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:justify-items-center">
              <img className={cn("hidden max-md:w-[20.9375rem] max-lg:block max-lg:max-w-full max-lg:max-h-full max-lg:overflow-clip md:max-lg:w-182", styles.className2)} alt="" src={d.imgSrc} srcSet={d.srcSet} />
              <div className={cn("hidden max-lg:block max-lg:absolute max-lg:top-0 max-lg:inset-x-0 max-lg:min-w-0 max-lg:pointer-events-none", styles.className3)} />
            </div>
          </div>
          <div className={cn("h-[2.4625rem] flex absolute bottom-0 -left-75 z-2 min-w-0 py-3 px-4 justify-start items-center content-center shrink-0 gap-6 overflow-hidden bg-background max-lg:left-0", styles.className4)}>
            <div className="basis-full shrink-0 flex relative justify-start items-center content-center gap-2 overflow-hidden">
              <div className="w-[11.7px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                <p className="block text-color-001 [font-family:'Suisse_Int'l_Regular',_'Suisse_Int'l_Regular_Placeholder',_sans-serif] text-sm leading-[0.9375rem] tracking-[0.7px] text-left uppercase">
                  →
                </p>
              </div>
              <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap", styles.className5)}>
                <p className="block text-color-001 [font-family:'Suisse_Int'l_Regular',_'Suisse_Int'l_Regular_Placeholder',_sans-serif] text-sm leading-[0.9375rem] tracking-[0.7px] text-left uppercase">
                  {d.description}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-112.5 block relative grow shrink-0 basis-0 max-lg:hidden">
            <div className="h-full block absolute top-0 inset-x-0 max-lg:hidden">
              <img className={cn("w-full h-112.5 block overflow-clip object-cover max-lg:hidden", styles.className6)} data-component="image" alt="" height={d.height} sizes="max((max(min(max(100vw, 1px), 1440px) - 40px, 1px) - 20px) / 2, 200px)" src={d.imgSrc2} srcSet={d.srcSet2} width={d.width} />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
