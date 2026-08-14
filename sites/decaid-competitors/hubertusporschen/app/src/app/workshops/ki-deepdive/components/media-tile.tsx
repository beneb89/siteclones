import type { ReactNode } from "react";
import type { MediaTileStyles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type MediaTileData = {
  strokeWidth: string;
  icon: ReactNode;
  text: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <li className={cn("flex items-start gap-3 text-sm leading-[1.3125rem] 2xl:hidden", styles.className)}>
      <span className={cn("flex mt-[0.1875rem] rounded-full justify-center items-center shrink-0 w-4 h-4 2xl:hidden", styles.className2)}>
        {" "}
        <svg className={cn("block overflow-hidden align-middle w-[10.63px] h-[10.63px] 2xl:hidden 2xl:w-2.5 2xl:h-2.5 max-md:w-2.5 max-md:h-2.5", styles.className3)} data-component="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={d.strokeWidth}>{d.icon}</svg>
        {" "}
      </span>
      {d.text}
    </li>
  );
}
