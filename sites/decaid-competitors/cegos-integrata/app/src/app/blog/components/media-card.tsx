import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCardData = {
  href: string;
  alt: string;
  imgSrc: string;
  label: string;
  title: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <article className={cn("flex rounded-[10px] flex-col overflow-hidden bg-surface h-full max-lg:[grid-column-start:initial] max-lg:[grid-column-end:initial]", styles.className)}>
      <a className="flex flex-col cursor-pointer h-full" data-component="link" href={d.href}>
        <div className="block overflow-hidden leading-3.5 bg-surface aspect-video max-md:leading-[0.8125rem] md:max-lg:leading-[0.875rem]">
          <picture className="inline">
            <img className="w-full block max-w-full overflow-clip object-cover align-bottom h-full" data-component="image" alt={d.alt} src={d.imgSrc} />
          </picture>
        </div>
        <div className="flex py-5 px-10 flex-col items-start flex-1 gap-5 max-md:py-[16.3px] max-md:px-[21.3px] max-md:gap-[16.3px] md:max-lg:py-[1.125rem] md:max-lg:px-[1.9rem] md:max-lg:gap-[1.125rem]">
          <span className={cn("flex py-2 px-4 rounded-full text-background text-xs leading-[1.0625rem] max-md:text-[0.6875rem] max-md:leading-4", styles.className2)}>
            {d.label}
          </span>
          <h3 className="block text-xl font-bold leading-[1.5625rem] max-md:text-base max-md:leading-[1.25rem] md:max-lg:text-lg md:max-lg:leading-[1.4375rem]" data-component="heading">
            {d.title}
          </h3>
        </div>
      </a>
    </article>
  );
}
