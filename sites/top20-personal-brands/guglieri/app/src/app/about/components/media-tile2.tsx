import type { MediaTile2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTile2Data = {
  imgSrc: string;
  srcSet: string;
  description: string;
  description2: string;
  imgSrc2: string;
  srcSet2: string;
  description3: string;
  description4: string;
  imgSrc3: string;
  srcSet3: string;
  description5: string;
  description6: string;
  imgSrc4: string;
  srcSet4: string;
  description7: string;
  description8: string;
  height: string;
  imgSrc5: string;
  srcSet5: string;
  width: string;
  description9: string;
  description10: string;
  height2: string;
  imgSrc6: string;
  srcSet6: string;
  width2: string;
  description11: string;
  description12: string;
};
/** A media tile. */
export default function MediaTile2({ d, styles }: { d: MediaTile2Data; styles: MediaTile2Styles }) {
  return (
    <div className="w-full flex relative justify-center items-center content-center shrink-0 gap-1 overflow-clip">
      <div className="contents min-w-0 2xl:w-[306.7px] 2xl:h-[23.6375rem] 2xl:block 2xl:relative 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:aspect-[0.81087/1]">
        <a className="hidden 2xl:w-[306.7px] 2xl:h-[23.6375rem] 2xl:flex 2xl:relative 2xl:pb-2.5 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:gap-3 2xl:overflow-clip 2xl:cursor-pointer">
          <div className="hidden 2xl:w-full 2xl:h-[20.3375rem] 2xl:block 2xl:relative 2xl:rounded-2xl 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:overflow-clip 2xl:bg-surface">
            <div className="hidden 2xl:w-[306.7px] 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:shrink-0">
              <div className="hidden 2xl:w-[306.7px] 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0">
                <img className="hidden 2xl:w-full 2xl:h-[20.3125rem] 2xl:block 2xl:overflow-clip 2xl:object-cover 2xl:aspect-[auto_1560/1560]" alt="" height="1560" sizes="max(((100vw - 32px) / 2 - 24px) / 3, 1px)" src={d.imgSrc} srcSet={d.srcSet} width="1560" />
              </div>
            </div>
          </div>
          <div className="hidden 2xl:w-[306.7px] 2xl:flex 2xl:relative 2xl:pl-2 2xl:flex-col 2xl:justify-start 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:gap-0.5 2xl:overflow-hidden">
            <div className="hidden 2xl:w-[298.7px] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word]">
              <p className="hidden 2xl:block 2xl:text-color-002 2xl:[font-family:'Raveo_Variable_Variable',_sans-serif] 2xl:[font-weight:1000] 2xl:leading-[0.875rem] 2xl:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                {d.description}
              </p>
            </div>
            <div className="hidden 2xl:w-[298.7px] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word]">
              <p className="hidden 2xl:block 2xl:text-muted 2xl:[font-family:'Raveo_Variable_Variable',_sans-serif] 2xl:[font-weight:1000] 2xl:leading-[0.875rem] 2xl:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                {d.description2}
              </p>
            </div>
          </div>
        </a>
        <div className="w-50 block relative grow shrink-0 basis-0 aspect-[0.81087/1] max-md:w-[111.7px] max-lg:aspect-[0.706061/1] md:max-lg:w-[242.7px] 2xl:hidden">
          <a className="h-[15.4125rem] flex relative pb-2.5 flex-col justify-start items-start content-start gap-3 overflow-clip cursor-pointer max-md:h-[9.8875rem] md:max-lg:h-[343.7px] 2xl:hidden">
            <div className="w-full h-[12.1125rem] block relative rounded-2xl grow shrink-0 basis-0 overflow-clip bg-surface max-md:h-[6.8875rem] md:max-lg:h-[295.7px] 2xl:hidden">
              <div className="h-full block absolute top-0 inset-x-0 shrink-0 2xl:hidden">
                <div className="h-full block absolute top-0 inset-x-0 2xl:hidden">
                  <img className="w-full h-48.5 block overflow-clip object-cover aspect-[auto_1560/1560] max-md:h-27.5 md:max-lg:h-74 2xl:hidden" data-component="image" alt="" height="1560" sizes="max(((100vw - 32px) / 2 - 24px) / 3, 1px)" src={d.imgSrc2} srcSet={d.srcSet2} width="1560" />
                </div>
              </div>
            </div>
            <div className="w-50 flex relative pl-2 flex-col justify-start items-center content-center shrink-0 gap-0.5 overflow-hidden max-md:w-[111.7px] md:max-lg:w-[242.7px] 2xl:hidden">
              <div className="w-48 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[103.7px] md:max-lg:w-[234.7px] 2xl:hidden">
                <p className="block text-color-002 [font-family:'Raveo_Variable_Variable',_sans-serif] [font-weight:1000] leading-[0.875rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[0.625rem] max-lg:leading-3 2xl:hidden" dir="auto">
                  {d.description3}
                </p>
              </div>
              <div className="w-48 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[103.7px] md:max-lg:w-[234.7px] 2xl:hidden">
                <p className="block text-muted [font-family:'Raveo_Variable_Variable',_sans-serif] [font-weight:1000] leading-[0.875rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[0.625rem] max-lg:leading-3 2xl:hidden" dir="auto">
                  {d.description4}
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="contents min-w-0 2xl:w-[306.7px] 2xl:h-[23.575rem] 2xl:block 2xl:relative 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:aspect-[0.813044/1]">
        <a className="hidden 2xl:w-[306.7px] 2xl:h-[23.575rem] 2xl:flex 2xl:relative 2xl:pb-2.5 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:gap-3 2xl:overflow-clip 2xl:cursor-pointer">
          <div className="hidden 2xl:w-full 2xl:h-[20.275rem] 2xl:block 2xl:relative 2xl:rounded-2xl 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:overflow-clip 2xl:bg-surface">
            <div className="hidden 2xl:w-[306.7px] 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:shrink-0">
              <div className="hidden 2xl:w-[306.7px] 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0">
                <img className="hidden 2xl:w-full 2xl:h-81 2xl:block 2xl:overflow-clip 2xl:object-cover 2xl:aspect-[auto_1560/1560]" alt="" height="1560" sizes="max(((100vw - 32px) / 2 - 24px) / 3, 1px)" src={d.imgSrc3} srcSet={d.srcSet3} width="1560" />
              </div>
            </div>
          </div>
          <div className="hidden 2xl:w-[306.7px] 2xl:flex 2xl:relative 2xl:pl-2 2xl:flex-col 2xl:justify-start 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:gap-0.5 2xl:overflow-hidden">
            <div className="hidden 2xl:w-[298.7px] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word]">
              <p className="hidden 2xl:block 2xl:text-color-002 2xl:[font-family:'Raveo_Variable_Variable',_sans-serif] 2xl:[font-weight:1000] 2xl:leading-[0.875rem] 2xl:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                {d.description5}
              </p>
            </div>
            <div className="hidden 2xl:w-[298.7px] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word]">
              <p className="hidden 2xl:block 2xl:text-muted 2xl:[font-family:'Raveo_Variable_Variable',_sans-serif] 2xl:[font-weight:1000] 2xl:leading-[0.875rem] 2xl:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                {d.description6}
              </p>
            </div>
          </div>
        </a>
        <div className="w-50 block relative grow shrink-0 basis-0 aspect-[0.813044/1] max-md:w-[111.7px] max-lg:aspect-[0.709091/1] md:max-lg:w-[242.7px] 2xl:hidden">
          <a className="h-[15.375rem] flex relative pb-2.5 flex-col justify-start items-start content-start gap-3 overflow-clip cursor-pointer max-md:h-[157.5px] md:max-lg:h-[21.3875rem] 2xl:hidden">
            <div className="w-full h-[12.075rem] block relative rounded-2xl grow shrink-0 basis-0 overflow-clip bg-surface max-md:h-[109.5px] md:max-lg:h-[18.3875rem] 2xl:hidden">
              <div className="h-full block absolute top-0 inset-x-0 shrink-0 2xl:hidden">
                <div className="h-full block absolute top-0 inset-x-0 2xl:hidden">
                  <img className="w-full h-[12.0625rem] block overflow-clip object-cover aspect-[auto_1560/1560] max-md:h-[6.8125rem] md:max-lg:h-73.5 2xl:hidden" data-component="image" alt="" height="1560" sizes="max(((100vw - 32px) / 2 - 24px) / 3, 1px)" src={d.imgSrc4} srcSet={d.srcSet4} width="1560" />
                </div>
              </div>
            </div>
            <div className="w-50 flex relative pl-2 flex-col justify-start items-center content-center shrink-0 gap-0.5 overflow-hidden max-md:w-[111.7px] md:max-lg:w-[242.7px] 2xl:hidden">
              <div className="w-48 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[103.7px] md:max-lg:w-[234.7px] 2xl:hidden">
                <p className="block text-color-002 [font-family:'Raveo_Variable_Variable',_sans-serif] [font-weight:1000] leading-[0.875rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[0.625rem] max-lg:leading-3 2xl:hidden" dir="auto">
                  {d.description7}
                </p>
              </div>
              <div className="w-48 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[103.7px] md:max-lg:w-[234.7px] 2xl:hidden">
                <p className="block text-muted [font-family:'Raveo_Variable_Variable',_sans-serif] [font-weight:1000] leading-[0.875rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[0.625rem] max-lg:leading-3 2xl:hidden" dir="auto">
                  {d.description8}
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="contents min-w-0 2xl:w-[306.7px] 2xl:h-[23.6375rem] 2xl:block 2xl:relative 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:aspect-[0.81087/1]">
        <a className="hidden 2xl:w-[306.7px] 2xl:h-[23.6375rem] 2xl:flex 2xl:relative 2xl:pb-2.5 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:gap-3 2xl:overflow-clip 2xl:cursor-pointer">
          <div className="hidden 2xl:w-full 2xl:h-[20.3375rem] 2xl:block 2xl:relative 2xl:rounded-2xl 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:overflow-clip 2xl:bg-surface">
            <div className="hidden 2xl:w-[306.7px] 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:shrink-0">
              <div className="hidden 2xl:w-[306.7px] 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0">
                <img className={cn("hidden 2xl:w-full 2xl:h-[20.3125rem] 2xl:block 2xl:overflow-clip 2xl:object-cover", styles.className)} alt="" height={d.height} sizes="max(((100vw - 32px) / 2 - 24px) / 3, 1px)" src={d.imgSrc5} srcSet={d.srcSet5} width={d.width} />
              </div>
            </div>
          </div>
          <div className="hidden 2xl:w-[306.7px] 2xl:flex 2xl:relative 2xl:pl-2 2xl:flex-col 2xl:justify-start 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:gap-0.5 2xl:overflow-hidden">
            <div className="hidden 2xl:w-[298.7px] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word]">
              <p className="hidden 2xl:block 2xl:text-color-002 2xl:[font-family:'Raveo_Variable_Variable',_sans-serif] 2xl:[font-weight:1000] 2xl:leading-[0.875rem] 2xl:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                {d.description9}
              </p>
            </div>
            <div className="hidden 2xl:w-[298.7px] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word]">
              <p className="hidden 2xl:block 2xl:text-muted 2xl:[font-family:'Raveo_Variable_Variable',_sans-serif] 2xl:[font-weight:1000] 2xl:leading-[0.875rem] 2xl:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                {d.description10}
              </p>
            </div>
          </div>
        </a>
        <div className="w-50 block relative grow shrink-0 basis-0 aspect-[0.81087/1] max-md:w-[111.7px] max-lg:aspect-[0.706061/1] md:max-lg:w-[242.7px] 2xl:hidden">
          <a className="h-[15.4125rem] flex relative pb-2.5 flex-col justify-start items-start content-start gap-3 overflow-clip cursor-pointer max-md:h-[9.8875rem] md:max-lg:h-[343.7px] 2xl:hidden">
            <div className="w-full h-[12.1125rem] block relative rounded-2xl grow shrink-0 basis-0 overflow-clip bg-surface max-md:h-[6.8875rem] md:max-lg:h-[295.7px] 2xl:hidden">
              <div className="h-full block absolute top-0 inset-x-0 shrink-0 2xl:hidden">
                <div className="h-full block absolute top-0 inset-x-0 2xl:hidden">
                  <img className={cn("w-full h-48.5 block overflow-clip object-cover max-md:h-27.5 md:max-lg:h-74 2xl:hidden", styles.className2)} data-component="image" alt="" height={d.height2} sizes="max(((100vw - 32px) / 2 - 24px) / 3, 1px)" src={d.imgSrc6} srcSet={d.srcSet6} width={d.width2} />
                </div>
              </div>
            </div>
            <div className="w-50 flex relative pl-2 flex-col justify-start items-center content-center shrink-0 gap-0.5 overflow-hidden max-md:w-[111.7px] md:max-lg:w-[242.7px] 2xl:hidden">
              <div className="w-48 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[103.7px] md:max-lg:w-[234.7px] 2xl:hidden">
                <p className="block text-color-002 [font-family:'Raveo_Variable_Variable',_sans-serif] [font-weight:1000] leading-[0.875rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[0.625rem] max-lg:leading-3 2xl:hidden" dir="auto">
                  {d.description11}
                </p>
              </div>
              <div className="w-48 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[103.7px] md:max-lg:w-[234.7px] 2xl:hidden">
                <p className="block text-muted [font-family:'Raveo_Variable_Variable',_sans-serif] [font-weight:1000] leading-[0.875rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[0.625rem] max-lg:leading-3 2xl:hidden" dir="auto">
                  {d.description12}
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
