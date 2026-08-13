import type { ReactNode } from "react";
export type LogoData = {
  href: string;
  icon: ReactNode;
  label: string;
};
/** A logo. */
export default function Logo({ d }: { d: LogoData }) {
  return (
    <li className="list-item pointer-events-none max-lg:hidden">
      <a className="h-10 flex py-2.5 items-start gap-x-4 cursor-pointer pointer-events-none max-lg:hidden" data-component="link" href={d.href}>
        <svg className="block shrink-0 overflow-hidden align-middle pointer-events-none w-5 h-5 max-lg:hidden" data-component="icon" fill="currentColor">{d.icon}</svg>
        <span className="flex items-center pointer-events-none max-lg:hidden">
          {d.label}
          <svg className="block opacity-0 shrink-0 overflow-hidden align-middle pointer-events-none w-3.5 h-3.5 max-lg:hidden" fill="currentColor">
            <use href="#icon-arrow" />
          </svg>
        </span>
      </a>
    </li>
  );
}
