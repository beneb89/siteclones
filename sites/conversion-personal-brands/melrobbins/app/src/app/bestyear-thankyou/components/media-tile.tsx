import type { ReactNode } from "react";
export type MediaTileData = {
  href: string;
  icon: ReactNode;
  label: string;
};
/** A media tile. */
export default function MediaTile({ d }: { d: MediaTileData }) {
  return (
    <li className="list-item text-muted">
      <a className="min-h-12 flex p-3.5 items-center gap-2.5 text-xs font-semibold leading-4 tracking-[0.3px] text-left uppercase cursor-pointer w-full" href={d.href} rel="noopener noreferrer" target="_blank">
        {" "}
        <svg className="block min-w-0 shrink-0 overflow-hidden align-middle w-4 h-4" aria-hidden="true" fill="currentColor">{d.icon}</svg>
        {d.label}
      </a>
      {" "}
    </li>
  );
}
