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
    <div className={cn("block min-w-0 py-3 px-3.5 rounded-md flex-1 max-md:basis-full md:max-lg:basis-1/3", styles.className)}>
      <div className="block text-muted-foreground text-[0.625rem] font-bold leading-[0.9375rem] tracking-[0.8px] uppercase max-md:text-[0.5625rem] max-md:leading-[0.8125rem] max-md:tracking-[0.72px]">
        {d.text}
      </div>
      <div className="block mt-[0.3125rem] text-[0.9375rem] font-bold leading-[1.0625rem] tracking-[-0.21px] [font-feature-settings:'ss01',_'tnum']">
        {d.text2}
        <small className="block mt-0.5 text-muted-foreground text-[0.6875rem] font-medium leading-[0.8125rem] max-md:text-[0.625rem] max-md:leading-[0.75rem]">
          {d.text3}
        </small>
      </div>
    </div>
  );
}
