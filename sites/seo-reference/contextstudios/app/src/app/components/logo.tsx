import type { ReactNode } from "react";
export type LogoData = {
  ariaLabel: string;
  href: string;
  fill: string;
  height?: string;
  stroke?: string;
  width?: string;
  xmlns?: string;
  strokeWidth?: string;
  strokeLinecap?: string;
  strokeLinejoin?: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo({ d }: { d: LogoData }) {
  return (
    <li className="list-item">
      <a className="border border-solid border-surface grid rounded-[10px] items-center justify-items-center text-muted cursor-pointer grid-cols-[minmax(0,_1fr)] h-[2.375rem] w-[2.375rem] hover:border-clr-32 hover:text-color-001" data-component="link" aria-label={d.ariaLabel} href={d.href} rel="me noopener noreferrer" target="_blank">
        <svg className="block overflow-hidden align-middle h-[1.0625rem] w-[1.0625rem] focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" aria-hidden="true" fill={d.fill} height={d.height} stroke={d.stroke} viewBox="0 0 24 24" width={d.width} xmlns={d.xmlns} strokeWidth={d.strokeWidth} strokeLinecap={d.strokeLinecap} strokeLinejoin={d.strokeLinejoin}>{d.icon}</svg>
      </a>
    </li>
  );
}
