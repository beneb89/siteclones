import type { ReactNode } from "react";
export type MediaTileData = {
  href: string;
  icon: ReactNode;
  label: string;
};
/** A media tile. */
export default function MediaTile({ d }: { d: MediaTileData }) {
  return (
    <li className="block rounded-full text-color-005 bg-background">
      <a className="h-9 flex p-1.5 items-center leading-0 cursor-pointer" data-component="link" href={d.href} rel="noopener nofollow" target="_blank">
        <svg className="w-auto h-6 block overflow-hidden align-middle" data-component="icon" aria-hidden="true" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" version="1.1" focusable="false" fill="currentColor">{d.icon}</svg>
        <span className="w-px h-px block absolute min-w-0 -m-px overflow-hidden whitespace-nowrap text-nowrap hover:bg-background hover:border-foreground hover:shadow-[var(--clr-21)_0px_0px_2px_2px] hover:text-foreground hover:outline-foreground hover:[text-decoration-color:var(--foreground)] focus:bg-background focus:border-foreground focus:shadow-[var(--clr-21)_0px_0px_2px_2px] focus:text-foreground focus:outline-foreground focus:[text-decoration-color:var(--foreground)]">
          {d.label}
        </span>
      </a>
    </li>
  );
}
