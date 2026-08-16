import type { MediaCard3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCard3Data = {
  imgSrc: string;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard3({ d, styles }: { d: MediaCard3Data; styles: MediaCard3Styles }) {
  return (
    <div className="flex rounded-[10px] flex-col justify-between overflow-hidden text-center bg-surface">
      <div className={cn("block", styles.className)}>
        <div className="block overflow-hidden aspect-video">
          <picture className="inline">
            <img className="w-full block max-w-full overflow-clip object-cover aspect-[auto_640/360] align-bottom h-full" data-component="image" height="360" src={d.imgSrc} width="640" />
          </picture>
        </div>
        <div className="block pt-5 px-5 max-md:pt-[16.3px] max-md:px-[16.3px] md:max-lg:pt-[1.125rem] md:max-lg:px-[1.125rem]">
          <h3 className="block mb-2.5 text-xl font-bold leading-[1.5625rem] max-md:text-base max-md:leading-[1.25rem] md:max-lg:text-lg md:max-lg:leading-[1.4375rem]" data-component="heading">
            {d.title}
          </h3>
          <p className="block mb-5 max-md:mb-[16.3px] md:max-lg:mb-[1.125rem]">
            {d.description}
          </p>
        </div>
      </div>
    </div>
  );
}
