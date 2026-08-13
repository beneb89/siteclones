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
    <svg className={cn("flex relative opacity-0 flex-col justify-start shrink-0 whitespace-pre text-nowrap transform-[matrix(1,0,0,1,0,32)]", styles.className)} viewBox={d.viewBox} data-framer-component-type="RichTextContainer" fill="currentColor">{d.icon}</svg>
  );
}
