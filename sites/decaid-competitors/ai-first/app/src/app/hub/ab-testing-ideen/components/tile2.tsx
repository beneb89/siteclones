import type { ReactNode } from "react";
export type Tile2Data = {
  icon: ReactNode;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <svg className="w-75 h-37.5 block absolute z-0 align-middle pointer-events-none" data-component="image" fill="currentColor">{d.icon}</svg>
  );
}
