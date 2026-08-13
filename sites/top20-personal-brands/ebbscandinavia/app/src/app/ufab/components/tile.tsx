import type { ReactNode } from "react";
import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  viewBox: string;
  icon: ReactNode;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <svg className={cn("w-auto flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-md:opacity-0 2xl:opacity-0", styles.className)} data-component="image" viewBox={d.viewBox} data-framer-component-type="RichTextContainer" fill="currentColor">{d.icon}</svg>
  );
}
