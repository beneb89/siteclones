import type { ReactNode } from "react";
import type { TileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TileData = {
  id: string;
  icon: ReactNode;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <svg className={cn("hidden max-md:h-37.5 max-lg:block md:max-lg:h-[19.1875rem]", styles.className)} aria-hidden="true" id={d.id} viewBox="0 0 140 200" fill="currentColor">{d.icon}</svg>
  );
}
