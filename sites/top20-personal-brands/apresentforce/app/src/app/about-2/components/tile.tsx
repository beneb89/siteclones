import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  description: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className={cn("w-full flex relative justify-start items-center content-center [align-self:start] shrink-0 overflow-hidden", styles.className)}>
      <div className={cn("flex relative z-1 flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[320.5px] md:max-lg:w-[721.3px]", styles.className2)}>
        <p className={cn("block text-color-006", styles.className3)}>
          {d.description}
        </p>
      </div>
    </div>
  );
}
