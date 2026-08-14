import type { ReactNode } from "react";
import type { MediaTileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTileData = {
  viewBox: string;
  dataid: string;
  icon: ReactNode;
  text: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <li className="flex justify-start items-start content-start text-foreground text-base leading-7 [word-break:break-word]">
      <div className="block relative z-1">
        <div className={cn("box-content p-2.5 leading-0 text-center", styles.className)}>
          <svg className={cn("box-content h-4 inline-block overflow-hidden align-middle text-color-002 leading-4", styles.className2)} data-component="icon" viewBox={d.viewBox} data-id={d.dataid} data-name="" fill="currentColor">{d.icon}</svg>
        </div>
      </div>
      <span className="block z-0 leading-[2.3125rem]">
        {d.text}
      </span>
    </li>
  );
}
