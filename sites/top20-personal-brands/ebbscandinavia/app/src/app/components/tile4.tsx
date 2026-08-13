import type { ReactNode } from "react";
import type { Tile4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile4Data = {
  viewBox: string;
  icon: ReactNode;
  kind?: string;
};
/** A content tile. */
export default function Tile4({ d, styles }: { d: Tile4Data; styles: Tile4Styles }) {
  return (
    <svg className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap 2xl:hidden", styles.className)} viewBox={d.viewBox} data-framer-component-type="RichTextContainer" fill="currentColor" data-component={d.kind}>{d.icon}</svg>
  );
}
