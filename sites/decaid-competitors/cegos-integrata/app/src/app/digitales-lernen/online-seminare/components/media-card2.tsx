import type { MediaCard2Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type MediaCard2Data = {
  srcSet: string;
  imgSrc: string;
  srcSet2: string;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard2({ d, styles }: { d: MediaCard2Data; styles: MediaCard2Styles }) {
  return (
    <div className="box-content flex min-w-0 flex-col gap-3 overflow-x-hidden overflow-y-auto [font-family:Raleway,_sans-serif,_sans-serif]">
      <div className={cn("h-75 min-h-75 block relative rounded-[10px] flex-1 overflow-hidden text-background text-center bg-color-008 w-full", styles.className)}>
        <div className="flex p-4 flex-col justify-center items-center gap-2 h-full">
          <picture className="w-20 h-20 block" aria-hidden="true">
            <source className="inline" sizes="auto" srcSet={d.srcSet} type="image/webp" />
            <img className="block max-w-full rounded-[10px] overflow-clip object-contain aspect-[auto_2084/2084] align-bottom w-20 h-20" data-component="image" aria-hidden="true" height="2084" sizes="auto" src={d.imgSrc} srcSet={d.srcSet2} width="2084" />
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
