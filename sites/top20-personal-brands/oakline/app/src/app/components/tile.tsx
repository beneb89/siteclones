import type { TileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TileData = {
  description: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className={cn("block relative shrink-0", styles.className)}>
      <div className={cn("flex relative py-1.5 px-3 justify-center items-center content-center gap-0.5 cursor-pointer after:content-[''] after:block after:absolute after:inset-0 after:h-[1.95rem] max-lg:after:h-[1.8rem]", styles.className2)}>
        <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap", styles.className3)}>
          <p className={cn("block [font-family:'Geist_Mono',_monospace] text-base font-semibold leading-[1.1875rem] text-center uppercase max-lg:text-sm max-lg:leading-[1.0625rem]", styles.className4)}>
            {d.description}
          </p>
        </div>
      </div>
    </div>
  );
}
