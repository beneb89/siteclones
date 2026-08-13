import type { ReactNode } from "react";
import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  viewBox: string;
  icon: ReactNode;
  kind?: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <svg className={cn("w-auto flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap 2xl:transform-[none] 2xl:opacity-[initial]", styles.className)} viewBox={d.viewBox} data-framer-component-type="RichTextContainer" fill="currentColor" data-component={d.kind}>{d.icon}</svg>
  );
}
