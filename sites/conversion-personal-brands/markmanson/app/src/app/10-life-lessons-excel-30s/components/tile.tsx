import type { ReactNode } from "react";
import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  height: string;
  width: string;
  fill: string;
  icon: ReactNode;
  viewBox?: string;
  xmlns?: string;
  transform?: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <svg className={cn("min-w-0 overflow-hidden", styles.className)} height={d.height} width={d.width} fill={d.fill} viewBox={d.viewBox} xmlns={d.xmlns} transform={d.transform}>{d.icon}</svg>
  );
}
