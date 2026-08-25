import type { Tile3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile3Data = {
  id: string;
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile3({ d, styles }: { d: Tile3Data; styles: Tile3Styles }) {
  return (
    <div className="box-content flex max-h-[1e+06px] flex-col text-color-011 font-semibold max-md:text-base max-md:leading-[1.875rem] 2xl:hidden" id={d.id}>
      <div className="box-content flex max-h-[1e+06px] justify-between items-start gap-2.5 2xl:hidden">
        <div className={cn("box-content flex min-w-0 max-h-[1e+06px] flex-wrap items-start gap-[0.3125rem] [word-break:break-word] 2xl:hidden", styles.className)}>
          <span className="box-content block min-w-0 max-h-[1e+06px] 2xl:hidden">
            {d.text}
          </span>
        </div>
        <div className="box-content w-[12.525rem] flex min-w-0 max-h-[1e+06px] flex-wrap justify-end items-start gap-[0.3125rem] text-right max-md:w-[7.775rem] md:max-lg:w-27.5 2xl:hidden">
          <span className="box-content block max-h-[1e+06px] [word-break:break-all] 2xl:hidden">
            {d.text2}
          </span>
        </div>
      </div>
    </div>
  );
}
