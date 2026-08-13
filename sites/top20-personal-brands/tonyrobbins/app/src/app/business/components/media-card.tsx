import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCardData = {
  alt: string;
  imgSrc: string;
  srcSet: string;
  style: string;
  title: string;
  href: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <li className="flex relative p-8 rounded-2xl items-end overflow-hidden aspect-[4/3] text-background text-balance bg-color-001 max-md:p-5 max-lg:aspect-square">
      <img className="w-full block absolute top-0 left-0 min-w-0 max-w-full overflow-clip object-cover aspect-[auto_750/600] align-middle text-clr-0 h-full" data-component="image" alt={d.alt} height="600" sizes="(min-width: 1024px) 50vw, 100vw" src={d.imgSrc} srcSet={d.srcSet} width="750" />
      <div className="w-147.5 h-[221.3px] block absolute top-[221.3px] left-0 z-5 min-w-0 max-md:w-[20.9375rem] max-md:h-[167.5px] max-md:top-[167.5px] md:max-lg:w-88.5 md:max-lg:h-[11.0625rem] md:max-lg:top-[11.0625rem] 2xl:w-187.5 2xl:h-[281.3px] 2xl:top-[281.3px]" style={d.style} />
      <div className={cn("flex relative z-10 flex-col items-start max-w-lg", styles.className)}>
        <div className="block mb-5">
          <div className="block text-clr-3 leading-7">
            <h3 className={cn("block my-[1.2rem] text-background text-[2.6875rem] font-medium leading-[2.6875rem] tracking-[-2.16px] max-md:text-3xl max-md:leading-[1.875rem] max-md:tracking-[-1.48px] md:max-lg:text-4xl md:max-lg:leading-[2.25rem] md:max-lg:tracking-[-1.78px] 2xl:text-[3.3125rem] 2xl:leading-[3.3125rem] 2xl:tracking-[-2.64px]", styles.className2)} data-component="heading">
              {d.title}
            </h3>
          </div>
        </div>
        <a className="block cursor-pointer" data-component="link" href={d.href} rel="noopener noreferrer" target="_blank">
          <span className="border border-solid border-background inline-flex py-4 px-8 rounded-full justify-center items-center gap-2 text-foreground text-sm font-medium leading-[1.375rem] tracking-[0.36px] text-center bg-background w-auto max-md:py-3 max-md:px-6 max-md:text-[0.8125rem] max-md:leading-[1.1875rem] max-md:tracking-[0.32px] md:max-lg:leading-[1.3125rem] md:max-lg:tracking-[0.35px] 2xl:text-[0.9375rem] 2xl:leading-[1.4375rem] 2xl:tracking-[0.39px]">
            <span className="block whitespace-nowrap">
              Learn more
            </span>
          </span>
        </a>
      </div>
    </li>
  );
}
