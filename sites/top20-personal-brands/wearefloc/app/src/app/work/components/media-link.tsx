import type { MediaLinkStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaLinkData = {
  height: string;
  imgSrc: string;
  srcSet: string;
  width: string;
  description: string;
  description2: string;
};
/** A linked media tile. */
export default function MediaLink({ d, styles }: { d: MediaLinkData; styles: MediaLinkStyles }) {
  return (
    <a className={cn("w-full flex relative flex-wrap justify-center items-start content-start [align-self:start] shrink-0 gap-4 text-primary", styles.className)} data-component="link" href="/work/alchemain">
      <div className="basis-0 shrink-0 flex relative flex-col justify-center items-start content-start grow gap-4 overflow-hidden">
        <div className="w-full block relative shrink-0 overflow-hidden aspect-square">
          <div className="contents">
            <div className="h-[373.3px] block absolute inset-x-0 shrink-0 max-md:h-[21.4375rem] md:max-lg:h-184 2xl:h-[453.3px]">
              <div className="h-full block absolute top-0 inset-x-0">
                <img className={cn("w-full h-[23.3125rem] block overflow-clip object-cover max-md:h-[21.4375rem] md:max-lg:h-184 2xl:h-[28.3125rem]", styles.className2)} data-component="image" alt="" height={d.height} sizes="max((100vw - 160px) / 3, 50px)" src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[373.3px] flex relative flex-col justify-start items-start content-start shrink-0 gap-2.5 max-md:w-[21.4375rem] md:max-lg:w-184 2xl:w-[453.3px]">
          <div className="w-[373.3px] flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[21.4375rem] md:max-lg:w-184 2xl:w-[453.3px]">
            <p className="block text-color-001 [font-family:'Druk_Text_Wide_Heavy',_'Druk_Text_Wide_Heavy_Placeholder',_sans-serif] text-[1.3125rem] leading-[1.5625rem] uppercase">
              {d.description}
            </p>
          </div>
          <div className="contents min-w-0">
            <div className={cn("flex relative opacity-90 flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]", styles.className3)}>
              <p className="block text-color-001 [font-family:'Geist_Regular',_'Geist_Regular_Placeholder',_sans-serif] text-lg leading-[1.375rem] tracking-[-0.54px] 2xl:tracking-[inherit]">
                {d.description2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
