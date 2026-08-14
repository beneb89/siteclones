import type { ReactNode } from "react";
export type LogoData = {
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
export default function Logo({ d }: { d: LogoData }) {
  return (
    <div className="block">
      <div className="flex opacity-70 justify-center items-center text-muted-foreground mx-auto h-11 w-28 max-md:h-7 max-md:w-12">
        <div className="block min-w-0 h-full w-full" aria-label={d.ariaLabel} role="img">
          <svg className="w-full h-full block overflow-hidden align-middle max-md:w-12 max-md:h-7" viewBox={d.viewBox} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" fill={d.fill} id={d.id} version={d.version} x={d.x} y={d.y} enable-background={d.enablebackground}>{d.icon}</svg>
        </div>
      </div>
    </div>
  );
}
