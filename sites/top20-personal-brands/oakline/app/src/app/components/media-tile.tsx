import type { MediaTileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTileData = {
  imgSrc: string;
  srcSet: string;
  imgSrc2: string;
  srcSet2: string;
  description: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <div className="w-full flex relative pt-18 pb-6 px-18 flex-col justify-center items-center content-center self-center shrink-0 max-lg:pt-6 max-lg:pb-4 max-lg:px-6 max-lg:gap-12 max-lg:[align-self:initial] after:content-[''] after:block after:absolute after:inset-0">
      <div className={cn("h-[37.6875rem] block relative self-stretch shrink-0 max-lg:pointer-events-none max-lg:[align-self:initial]", styles.className)}>
        <div className={cn("w-124 block absolute top-[301.5px] left-62 max-w-175 shrink-0 pointer-events-none max-md:w-[20.4375rem] max-lg:flex max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:justify-items-center max-lg:transform-[none] max-lg:static max-lg:top-auto max-lg:left-auto max-lg:max-w-none max-lg:shrink-[initial] md:max-lg:w-180 2xl:w-175 2xl:left-102", styles.className2)}>
          <img className={cn("hidden max-lg:w-auto max-lg:block max-lg:max-w-full max-lg:max-h-full max-lg:overflow-clip max-lg:pointer-events-none", styles.className3)} alt="Asset A" src={d.imgSrc} srcSet={d.srcSet} />
          <div className="h-full flex justify-center items-center content-center justify-items-center pointer-events-none max-lg:hidden">
            <img className={cn("w-124 block max-w-full max-h-full overflow-clip pointer-events-none max-lg:hidden 2xl:w-175", styles.className4)} data-component="image" alt="Asset A" src={d.imgSrc2} srcSet={d.srcSet2} />
          </div>
        </div>
      </div>
      <div className={cn("flex relative z-1 flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:z-[initial]", styles.className5)}>
        <p className="block text-color-001 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-sm leading-[1.375rem] tracking-[-0.28px] text-center [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:[font-family:Inter,_sans-serif] max-lg:text-base max-lg:leading-[1.625rem] max-lg:tracking-[-0.32px]">
          {d.description}
        </p>
      </div>
    </div>
  );
}
