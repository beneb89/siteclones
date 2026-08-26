import type { MediaTileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTileData = {
  href: string;
  label: string;
  ariahaspopup?: string;
  ariaLabel: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <div className={cn("flex relative rounded-lg items-center text-sm leading-5", styles.className)}>
      <a className={cn("py-2 pr-1 pl-3 cursor-pointer", styles.className2)} data-component="link" href={d.href}>
        {d.label}
      </a>
      <button className="flex py-2 pr-3 pl-0.5 items-center text-center cursor-default" data-component="button" aria-expanded="false" aria-haspopup={d.ariahaspopup} aria-label={d.ariaLabel}>
        <svg className={cn("block overflow-hidden align-middle", styles.className3)} data-component="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
}
