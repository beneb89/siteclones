import type { ReactNode } from "react";
export type Tile2Data = {
  icon: ReactNode;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <svg className="w-auto h-112.5 block flex-1 overflow-hidden max-lg:hidden 2xl:h-[43.3125rem]" data-component="image" viewBox="0 0 140 200" fill="currentColor">{d.icon}</svg>
  );
}
