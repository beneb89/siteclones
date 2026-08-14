import type { ReactNode } from "react";
export type Logo4Data = {
  ariaLabel: string;
  fill: string;
  viewBox: string;
  icon: ReactNode;
  id?: string;
  x?: string;
  y?: string;
  version?: string;
  enablebackground?: string;
};
/** A logo. */
export default function Logo4({ d }: { d: Logo4Data }) {
  return (
    <div className="block shrink-0 h-8 w-full">
      <div className="block h-full w-full" aria-label={d.ariaLabel} role="img">
        <svg className="w-[10.6875rem] h-8 block overflow-hidden align-middle md:max-lg:w-22.5 2xl:w-[11.3125rem]" data-component="image" fill={d.fill} viewBox={d.viewBox} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" id={d.id} x={d.x} y={d.y} version={d.version} enable-background={d.enablebackground}>{d.icon}</svg>
      </div>
    </div>
  );
}
