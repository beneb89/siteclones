import type { ReactNode } from "react";
export type Logo2Data = {
  ariaLabel: string;
  viewBox: string;
  icon: ReactNode;
  id?: string;
  version?: string;
};
/** A logo. */
export default function Logo2({ d }: { d: Logo2Data }) {
  return (
    <div className="flex opacity-70 justify-center items-center text-muted-foreground mx-auto h-11 w-28 max-md:h-7 max-md:w-12">
      <div className="block h-full w-full" aria-label={d.ariaLabel} role="img">
        <svg className="w-28 h-11 block overflow-hidden align-middle" data-component="image" viewBox={d.viewBox} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" fill="currentColor" id={d.id} version={d.version}>{d.icon}</svg>
      </div>
    </div>
  );
}
