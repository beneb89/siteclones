import type { TileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TileData = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className={cn("block py-2.5 px-3 text-center", styles.className)}>
      <div className={cn("block text-[0.6875rem] font-semibold leading-[1.0625rem] tracking-[0.42px] uppercase max-md:text-[0.5625rem] max-md:leading-[0.625rem] max-md:tracking-[0.34px]", styles.className2)}>
        {d.text}
      </div>
      <div className={cn("block mt-[0.3125rem] text-[1.3125rem] font-bold leading-[1.3125rem] tracking-[-0.42px] max-md:text-[1.0625rem] max-md:leading-[1.0625rem] max-md:tracking-[-0.34px]", styles.className3)}>
        {d.text2}
      </div>
    </div>
  );
}
