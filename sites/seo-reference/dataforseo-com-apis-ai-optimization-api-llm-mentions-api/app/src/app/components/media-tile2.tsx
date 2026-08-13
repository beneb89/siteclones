import type { ReactNode } from "react";
export type MediaTile2Data = {
  href: string;
  icon: ReactNode;
  label: string;
};
/** A media tile. */
export default function MediaTile2({ d }: { d: MediaTile2Data }) {
  return (
    <li className="block rounded-full text-color-004 bg-background">
      <a className="h-9 flex p-1.5 items-center leading-0 cursor-pointer focus:outline-color-004" data-component="link" href={d.href} rel="noopener nofollow" target="_blank">
        <svg className="w-auto h-6 block overflow-hidden align-middle focus:outline-color-004" data-component="icon" aria-hidden="true" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" version="1.1" focusable="false" fill="currentColor">{d.icon}</svg>
        <span className="w-px h-px block absolute min-w-0 -m-px overflow-hidden whitespace-nowrap text-nowrap hover:bg-background hover:shadow-[var(--clr-45)_0px_0px_2px_2px] hover:text-muted hover:[text-decoration-color:var(--muted)] focus:bg-background focus:shadow-[var(--clr-45)_0px_0px_2px_2px] focus:text-muted focus:outline-muted focus:[text-decoration-color:var(--muted)]">
          {d.label}
        </span>
      </a>
    </li>
  );
}
