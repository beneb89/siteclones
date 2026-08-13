import type { ReactNode } from "react";
import type { Tile3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile3Data = {
  viewBox: string;
  icon: ReactNode;
};
/** A content tile. */
export default function Tile3({ d, styles }: { d: Tile3Data; styles: Tile3Styles }) {
  return (
    <svg className={cn("hidden", styles.className)} viewBox={d.viewBox} data-framer-component-type="RichTextContainer" fill="currentColor">{d.icon}</svg>
  );
}
