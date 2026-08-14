import type { Tile2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile2Data = {
  href: string;
  label: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <div className={cn("block relative", styles.className)}>
      <a className={cn("h-[2.5625rem] border-2 border-solid block max-w-75 mr-2 py-2 px-2.5 overflow-hidden whitespace-nowrap text-nowrap cursor-pointer", styles.className2)} data-component="link" href={d.href} rel="noreferrer" target="_self">
        <span className="inline-block max-w-50 overflow-hidden align-bottom">
          {d.label}
        </span>
      </a>
    </div>
  );
}
