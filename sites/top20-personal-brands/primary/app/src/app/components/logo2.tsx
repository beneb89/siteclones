import type { ReactNode } from "react";
export type Logo2Data = {
  icon: ReactNode;
};
/** A logo. */
export default function Logo2({ d }: { d: Logo2Data }) {
  return (
    <div className="block relative shrink-0">
      <div className="w-5 h-5 block relative overflow-hidden cursor-pointer">
        <div className="w-5 h-full block absolute top-0 shrink-0" aria-hidden="true">
          <div className="h-full block">
            <svg className="w-5 h-5 block overflow-hidden" data-component="icon" fill="currentColor">{d.icon}</svg>
          </div>
        </div>
      </div>
    </div>
  );
}
