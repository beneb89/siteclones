import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCardData = {
  srcSet: string;
  imgSrc: string;
  title: string;
  description: string;
  kind: string;
  href: string;
  label: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <div className="box-content flex min-w-0 flex-col gap-3 overflow-x-hidden overflow-y-auto [font-family:Raleway,_sans-serif,_sans-serif]">
      <div className={cn("h-75 min-h-75 block relative rounded-[10px] flex-1 overflow-hidden text-background text-center bg-color-002 w-full", styles.className)}>
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
        <div className="w-[22.5625rem] h-75 flex absolute top-0 left-0 z-4 opacity-0 p-4 flex-col justify-center items-center gap-2 bg-color-002">
          <a className="border border-solid border-foreground flex py-[0.5625rem] px-4.5 rounded-[40px] justify-center items-center text-foreground font-semibold leading-[1.125rem] bg-background cursor-pointer max-md:leading-[1rem] md:max-lg:leading-[1.0625rem]" data-component={d.kind} href={d.href} rel="noopener" target="_self">
            {d.label}
          </a>
        </div>
      </div>
    </div>
  );
}
