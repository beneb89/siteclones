import type { ReactNode } from "react";
import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  icon: ReactNode;
  kind?: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <svg className={cn("box-content h-5.5 min-w-full max-w-full max-h-full overflow-hidden align-middle", styles.className)} aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" data-component={d.kind}>{d.icon}</svg>
  );
}
