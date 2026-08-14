import type { ReactNode } from "react";
export type Logo3Data = {
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
export default function Logo3({ d }: { d: Logo3Data }) {
  return (
    <div className="flex opacity-70 justify-center items-center text-muted-foreground mx-auto h-11 w-28 max-md:h-7 max-md:w-12">
      <div className="block h-full w-full" aria-label={d.ariaLabel} role="img">
        <svg className="w-28 h-11 block overflow-hidden align-middle" data-component="image" fill={d.fill} viewBox={d.viewBox} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" id={d.id} x={d.x} y={d.y} version={d.version} enable-background={d.enablebackground}>{d.icon}</svg>
      </div>
    </div>
  );
}
