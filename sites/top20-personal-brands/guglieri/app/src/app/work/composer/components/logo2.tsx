import type { Logo2Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type Logo2Data = {
  id: string;
  height: string;
  imgSrc: string;
  srcSet: string;
  id2: string;
  height2: string;
  imgSrc2: string;
  srcSet2: string;
  width: string;
  id3: string;
  height3: string;
  imgSrc3: string;
  srcSet3: string;
  id4: string;
  height4: string;
  imgSrc4: string;
  srcSet4: string;
  width2: string;
};
/** A logo. */
export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <div className={cn("w-full flex relative justify-start items-start content-start shrink-0 gap-1 overflow-hidden max-lg:flex-col max-lg:aspect-[0.748/1]", styles.className)}>
      <div className={cn("hidden 2xl:w-235.5 2xl:block 2xl:relative 2xl:rounded-2xl 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:overflow-hidden", styles.className2)} id={d.id}>
        <div className={cn("hidden 2xl:w-235.5 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:rounded-2xl", styles.className3)}>
          <img className={cn("hidden 2xl:w-full 2xl:block 2xl:rounded-2xl 2xl:overflow-clip 2xl:object-cover", styles.className4)} alt="" height={d.height} sizes="max((100vw - 36px) / 2, 1px)" src={d.imgSrc} srcSet={d.srcSet} width="3840" />
        </div>
      </div>
      <div className={cn("hidden 2xl:w-235.5 2xl:block 2xl:relative 2xl:rounded-2xl 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:overflow-hidden", styles.className5)} id={d.id2}>
        <div className="hidden 2xl:w-235.5 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:rounded-2xl">
          <img className={cn("hidden 2xl:w-full 2xl:block 2xl:rounded-2xl 2xl:overflow-clip 2xl:object-cover", styles.className6)} alt="" height={d.height2} sizes="max((100vw - 36px) / 2, 1px)" src={d.imgSrc2} srcSet={d.srcSet2} width={d.width} />
        </div>
      </div>
      <div className="contents min-w-0 2xl:hidden">
        <div className={cn("w-155.5 block relative rounded-2xl grow shrink-0 basis-0 overflow-hidden max-md:w-[21.4375rem] max-md:h-[227.3px] md:max-lg:w-184 md:max-lg:h-[30.625rem] 2xl:hidden", styles.className7)} id={d.id3}>
          <div className="h-full block absolute top-0 inset-x-0 rounded-2xl 2xl:hidden">
            <img className={cn("w-full block rounded-2xl overflow-clip object-cover max-md:h-[14.1875rem] md:max-lg:h-122.5 2xl:hidden", styles.className8)} data-component="image" alt="" height={d.height3} sizes="max((100vw - 36px) / 2, 1px)" src={d.imgSrc3} srcSet={d.srcSet3} width="3840" />
          </div>
        </div>
      </div>
      <div className="contents min-w-0 2xl:hidden">
        <div className={cn("w-155.5 block relative rounded-2xl grow shrink-0 basis-0 overflow-hidden max-md:w-[21.4375rem] max-md:h-[227.3px] md:max-lg:w-184 md:max-lg:h-[30.625rem] 2xl:hidden", styles.className9)} id={d.id4}>
          <div className="h-full block absolute top-0 inset-x-0 rounded-2xl 2xl:hidden">
            <img className={cn("w-full block rounded-2xl overflow-clip object-cover max-md:h-[14.1875rem] md:max-lg:h-122.5 2xl:hidden", styles.className10)} data-component="image" alt="" height={d.height4} sizes="max((100vw - 36px) / 2, 1px)" src={d.imgSrc4} srcSet={d.srcSet4} width={d.width2} />
          </div>
        </div>
      </div>
    </div>
  );
}
