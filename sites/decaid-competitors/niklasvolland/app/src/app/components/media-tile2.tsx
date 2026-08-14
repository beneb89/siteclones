import type { ReactNode } from "react";
export type MediaTile2Data = {
  icon: ReactNode;
  text: string;
};
/** A media tile. */
export default function MediaTile2({ d }: { d: MediaTile2Data }) {
  return (
    <div className="flex flex-col items-center gap-2 text-muted text-xs leading-[1.1875rem]">
      <div className="w-9 h-9 border border-solid border-border flex rounded-lg justify-center items-center bg-border">
        <svg className="w-auto h-3.5 block overflow-hidden" data-component="icon" fill="#E60000" height="14" viewBox="0 0 16 16" width="14">{d.icon}</svg>
      </div>
      {" "}
      <span className="block">
        {d.text}
      </span>
      {" "}
    </div>
  );
}
