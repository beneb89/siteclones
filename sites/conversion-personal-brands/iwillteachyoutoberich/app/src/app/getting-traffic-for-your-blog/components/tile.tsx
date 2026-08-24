import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  text: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <ul className="grid mb-6 gap-1 [list-style-type:disc] list-inside grid-cols-1 2xl:mb-9 2xl:gap-1.5">
      <li className={cn("list-item relative pl-6 [list-style-type:none] list-outside 2xl:pl-9 before:content-['•'] before:block before:absolute before:inset-y-0 before:right-[576.1px] before:left-0 before:text-foreground before:text-base before:leading-[1.375rem] before:text-center max-md:before:right-[19.9375rem] max-lg:before:text-base max-lg:before:leading-[1.375rem] md:max-lg:before:right-156 2xl:before:right-216 2xl:before:text-2xl 2xl:before:leading-[2.125rem]", styles.className)} aria-level="1">
        <i className="inline">
          <span className="inline">
            {d.text}
          </span>
        </i>
      </li>
    </ul>
  );
}
