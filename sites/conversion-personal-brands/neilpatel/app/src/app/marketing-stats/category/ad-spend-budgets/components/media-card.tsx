import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../../../lib/utils";
export type MediaCardData = {
  href: string;
  alt: string;
  height: string;
  imgSrc: string;
  srcSet: string;
  href2: string;
  title: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <div className="block basis-[calc(33.3333%_-_16px)] max-lg:basis-full">
      <article className={cn("border border-solid border-border flex p-4 rounded-lg items-center gap-4 bg-background", styles.className)}>
        <a className="h-30 block rounded-sm shrink-0 basis-[120px] overflow-hidden aspect-square text-primary cursor-pointer" data-component="link" href={d.href}>
          <img className={cn("w-30 h-30 block max-w-full overflow-clip object-cover", styles.className2)} data-component="image" alt={d.alt} height={d.height} sizes="auto, (max-width: 350px) 100vw, 350px" src={d.imgSrc} srcSet={d.srcSet} width="350" />
        </a>
        {" "}
        <div className="flex min-w-0 flex-col grow">
          <a className="block text-muted-foreground text-[0.8125rem] font-medium leading-5 tracking-[0.5px] uppercase cursor-pointer" data-component="link" href="/marketing-stats/category/ad-spend-budgets">
            {"Ad Spend & Budgets"}
          </a>
          {" "}
          <h3 className="block mb-2 text-color-002 text-[1.3125rem] font-medium leading-0.5" data-component="heading">
            <a className="inline text-color-003 text-lg leading-7 cursor-pointer" data-component="link" href={d.href2}>
              {d.title}
            </a>
          </h3>
          {" "}
        </div>
        {" "}
      </article>
      {" "}
    </div>
  );
}
