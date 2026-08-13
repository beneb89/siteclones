import type { MediaTileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTileData = {
  height: string;
  imgSrc: string;
  width: string;
  description: string;
  description2: string;
  height2: string;
  imgSrc2: string;
  width2: string;
  sizes?: string;
  srcSet?: string;
  sizes2?: string;
  srcSet2?: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <div className="w-full block relative shrink-0 2xl:hidden">
      <div className="flex relative p-4 rounded-xl flex-col justify-start items-start content-start gap-17.5 overflow-hidden bg-surface cursor-pointer 2xl:hidden">
        <div className="w-full flex relative justify-start items-center content-center shrink-0 gap-3 2xl:hidden">
          <div className="w-10 h-10 block relative shrink-0 2xl:hidden">
            <div className="w-10 h-10 block relative rounded-lg 2xl:hidden">
              <div className="w-10 h-full block absolute top-0 rounded-lg 2xl:hidden">
                <img className={cn("w-full h-10 block rounded-lg overflow-clip object-cover 2xl:hidden", styles.className)} data-component="image" alt="" height={d.height} src={d.imgSrc} width={d.width} sizes={d.sizes} srcSet={d.srcSet} />
              </div>
            </div>
          </div>
          <div className="w-[26.1875rem] flex relative flex-col justify-start items-start content-start grow shrink-0 basis-0 gap-1.5 max-md:w-[12.9375rem] 2xl:hidden">
            <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap 2xl:hidden", styles.className2)}>
              <p className="block text-color-003 [font-family:'SF_Pro_Display_Medium',_'SF_Pro_Display_Medium_Placeholder',_sans-serif] text-base font-medium leading-[0.8125rem] 2xl:hidden" dir="auto">
                {d.description}
              </p>
            </div>
            <div className={cn("flex relative opacity-40 flex-col justify-start shrink-0 whitespace-pre text-nowrap 2xl:hidden", styles.className3)}>
              <p className="block text-color-003 [font-family:'SF_Pro_Display_Regular',_'SF_Pro_Display_Regular_Placeholder',_sans-serif] text-base leading-[0.8125rem] 2xl:hidden" dir="auto">
                {d.description2}
              </p>
            </div>
          </div>
          <div className="w-10 h-10 block relative shrink-0 2xl:hidden">
            <div className="w-10 h-10 block relative rounded-lg 2xl:hidden">
              <div className="w-10 h-full block absolute top-0 rounded-lg 2xl:hidden">
                <img className={cn("w-full h-10 block rounded-lg overflow-clip object-cover 2xl:hidden", styles.className4)} data-component="image" alt="" height={d.height2} src={d.imgSrc2} width={d.width2} sizes={d.sizes2} srcSet={d.srcSet2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
