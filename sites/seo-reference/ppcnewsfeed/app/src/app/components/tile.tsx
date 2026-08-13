import type { TileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TileData = {
  kind?: string;
  href: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className={cn("p-1 items-center grow", styles.className)}>
      <a className={cn("h-9 flex px-4 rounded-md justify-center items-center grow bg-surface-2 cursor-pointer", styles.className2)} data-component={d.kind} href={d.href} target="_blank">
        {" "}
        <i className={cn("block px-1 [font-family:powerkit-icons] text-xl leading-5 before:text-xl before:leading-5 before:text-center", styles.className3)} />
        {" "}
        <span className="hidden min-w-0 px-1 text-muted-foreground text-xs font-semibold leading-3">
          0
        </span>
        {" "}
      </a>
    </div>
  );
}
