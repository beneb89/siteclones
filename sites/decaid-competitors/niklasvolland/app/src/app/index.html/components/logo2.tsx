import type { ReactNode } from "react";
export type Logo2Data = {
  href: string;
  label: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo2({ d }: { d: Logo2Data }) {
  return (
    <a className="w-8 h-8 border border-solid border-border flex mb-2.5 rounded-md justify-center items-center text-muted text-[0.8125rem] leading-[1.3125rem] bg-border cursor-pointer" data-component="link" href={d.href} rel="noopener" target="_blank" title={d.label}>
      <svg className="w-auto h-4.5 block shrink-0 overflow-hidden" data-component="icon" fill="currentColor" height="14" viewBox="0 0 16 16" width="14">{d.icon}</svg>
    </a>
  );
}
