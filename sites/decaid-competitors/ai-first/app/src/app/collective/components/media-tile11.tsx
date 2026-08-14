import type { MediaTile11Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTile11Data = {
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
export default function MediaTile11({ d, styles }: { d: MediaTile11Data; styles: MediaTile11Styles }) {
  return (
    <div className="flex relative py-4 px-5 items-center shrink-0 gap-4 bg-color-045" style={{ maskImage: "radial-gradient(2.5px at 8px 0px, var(--clr-2) 98%, var(--background)), radial-gradient(2.5px at 8px 100%, var(--clr-2) 98%, var(--background)), radial-gradient(2.5px at 0px 8px, var(--clr-2) 98%, var(--background)), radial-gradient(2.5px at 100% 8px, var(--clr-2) 98%, var(--background))" }}>
      <div className={cn("h-[121.5px] block absolute top-0 left-0 z-10 min-w-0 m-1.5 pointer-events-none md:max-lg:h-[7.3625rem]", styles.className)}>
        <div className="border border-solid border-primary block pointer-events-none h-full w-full" />
      </div>
      <div className="block rounded-full shrink-0 overflow-hidden bg-primary h-20 w-20">
        <img className="w-full block max-w-full overflow-clip object-cover aspect-[auto_80/80] align-middle text-clr-2 h-full" data-component={d.kind} alt={d.alt} height="80" sizes="80px" src={d.imgSrc} srcSet={d.srcSet} width="80" />
      </div>
      <div className={cn("block whitespace-nowrap text-nowrap", styles.className2)}>
        <p className="block text-color-002 [font-family:'Martina_Plantijn',_Georgia,_serif] text-xl italic leading-[1.5625rem] [font-feature-settings:'calt',_'liga',_'onum']">
          {d.description}
        </p>
        <p className="block text-color-007 text-base leading-[1.25rem] md:max-lg:text-[0.9375rem] md:max-lg:leading-[1.1875rem] 2xl:leading-5 2xl:[font-size:inherit]">
          {d.description2}
        </p>
        <p className="block text-color-007 text-base font-semibold leading-[1.25rem] md:max-lg:text-[0.9375rem] md:max-lg:leading-[1.1875rem] 2xl:leading-5 2xl:[font-size:inherit]">
          {d.description3}
        </p>
        <div className="block my-2 bg-surface-14 h-px" />
        <p className="block text-color-007 [font-family:'Martina_Plantijn',_Georgia,_serif] text-base italic leading-[1.25rem] [font-feature-settings:'calt',_'liga',_'onum'] md:max-lg:text-[0.9375rem] md:max-lg:leading-[1.1875rem] 2xl:leading-5 2xl:[font-size:inherit]">
          {d.description4}
        </p>
      </div>
    </div>
  );
}
