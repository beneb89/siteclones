import type { ReactNode } from "react";
export type LogoData = {
  ariaLabel: string;
  href: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo({ d }: { d: LogoData }) {
  return (
    <a className="flex text-color-005 cursor-pointer" data-component="link" aria-label={d.ariaLabel} href={d.href} rel="noopener" target="_blank">
      <svg className="w-auto h-5 block overflow-hidden" data-component="icon" fill="currentColor" height="20" viewBox="0 0 24 24" width="20">{d.icon}</svg>
    </a>
  );
}
