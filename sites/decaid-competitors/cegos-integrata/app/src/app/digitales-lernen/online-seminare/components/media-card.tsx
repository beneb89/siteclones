import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type MediaCardData = {
  srcSet: string;
  imgSrc: string;
  title: string;
  description: string;
  srcSet3: string;
  imgSrc2: string;
  title2: string;
  description2: string;
  sizes?: string;
  height?: string;
  sizes2?: string;
  srcSet2?: string;
  width?: string;
  sizes3?: string;
  height2?: string;
  sizes4?: string;
  srcSet4?: string;
  width2?: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <div className="box-content flex flex-col flex-1 max-lg:grow-[initial] max-lg:basis-[initial]">
      <div className="box-content flex min-w-0 flex-col gap-3 overflow-x-hidden overflow-y-auto [font-family:Raleway,_sans-serif,_sans-serif]">
        <div className="h-75 min-h-75 block relative rounded-[10px] flex-1 overflow-hidden text-background text-center bg-color-008 w-full">
          <div className="flex p-4 flex-col justify-center items-center gap-2 h-full">
            <picture className="w-20 h-20 block" aria-hidden="true">
              <source className="inline" srcSet={d.srcSet} type="image/webp" sizes={d.sizes} />
              <img className={cn("block max-w-full rounded-[10px] overflow-clip object-contain align-bottom w-20 h-20", styles.className)} data-component="image" aria-hidden="true" src={d.imgSrc} height={d.height} sizes={d.sizes2} srcSet={d.srcSet2} width={d.width} />
            </picture>
            <h3 className="block text-xl font-bold leading-[1.5625rem] max-md:text-base max-md:leading-[1.25rem] md:max-lg:text-lg md:max-lg:leading-[1.4375rem]" data-component="heading">
              {d.title}
            </h3>
            <p className="block">
              {d.description}
            </p>
          </div>
        </div>
      </div>
      <p className="box-content block mb-5 max-md:mb-[16.3px] md:max-lg:mb-[1.125rem]">
        <br className="box-content inline" />
      </p>
      <div className="box-content flex min-w-0 flex-col gap-3 overflow-x-hidden overflow-y-auto [font-family:Raleway,_sans-serif,_sans-serif]">
        <div className="h-75 min-h-75 block relative rounded-[10px] flex-1 overflow-hidden text-background text-center bg-color-008 w-full">
          <div className="flex p-4 flex-col justify-center items-center gap-2 h-full">
            <picture className="w-20 h-20 block" aria-hidden="true">
              <source className="inline" srcSet={d.srcSet3} type="image/webp" sizes={d.sizes3} />
              <img className={cn("block max-w-full rounded-[10px] overflow-clip object-contain align-bottom w-20 h-20", styles.className2)} data-component="image" aria-hidden="true" src={d.imgSrc2} height={d.height2} sizes={d.sizes4} srcSet={d.srcSet4} width={d.width2} />
            </picture>
            <h3 className="block text-xl font-bold leading-[1.5625rem] max-md:text-base max-md:leading-[1.25rem] md:max-lg:text-lg md:max-lg:leading-[1.4375rem]" data-component="heading">
              {d.title2}
            </h3>
            <p className="block">
              {d.description2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
