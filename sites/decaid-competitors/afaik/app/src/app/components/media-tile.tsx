import type { MediaTileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTileData = {
  ariaLabel: string;
  href: string;
  alt: string;
  height: string;
  sizes: string;
  imgSrc: string;
  srcSet: string;
  width: string;
  href2: string;
  label: string;
  dateTime: string;
  date: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <li className={cn("box-content border border-solid border-clr-0 list-item clear-both mb-5 p-4 rounded-[14.4px] [overflow-wrap:break-word]", styles.className)}>
      <div className="box-content block mb-[0.85rem]">
        <a className="box-content inline-block [font-weight:650] cursor-pointer" data-component="link" aria-label={d.ariaLabel} href={d.href}>
          <img className={cn("box-content w-36.5 block max-w-full rounded-[8.8px] overflow-clip max-md:w-[18.4375rem] md:max-lg:w-[19.9375rem]", styles.className2)} data-component="image" alt={d.alt} height={d.height} sizes={d.sizes} src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
        </a>
      </div>
      <a className="box-content inline [font-weight:650] cursor-pointer" data-component="link" href={d.href2}>
        {d.label}
      </a>
      <time className="box-content block mt-[0.35rem] text-muted-foreground text-sm leading-[1.3125rem]" dateTime={d.dateTime}>
        {d.date}
      </time>
    </li>
  );
}
