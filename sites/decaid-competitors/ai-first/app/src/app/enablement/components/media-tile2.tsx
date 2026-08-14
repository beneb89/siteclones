import type { ReactNode } from "react";
import type { MediaTile2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTile2Data = {
  icon: ReactNode;
  text: string;
};
/** A media tile. */
export default function MediaTile2({ d, styles }: { d: MediaTile2Data; styles: MediaTile2Styles }) {
  return (
    <li className={cn("flex items-start gap-3", styles.className)}>
      <svg className="block mt-1 shrink-0 overflow-hidden align-middle text-muted h-5 w-5" data-component="icon" aria-hidden="true" fill="none" height="24" viewBox="0 -960 960 960" width="24" xmlns="http://www.w3.org/2000/svg">{d.icon}</svg>
      <span className="block">
        {d.text}
      </span>
    </li>
  );
}
