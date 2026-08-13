import type { ReactNode } from "react";
export type LogoData = {
  ariaLabel: string;
  href: string;
  rel?: string;
  target?: string;
  viewBox: string;
  icon: ReactNode;
  height?: string;
  stroke?: string;
  width?: string;
  strokeWidth?: string;
  strokeLinecap?: string;
  strokeLinejoin?: string;
};
/** A logo. */
export default function Logo({ d }: { d: LogoData }) {
  return (
    <a className="hidden 2xl:block 2xl:cursor-pointer" aria-label={d.ariaLabel} href={d.href} rel={d.rel} target={d.target}>
      <svg className="hidden 2xl:w-7 2xl:h-7 2xl:block 2xl:overflow-hidden 2xl:align-middle" fill="none" viewBox={d.viewBox} xmlns="http://www.w3.org/2000/svg" height={d.height} stroke={d.stroke} width={d.width} strokeWidth={d.strokeWidth} strokeLinecap={d.strokeLinecap} strokeLinejoin={d.strokeLinejoin}>{d.icon}</svg>
    </a>
  );
}
