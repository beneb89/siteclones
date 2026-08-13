import type { ReactNode } from "react";
export type MediaTile2Data = {
  href: string;
  icon: ReactNode;
  label: string;
};
/** A media tile. */
export default function MediaTile2({ d }: { d: MediaTile2Data }) {
  return (
    <li className="box-content block rounded-full text-color-002 bg-background">
      <a className="box-content h-6 flex p-1.5 items-center leading-0 cursor-pointer" data-component="link" href={d.href} rel="noopener nofollow" target="_blank">
        <svg className="box-content w-auto h-6 block overflow-hidden focus:outline-clr-47 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" aria-hidden="true" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" version="1.1" focusable="false" fill="currentColor">{d.icon}</svg>
        <span className="box-content w-px h-px block absolute min-w-0 -m-px overflow-hidden [clip-path:inset(50%)] focus:bg-clr-48 focus:border-clr-49 focus:shadow-[var(--clr-50)_0px_0px_2px_2px] focus:text-clr-49 focus:outline-clr-49 focus:[text-decoration-color:var(--clr-49)]">
          {d.label}
        </span>
      </a>
    </li>
  );
}
