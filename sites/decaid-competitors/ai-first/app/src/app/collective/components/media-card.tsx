import type { ReactNode } from "react";
export type MediaCardData = {
  icon: ReactNode;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard({ d }: { d: MediaCardData }) {
  return (
    <div className="flex p-5 flex-col items-center gap-3 text-center">
      <div className="flex rounded-full justify-center items-center shrink-0 bg-color-002 h-14 w-14 max-md:h-12 max-md:w-12">
        <svg className="block overflow-hidden align-middle text-color-015 h-7 w-7 max-md:h-6 max-md:w-6" data-component="icon" aria-hidden="true" fill="none" height="24" viewBox="0 -960 960 960" width="24" xmlns="http://www.w3.org/2000/svg">{d.icon}</svg>
      </div>
      <h5 className="block text-color-002 text-xl font-bold leading-7" data-component="heading">
        {d.title}
      </h5>
      <p className="block text-color-007 [font-family:'Martina_Plantijn',_Georgia,_serif] text-base leading-[1.375rem] [font-feature-settings:'calt',_'liga',_'onum'] md:max-lg:text-[0.9375rem] md:max-lg:leading-[1.3125rem] 2xl:leading-5.5 2xl:[font-size:inherit]">
        {d.description}
      </p>
    </div>
  );
}
