import type { MediaTile3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTile3Data = {
  height: string;
  sizes?: string;
  imgSrc: string;
  srcSet?: string;
  width: string;
  description: string;
  description2: string;
};
/** A media tile. */
export default function MediaTile3({ d, styles }: { d: MediaTile3Data; styles: MediaTile3Styles }) {
  return (
    <div className={cn("hidden", styles.className)}>
      <div className={cn("hidden 2xl:w-[29.3125rem] 2xl:block 2xl:relative 2xl:rounded-2xl 2xl:overflow-hidden", styles.className2)}>
        <div className="hidden 2xl:w-[29.3125rem] 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:shrink-0 2xl:overflow-hidden">
          <div className={cn("hidden 2xl:w-[29.3125rem] 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0", styles.className3)}>
            <img className={cn("hidden 2xl:w-full 2xl:block 2xl:overflow-clip 2xl:object-cover", styles.className4)} alt="" height={d.height} sizes={d.sizes} src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
          </div>
        </div>
        <div className="hidden 2xl:w-[29.3125rem] 2xl:h-[4.9375rem] 2xl:block 2xl:absolute 2xl:bottom-0 2xl:left-0 2xl:shrink-0 2xl:overflow-hidden">
          <div className={cn("hidden 2xl:w-[29.3125rem] 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:shrink-0", styles.className5)} />
        </div>
        <div className="hidden 2xl:w-[29.3125rem] 2xl:h-12 2xl:block 2xl:absolute 2xl:bottom-0 2xl:left-0 2xl:shrink-0">
          <div className="hidden 2xl:w-[29.3125rem] 2xl:h-12 2xl:block 2xl:relative 2xl:overflow-hidden 2xl:cursor-pointer">
            <div className="hidden 2xl:w-92 2xl:h-5 2xl:flex 2xl:absolute 2xl:top-3.5 2xl:left-3 2xl:flex-col 2xl:justify-center 2xl:shrink-0 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word]">
              <p className={cn("hidden 2xl:block 2xl:[font-family:'Raveo_Variable_Variable',_sans-serif] 2xl:[font-weight:1000] 2xl:leading-[0.875rem] 2xl:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']", styles.className6)} dir="auto">
                {d.description}
              </p>
            </div>
            <div className={cn("hidden 2xl:h-5 2xl:flex 2xl:absolute 2xl:top-3.5 2xl:right-3 2xl:flex-col 2xl:justify-center 2xl:shrink-0 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word]", styles.className7)}>
              <p className={cn("hidden 2xl:block 2xl:[font-family:'Raveo_Variable_Variable',_sans-serif] 2xl:[font-weight:1000] 2xl:leading-[0.875rem] 2xl:text-right 2xl:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']", styles.className8)} dir="auto">
                {d.description2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
