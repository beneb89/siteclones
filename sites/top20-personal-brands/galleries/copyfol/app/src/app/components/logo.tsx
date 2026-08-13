import type { ReactNode } from "react";
export type LogoData = {
  ariaLabel: string;
  href: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo({ d }: { d: LogoData }) {
  return (
    <a className="h-10 block cursor-pointer" data-component="link" aria-label={d.ariaLabel} href={d.href} rel="noopener noreferrer" target="_blank">
      <span className="inline-flex rounded-full justify-center items-center bg-surface h-10 w-10 hover:bg-border">
        <svg className="block overflow-hidden align-middle h-5 w-5 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">{d.icon}</svg>
      </span>
    </a>
  );
}
