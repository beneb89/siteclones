import type { ReactNode } from "react";
import type { MediaTile2Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type MediaTile2Data = {
  icon: ReactNode;
  label: string;
};
/** A media tile. */
export default function MediaTile2({ d, styles }: { d: MediaTile2Data; styles: MediaTile2Styles }) {
  return (
    <li className={cn("list-item", styles.className)}>
      <button className={cn("flex py-1.5 items-center gap-1.5 text-muted text-left cursor-default w-full", styles.className2)} data-component="button" type="button">
        <svg className={cn("block shrink-0 overflow-hidden align-middle", styles.className3)} data-component="icon" aria-hidden="true" fill="none" height="24" viewBox="0 -960 960 960" width="24" xmlns="http://www.w3.org/2000/svg">{d.icon}</svg>
        <span className="block">
          {d.label}
        </span>
      </button>
    </li>
  );
}
