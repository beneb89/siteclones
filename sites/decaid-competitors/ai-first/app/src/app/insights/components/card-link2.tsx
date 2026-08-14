import type { CardLink2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type CardLink2Data = {
  imgSrc: string;
  title: string;
  description: string;
};
/** A linked card. */
export default function CardLink2({ d, styles }: { d: CardLink2Data; styles: CardLink2Styles }) {
  return (
    <a className={cn("flex py-4 items-center gap-4 cursor-pointer", styles.className)} data-component="link" href="/insights/12-neuerungen-von-openai">
      <div className={cn("block relative shrink-0 overflow-hidden h-[6.25rem] w-[6.25rem]", styles.className2)}>
        <div className="w-25 h-full block absolute top-0 left-0 z-0 p-[1.7px] overflow-hidden pointer-events-none">
          <div className="block relative pointer-events-none h-full w-full">
            <div className={cn("w-px block absolute top-0 left-[3.5px] pointer-events-none h-full", styles.className3)} />
            <div className={cn("w-px block absolute top-0 left-[0.4375rem] pointer-events-none h-full", styles.className4)} />
            <div className={cn("w-px block absolute top-0 left-[0.65rem] pointer-events-none h-full", styles.className5)} />
            <div className={cn("w-px block absolute top-0 left-3.5 pointer-events-none h-full", styles.className6)} />
            <div className={cn("w-px block absolute top-0 left-[17.3px] pointer-events-none h-full", styles.className7)} />
            <div className={cn("w-px block absolute top-0 left-[20.7px] pointer-events-none h-full", styles.className8)} />
            <div className={cn("w-px block absolute top-0 left-6 pointer-events-none h-full", styles.className9)} />
            <div className={cn("w-px block absolute top-0 left-[1.725rem] pointer-events-none h-full", styles.className10)} />
            <div className={cn("w-px block absolute top-0 left-[1.9375rem] pointer-events-none h-full", styles.className11)} />
            <div className={cn("w-px block absolute top-0 left-[34.5px] pointer-events-none h-full", styles.className12)} />
            <div className={cn("w-px block absolute top-0 left-[2.375rem] pointer-events-none h-full", styles.className13)} />
            <div className={cn("w-px block absolute top-0 left-[2.5875rem] pointer-events-none h-full", styles.className14)} />
            <div className={cn("w-px block absolute top-0 left-[44.9px] pointer-events-none h-full", styles.className15)} />
            <div className={cn("w-px block absolute top-0 left-[48.3px] pointer-events-none h-full", styles.className16)} />
            <div className={cn("w-px block absolute top-0 left-[3.2375rem] pointer-events-none h-full", styles.className17)} />
            <div className={cn("w-px block absolute top-0 left-[55.3px] pointer-events-none h-full", styles.className18)} />
            <div className={cn("w-px block absolute top-0 left-[58.7px] pointer-events-none h-full", styles.className19)} />
            <div className={cn("w-px block absolute top-0 left-[62.1px] pointer-events-none h-full", styles.className20)} />
            <div className={cn("w-px block absolute top-0 left-[4.1rem] pointer-events-none h-full", styles.className21)} />
            <div className={cn("w-px block absolute top-0 left-[4.3125rem] pointer-events-none h-full", styles.className22)} />
            <div className={cn("w-px block absolute top-0 left-[72.5px] pointer-events-none h-full", styles.className23)} />
            <div className={cn("w-px block absolute top-0 left-[4.75rem] pointer-events-none h-full", styles.className24)} />
            <div className={cn("w-px block absolute top-0 left-[4.9625rem] pointer-events-none h-full", styles.className25)} />
            <div className={cn("w-px block absolute top-0 left-[82.9px] pointer-events-none h-full", styles.className26)} />
            <div className={cn("w-px block absolute top-0 left-[86.3px] pointer-events-none h-full", styles.className27)} />
            <div className={cn("w-px block absolute top-0 left-[5.6125rem] pointer-events-none h-full", styles.className28)} />
            <div className={cn("w-px block absolute top-0 left-[5.825rem] pointer-events-none h-full", styles.className29)} />
          </div>
        </div>
        <img className="w-full block relative z-1 max-w-full overflow-clip object-contain align-middle h-full" data-component="image" alt="" src={d.imgSrc} />
        <div className="w-25 h-full block absolute top-0 left-0 z-18 p-[1.7px] pointer-events-none">
          <div className={cn("border border-solid block pointer-events-none h-full w-full", styles.className30)} />
        </div>
      </div>
      <div className="w-271 flex min-w-0 flex-col flex-1 gap-1 md:max-lg:w-143">
        <h3 className="block text-[1.1875rem] font-bold leading-[1.375rem] tracking-[-0.38px] text-balance" data-component="heading" lang="de">
          {d.title}
        </h3>
        <p className="block text-muted-foreground [font-family:'Martina_Plantijn',_Georgia,_serif] text-[1.0625rem] leading-[1.25rem] text-balance [font-feature-settings:'calt',_'liga',_'onum']" lang="de">
          {d.description}
        </p>
      </div>
    </a>
  );
}
