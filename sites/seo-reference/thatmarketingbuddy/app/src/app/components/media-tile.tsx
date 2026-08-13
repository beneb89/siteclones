import type { MediaTileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTileData = {
  label: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <div className="block relative">
      <button className={cn("flex items-center gap-1 text-primary text-[0.9375rem] font-medium leading-[1.4375rem] text-center cursor-pointer hover:border-clr-16 hover:text-clr-16 hover:outline-clr-16 hover:[text-decoration-color:var(--clr-16)]", styles.className)} data-component="button">
        {d.label}
        <svg className="w-auto h-3 block overflow-hidden align-middle focus:outline-clr-17 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" fill="none" height="12" stroke="currentColor" viewBox="0 0 24 24" width="12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </div>
  );
}
