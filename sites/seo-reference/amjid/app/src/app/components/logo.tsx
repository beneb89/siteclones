import type { ReactNode } from "react";
export type LogoData = {
  ariaLabel: string;
  href: string;
  fill: string;
  icon: ReactNode;
  stroke?: string;
  strokeWidth?: string;
};
/** A logo. */
export default function Logo({ d }: { d: LogoData }) {
  return (
    <a className="w-9 h-9 border border-solid border-border flex rounded-lg justify-center items-center text-muted bg-border cursor-pointer hover:bg-primary hover:border-primary hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)]" data-component="link" aria-label={d.ariaLabel} href={d.href} rel="noopener" target="_blank">
      {" "}
      <svg className="w-auto h-4.5 block max-w-full overflow-hidden" data-component="icon" aria-hidden="true" fill={d.fill} height="18" viewBox="0 0 24 24" width="18" stroke={d.stroke} strokeWidth={d.strokeWidth}>{d.icon}</svg>
      {" "}
    </a>
  );
}
