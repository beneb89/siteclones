import type { MediaTile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTile2Data = {
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
export default function MediaTile2({ d, styles }: { d: MediaTile2Data; styles: MediaTile2Styles }) {
  return (
    <div className="hidden 2xl:w-full 2xl:block 2xl:relative 2xl:shrink-0">
      <div className="hidden 2xl:w-[34.6875rem] 2xl:flex 2xl:relative 2xl:p-4 2xl:rounded-xl 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:gap-17.5 2xl:overflow-hidden 2xl:bg-surface 2xl:cursor-pointer">
        <div className="hidden 2xl:w-full 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:gap-3">
          <div className="hidden 2xl:w-10 2xl:h-10 2xl:block 2xl:relative 2xl:shrink-0">
            <div className="hidden 2xl:w-10 2xl:h-10 2xl:block 2xl:relative 2xl:rounded-lg">
              <div className="hidden 2xl:w-10 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:rounded-lg">
                <img className={cn("hidden 2xl:w-full 2xl:h-10 2xl:block 2xl:rounded-lg 2xl:overflow-clip 2xl:object-cover", styles.className)} alt="" height={d.height} src={d.imgSrc} width={d.width} sizes={d.sizes} srcSet={d.srcSet} />
              </div>
            </div>
          </div>
          <div className="hidden 2xl:w-[26.1875rem] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:gap-1.5">
            <div className={cn("hidden 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap", styles.className2)}>
              <p className="hidden 2xl:block 2xl:text-color-003 2xl:[font-family:'SF_Pro_Display_Medium',_'SF_Pro_Display_Medium_Placeholder',_sans-serif] 2xl:text-base 2xl:font-medium 2xl:leading-[0.8125rem]" dir="auto">
                {d.description}
              </p>
            </div>
            <div className={cn("hidden 2xl:flex 2xl:relative 2xl:opacity-40 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap", styles.className3)}>
              <p className="hidden 2xl:block 2xl:text-color-003 2xl:[font-family:'SF_Pro_Display_Regular',_'SF_Pro_Display_Regular_Placeholder',_sans-serif] 2xl:text-base 2xl:leading-[0.8125rem]" dir="auto">
                {d.description2}
              </p>
            </div>
          </div>
          <div className="hidden 2xl:w-10 2xl:h-10 2xl:block 2xl:relative 2xl:shrink-0">
            <div className="hidden 2xl:w-10 2xl:h-10 2xl:block 2xl:relative 2xl:rounded-lg">
              <div className="hidden 2xl:w-10 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:rounded-lg">
                <img className={cn("hidden 2xl:w-full 2xl:h-10 2xl:block 2xl:rounded-lg 2xl:overflow-clip 2xl:object-cover", styles.className4)} alt="" height={d.height2} src={d.imgSrc2} width={d.width2} sizes={d.sizes2} srcSet={d.srcSet2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
