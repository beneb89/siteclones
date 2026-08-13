import type { DittoNodeMetaMap } from "../ditto-meta";
import type { MediaCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaCardData = {
  alt: string;
  imgSrc: string;
  href: string;
  href2: string;
  label: string;
  text: string;
  title: string;
  href3: string;
  text2: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, meta, styles }: { d: MediaCardData; meta: DittoNodeMetaMap; styles: MediaCardStyles }) {
  return (
    <div className={cn("block max-w-[calc(33.3333%_-_40px)] max-md:max-w-none", styles.className)}>
      <div className="h-full flex flex-col">
        <figure className="block relative rounded-lg overflow-hidden aspect-[4/3]">
          <img className={cn("w-full h-68 block max-w-full overflow-clip object-cover aspect-[auto_430/324] align-top text-clr-1 max-md:h-[15.6875rem] 2xl:h-[20.1875rem]", styles.className2)} data-component="image" alt={d.alt} height="324" src={d.imgSrc} width="430" />
          <figcaption className="w-[363.3px] h-[272.5px] flex absolute top-0 left-0 opacity-0 rounded-lg flex-col justify-center items-center gap-7.5 bg-clr-11 pointer-events-none">
            <a className={cn("w-[9.6875rem] h-13 min-h-13 flex py-[0.3125rem] px-3.5 rounded-lg justify-center items-center text-foreground text-xl font-normal leading-[1.5625rem] bg-background cursor-pointer pointer-events-none max-md:w-[20.9375rem] max-md:h-[251.3px]", styles.className3)} data-component="link" href={d.href}>
              <div className={cn("flex items-baseline gap-2 pointer-events-none", styles.className4)}>
                <span className={cn("block pointer-events-none", styles.className5)}>
                  View Design
                </span>
                <svg className={cn("w-auto h-3.5 block overflow-hidden pointer-events-none", styles.className6)} data-component="icon" height="14" width="7" fill="currentColor">
                  <use xlinkHref="#btn-arrow-right" />
                </svg>
              </div>
            </a>
          </figcaption>
        </figure>
        <div className={cn("flex pt-6 flex-col grow", styles.className7)}>
          <div className="h-[1.5625rem] min-h-[1.5625rem] flex mb-3 items-center gap-5">
            <a className="h-[1.5625rem] min-h-[1.5625rem] flex py-[0.3125rem] px-3 rounded-[20px] items-center text-foreground text-[0.6875rem] font-medium leading-[0.875rem] uppercase bg-color-003 cursor-pointer hover:border-clr-27 hover:text-clr-27 hover:outline-clr-27 hover:[text-decoration-color:var(--clr-27)] focus:border-foreground focus:outline-foreground focus:[text-decoration-color:var(--foreground)]" data-component="button" href={d.href2}>
              {d.label}
            </a>
            <div className={cn("flex items-center gap-[1.5625rem] text-sm font-medium leading-[1.125rem]", styles.className8)}>
              <dl className="flex items-center gap-2">
                <dt className="flex items-center">
                  <svg className="w-5.5 h-[0.9375rem] block overflow-hidden" data-component="icon" height="15" width="22" fill="currentColor">
                    <use xlinkHref="#icon-view" />
                  </svg>
                </dt>
                <dd className="block">
                  {d.text}
                </dd>
              </dl>
            </div>
          </div>
          <h3 data-ditto-id={meta[17]?.anchor} className="block mb-2.5 text-2xl font-medium leading-[1.75rem]" data-component="heading">
            {d.title}
          </h3>
          <div className={cn("h-8.5 min-h-8.5 flex items-center gap-[0.3125rem] font-normal", styles.className9)}>
            <span className="block shrink-0">
              by
            </span>
            <a className="flex items-center gap-2 overflow-hidden text-accent text-lg leading-[1.4375rem] cursor-pointer hover:border-clr-21 hover:text-clr-21 hover:outline-clr-21 hover:[text-decoration-color:var(--clr-21)]" data-component="link" href={d.href3}>
              <strong className="block overflow-hidden font-medium whitespace-nowrap text-nowrap">
                {d.text2}
              </strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
