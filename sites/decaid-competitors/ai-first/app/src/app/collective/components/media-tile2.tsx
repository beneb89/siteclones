import type { MediaTile2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTile2Data = {
  alt: string;
  imgSrc: string;
  srcSet: string;
  description: string;
  description2: string;
  description3: string;
  kind?: string;
};
/** A media tile. */
export default function MediaTile2({ d, styles }: { d: MediaTile2Data; styles: MediaTile2Styles }) {
  return (
    <div className={cn("block relative min-w-60 p-2.5 shrink-0 bg-primary max-md:min-w-55", styles.className)}>
      <div className={cn("h-full block absolute top-0 left-0 z-10 p-2.5 pointer-events-none", styles.className2)}>
        <div className="border border-solid border-surface-4 block pointer-events-none h-full w-full" />
      </div>
      <div className={cn("flex relative z-5 p-3 items-center gap-3", styles.className3)}>
        <div className="flex relative justify-center items-center shrink-0 h-14 w-14">
          <div className="w-14 h-full block absolute top-0 left-0 min-w-0 rounded-full bg-color-029" />
          <img className="block relative z-1 max-w-full rounded-full overflow-clip object-cover aspect-[auto_56/56] align-middle text-clr-2 h-14 w-14" alt={d.alt} height="56" sizes="56px" src={d.imgSrc} srcSet={d.srcSet} width="56" data-component={d.kind} />
        </div>
        <div className={cn("flex min-w-0 flex-col gap-0.5", styles.className4)}>
          <p className={cn("block text-color-002 [font-family:'Martina_Plantijn',_Georgia,_serif] text-base italic leading-[1.375rem] [font-feature-settings:'calt',_'liga',_'onum'] max-md:text-sm max-md:leading-[1.25rem] md:max-lg:text-[0.9375rem] md:max-lg:leading-[1.3125rem] 2xl:[font-size:inherit]", styles.className5)}>
            {d.description}
          </p>
          <p className={cn("block text-color-007 text-[0.8125rem] leading-[1.25rem] max-md:text-xs max-md:leading-[1.125rem] md:max-lg:leading-[1.1875rem] 2xl:text-sm 2xl:leading-[1.3125rem]", styles.className6)}>
            {d.description2}
          </p>
          <p className={cn("block text-color-007 text-[0.8125rem] font-semibold leading-[1.25rem] max-md:text-xs max-md:leading-[1.125rem] md:max-lg:leading-[1.1875rem] 2xl:text-sm 2xl:leading-[1.3125rem]", styles.className7)}>
            {d.description3}
          </p>
        </div>
      </div>
    </div>
  );
}
