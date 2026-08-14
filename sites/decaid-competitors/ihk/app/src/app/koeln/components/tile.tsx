import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  ariaLabel: string;
  href: string;
  id: string;
  label: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className={cn("flex relative max-w-[33.3333%] mb-4 px-2 grow basis-1/3 max-md:max-w-[50%] max-md:basis-1/2", styles.className)}>
      <a className={cn("w-full h-27 flex relative max-h-27 pt-2.5 pb-4.5 px-6 rounded-[18px] items-end overflow-hidden leading-6 underline bg-background shadow-[var(--clr-3)_0px_4px_20px_-5px] cursor-pointer max-md:min-h-21 max-md:pb-[0.9375rem] max-md:px-2.5 max-md:rounded-[14px] max-md:text-base max-md:leading-[1.1875rem] md:max-lg:rounded-2xl md:max-lg:leading-[1.375rem] 2xl:leading-[1.625rem] before:content-[''] before:block before:absolute before:bottom-0 before:inset-x-0 before:h-2 before:bg-accent max-md:before:h-1.5", styles.className2)} data-component="link" aria-label={d.ariaLabel} href={d.href} id={d.id}>
        {d.label}
      </a>
      {" "}
    </div>
  );
}
