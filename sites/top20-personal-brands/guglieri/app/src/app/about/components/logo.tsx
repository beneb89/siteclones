import type { ReactNode } from "react";
import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  viewBox: string;
  icon: ReactNode;
  viewBox2: string;
  icon2: ReactNode;
  viewBox3: string;
  icon3: ReactNode;
  viewBox4: string;
  icon4: ReactNode;
  viewBox5: string;
  icon5: ReactNode;
  viewBox6: string;
  icon6: ReactNode;
  viewBox7: string;
  icon7: ReactNode;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className="w-full h-9 flex relative justify-center items-center content-center shrink-0 overflow-hidden max-md:h-[17.3px] max-lg:flex-1 md:max-lg:h-[59.7px] 2xl:h-12">
      <div className="w-[85.7px] h-full block relative grow shrink-0 basis-0 aspect-[2.38298/1] max-md:w-[46.7px] max-lg:aspect-[initial] md:max-lg:w-[102.9px] 2xl:w-[114.3px]" aria-hidden="true">
        <div className="h-full block aspect-[2.38298/1] max-lg:aspect-[initial]">
          <svg className="w-21.5 h-9 block overflow-hidden max-md:w-[2.9375rem] max-md:h-[1.0625rem] md:max-lg:w-[6.4375rem] md:max-lg:h-15 2xl:w-28.5 2xl:h-12" data-component="image" height="100%" viewBox={d.viewBox} width="100%" preserveAspectRatio="none" fill="currentColor">{d.icon}</svg>
        </div>
      </div>
      <div className={cn("w-[85.7px] block relative grow shrink-0 basis-0 max-md:w-[46.7px] max-lg:aspect-[initial] md:max-lg:w-[102.9px] 2xl:w-[114.3px]", styles.className)} aria-hidden="true">
        <div className={cn("h-full block max-lg:aspect-[initial]", styles.className2)}>
          <svg className={cn("w-21.5 block overflow-hidden max-md:w-[2.9375rem] max-md:h-[1.0625rem] md:max-lg:w-[6.4375rem] md:max-lg:h-15 2xl:w-28.5", styles.className3)} data-component="image" height="100%" viewBox={d.viewBox2} width="100%" preserveAspectRatio="none" fill="currentColor">{d.icon2}</svg>
        </div>
      </div>
      <div className="w-[85.7px] h-full block relative grow shrink-0 basis-0 aspect-[2.38298/1] max-md:w-[46.7px] max-lg:aspect-[initial] md:max-lg:w-[102.9px] 2xl:w-[114.3px]" aria-hidden="true">
        <div className="h-full block aspect-[2.38298/1] max-lg:aspect-[initial]">
          <svg className="w-21.5 h-9 block overflow-hidden max-md:w-[2.9375rem] max-md:h-[1.0625rem] md:max-lg:w-[6.4375rem] md:max-lg:h-15 2xl:w-28.5 2xl:h-12" data-component="image" height="100%" viewBox={d.viewBox3} width="100%" preserveAspectRatio="none" fill="currentColor">{d.icon3}</svg>
        </div>
      </div>
      <div className="w-[85.7px] h-full block relative grow shrink-0 basis-0 aspect-[2.38298/1] max-md:w-[46.7px] max-lg:aspect-[initial] md:max-lg:w-[102.9px] 2xl:w-[114.3px]" aria-hidden="true">
        <div className="h-full block aspect-[2.38298/1] max-lg:aspect-[initial]">
          <svg className="w-21.5 h-9 block overflow-hidden max-md:w-[2.9375rem] max-md:h-[1.0625rem] md:max-lg:w-[6.4375rem] md:max-lg:h-15 2xl:w-28.5 2xl:h-12" data-component="image" height="100%" viewBox={d.viewBox4} width="100%" preserveAspectRatio="none" fill="currentColor">{d.icon4}</svg>
        </div>
      </div>
      <div className="w-[85.7px] h-full block relative grow shrink-0 basis-0 aspect-[2.38298/1] max-md:w-[46.7px] max-lg:aspect-[initial] md:max-lg:w-[102.9px] 2xl:w-[114.3px]" aria-hidden="true">
        <div className="h-full block aspect-[2.38298/1] max-lg:aspect-[initial]">
          <svg className="w-21.5 h-9 block overflow-hidden max-md:w-[2.9375rem] max-md:h-[1.0625rem] md:max-lg:w-[6.4375rem] md:max-lg:h-15 2xl:w-28.5 2xl:h-12" data-component="image" height="100%" viewBox={d.viewBox5} width="100%" preserveAspectRatio="none" fill="currentColor">{d.icon5}</svg>
        </div>
      </div>
      <div className="w-[85.7px] h-full block relative grow shrink-0 basis-0 aspect-[2.38298/1] max-md:w-[46.7px] max-lg:aspect-[initial] md:max-lg:w-[102.9px] 2xl:w-[114.3px]" aria-hidden="true">
        <div className="h-full block aspect-[2.38298/1] max-lg:aspect-[initial]">
          <svg className="w-21.5 h-9 block overflow-hidden max-md:w-[2.9375rem] max-md:h-[1.0625rem] md:max-lg:w-[6.4375rem] md:max-lg:h-15 2xl:w-28.5 2xl:h-12" data-component="image" height="100%" viewBox={d.viewBox6} width="100%" preserveAspectRatio="none" fill="currentColor">{d.icon6}</svg>
        </div>
      </div>
      <div className="w-[85.7px] h-full block relative grow shrink-0 basis-0 aspect-[2.38298/1] max-md:w-[46.7px] max-lg:aspect-[initial] md:max-lg:w-[102.9px] 2xl:w-[114.3px]" aria-hidden="true">
        <div className="h-full block aspect-[2.38298/1] max-lg:aspect-[initial]">
          <svg className="w-21.5 h-9 block overflow-hidden max-md:w-[2.9375rem] max-md:h-[1.0625rem] md:max-lg:w-[6.4375rem] md:max-lg:h-15 2xl:w-28.5 2xl:h-12" data-component="image" height="100%" viewBox={d.viewBox7} width="100%" preserveAspectRatio="none" fill="currentColor">{d.icon7}</svg>
        </div>
      </div>
    </div>
  );
}
