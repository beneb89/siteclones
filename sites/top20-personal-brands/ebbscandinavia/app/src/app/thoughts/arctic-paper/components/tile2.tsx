import type { ReactNode } from "react";
import type { Tile2Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type Tile2Data = {
  viewBox: string;
  icon: ReactNode;
  kind?: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <svg className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap 2xl:hidden", styles.className)} viewBox={d.viewBox} data-framer-component-type="RichTextContainer" fill="currentColor" data-component={d.kind}>{d.icon}</svg>
  );
}
