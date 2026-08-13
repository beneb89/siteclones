import type { ReactNode } from "react";
export type Logo3Data = {
  ariaLabel: string;
  href: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo3({ d }: { d: Logo3Data }) {
  return (
    <li className="list-item text-foreground h-8 w-8">
      <a className="inline cursor-pointer" data-component="link" aria-label={d.ariaLabel} href={d.href} rel="me nofollow noopener noreferrer" target="_blank">
        <svg className="w-full block overflow-hidden align-middle pointer-events-none h-full focus:outline-clr-25 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" fill="currentColor">{d.icon}</svg>
      </a>
    </li>
  );
}
