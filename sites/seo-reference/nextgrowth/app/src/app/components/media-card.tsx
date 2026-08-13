import type { MediaCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaCardData = {
  ariaLabel: string;
  id: string;
  ariaLabel2: string;
  href: string;
  alt: string;
  height: string;
  imgSrc: string;
  srcSet: string;
  kind?: string;
  kind2?: string;
  href2: string;
  title: string;
  kind3?: string;
  dateTime: string;
  date: string;
  dateTime2: string;
  ariahidden?: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <li className="w-137 list-item relative mr-10 shrink-0 max-md:w-[14.4375rem] md:max-lg:w-73 2xl:w-[34.5625rem]" aria-label={d.ariaLabel} aria-roledescription="slide" id={d.id} role="tabpanel" aria-hidden={d.ariahidden}>
      <article className={cn("block rounded-lg overflow-hidden bg-surface shadow-[var(--clr-1)_0px_15px_15px_-10px]", styles.className)}>
        <a className="block relative pb-[365.3px] overflow-hidden text-primary underline cursor-pointer max-md:pb-38.5 md:max-lg:pb-[194.7px] 2xl:pb-[368.7px] hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] focus:border-background focus:text-background focus:outline-background focus:[text-decoration-color:var(--background)]" data-component="link" aria-hidden="true" aria-label={d.ariaLabel2} href={d.href} role="presentation">
          {" "}
          <div className="h-full block absolute top-0 inset-x-0 hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]">
            <img className={cn("w-137 h-[22.8125rem] block max-w-full flex-1 overflow-clip object-cover align-bottom max-md:w-[14.4375rem] max-md:h-38.5 md:max-lg:w-73 md:max-lg:h-[12.1875rem] 2xl:w-[34.5625rem] 2xl:h-[23.0625rem]", styles.className2)} data-component="image" alt={d.alt} height={d.height} sizes="(max-width: 768px) 100vw, 768px" src={d.imgSrc} srcSet={d.srcSet} width="768" />
            {" "}
          </div>
          {" "}
        </a>
        {" "}
        <div className="block p-8 max-md:p-6">
          <header className="block mb-[1.0625rem]">
            {" "}
            <h3 className="block text-background [font-family:Poppins,_sans-serif] text-xl font-bold leading-7.5 [overflow-wrap:break-word]" data-component={d.kind}>
              <a className="inline cursor-pointer" data-component={d.kind2} href={d.href2} rel="bookmark">
                {d.title}
              </a>
            </h3>
            <div className="flex my-[0.85rem] flex-wrap text-sm leading-[1.375rem]">
              <span className="flex flex-wrap items-center after:content-[''] after:block after:w-1 after:h-1 after:mx-2 after:bg-foreground after:opacity-80 after:rounded-tl-full">
                <span className="block mr-[0.2rem]">
                  By
                </span>
                <span className="block">
                  <a className="inline cursor-pointer" data-component={d.kind3} href="/about/">
                    The Nguyen
                  </a>
                </span>
              </span>
              {" "}
              <span className="flex flex-wrap items-center after:content-[''] after:hidden after:w-1 after:h-1 after:mx-2 after:bg-foreground after:opacity-80 after:rounded-tl-full">
                {" "}
                <time className="block whitespace-nowrap text-nowrap" dateTime={d.dateTime} itemProp="datePublished">
                  {d.date}
                </time>
                <time className="hidden min-w-0 whitespace-nowrap text-nowrap" dateTime={d.dateTime2} itemProp="dateModified">
                  August 12, 2026
                </time>
                {" "}
              </span>
              {" "}
            </div>
            {" "}
          </header>
          {"   "}
        </div>
        {" "}
      </article>
      {" "}
    </li>
  );
}
