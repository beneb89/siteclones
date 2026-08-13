import type { MediaTileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTileData = {
  height: string;
  sizes?: string;
  imgSrc: string;
  srcSet?: string;
  width: string;
  description: string;
  description2: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <div className={cn("w-full block relative [align-self:start] shrink-0", styles.className)}>
      <div className={cn("block relative rounded-2xl overflow-hidden", styles.className2)}>
        <div className={cn("h-full block absolute top-0 inset-x-0 shrink-0 overflow-hidden", styles.className3)}>
          <div className={cn("h-full block absolute top-0 inset-x-0", styles.className4)}>
            <img className={cn("w-full block overflow-clip object-cover", styles.className5)} data-component="image" alt="" height={d.height} sizes={d.sizes} src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
          </div>
        </div>
        <div className={cn("h-[4.9375rem] block absolute bottom-0 inset-x-0 shrink-0 overflow-hidden", styles.className6)} style={{ maskImage: "linear-gradient(var(--clr-2) 0%, var(--color-001) 100%)" }}>
          <div className={cn("h-full block absolute top-0 inset-x-0 shrink-0", styles.className7)} />
        </div>
        <div className={cn("h-12 block absolute bottom-0 inset-x-0 shrink-0", styles.className8)}>
          <div className={cn("h-12 block relative overflow-hidden cursor-pointer", styles.className9)}>
            <div className={cn("w-92 h-5 flex absolute top-3.5 left-3 flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]", styles.className10)}>
              <p className={cn("block [font-family:'Raveo_Variable_Variable',_sans-serif] [font-weight:1000] leading-[0.875rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[0.625rem] max-lg:leading-3", styles.className11)} dir="auto">
                {d.description}
              </p>
            </div>
            <div className={cn("h-5 flex absolute top-3.5 right-3 flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]", styles.className12)}>
              <p className={cn("block [font-family:'Raveo_Variable_Variable',_sans-serif] [font-weight:1000] leading-[0.875rem] text-right [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']", styles.className13)} dir="auto">
                {d.description2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
