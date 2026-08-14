import type { ReactNode } from "react";
export type LogoData = {
  href: string;
  label: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo({ d }: { d: LogoData }) {
  return (
    <a className="w-9 h-9 border border-solid border-border flex mb-3 rounded-lg justify-center items-center text-muted-foreground text-sm leading-[1.375rem] bg-color-004 cursor-pointer" data-component="link" href={d.href} rel="noopener" target="_blank" title={d.label}>
      <svg className="w-auto h-4.5 block shrink-0 overflow-hidden" data-component="icon" fill="currentColor" height="14" viewBox="0 0 16 16" width="14">{d.icon}</svg>
    </a>
  );
}
