import type { ReactNode } from "react";
import type { MediaCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaCardData = {
  href: string;
  description: string;
  icon: ReactNode;
  title: string;
  description2: string;
  description3: string;
  description4: string;
  description5: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <div className="block max-w-[14.6875rem] w-full">
      <a className="block cursor-pointer w-full" data-component="link" href={d.href}>
        <div className="block relative aspect-[4/5] [filter:drop-shadow(var(--clr-0)_0px_2px_6px)] w-full max-md:aspect-[3/5]">
          <div className={cn("h-full block absolute top-0 inset-x-0", styles.className)} style={{ maskImage: "radial-gradient(4px at 4px 0px, var(--clr-2) 97%, var(--background)), radial-gradient(4px at 4px 100%, var(--clr-2) 97%, var(--background)), radial-gradient(4px at 0px 4px, var(--clr-2) 97%, var(--background)), radial-gradient(4px at 100% 4px, var(--clr-2) 97%, var(--background))" }} />
          <div className="h-[270.3px] block absolute top-3 inset-x-[0.5875rem] bg-color-042 max-md:h-[10.7rem] max-md:top-[0.4625rem] max-md:inset-x-[4.5px]" />
          <div className="h-[270.3px] flex absolute top-3 inset-x-[0.5875rem] z-10 flex-col overflow-hidden max-md:h-[10.7rem] max-md:top-[0.4625rem] max-md:inset-x-[4.5px]">
            <div className={cn("h-12 min-h-12 border-b border-solid border-b-surface-5 flex pt-[14.9px] pb-3 px-[6.5px] justify-center items-center shrink-0 text-center max-lg:min-h-10 max-md:pt-[0.5375rem] max-md:pb-[0.35rem] max-md:px-[0.1875rem] md:max-lg:h-[2.7125rem]", styles.className2)}>
              <p className="block text-color-053 text-[0.8125rem] font-medium leading-[1rem] tracking-[0.75px] uppercase max-md:text-[0.5625rem] max-md:leading-[0.6875rem] max-md:tracking-[0.53px]">
                {"Für "}
                <br className="hidden max-md:inline" />
                {d.description}
              </p>
            </div>
            <div className="flex relative py-[1.35rem] px-[0.8125rem] flex-col justify-center items-center flex-1 gap-3 overflow-hidden text-color-002 text-center max-md:py-[10.3px] max-md:px-1.5">
              <div className="w-[13.5125rem] h-full block absolute top-0 left-0 z-0 min-w-0 pointer-events-none max-md:w-[6.425rem]">
                <div className={cn("w-px block absolute top-0 left-[0.9625rem] opacity-40 pointer-events-none h-full max-md:left-[7.3px]", styles.className3)} />
                <div className={cn("w-px block absolute top-0 left-[30.9px] opacity-40 pointer-events-none h-full max-md:left-[14.7px]", styles.className4)} />
                <div className={cn("w-px block absolute top-0 left-[46.3px] opacity-40 pointer-events-none h-full max-md:left-[1.375rem]", styles.className5)} />
                <div className={cn("w-px block absolute top-0 left-[3.8625rem] opacity-40 pointer-events-none h-full", styles.className6)} />
                <div className={cn("w-px block absolute top-0 left-[4.825rem] opacity-40 pointer-events-none h-full max-md:left-[36.7px]", styles.className7)} />
                <div className={cn("w-px block absolute top-0 left-[92.7px] opacity-40 pointer-events-none h-full max-md:left-11", styles.className8)} />
                <div className={cn("w-px block absolute top-0 left-[108.1px] opacity-40 pointer-events-none h-full max-md:left-[3.2125rem]", styles.className9)} />
                <div className={cn("w-px block absolute top-0 left-[123.5px] opacity-40 pointer-events-none h-full max-md:left-[58.7px]", styles.className10)} />
                <div className={cn("w-px block absolute top-0 left-[8.6875rem] opacity-40 pointer-events-none h-full max-md:left-[4.125rem]", styles.className11)} />
                <div className={cn("w-px block absolute top-0 left-[9.65rem] opacity-40 pointer-events-none h-full max-md:left-[4.5875rem]", styles.className12)} />
                <div className={cn("w-px block absolute top-0 left-[169.9px] opacity-40 pointer-events-none h-full max-md:left-[80.7px]", styles.className13)} />
                <div className={cn("w-px block absolute top-0 left-[185.3px] opacity-40 pointer-events-none h-full max-md:left-[5.5rem]", styles.className14)} />
                <div className={cn("w-px block absolute top-0 left-[12.55rem] opacity-40 pointer-events-none h-full max-md:left-[5.9625rem]", styles.className15)} />
              </div>
              <div className="w-[13.5125rem] h-full block absolute top-0 left-0 min-w-0 pointer-events-none max-md:w-[6.425rem]" style={{ backgroundImage: "linear-gradient(to top, var(--background) 0%, var(--background) 45%, var(--clr-2) 100%)" }} aria-hidden="true" />
              <div className="w-18 h-[3.6875rem] flex relative z-10 rounded-full justify-center items-center bg-color-042 max-md:w-12 max-md:h-6 md:max-lg:h-[3.975rem]">
                <svg className={cn("w-auto h-9 block overflow-hidden align-middle max-md:h-6", styles.className16)} data-component="icon" aria-hidden="true" fill="none" height="24" viewBox="0 -960 960 960" width="24" xmlns="http://www.w3.org/2000/svg">{d.icon}</svg>
              </div>
              <h3 className="block relative z-10 text-3xl font-bold leading-[2.4375rem] max-md:leading-[1.3125rem] max-md:[font-size:inherit]" data-component="heading">
                <span className="inline relative px-0.5 [background-size:100%_39px] [background-position:0px_78%] bg-no-repeat max-md:[background-size:100%_20.7969px]" style={{ backgroundImage: "linear-gradient(var(--color-042), var(--color-042))" }}>
                  {d.title}
                </span>
              </h3>
              <p className="block relative z-10 max-w-[12.1875rem] text-color-020 [font-family:'Martina_Plantijn',_Georgia,_serif] text-[1.3125rem] italic leading-[1.8125rem] text-balance [font-feature-settings:'calt',_'liga',_'onum'] max-md:max-w-30 max-md:text-sm max-md:leading-[1.125rem]">
                <span className="inline relative px-0.5 [background-size:100%_28.5312px] [background-position:0px_78%] bg-no-repeat max-md:[background-size:100%_18.3438px]" style={{ backgroundImage: "linear-gradient(var(--color-042), var(--color-042))" }}>
                  <span className="hidden max-md:inline">
                    {d.description2}
                    <br className="inline" />
                    {d.description3}
                    <br className="inline" />
                    {d.description4}
                  </span>
                  <span className="inline max-md:hidden">
                    {d.description5}
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
