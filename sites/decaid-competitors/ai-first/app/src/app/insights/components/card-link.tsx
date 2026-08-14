import type { CardLinkStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type CardLinkData = {
  imgSrc: string;
  title: string;
  description: string;
};
/** A linked card. */
export default function CardLink({ d, styles }: { d: CardLinkData; styles: CardLinkStyles }) {
  return (
    <a className={cn("flex py-4 items-center gap-4 cursor-pointer", styles.className)} href="/insights/12-neuerungen-von-openai">
      <div className={cn("block relative min-w-0 shrink-0 overflow-hidden h-[6.25rem] w-[6.25rem]", styles.className2)}>
        <div className="h-full block absolute top-0 inset-x-0 z-0 p-[1.66667%] overflow-hidden pointer-events-none max-md:w-25 max-md:p-[1.7px] max-md:right-auto">
          <div className="block relative pointer-events-none h-full w-full">
            <div className={cn("w-px block absolute top-0 left-[3.57143%] pointer-events-none h-full max-md:left-[3.5px]", styles.className3)} />
            <div className={cn("w-px block absolute top-0 left-[7.14286%] pointer-events-none h-full max-md:left-[0.4375rem]", styles.className4)} />
            <div className={cn("w-px block absolute top-0 left-[10.7143%] pointer-events-none h-full max-md:left-[0.65rem]", styles.className5)} />
            <div className={cn("w-px block absolute top-0 left-[14.2857%] pointer-events-none h-full max-md:left-3.5", styles.className6)} />
            <div className={cn("w-px block absolute top-0 left-[17.8571%] pointer-events-none h-full max-md:left-[17.3px]", styles.className7)} />
            <div className={cn("w-px block absolute top-0 left-[21.4286%] pointer-events-none h-full max-md:left-[20.7px]", styles.className8)} />
            <div className={cn("w-px block absolute top-0 left-1/4 pointer-events-none h-full max-md:left-6", styles.className9)} />
            <div className={cn("w-px block absolute top-0 left-[28.5714%] pointer-events-none h-full max-md:left-[1.725rem]", styles.className10)} />
            <div className={cn("w-px block absolute top-0 left-[32.1429%] pointer-events-none h-full max-md:left-[1.9375rem]", styles.className11)} />
            <div className={cn("w-px block absolute top-0 left-[35.7143%] pointer-events-none h-full max-md:left-[34.5px]", styles.className12)} />
            <div className={cn("w-px block absolute top-0 left-[39.2857%] pointer-events-none h-full max-md:left-[2.375rem]", styles.className13)} />
            <div className={cn("w-px block absolute top-0 left-[42.8571%] pointer-events-none h-full max-md:left-[2.5875rem]", styles.className14)} />
            <div className={cn("w-px block absolute top-0 left-[46.4286%] pointer-events-none h-full max-md:left-[44.9px]", styles.className15)} />
            <div className={cn("w-px block absolute top-0 left-1/2 pointer-events-none h-full max-md:left-[48.3px]", styles.className16)} />
            <div className={cn("w-px block absolute top-0 left-[53.5714%] pointer-events-none h-full max-md:left-[3.2375rem]", styles.className17)} />
            <div className={cn("w-px block absolute top-0 left-[57.1429%] pointer-events-none h-full max-md:left-[55.3px]", styles.className18)} />
            <div className={cn("w-px block absolute top-0 left-[60.7143%] pointer-events-none h-full max-md:left-[58.7px]", styles.className19)} />
            <div className={cn("w-px block absolute top-0 left-[64.2857%] pointer-events-none h-full max-md:left-[3.8875rem]", styles.className20)} />
            <div className={cn("w-px block absolute top-0 left-[67.8571%] pointer-events-none h-full max-md:left-[4.1rem]", styles.className21)} />
            <div className={cn("w-px block absolute top-0 left-[71.4286%] pointer-events-none h-full max-md:left-[4.3125rem]", styles.className22)} />
            <div className={cn("w-px block absolute top-0 left-3/4 pointer-events-none h-full max-md:left-[72.5px]", styles.className23)} />
            <div className={cn("w-px block absolute top-0 left-[78.5714%] pointer-events-none h-full max-md:left-[4.75rem]", styles.className24)} />
            <div className={cn("w-px block absolute top-0 left-[82.1429%] pointer-events-none h-full max-md:left-[4.9625rem]", styles.className25)} />
            <div className={cn("w-px block absolute top-0 left-[85.7143%] pointer-events-none h-full max-md:left-[82.9px]", styles.className26)} />
            <div className={cn("w-px block absolute top-0 left-[89.2857%] pointer-events-none h-full max-md:left-[86.3px]", styles.className27)} />
            <div className={cn("w-px block absolute top-0 left-[92.8571%] pointer-events-none h-full max-md:left-[5.6125rem]", styles.className28)} />
            <div className={cn("w-px block absolute top-0 left-[96.4286%] pointer-events-none h-full max-md:left-[5.825rem]", styles.className29)} />
          </div>
        </div>
        <img className="w-full block relative z-1 max-w-full overflow-clip object-contain align-middle h-full" alt="" src={d.imgSrc} />
        <div className="h-full block absolute top-0 inset-x-0 z-18 p-[1.66667%] pointer-events-none max-md:w-25 max-md:p-[1.7px] max-md:right-auto">
          <div className={cn("border border-solid block pointer-events-none h-full w-full", styles.className30)} />
        </div>
      </div>
      <div className="flex min-w-0 flex-col flex-1 gap-1 max-md:w-[12.1875rem]">
        <h3 className={cn("block min-w-0 font-bold text-balance", styles.className31)} lang="de">
          {d.title}
        </h3>
        <p className={cn("block min-w-0 text-muted-foreground [font-family:'Martina_Plantijn',_Georgia,_serif] text-balance [font-feature-settings:'calt',_'liga',_'onum']", styles.className32)} lang="de">
          {d.description}
        </p>
      </div>
    </a>
  );
}
