import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type MediaCardData = {
  alt: string;
  imgSrc: string;
  alt2: string;
  imgSrc2: string;
  style: string;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <div className="w-77 border-l border-solid border-l-color-008 block px-4 max-md:w-67.5 max-lg:shrink-0 max-lg:border-l-[0] max-lg:border-initial max-lg:border-l-[initial] max-lg:px-0 md:max-lg:w-[34.5625rem]">
      <a className={cn("flex relative flex-col overflow-hidden cursor-pointer aspect-[3/5] max-lg:aspect-[3/4]", styles.className)} data-component="link" href="/insights/12-neuerungen-von-openai">
        <div className={cn("h-full block absolute top-0 inset-x-0 z-0 min-w-0 p-[0.2875rem] overflow-hidden pointer-events-none md:max-lg:p-[0.575rem]", styles.className2)}>
          <div className="block relative pointer-events-none h-full w-full">
            <div className={cn("w-[0.5px] block absolute top-0 left-[9.5px] pointer-events-none h-full md:max-lg:left-[1.1875rem]", styles.className3)} />
            <div className={cn("w-[0.5px] block absolute top-0 left-[1.1875rem] pointer-events-none h-full md:max-lg:left-[2.3875rem]", styles.className4)} />
            <div className={cn("w-[0.5px] block absolute top-0 left-[28.5px] pointer-events-none h-full md:max-lg:left-[57.3px]", styles.className5)} />
            <div className={cn("w-[0.5px] block absolute top-0 left-[2.375rem] pointer-events-none h-full md:max-lg:left-[4.775rem]", styles.className6)} />
            <div className={cn("w-[0.5px] block absolute top-0 left-[47.5px] pointer-events-none h-full md:max-lg:left-[95.5px]", styles.className7)} />
            <div className={cn("w-[0.5px] block absolute top-0 left-[3.5625rem] pointer-events-none h-full md:max-lg:left-[114.5px]", styles.className8)} />
            <div className={cn("w-[0.5px] block absolute top-0 left-[66.5px] pointer-events-none h-full md:max-lg:left-[8.35rem]", styles.className9)} />
            <div className={cn("w-[0.5px] block absolute top-0 left-[4.75rem] pointer-events-none h-full md:max-lg:left-[152.7px]", styles.className10)} />
            <div className={cn("w-[0.5px] block absolute top-0 left-[5.3375rem] pointer-events-none h-full md:max-lg:left-[10.7375rem]", styles.className11)} />
            <div className={cn("w-[0.5px] block absolute top-0 left-[5.9375rem] pointer-events-none h-full md:max-lg:left-[11.9375rem]", styles.className12)} />
            <div className={cn("w-[0.5px] block absolute top-0 left-[6.525rem] pointer-events-none h-full md:max-lg:left-52.5", styles.className13)} />
            <div className={cn("w-[0.5px] block absolute top-0 left-[7.125rem] pointer-events-none h-full md:max-lg:left-[14.3125rem]", styles.className14)} />
            <div className={cn("w-[0.5px] block absolute top-0 left-[7.7125rem] pointer-events-none h-full md:max-lg:left-[15.5125rem]", styles.className15)} />
            <div className={cn("w-[0.5px] block absolute top-0 left-[8.3125rem] pointer-events-none h-full md:max-lg:left-[267.3px]", styles.className16)} />
            <div className={cn("w-[0.5px] block absolute top-0 left-[8.9rem] pointer-events-none h-full md:max-lg:left-[17.9rem]", styles.className17)} />
            <div className={cn("w-[0.5px] block absolute top-0 left-[9.5rem] pointer-events-none h-full md:max-lg:left-[305.5px]", styles.className18)} />
            <div className={cn("w-[0.5px] block absolute top-0 left-[10.0875rem] pointer-events-none h-full md:max-lg:left-[324.5px]", styles.className19)} />
            <div className={cn("w-[0.5px] block absolute top-0 left-[170.9px] pointer-events-none h-full md:max-lg:left-[21.475rem]", styles.className20)} />
            <div className={cn("w-[0.5px] block absolute top-0 left-[11.275rem] pointer-events-none h-full md:max-lg:left-[362.7px]", styles.className21)} />
            <div className={cn("w-[0.5px] block absolute top-0 left-[189.9px] pointer-events-none h-full md:max-lg:left-[23.8625rem]", styles.className22)} />
            <div className={cn("w-[0.5px] block absolute top-0 left-[12.4625rem] pointer-events-none h-full md:max-lg:left-[25.0625rem]", styles.className23)} />
            <div className={cn("w-[0.5px] block absolute top-0 left-[208.9px] pointer-events-none h-full md:max-lg:left-105", styles.className24)} />
            <div className={cn("w-[0.5px] block absolute top-0 left-[13.65rem] pointer-events-none h-full md:max-lg:left-[27.4375rem]", styles.className25)} />
            <div className={cn("w-[0.5px] block absolute top-0 left-[227.9px] pointer-events-none h-full md:max-lg:left-[28.6375rem]", styles.className26)} />
            <div className={cn("w-[0.5px] block absolute top-0 left-[14.8375rem] pointer-events-none h-full md:max-lg:left-[477.3px]", styles.className27)} />
            <div className={cn("w-[0.5px] block absolute top-0 left-[15.425rem] pointer-events-none h-full md:max-lg:left-[31.025rem]", styles.className28)} />
            <div className={cn("w-[0.5px] block absolute top-0 left-[256.3px] pointer-events-none h-full md:max-lg:left-[515.5px]", styles.className29)} />
          </div>
        </div>
        <div className={cn("hidden relative z-19 min-w-0 items-center flex-1 overflow-hidden max-lg:flex", styles.className30)}>
          <img className={cn("block max-w-full overflow-clip object-contain align-middle max-h-full", styles.className31)} alt={d.alt} src={d.imgSrc} />
        </div>
        <div className={cn("flex relative z-19 items-center flex-1 overflow-hidden max-lg:hidden", styles.className32)}>
          <img className={cn("w-full block max-w-full overflow-clip object-contain align-middle max-h-full", styles.className33)} data-component="image" alt={d.alt2} src={d.imgSrc2} />
        </div>
        <div className={cn("h-[343.7px] block absolute bottom-0 inset-x-0 z-15 min-w-0 md:max-lg:h-[34.5625rem]", styles.className34)} style={d.style} />
        <div className="flex relative z-25 pt-[0.575rem] pb-3.5 px-3.5 flex-col gap-1.5 max-md:pt-[0.5625rem] max-md:pb-[13.5px] max-md:px-[13.5px] md:max-lg:pt-[1.15rem] md:max-lg:pb-[1.725rem] md:max-lg:px-[1.725rem]">
          <h3 className={cn("block text-[2.4375rem] font-semibold leading-[2.6875rem] tracking-[-0.78px] text-pretty", styles.className35)} data-component="heading" lang="de">
            {d.title}
          </h3>
          <p className={cn("block [font-family:'Martina_Plantijn',_Georgia,_serif] text-pretty [font-feature-settings:'calt',_'liga',_'onum']", styles.className36)} lang="de">
            {d.description}
          </p>
        </div>
        <div className={cn("h-full block absolute top-0 inset-x-0 z-18 min-w-0 p-[0.2875rem] pointer-events-none md:max-lg:p-[0.575rem]", styles.className37)}>
          <div className={cn("border border-solid block pointer-events-none h-full w-full", styles.className38)} />
        </div>
      </a>
    </div>
  );
}
