import type { ReactNode } from "react";
export type MediaTileData = {
  icon: ReactNode;
  text: string;
};
/** A media tile. */
export default function MediaTile({ d }: { d: MediaTileData }) {
  return (
    <span className="flex flex-row-reverse items-center gap-1.5 text-muted-foreground whitespace-nowrap text-nowrap">
      {" "}
      <svg className="w-auto h-4 block shrink-0 overflow-hidden" data-component="icon" fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">{d.icon}</svg>
      {d.text}
    </span>
  );
}
