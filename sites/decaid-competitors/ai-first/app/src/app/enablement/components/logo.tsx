import type { ReactNode } from "react";
export type LogoData = {
  ariaLabel: string;
  viewBox: string;
  fill: string;
  icon: ReactNode;
  kind?: string;
  id?: string;
  version?: string;
  x?: string;
  y?: string;
  enablebackground?: string;
};
/** A logo. */
export default function Logo({ d }: { d: LogoData }) {
  return (
    <div className="block mx-8 p-2 shrink-0 text-color-006 bg-accent h-14 w-52 max-md:h-12 max-md:w-44">
      <div className="block opacity-80 h-full w-full" aria-label={d.ariaLabel} role="img">
        <svg className="w-48 h-10 block overflow-hidden align-middle max-md:w-40 max-md:h-8" viewBox={d.viewBox} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" fill={d.fill} data-component={d.kind} id={d.id} version={d.version} x={d.x} y={d.y} enable-background={d.enablebackground}>{d.icon}</svg>
      </div>
    </div>
  );
}
