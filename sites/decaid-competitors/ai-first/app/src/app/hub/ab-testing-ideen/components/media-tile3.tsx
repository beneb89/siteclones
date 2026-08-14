import type { ReactNode } from "react";
import type { MediaTile3Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type MediaTile3Data = {
  icon: ReactNode;
  label: string;
};
/** A media tile. */
export default function MediaTile3({ d, styles }: { d: MediaTile3Data; styles: MediaTile3Styles }) {
  return (
    <li className={cn("list-item", styles.className)}>
      <button className="flex py-1.5 pl-4 items-center gap-1.5 text-muted text-sm font-semibold leading-[1.1875rem] text-left cursor-default w-full" data-component="button" type="button">
        <svg className="block shrink-0 overflow-hidden align-middle h-3.5 w-3.5" data-component="icon" aria-hidden="true" fill="none" height="24" viewBox="0 -960 960 960" width="24" xmlns="http://www.w3.org/2000/svg">{d.icon}</svg>
        <span className="block">
          {d.label}
        </span>
      </button>
    </li>
  );
}
