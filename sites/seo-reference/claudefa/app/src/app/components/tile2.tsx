import type { Tile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile2Data = {
  text: string;
  text2: string;
  text3: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <div className={cn("hidden 2xl:flex 2xl:min-w-27.5 2xl:flex-col 2xl:gap-1 2xl:text-center", styles.className)}>
      <div className="hidden 2xl:block 2xl:text-[2rem] 2xl:font-semibold 2xl:leading-8 2xl:tracking-[-0.64px]">
        {d.text}
        <span className="hidden 2xl:inline 2xl:text-clr-19">
          {d.text2}
        </span>
      </div>
      <div className={cn("hidden 2xl:block 2xl:text-clr-18 2xl:text-[0.8125rem] 2xl:leading-[0.8125rem] 2xl:tracking-[0.52px] 2xl:uppercase", styles.className2)}>
        {d.text3}
      </div>
    </div>
  );
}
