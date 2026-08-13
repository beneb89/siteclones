import type { MediaTileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTileData = {
  name: string;
  name2: string;
  sizes: string;
  imgSrc: string;
  srcSet: string;
  width: string;
  height: string;
  imgSrc2: string;
  width2: string;
  description: string;
  description2: string;
  kind?: string;
  href?: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <div className="contents min-w-0">
      <div className={cn("w-full block relative [align-self:start] shrink-0", styles.className)} name={d.name}>
        <a className={cn("flex relative flex-col justify-start items-start content-start gap-4 cursor-pointer", styles.className2)} name={d.name2} data-component={d.kind} href={d.href}>
          <div className="h-full block absolute top-0 inset-x-0 z-2 min-w-0 shrink-0 overflow-hidden" />
          <div className={cn("flex relative p-4 rounded-xl flex-col justify-end items-start content-start shrink-0 gap-2 overflow-hidden bg-foreground max-md:w-[21.4375rem] md:max-lg:w-184", styles.className3)}>
            <div className={cn("h-full flex absolute top-0 left-0 z-1 min-w-0 p-4 flex-col justify-end items-start content-start shrink-0 gap-2 overflow-hidden max-md:w-[21.4375rem] md:max-lg:w-184", styles.className4)}>
              <div className={cn("h-full block absolute top-0 min-w-0 max-md:w-[21.4375rem] md:max-lg:w-184", styles.className5)}>
                <img className={cn("w-full block overflow-clip object-cover max-md:h-[27.9375rem] md:max-lg:h-[59.9375rem]", styles.className6)} data-component="image" alt="" height="2400" sizes={d.sizes} src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
              </div>
            </div>
            <div className={cn("block absolute bottom-0 left-0 z-1 min-w-0 shrink-0 max-md:w-[21.4375rem] max-md:h-[13.9625rem] md:max-lg:w-184 md:max-lg:h-[479.3px]", styles.className7)} style={{ backgroundImage: "linear-gradient(var(--clr-3) 0%, var(--clr-5) 100%)" }} />
            <div className="w-[5.5625rem] h-[1.3rem] block absolute top-4 right-4 z-1 min-w-0 shrink-0">
              <div className="flex relative p-1.5 rounded-sm justify-center items-center content-center gap-2.5 bg-surface-2">
                <div className="w-[4.8125rem] flex relative opacity-50 flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                  <p className="block text-background [font-family:'SF_Pro_Display_Medium',_'SF_Pro_Display_Medium_Placeholder',_sans-serif] text-[0.6875rem] font-medium leading-[0.5625rem] uppercase" dir="auto">
                    Coming soon
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-10 flex relative z-2 justify-start items-center content-center shrink-0 gap-3">
              <div className="w-10.5 h-10.5 block relative shrink-0">
                <div className="w-10.5 h-10.5 block relative rounded-lg">
                  <div className="w-10.5 h-full block absolute top-0 rounded-lg">
                    <img className={cn("w-full h-10.5 block rounded-lg overflow-clip object-cover", styles.className8)} data-component="image" alt="" height={d.height} src={d.imgSrc2} width={d.width2} />
                  </div>
                </div>
              </div>
              <div className={cn("flex relative flex-col justify-start items-start content-start grow shrink-0 basis-0 gap-1.5 max-md:w-[82.5%] md:max-lg:w-[92.5%]", styles.className9)}>
                <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap", styles.className10)}>
                  <p className="block text-background [font-family:'SF_Pro_Display_Medium',_'SF_Pro_Display_Medium_Placeholder',_sans-serif] text-base font-medium leading-[0.8125rem]" dir="auto">
                    {d.description}
                  </p>
                </div>
                <div className={cn("flex relative opacity-50 flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[16.0625rem] md:max-lg:w-162.5", styles.className11)}>
                  <p className="block text-background [font-family:'SF_Pro_Display_Medium',_'SF_Pro_Display_Medium_Placeholder',_sans-serif] text-base font-medium leading-[0.8125rem]" dir="auto">
                    {d.description2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
