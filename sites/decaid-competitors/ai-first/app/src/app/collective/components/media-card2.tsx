import type { ReactNode } from "react";
export type MediaCard2Data = {
  icon: ReactNode;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard2({ d }: { d: MediaCard2Data }) {
  return (
    <div className="flex flex-col items-start gap-3 text-left">
      <div className="flex rounded-full justify-center items-center shrink-0 bg-primary h-14 w-14 max-md:h-12 max-md:w-12">
        <svg className="block overflow-hidden align-middle text-color-002 h-7 w-7 max-md:h-6 max-md:w-6" data-component="icon" aria-hidden="true" fill="none" height="24" viewBox="0 -960 960 960" width="24" xmlns="http://www.w3.org/2000/svg">{d.icon}</svg>
      </div>
      <h4 className="block text-color-002 text-xl font-bold leading-[1.4375rem] max-md:text-lg max-md:leading-[1.3125rem]" data-component="heading">
        <span className="inline relative px-0.5 [background-size:100%_23px] [background-position:0px_78%] bg-no-repeat max-md:[background-size:100%_21.1719px] md:max-lg:[background-size:100%_22.9375px]" style={{ backgroundImage: "linear-gradient(var(--color-015), var(--color-015))" }}>
          {d.title}
        </span>
      </h4>
      <p className="block text-color-007 [font-family:'Martina_Plantijn',_Georgia,_serif] text-lg leading-[1.5625rem] [font-feature-settings:'calt',_'liga',_'onum'] max-md:text-base max-md:leading-[1.375rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.4375rem]">
        <span className="inline relative px-0.5 [background-size:100%_24.7188px] [background-position:0px_78%] bg-no-repeat max-md:[background-size:100%_22.4375px] md:max-lg:[background-size:100%_23.4219px] 2xl:[background-size:100%_25.1875px]" style={{ backgroundImage: "linear-gradient(var(--color-015), var(--color-015))" }}>
          {d.description}
        </span>
      </p>
    </div>
  );
}
