import type { ReactNode } from "react";
export type Logo2Data = {
  ariaLabel: string;
  viewBox: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo2({ d }: { d: Logo2Data }) {
  return (
    <div className="block min-w-0 shrink-0 h-[2.1875rem] w-[6.25rem]">
      <div className="block h-full w-full" aria-label={d.ariaLabel} role="img">
        <svg className="w-full h-full block overflow-hidden align-middle max-md:w-25 max-md:h-[2.1875rem]" viewBox={d.viewBox} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" fill="currentColor">{d.icon}</svg>
      </div>
    </div>
  );
}
