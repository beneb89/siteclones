import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../../../lib/utils";
export type MediaCardData = {
  href: string;
  alt: string;
  imgSrc: string;
  href2: string;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <div className="flex max-w-105 mb-14.5 items-center text-left">
      <a className="h-45 flex items-center shrink-0 text-color-007 cursor-pointer" data-component="link" href={d.href}>
        {" "}
        <img className="w-45 h-45 border border-solid border-surface-2 block max-w-full mr-6 rounded-[10px] overflow-clip object-cover aspect-[auto_400/400] [filter:grayscale(1)]" data-component="image" alt={d.alt} height="400" src={d.imgSrc} width="400" />
        {" "}
      </a>
      {" "}
      <div className="flex max-w-55 flex-col justify-start">
        <a className={cn("block text-primary cursor-pointer", styles.className)} data-component="link" href={d.href2}>
          {" "}
          <h4 className={cn("block text-base font-bold leading-[1.6875rem]", styles.className2)} data-component="heading">
            {d.title}
          </h4>
          {" "}
        </a>
        {" "}
        <p className={cn("block max-w-55 text-color-001 text-base font-normal leading-[1.6875rem]", styles.className3)}>
          {d.description}
        </p>
        {" "}
      </div>
      {" "}
    </div>
  );
}
