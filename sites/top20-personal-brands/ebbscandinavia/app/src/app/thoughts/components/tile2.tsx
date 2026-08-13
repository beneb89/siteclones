import type { ReactNode } from "react";
import type { Tile2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile2Data = {
  viewBox: string;
  icon: ReactNode;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <svg className={cn("flex relative opacity-0 flex-col justify-start shrink-0 whitespace-pre text-nowrap transform-[matrix(1,0,0,1,0,32)] 2xl:hidden", styles.className)} viewBox={d.viewBox} data-framer-component-type="RichTextContainer" fill="currentColor">{d.icon}</svg>
  );
}
