import type { MediaCard2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCard2Data = {
  id: string;
  text: string;
  href: string;
  alt: string;
  title: string;
  ariaLabel: string;
  href2: string;
};
/** A card with media + heading. */
export default function MediaCard2({ d, styles }: { d: MediaCard2Data; styles: MediaCard2Styles }) {
  return (
    <div className={cn("h-[415.3px] min-h-px block relative max-w-[33.3333%] max-h-[1e+06px] mb-5 px-[0.9375rem] shrink-0 basis-1/3 max-md:max-w-none max-md:shrink-[initial] max-md:basis-[initial] md:max-lg:h-[20.1875rem] 2xl:hidden", styles.className)}>
      <article className={cn("border border-solid border-color-004 block relative max-w-full max-h-[1e+06px] rounded-sm leading-[1.625rem] bg-background 2xl:hidden", styles.className2)} id={d.id}>
        <div className={cn("h-6.5 block absolute top-2.5 -left-2 z-2 max-h-[1e+06px] py-[0.1875rem] px-2.5 text-background text-sm font-bold leading-5 [text-shadow:var(--clr-21)_0px_1px_0px] bg-color-017 shadow-[var(--clr-22)_0px_1px_0px_0px] 2xl:hidden before:content-[''] before:block before:absolute before:top-6.5 before:-bottom-2 before:left-0 before:w-2 before:h-2 2xl:before:hidden", styles.className3)}>
          {d.text}
        </div>
        {" "}
        <a className="inline max-h-[1e+06px] text-primary cursor-pointer 2xl:hidden" data-component="link" aria-hidden="true" href={d.href}>
          {" "}
          <img className="w-[23.1875rem] h-69.5 block max-w-full max-h-[1e+06px] overflow-clip align-top max-md:w-[20.8125rem] max-md:h-62.5 md:max-lg:w-[13.8125rem] md:max-lg:h-[10.3125rem] 2xl:hidden" data-component="image" alt={d.alt} src="/assets/cloned/images/1b2495825031.jpg" />
          {" "}
        </a>
        {" "}
        <div className="block max-h-[1e+06px] p-[0.5625rem] text-color-006 2xl:hidden">
          <h3 className="block max-h-[1e+06px] text-[1.75rem] font-bold leading-[2.25rem] max-lg:text-2xl max-lg:leading-[1.9375rem] 2xl:hidden" data-component="heading">
            {d.title}
          </h3>
          {" "}
          <div className="block max-h-[1e+06px] my-[0.3125rem] 2xl:hidden">
            <a className="w-full border border-solid border-color-005 inline-block max-h-[1e+06px] py-1.5 px-3 rounded-sm align-middle text-background text-sm leading-5 tracking-[1.63px] text-center uppercase bg-color-013 cursor-pointer 2xl:hidden" data-component="button" aria-label={d.ariaLabel} href={d.href2}>
              {"\n\t\t\t\t\t\tEnroll Now\t\t\t\t\t"}
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </article>
      {" "}
    </div>
  );
}
