import type { MediaTile5Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTile5Data = {
  imgSrc: string;
  srcSet: string;
  description: string;
  description2: string;
  imgSrc2: string;
  srcSet2: string;
  description3: string;
  description4: string;
};
/** A media tile. */
export default function MediaTile5({ d, styles }: { d: MediaTile5Data; styles: MediaTile5Styles }) {
  return (
    <div className={cn("contents min-w-0 2xl:w-[306.7px] 2xl:block 2xl:relative 2xl:grow 2xl:shrink-0 2xl:basis-0", styles.className)}>
      <a className={cn("hidden 2xl:w-[306.7px] 2xl:flex 2xl:relative 2xl:pb-2.5 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:gap-3 2xl:overflow-clip 2xl:cursor-pointer", styles.className2)}>
        <div className={cn("hidden 2xl:w-full 2xl:block 2xl:relative 2xl:rounded-2xl 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:overflow-clip 2xl:bg-surface", styles.className3)}>
          <div className="hidden 2xl:w-[306.7px] 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:shrink-0">
            <div className="hidden 2xl:w-[306.7px] 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0">
              <img className={cn("hidden 2xl:w-full 2xl:block 2xl:overflow-clip 2xl:object-cover 2xl:aspect-[auto_1560/1560]", styles.className4)} alt="" height="1560" sizes="max(((100vw - 32px) / 2 - 24px) / 3, 1px)" src={d.imgSrc} srcSet={d.srcSet} width="1560" />
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
      <div className={cn("w-50 block relative grow shrink-0 basis-0 max-md:w-[111.7px] md:max-lg:w-[242.7px] 2xl:hidden", styles.className5)}>
        <a className={cn("flex relative pb-2.5 flex-col justify-start items-start content-start gap-3 overflow-clip cursor-pointer 2xl:hidden", styles.className6)}>
          <div className={cn("w-full block relative rounded-2xl grow shrink-0 basis-0 overflow-clip bg-surface 2xl:hidden", styles.className7)}>
            <div className="h-full block absolute top-0 inset-x-0 shrink-0 2xl:hidden">
              <div className="h-full block absolute top-0 inset-x-0 2xl:hidden">
                <img className={cn("w-full block overflow-clip object-cover aspect-[auto_1560/1560] 2xl:hidden", styles.className8)} data-component="image" alt="" height="1560" sizes="max(((100vw - 32px) / 2 - 24px) / 3, 1px)" src={d.imgSrc2} srcSet={d.srcSet2} width="1560" />
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
  );
}
