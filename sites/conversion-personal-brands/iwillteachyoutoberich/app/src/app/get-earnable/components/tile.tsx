import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  ariaLabel: string;
  style: string;
  label: string;
  text: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className={cn("w-[392.3px] block relative mr-2.5 pt-7.5 pb-[0.9375rem] px-[0.9375rem] rounded-[10px] shrink-0 overflow-hidden bg-background 2xl:w-[37.1875rem]", styles.className)} aria-label={d.ariaLabel} aria-roledescription="slide" role="group">
      <div className={cn("block text-left", styles.className2)}>
        <div className={cn("block", styles.className3)}>
          <div className={cn("block leading-7", styles.className4)}>
            <iframe className={cn("w-90.5 h-160 block max-w-full overflow-clip leading-4.5 [background-size:100%_100%] bg-no-repeat 2xl:w-[35.3125rem]", styles.className5)} style={d.style} height="640px" title={d.label} width="360px" />
            {"  "}
          </div>
          {" "}
        </div>
        {" "}
        <div className={cn("flex mt-[1.5625rem] justify-start items-center", styles.className6)}>
          <cite className={cn("h-6 flex flex-col text-sm leading-[1.3125rem]", styles.className7)}>
            <span className={cn("block text-lg font-bold leading-6", styles.className8)}>
              {d.text}
            </span>
          </cite>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
