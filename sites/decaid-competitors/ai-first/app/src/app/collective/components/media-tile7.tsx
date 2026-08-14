import type { ReactNode } from "react";
export type MediaTile7Data = {
  icon: ReactNode;
  description: string;
};
/** A media tile. */
export default function MediaTile7({ d }: { d: MediaTile7Data }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex rounded-full justify-center items-center shrink-0 bg-color-015 h-14 w-14 max-md:h-8 max-md:w-8">
        <svg className="block overflow-hidden align-middle text-color-006 h-7 w-7 max-md:h-4 max-md:w-4" data-component="icon" aria-hidden="true" fill="none" height="24" viewBox="0 -960 960 960" width="24" xmlns="http://www.w3.org/2000/svg">{d.icon}</svg>
      </div>
      <p className="block text-center text-balance">
        <span className="inline relative px-0.5 text-color-035 [font-family:'Martina_Plantijn',_Georgia,_serif] text-lg leading-[1.5625rem] [font-feature-settings:'calt',_'liga',_'onum'] [background-size:100%_24.7188px] [background-position:0px_78%] bg-no-repeat md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.4375rem] md:max-lg:[background-size:100%_23.4219px] 2xl:[background-size:100%_25.1875px]" style={{ backgroundImage: "linear-gradient(var(--color-015), var(--color-015))" }}>
          {d.description}
        </span>
      </p>
    </div>
  );
}
