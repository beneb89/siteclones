import type { MediaCard2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCard2Data = {
  srcSet: string;
  imgSrc: string;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard2({ d, styles }: { d: MediaCard2Data; styles: MediaCard2Styles }) {
  return (
    <div className="box-content flex min-w-0 flex-col gap-3 overflow-x-hidden overflow-y-auto [font-family:Raleway,_sans-serif,_sans-serif]">
      <div className={cn("min-h-75 block relative rounded-[10px] flex-1 overflow-hidden text-color-001 text-center bg-color-007 w-full", styles.className)}>
        <div className="flex p-4 flex-col justify-center items-center gap-2 h-full">
          <picture className="w-20 h-20 block max-md:w-16.5" aria-hidden="true">
            <source className="inline" srcSet={d.srcSet} type="image/webp" />
            <img className={cn("block max-w-full rounded-[10px] overflow-clip object-contain align-bottom w-20 h-20", styles.className2)} data-component="image" aria-hidden="true" src={d.imgSrc} />
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
  );
}
