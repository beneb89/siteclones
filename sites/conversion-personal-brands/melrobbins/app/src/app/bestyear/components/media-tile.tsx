import type { ReactNode } from "react";
export type MediaTileData = {
  href: string;
  label: string;
  icon: ReactNode;
};
/** A media tile. */
export default function MediaTile({ d }: { d: MediaTileData }) {
  return (
    <li className="list-item max-md:flex-1">
      <a className="inline cursor-pointer" data-component="link" href={d.href} rel="noopener noreferrer" target="_blank">
        {" "}
        <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap">
          {d.label}
        </span>
        {" "}
        <svg className="block overflow-hidden align-middle mx-auto w-5 h-5" data-component="icon" aria-hidden="true" fill="currentColor">{d.icon}</svg>
        {" "}
      </a>
      {" "}
    </li>
  );
}
