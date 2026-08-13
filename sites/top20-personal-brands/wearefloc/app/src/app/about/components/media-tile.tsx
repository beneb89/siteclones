import type { MediaTileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTileData = {
  imgSrc: string;
  imgSrc2: string;
  description: string;
  description2: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <div className="flex relative flex-col justify-start items-center content-center shrink-0 gap-2.5">
      <div className="contents min-w-0 2xl:w-65 2xl:h-65 2xl:block 2xl:relative 2xl:shrink-0 2xl:aspect-square">
        <div className="w-65 h-65 block relative inset-0 shrink-0 aspect-square max-lg:w-37 max-lg:h-37 2xl:absolute 2xl:right-auto 2xl:bottom-auto 2xl:shrink-[initial] 2xl:aspect-[initial]">
          <img className="hidden 2xl:w-full 2xl:h-65 2xl:block 2xl:overflow-clip 2xl:object-cover 2xl:aspect-[auto_400/400]" alt="" height="400" src={d.imgSrc} width="400" />
          <div className="h-full block absolute top-0 inset-x-0 2xl:hidden">
            <img className="w-full h-65 block overflow-clip object-cover aspect-[auto_400/400] max-lg:h-37 2xl:hidden" data-component="image" alt="" height="400" src={d.imgSrc2} width="400" />
          </div>
        </div>
      </div>
      <div className={cn("contents min-w-0 2xl:h-5 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap", styles.className)}>
        <p className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:'Druk_Text_Wide_Heavy',_'Druk_Text_Wide_Heavy_Placeholder',_sans-serif] 2xl:text-base 2xl:leading-5 2xl:uppercase">
          {d.description}
        </p>
        <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[6.9375rem] max-lg:whitespace-pre-wrap max-lg:[word-break:break-word] max-lg:[overflow-wrap:break-word] max-lg:[text-wrap:initial] 2xl:hidden", styles.className2)}>
          <p className="block text-color-001 [font-family:'Druk_Text_Wide_Heavy',_'Druk_Text_Wide_Heavy_Placeholder',_sans-serif] text-base leading-5 uppercase max-lg:leading-[0.9375rem] max-lg:text-center max-lg:[font-size:inherit] 2xl:hidden">
            {d.description2}
          </p>
        </div>
      </div>
    </div>
  );
}
