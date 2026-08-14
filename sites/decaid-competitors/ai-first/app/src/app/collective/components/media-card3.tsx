import type { ReactNode } from "react";
import type { MediaCard3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCard3Data = {
  icon: ReactNode;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard3({ d, styles }: { d: MediaCard3Data; styles: MediaCard3Styles }) {
  return (
    <div className={cn("flex px-4 flex-col items-start text-left", styles.className)}>
      <svg className="block mb-3 shrink-0 overflow-hidden align-middle text-color-002 h-6 w-6 max-md:h-5 max-md:w-5" data-component="icon" aria-hidden="true" fill="none" height="24" viewBox="0 -960 960 960" width="24" xmlns="http://www.w3.org/2000/svg">{d.icon}</svg>
      <div className="block">
        <h4 className="block text-color-002 text-xl font-bold leading-[1.4375rem] text-balance" data-component="heading">
          <span className="inline relative px-0.5 [background-size:100%_23px] [background-position:0px_78%] bg-no-repeat md:max-lg:[background-size:100%_22.9375px]" style={{ backgroundImage: "linear-gradient(var(--color-015), var(--color-015))" }}>
            {d.title}
          </span>
        </h4>
        <p className="block mt-1 text-color-007 [font-family:'Martina_Plantijn',_Georgia,_serif] text-lg leading-[1.5625rem] text-balance [font-feature-settings:'calt',_'liga',_'onum'] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.4375rem]">
          <span className="inline relative px-0.5 [background-size:100%_24.7188px] [background-position:0px_78%] bg-no-repeat md:max-lg:[background-size:100%_23.4219px] 2xl:[background-size:100%_25.1875px]" style={{ backgroundImage: "linear-gradient(var(--color-015), var(--color-015))" }}>
            {d.description}
          </span>
        </p>
      </div>
    </div>
  );
}
