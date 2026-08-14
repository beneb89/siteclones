import type { ReactNode } from "react";
export type MediaTile3Data = {
  icon: ReactNode;
  description: string;
  description2: string;
};
/** A media tile. */
export default function MediaTile3({ d }: { d: MediaTile3Data }) {
  return (
    <div className="flex p-3 flex-col flex-1 gap-1.5 bg-color-001 max-md:p-2.5" style={{ maskImage: "radial-gradient(3px at 3px 0px, var(--clr-2) 97%, var(--background)), radial-gradient(3px at 3px 100%, var(--clr-2) 97%, var(--background)), radial-gradient(3px at 0px 3px, var(--clr-2) 97%, var(--background)), radial-gradient(3px at 100% 3px, var(--clr-2) 97%, var(--background))" }}>
      <div className="flex items-center gap-1.5">
        <span className="block shrink-0 text-color-002">
          <svg className="block overflow-hidden align-middle h-4 w-4" data-component="icon" aria-hidden="true" fill="none" height="24" viewBox="0 -960 960 960" width="24" xmlns="http://www.w3.org/2000/svg">{d.icon}</svg>
        </span>
        <p className="block text-color-006 text-xs font-bold leading-4 max-md:text-[0.625rem] max-md:leading-[0.9375rem]">
          {d.description}
        </p>
      </div>
      <p className="block text-color-041 [font-family:'Martina_Plantijn',_Georgia,_serif] text-[0.8125rem] leading-[1.125rem] text-balance [font-feature-settings:'calt',_'liga',_'onum'] max-md:text-[0.6875rem] max-md:leading-[0.9375rem]">
        {d.description2}
      </p>
    </div>
  );
}
