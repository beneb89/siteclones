import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className={cn("w-[316.7px] block max-w-full pt-13 px-3 shrink-0 text-center max-md:w-[23.4375rem] md:max-lg:w-[213.3px] 2xl:w-[366.7px]", styles.className)}>
      {" "}
      <div className={cn("block text-lg leading-[1.75rem]", styles.className2)}>
        <span className="block mb-2 text-[1.1875rem] font-bold leading-[1.875rem] tracking-[0.19px] uppercase">
          {d.text}
        </span>
        {d.text2}
      </div>
      {" "}
    </div>
  );
}
