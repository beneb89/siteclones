import type { DittoNodeMetaMap } from "../ditto-meta";
import type { MediaCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaCardData = {
  href: string;
  title: string;
  text: string;
  alt: string;
  imgSrc: string;
  srcSet: string;
  href2: string;
  href3: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, meta, styles }: { d: MediaCardData; meta: DittoNodeMetaMap; styles: MediaCardStyles }) {
  return (
    <article className={cn("w-[19.0625rem] block relative max-w-[25%] px-5 shrink-0 basis-1/4 max-md:w-[23.4375rem] max-md:max-w-full max-md:basis-full md:max-lg:w-90 md:max-lg:max-w-[50%] md:max-lg:basis-1/2 2xl:w-107.5", styles.className)}>
      <div className="h-full min-h-full flex relative p-6 rounded-xl flex-col overflow-hidden bg-border shadow-[var(--clr-1)_0px_1px_3px_0px]">
        <div className={cn("block relative", styles.className2)}>
          <h2 className="block max-w-[42.3125rem] text-2xl font-extrabold leading-[1.6875rem] tracking-[-0.3px] [word-break:break-word] [overflow-wrap:break-word]" data-component="heading">
            <a className={cn("inline relative z-2 cursor-pointer", styles.className3)} data-component="link" href={d.href}>
              {d.title}
            </a>
          </h2>
          {" "}
          <div className="flex mt-2 py-3 flex-wrap items-center text-muted-foreground text-xs font-semibold leading-4.5 tracking-[0.2px]">
            <div className="flex items-center">
              August 11, 2026
            </div>
          </div>
          <div className="block max-w-[42.3125rem] mt-2 text-muted-foreground text-sm leading-[1.5625rem] tracking-[-0.2px]">
            {d.text}
          </div>
        </div>
        <div className={cn("flex relative mt-4 flex-col self-stretch", styles.className4)}>
          <div data-ditto-id={meta[9]?.anchor} className="flex relative flex-col">
            <img className="w-[13.5625rem] h-[8.9375rem] block max-w-full overflow-clip object-cover aspect-[auto_380/250] align-middle max-md:w-[17.9375rem] max-md:h-[11.8125rem] md:max-lg:w-68 md:max-lg:h-[11.1875rem] 2xl:w-85.5 2xl:h-[14.0625rem]" data-component="image" alt={d.alt} height="250" sizes="auto, (max-width: 380px) 100vw, 380px" src={d.imgSrc} srcSet={d.srcSet} width="380" />
          </div>
          <a className="h-full block absolute top-0 inset-x-0 z-1 min-w-0 cursor-pointer" data-component="link" href={d.href2} />
        </div>
        <div className="border-t border-solid border-t-surface block relative mt-8 -mb-6 py-3.5 text-xs font-semibold leading-4.5 tracking-[0.2px] uppercase">
          <div className="block relative overflow-hidden">
            <div className="flex relative flex-wrap justify-between items-center text-muted-foreground">
              <div className="flex z-2 items-center">
                <div className="block">
                  <a className="inline relative z-2 text-foreground cursor-pointer" data-component="link" href={d.href3}>
                    {" Read More "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
