import type { ReactNode } from "react";
export type Logo2Data = {
  ariaLabel: string;
  viewBox: string;
  fill: string;
  icon: ReactNode;
  id?: string;
  version?: string;
  x?: string;
  y?: string;
  enablebackground?: string;
};
/** A logo. */
export default function Logo2({ d }: { d: Logo2Data }) {
  return (
    <div className="block shrink-0 h-8 w-full">
      <div className="block h-full w-full" aria-label={d.ariaLabel} role="img">
        <svg className="w-[10.6875rem] h-8 block overflow-hidden align-middle md:max-lg:w-22.5 2xl:w-[11.3125rem]" data-component="image" viewBox={d.viewBox} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" fill={d.fill} id={d.id} version={d.version} x={d.x} y={d.y} enable-background={d.enablebackground}>{d.icon}</svg>
      </div>
    </div>
  );
}
