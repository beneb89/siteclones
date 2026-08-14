import type { MediaTileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTileData = {
  alt: string;
  imgSrc: string;
  text: string;
  text2: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <div className="border border-solid border-border flex relative py-6 px-5 rounded-xl flex-col gap-1.5 bg-color-004 max-lg:py-4.5 max-lg:px-3.5">
      <div className="h-7 flex opacity-85 mb-2 items-center">
        <img className={cn("h-7 block max-w-35 overflow-clip object-contain [filter:brightness(0)_invert(1)]", styles.className)} data-component="image" alt={d.alt} src={d.imgSrc} />
      </div>
      <div className="block text-[0.9375rem] font-semibold leading-6 tracking-[-0.07px]">
        {d.text}
      </div>
      <div className="block text-muted text-[0.6875rem] leading-[1.125rem] tracking-[1.1px] uppercase">
        {d.text2}
      </div>
    </div>
  );
}
