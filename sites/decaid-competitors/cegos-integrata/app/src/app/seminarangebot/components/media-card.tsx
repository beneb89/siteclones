import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCardData = {
  srcSet: string;
  alt?: string;
  imgSrc: string;
  srcSet2: string;
  title: string;
  description: string;
  description2: string;
  href: string;
  label: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <div className="flex rounded-[10px] flex-col justify-between overflow-hidden text-center bg-surface">
      <div className="block">
        <div className="block overflow-hidden aspect-video">
          <picture className="inline">
            <source className="inline" sizes="auto" srcSet={d.srcSet} type="image/webp" />
            <img className="w-full block max-w-full overflow-clip object-cover aspect-[auto_640/360] align-bottom h-full" data-component="image" alt={d.alt} height="360" sizes="auto" src={d.imgSrc} srcSet={d.srcSet2} width="640" />
          </picture>
        </div>
        <div className="block pt-5 px-5 max-md:pt-[16.3px] max-md:px-[16.3px] md:max-lg:pt-[1.125rem] md:max-lg:px-[1.125rem]">
          <h3 className="block mb-2.5 text-xl font-bold leading-[1.5625rem] max-md:text-base max-md:leading-[1.25rem] md:max-lg:text-lg md:max-lg:leading-[1.4375rem]" data-component="heading">
            {d.title}
          </h3>
          <p className="block mb-5 max-md:mb-[16.3px] md:max-lg:mb-[1.125rem]">
            {d.description}
            <br className="inline" />
            <br className="inline" />
            <strong className="inline font-bold">
              {"Ihr Vorteil: "}
            </strong>
            {d.description2}
          </p>
        </div>
      </div>
      <div className={cn("block pb-5 px-5 max-md:pb-[16.3px] max-md:px-[16.3px] md:max-lg:pb-[1.125rem] md:max-lg:px-[1.125rem]", styles.className)}>
        <a className="border border-solid border-clr-0 inline-flex py-[0.5625rem] px-4.5 rounded-[40px] justify-center items-center text-background font-semibold leading-[1.125rem] bg-foreground cursor-pointer max-md:leading-[1rem] md:max-lg:leading-[1.0625rem]" data-component="button" href={d.href}>
          {d.label}
        </a>
      </div>
    </div>
  );
}
