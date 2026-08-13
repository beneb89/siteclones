import type { MediaCard2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCard2Data = {
  alt: string;
  height: string;
  imgSrc: string;
  srcSet: string;
  width: string;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard2({ d, styles }: { d: MediaCard2Data; styles: MediaCard2Styles }) {
  return (
    <li className="block">
      <div className="block relative rounded-xl shrink-0 bg-border h-14 w-14">
        <div className="w-14 h-full flex absolute top-0 left-0 justify-center items-center">
          <img className={cn("block max-w-full overflow-clip align-middle text-clr-0 h-6 w-6", styles.className)} data-component="image" alt={d.alt} height={d.height} src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
        </div>
      </div>
      <div className="block">
        <h3 className="block mt-4 mb-2 text-[1.5rem] font-medium tracking-[-1.2px] max-md:text-[1.3125rem] max-md:leading-[1.3125rem] max-md:tracking-[-1.05px] md:max-lg:text-[1.4375rem] md:max-lg:leading-[1.4375rem] md:max-lg:tracking-[-1.15px]" data-component="heading">
          {d.title}
        </h3>
        <div className="block text-balance">
          <div className="block text-clr-9 leading-7">
            <p className="block my-3 text-foreground text-[1.1875rem] leading-[1.75rem] max-md:leading-6 max-md:[font-size:inherit] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.625rem] 2xl:text-xl 2xl:leading-7.5">
              {d.description}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}
