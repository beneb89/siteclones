import type { MediaTileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTileData = {
  description: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <div className={cn("w-[37.0625rem] h-[4.1875rem] block absolute left-27.5 transform-[none] md:max-lg:origin-[296.5px_33.5px]", styles.className)}>
      <div className={cn("h-full block absolute top-0 right-0 left-18.5", styles.className2)}>
        <p className={cn("box-content h-full block absolute top-0 inset-x-0 text-color-002 [font-family:'Public_Sans'] text-xl tracking-[0.2px] text-left max-md:text-[0.9375rem] max-md:tracking-[0.15px]", styles.className3)}>
          {d.description}
        </p>
      </div>
      <div className={cn("w-13.5 h-[2.6875rem] block absolute max-md:w-9 max-md:h-9", styles.className4)}>
        <div className="box-content h-full block">
          <svg className="box-content w-13.5 h-[2.6875rem] inline overflow-hidden align-top max-md:w-9 max-md:h-9" data-component="image" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110" />
          </svg>
        </div>
      </div>
    </div>
  );
}
