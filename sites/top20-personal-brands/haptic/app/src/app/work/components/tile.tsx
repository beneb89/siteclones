import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  description: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className={cn("block relative shrink-0 max-lg:hidden", styles.className)}>
      <a className="flex relative justify-center items-center content-center gap-2.5 text-primary cursor-pointer max-lg:hidden" data-component="link" href="/">
        <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:hidden", styles.className2)}>
          <p className="block text-foreground [font-family:'SF_Pro_Display_Regular',_'SF_Pro_Display_Regular_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 text-left max-lg:hidden" dir="auto">
            {d.description}
          </p>
        </div>
      </a>
    </div>
  );
}
