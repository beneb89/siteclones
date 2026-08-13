import type { CardLinkStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type CardLinkData = {
  href: string;
  alt: string;
  imgSrc: string;
  srcSet: string;
  style: string;
  title: string;
  description: string;
  alt2: string;
  height: string;
  imgSrc2: string;
  srcSet2: string;
  width: string;
};
/** A linked card. */
export default function CardLink({ d, styles }: { d: CardLinkData; styles: CardLinkStyles }) {
  return (
    <a className="block cursor-pointer" data-component="link" href={d.href}>
      <div className={cn("h-full flex relative p-8 rounded-2xl items-end gap-5 overflow-hidden aspect-[4/3] text-background max-lg:p-5 max-md:aspect-square", styles.className)}>
        <img className="w-full block absolute top-0 left-0 min-w-0 max-w-full overflow-clip object-cover aspect-[auto_750/600] align-middle text-clr-0 h-full" data-component="image" alt={d.alt} height="600" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw" src={d.imgSrc} srcSet={d.srcSet} width="750" />
        <div className="w-148 h-[18.5rem] block absolute top-[9.25rem] left-0 min-w-0 max-md:w-[20.9375rem] max-md:h-[20.9375rem] max-md:top-0 md:max-lg:w-182 md:max-lg:h-[22.75rem] md:max-lg:top-[11.375rem] 2xl:w-188 2xl:h-[23.5rem] 2xl:top-[11.75rem]" />
        <div className="w-148 h-55.5 block absolute top-55.5 left-0 min-w-0 max-md:w-[20.9375rem] max-md:h-[167.5px] max-md:top-[167.5px] md:max-lg:w-182 md:max-lg:h-[17.0625rem] md:max-lg:top-[17.0625rem] 2xl:w-188 2xl:h-70.5 2xl:top-70.5" style={d.style} />
        <div className="block relative">
          <h3 className="block max-w-96 mb-5 text-[2.6875rem] font-medium leading-[2.6875rem] tracking-[-2.16px] text-balance max-md:text-3xl max-md:leading-[1.875rem] max-md:tracking-[-1.48px] max-lg:max-w-none md:max-lg:text-4xl md:max-lg:leading-[2.25rem] md:max-lg:tracking-[-1.78px] 2xl:text-[3.3125rem] 2xl:leading-[3.3125rem] 2xl:tracking-[-2.64px]" data-component="heading">
            {d.title}
          </h3>
          <p className="block opacity-70 pr-42.5 text-[1.1875rem] leading-[1.75rem] text-balance max-lg:pr-32.5 max-md:text-sm max-md:leading-[1.3125rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.625rem] 2xl:text-xl 2xl:leading-7.5">
            {d.description}
          </p>
        </div>
        <div className={cn("flex absolute right-8 min-w-0 p-5 rounded-lg shrink-0 overflow-hidden bg-foreground w-40 max-lg:right-5 max-lg:w-[7.5rem]", styles.className2)}>
          <img className={cn("w-auto block max-w-full overflow-clip align-middle text-clr-0", styles.className3)} data-component="image" alt={d.alt2} height={d.height} src={d.imgSrc2} srcSet={d.srcSet2} width={d.width} />
        </div>
      </div>
    </a>
  );
}
