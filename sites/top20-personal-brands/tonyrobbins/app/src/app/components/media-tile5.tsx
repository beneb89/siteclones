import type { ReactNode } from "react";
export type MediaTile5Data = {
  href: string;
  label: string;
  icon: ReactNode;
};
/** A media tile. */
export default function MediaTile5({ d }: { d: MediaTile5Data }) {
  return (
    <li className="list-item">
      <a className="inline cursor-pointer" data-component="link" href={d.href} rel="noreferrer" target="_blank">
        <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
          {d.label}
        </span>
        <svg className="flex overflow-hidden align-middle h-6 w-6" data-component="icon" fill="transparent" viewBox="0 0 24 24">{d.icon}</svg>
      </a>
    </li>
  );
}
