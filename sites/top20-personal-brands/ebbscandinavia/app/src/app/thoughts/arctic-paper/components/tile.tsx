import type { ReactNode } from "react";
export type TileData = {
  viewBox: string;
  icon: ReactNode;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <svg className="hidden" viewBox={d.viewBox} data-framer-component-type="RichTextContainer" fill="currentColor">{d.icon}</svg>
  );
}
