import type { CardLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type CardLinkData = {
  style: string;
  imgSrc: string;
  title: string;
};
/** A linked card. */
export default function CardLink({ d, styles }: { d: CardLinkData; styles: CardLinkStyles }) {
  return (
    <a className={cn("h-[8.2rem] flex relative items-stretch flex-1 overflow-hidden cursor-pointer max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:h-[159.3px]", styles.className)} data-component="link" href="/insights/12-neuerungen-von-openai">
      <div className="h-full block absolute top-0 inset-x-0 z-0 min-w-0 p-[4.9px] overflow-hidden pointer-events-none max-md:p-[0.175rem] md:max-lg:p-1.5">
        <div className="block relative pointer-events-none h-full w-full">
          <div className={cn("w-px block absolute top-0 left-2.5 pointer-events-none h-full max-md:left-[5.7px] md:max-lg:left-3", styles.className2)} />
          <div className={cn("w-px block absolute top-0 left-5 pointer-events-none h-full max-md:left-[0.7125rem] md:max-lg:left-[1.525rem]", styles.className3)} />
          <div className={cn("w-px block absolute top-0 left-[1.8875rem] pointer-events-none h-full max-md:left-[17.1px] md:max-lg:left-[36.7px]", styles.className4)} />
          <div className={cn("w-px block absolute top-0 left-[40.3px] pointer-events-none h-full max-md:left-[1.425rem] md:max-lg:left-[48.9px]", styles.className5)} />
          <div className={cn("w-px block absolute top-0 left-[3.15rem] pointer-events-none h-full max-md:left-[1.7875rem] md:max-lg:left-[61.1px]", styles.className6)} />
          <div className={cn("w-px block absolute top-0 left-[60.5px] pointer-events-none h-full max-md:left-[34.3px] md:max-lg:left-[73.3px]", styles.className7)} />
          <div className={cn("w-px block absolute top-0 left-[4.4125rem] pointer-events-none h-full max-md:left-10 md:max-lg:left-[85.5px]", styles.className8)} />
          <div className={cn("w-px block absolute top-0 left-[5.0375rem] pointer-events-none h-full max-md:left-[45.7px] md:max-lg:left-[6.1125rem]", styles.className9)} />
          <div className={cn("w-px block absolute top-0 left-[90.7px] pointer-events-none h-full max-md:left-[3.2125rem] md:max-lg:left-[6.875rem]", styles.className10)} />
          <div className={cn("w-px block absolute top-0 left-[6.3rem] pointer-events-none h-full max-md:left-[57.1px] md:max-lg:left-[7.6375rem]", styles.className11)} />
          <div className={cn("w-px block absolute top-0 left-[110.9px] pointer-events-none h-full max-md:left-[3.925rem] md:max-lg:left-[8.4rem]", styles.className12)} />
          <div className={cn("w-px block absolute top-0 left-[7.5625rem] pointer-events-none h-full max-md:left-[4.2875rem] md:max-lg:left-[146.7px]", styles.className13)} />
          <div className={cn("w-px block absolute top-0 left-[8.1875rem] pointer-events-none h-full max-md:left-[74.3px] md:max-lg:left-[158.9px]", styles.className14)} />
          <div className={cn("w-px block absolute top-0 left-[141.1px] pointer-events-none h-full max-md:left-20 md:max-lg:left-[171.1px]", styles.className15)} />
          <div className={cn("w-px block absolute top-0 left-[9.45rem] pointer-events-none h-full max-md:left-[85.7px] md:max-lg:left-[183.3px]", styles.className16)} />
          <div className={cn("w-px block absolute top-0 left-[161.3px] pointer-events-none h-full max-md:left-[5.7125rem] md:max-lg:left-[195.5px]", styles.className17)} />
          <div className={cn("w-px block absolute top-0 left-[10.7125rem] pointer-events-none h-full max-md:left-[97.1px] md:max-lg:left-52", styles.className18)} />
          <div className={cn("w-px block absolute top-0 left-[181.5px] pointer-events-none h-full max-md:left-[6.425rem] md:max-lg:left-[13.75rem]", styles.className19)} />
          <div className={cn("w-px block absolute top-0 left-[191.5px] pointer-events-none h-full max-md:left-[6.7875rem] md:max-lg:left-[14.5125rem]", styles.className20)} />
          <div className={cn("w-px block absolute top-0 left-[12.6rem] pointer-events-none h-full max-md:left-[114.3px] md:max-lg:left-[15.275rem]", styles.className21)} />
          <div className={cn("w-px block absolute top-0 left-[211.7px] pointer-events-none h-full max-md:left-30 md:max-lg:left-[256.7px]", styles.className22)} />
          <div className={cn("w-px block absolute top-0 left-[13.8625rem] pointer-events-none h-full max-md:left-[125.7px] md:max-lg:left-[268.9px]", styles.className23)} />
          <div className={cn("w-px block absolute top-0 left-[231.9px] pointer-events-none h-full max-md:left-[8.2125rem] md:max-lg:left-[17.5625rem]", styles.className24)} />
          <div className={cn("w-px block absolute top-0 left-[15.125rem] pointer-events-none h-full max-md:left-[137.1px] md:max-lg:left-[293.3px]", styles.className25)} />
          <div className={cn("w-px block absolute top-0 left-[15.75rem] pointer-events-none h-full max-md:left-[8.925rem] md:max-lg:left-[305.5px]", styles.className26)} />
          <div className={cn("w-px block absolute top-0 left-[262.1px] pointer-events-none h-full max-md:left-[9.2875rem] md:max-lg:left-[19.8625rem]", styles.className27)} />
          <div className={cn("w-px block absolute top-0 left-[17.0125rem] pointer-events-none h-full max-md:left-[154.3px] md:max-lg:left-[20.625rem]", styles.className28)} />
        </div>
      </div>
      <div className="h-full block absolute top-0 inset-x-0 z-15 min-w-0" style={d.style} />
      <div className="w-32 flex relative z-25 justify-center items-center shrink-0 overflow-hidden max-md:w-[74.5px] md:max-lg:w-[159.3px]">
        <img className="w-auto h-32 block max-w-full overflow-clip object-contain align-middle aspect-square max-md:h-18.5 md:max-lg:h-[9.9375rem]" data-component="image" alt="" src={d.imgSrc} />
      </div>
      <div className="flex relative z-25 py-[0.9125rem] pr-[0.9125rem] pl-[9.7px] flex-col justify-center flex-1 gap-0.5 max-md:py-[8.3px] max-md:pr-[8.3px] max-md:pl-[5.5px] md:max-lg:py-[17.7px] md:max-lg:pr-[17.7px] md:max-lg:pl-3">
        <h4 className={cn("block font-semibold text-pretty", styles.className29)} data-component="heading" lang="de">
          {d.title}
        </h4>
      </div>
      <div className="h-full block absolute top-0 inset-x-0 z-18 min-w-0 p-[4.9px] pointer-events-none max-md:p-[0.175rem] md:max-lg:p-1.5">
        <div className={cn("border border-solid block pointer-events-none h-full w-full", styles.className30)} />
      </div>
    </a>
  );
}
