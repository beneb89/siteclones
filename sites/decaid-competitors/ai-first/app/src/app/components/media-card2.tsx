import type { MediaCard2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaCard2Data = {
  label: string;
  label2: string;
  imgSrc: string;
  srcSet: string;
  label3: string;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard2({ d, styles }: { d: MediaCard2Data; styles: MediaCard2Styles }) {
  return (
    <div className={cn("border-l border-solid border-l-border block px-4 max-md:shrink-0 max-md:border-l-[0] max-md:border-initial max-md:border-l-[initial] max-md:px-0", styles.className)}>
      <a className={cn("h-full flex relative flex-col overflow-hidden cursor-pointer aspect-[3/4]", styles.className2)} style={{ maskImage: "radial-gradient(4px at 4px 0px, var(--clr-2) 97%, var(--background)), radial-gradient(4px at 4px 100%, var(--clr-2) 97%, var(--background)), radial-gradient(4px at 0px 4px, var(--clr-2) 97%, var(--background)), radial-gradient(4px at 100% 4px, var(--clr-2) 97%, var(--background))" }} data-component="link" href="/hub/ab-testing-ideen">
        <div className={cn("h-[22.15rem] block absolute top-1.5 inset-x-[0.2875rem] z-0 min-w-0 bg-color-001 pointer-events-none md:max-lg:h-[189.5px] md:max-lg:top-[3.3px] md:max-lg:inset-x-[0.15rem]", styles.className3)} />
        <div className={cn("h-full flex absolute top-0 inset-x-0 z-17 min-w-0 p-[0.2875rem] items-start [filter:drop-shadow(var(--clr-17)_0px_1px_3px)] pointer-events-none md:max-lg:p-[0.15rem]", styles.className4)}>
          <div className={cn("flex py-[0.3rem] px-2.5 justify-center items-center gap-[0.3rem] text-xs leading-4.5 pointer-events-none", styles.className5)}>
            <span className="block shrink-0 text-color-002 [font-family:'Material_Symbols_Sharp'] text-sm leading-[0.875rem] whitespace-nowrap text-nowrap [font-feature-settings:'liga'] pointer-events-none">
              {d.label}
            </span>
            <span className="block text-color-002 font-semibold leading-[0.875rem] whitespace-nowrap text-nowrap pointer-events-none">
              {d.label2}
            </span>
          </div>
        </div>
        <div className={cn("h-full block absolute top-0 inset-x-0 z-0 min-w-0 p-[0.2875rem] overflow-hidden pointer-events-none md:max-lg:p-[0.15rem]", styles.className6)}>
          <div className="block relative pointer-events-none h-full w-full">
            <div className={cn("w-px block absolute top-0 left-[9.5px] bg-surface pointer-events-none h-full md:max-lg:left-[0.3125rem]", styles.className7)} />
            <div className={cn("w-px block absolute top-0 left-[1.1875rem] bg-surface pointer-events-none h-full md:max-lg:left-2.5", styles.className8)} />
            <div className={cn("w-px block absolute top-0 left-[28.5px] bg-surface pointer-events-none h-full md:max-lg:left-[0.95rem]", styles.className9)} />
            <div className={cn("w-px block absolute top-0 left-[2.375rem] bg-surface pointer-events-none h-full md:max-lg:left-[20.3px]", styles.className10)} />
            <div className={cn("w-px block absolute top-0 left-[47.5px] bg-surface pointer-events-none h-full md:max-lg:left-[1.5875rem]", styles.className11)} />
            <div className={cn("w-px block absolute top-0 left-[3.5625rem] bg-surface pointer-events-none h-full md:max-lg:left-[30.5px]", styles.className12)} />
            <div className={cn("w-px block absolute top-0 left-[66.5px] bg-surface pointer-events-none h-full md:max-lg:left-[35.5px]", styles.className13)} />
            <div className="w-px block absolute top-0 left-[4.75rem] bg-surface pointer-events-none h-full md:max-lg:left-[2.5375rem]" />
            <div className="w-px block absolute top-0 left-[5.3375rem] bg-surface pointer-events-none h-full md:max-lg:left-[45.7px]" />
            <div className="w-px block absolute top-0 left-[5.9375rem] bg-surface pointer-events-none h-full md:max-lg:left-[3.175rem]" />
            <div className="w-px block absolute top-0 left-[6.525rem] bg-surface pointer-events-none h-full md:max-lg:left-14" />
            <div className="w-px block absolute top-0 left-[7.125rem] bg-surface pointer-events-none h-full md:max-lg:left-[3.8125rem]" />
            <div className="w-px block absolute top-0 left-[7.7125rem] bg-surface pointer-events-none h-full md:max-lg:left-[4.125rem]" />
            <div className="w-px block absolute top-0 left-[8.3125rem] bg-surface pointer-events-none h-full md:max-lg:left-[4.4375rem]" />
            <div className="w-px block absolute top-0 left-[8.9rem] bg-surface pointer-events-none h-full md:max-lg:left-[76.1px]" />
            <div className="w-px block absolute top-0 left-[9.5rem] bg-surface pointer-events-none h-full md:max-lg:left-[5.075rem]" />
            <div className="w-px block absolute top-0 left-[10.0875rem] bg-surface pointer-events-none h-full md:max-lg:left-[86.3px]" />
            <div className="w-px block absolute top-0 left-[170.9px] bg-surface pointer-events-none h-full md:max-lg:left-[5.7125rem]" />
            <div className="w-px block absolute top-0 left-[11.275rem] bg-surface pointer-events-none h-full md:max-lg:left-[6.025rem]" />
            <div className="w-px block absolute top-0 left-[189.9px] bg-surface pointer-events-none h-full md:max-lg:left-[101.5px]" />
            <div className="w-px block absolute top-0 left-[12.4625rem] bg-surface pointer-events-none h-full md:max-lg:left-[6.6625rem]" />
            <div className="w-px block absolute top-0 left-[208.9px] bg-surface pointer-events-none h-full md:max-lg:left-[111.7px]" />
            <div className="w-px block absolute top-0 left-[13.65rem] bg-surface pointer-events-none h-full md:max-lg:left-[116.7px]" />
            <div className="w-px block absolute top-0 left-[227.9px] bg-surface pointer-events-none h-full md:max-lg:left-[7.6125rem]" />
            <div className="w-px block absolute top-0 left-[14.8375rem] bg-surface pointer-events-none h-full md:max-lg:left-[126.9px]" />
            <div className="w-px block absolute top-0 left-[15.425rem] bg-surface pointer-events-none h-full md:max-lg:left-[8.25rem]" />
            <div className="w-px block absolute top-0 left-[256.3px] bg-surface pointer-events-none h-full md:max-lg:left-[8.5625rem]" />
          </div>
        </div>
        <div className="flex relative z-19 justify-center items-center flex-1">
          <div className="h-[161.3px] block relative [translate:0px_5%] aspect-square max-md:h-[9.9rem] md:max-lg:h-[5.3875rem]">
            <div className={cn("h-[9.075rem] block absolute top-2 inset-x-2 md:max-lg:h-[4.85rem] md:max-lg:top-[4.3px] md:max-lg:inset-x-[4.3px]", styles.className14)}>
              <img className="w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-contain align-middle text-clr-2" data-component="image" alt="" sizes="200px" src={d.imgSrc} srcSet={d.srcSet} />
            </div>
            <span className={cn("block absolute [font-family:'Material_Symbols_Sharp'] whitespace-nowrap text-nowrap [font-feature-settings:'liga']", styles.className15)}>
              {d.label3}
            </span>
          </div>
        </div>
        <div className={cn("h-[22.15rem] block absolute top-1.5 inset-x-[0.2875rem] z-15 min-w-0 md:max-lg:h-[189.5px] md:max-lg:top-[3.3px] md:max-lg:inset-x-[0.15rem]", styles.className16)} style={{ backgroundImage: "linear-gradient(to top, var(--color-001) 0%, var(--color-001) 55%, var(--clr-2) 100%)" }} />
        <div className={cn("h-[13.75rem] grid relative z-25 p-3.5 gap-3 overflow-hidden max-md:h-54 max-md:p-[13.5px] md:max-lg:h-[7.35rem] md:max-lg:p-[7.3px]", styles.className17)}>
          <div className="flex items-end">
            <h3 className={cn("block text-color-002 font-bold text-balance", styles.className18)} data-component="heading" lang="de">
              {d.title}
            </h3>
          </div>
          <div className={cn("block overflow-hidden", styles.className19)}>
            <p className={cn("block text-color-007 [font-family:'Martina_Plantijn',_Georgia,_serif] text-pretty [font-feature-settings:'calt',_'liga',_'onum']", styles.className20)} lang="de">
              {d.description}
            </p>
          </div>
        </div>
        <div className={cn("h-full block absolute top-0 inset-x-0 z-18 min-w-0 p-[0.2875rem] pointer-events-none md:max-lg:p-[0.15rem]", styles.className21)}>
          <div className="border border-solid border-border block pointer-events-none h-full w-full" />
        </div>
      </a>
    </div>
  );
}
