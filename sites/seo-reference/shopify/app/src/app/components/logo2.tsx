import type { ReactNode } from "react";
export type Logo2Data = {
  ariaLabel: string;
  href: string;
  viewBox: string;
  icon: ReactNode;
  label: string;
};
/** A logo. */
export default function Logo2({ d }: { d: Logo2Data }) {
  return (
    <li className="list-item">
      <a className="block cursor-pointer h-9 w-9" data-component="link" aria-label={d.ariaLabel} href={d.href} rel="me nofollow noopener noreferrer" target="_blank">
        <svg className="w-auto h-9 block overflow-hidden align-middle focus:outline-clr-25 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" viewBox={d.viewBox} fill="currentColor">{d.icon}</svg>
        <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
          {d.label}
        </span>
      </a>
    </li>
  );
}
