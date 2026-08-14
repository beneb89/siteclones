import type { MediaTile10Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTile10Data = {
  kind?: string;
  alt: string;
  imgSrc: string;
  srcSet: string;
  description: string;
  description2: string;
  description3: string;
  description4: string;
};
/** A media tile. */
export default function MediaTile10({ d, styles }: { d: MediaTile10Data; styles: MediaTile10Styles }) {
  return (
    <div className="flex relative max-w-72 py-4 px-5 items-center shrink-0 gap-4 bg-color-045 max-md:max-w-[262.5px] max-md:p-3 max-md:gap-3" style={{ maskImage: "radial-gradient(2.5px at 8px 0px, var(--clr-2) 98%, var(--background)), radial-gradient(2.5px at 8px 100%, var(--clr-2) 98%, var(--background)), radial-gradient(2.5px at 0px 8px, var(--clr-2) 98%, var(--background)), radial-gradient(2.5px at 100% 8px, var(--clr-2) 98%, var(--background))" }}>
      <div className={cn("h-[8.8375rem] block absolute top-0 left-0 z-10 min-w-0 m-1.5 pointer-events-none md:max-lg:h-[8.525rem]", styles.className)}>
        <div className="border border-solid border-primary block pointer-events-none h-full w-full" />
      </div>
      <div className="block rounded-full shrink-0 overflow-hidden bg-primary h-20 w-20 max-md:h-14 max-md:w-14">
        <img className="w-full block max-w-full overflow-clip object-cover aspect-[auto_80/80] align-middle text-clr-2 h-full" data-component={d.kind} alt={d.alt} height="80" sizes="80px" src={d.imgSrc} srcSet={d.srcSet} width="80" />
      </div>
      <div className={cn("block min-w-0 flex-1", styles.className2)}>
        <p className="block overflow-hidden text-color-002 [font-family:'Martina_Plantijn',_Georgia,_serif] text-xl italic leading-[1.5625rem] whitespace-nowrap text-nowrap [font-feature-settings:'calt',_'liga',_'onum'] max-md:text-xs max-md:leading-[0.9375rem]">
          {d.description}
        </p>
        <p className="block overflow-hidden text-color-007 text-base leading-[1.25rem] whitespace-nowrap text-nowrap max-md:text-[0.6875rem] max-md:leading-[0.875rem] md:max-lg:text-[0.9375rem] md:max-lg:leading-[1.1875rem] 2xl:leading-5 2xl:[font-size:inherit]">
          {d.description2}
        </p>
        <p className="block overflow-hidden text-color-007 text-base font-semibold leading-[1.25rem] whitespace-nowrap text-nowrap max-md:text-[0.6875rem] max-md:leading-[0.875rem] md:max-lg:text-[0.9375rem] md:max-lg:leading-[1.1875rem] 2xl:leading-5 2xl:[font-size:inherit]">
          {d.description3}
        </p>
        <div className="block my-2 bg-surface-14 h-px max-md:my-1.5" />
        <p className={cn("overflow-hidden text-color-007 [font-family:'Martina_Plantijn',_Georgia,_serif] text-base italic leading-[1.25rem] [font-feature-settings:'calt',_'liga',_'onum'] line-clamp-2 max-md:text-sm max-md:leading-[1.125rem] md:max-lg:text-[0.9375rem] md:max-lg:leading-[1.1875rem] 2xl:leading-5 2xl:[font-size:inherit]", styles.className3)}>
          {d.description4}
        </p>
      </div>
    </div>
  );
}
