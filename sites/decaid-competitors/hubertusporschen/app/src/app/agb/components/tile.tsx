import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  href: string;
  label: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className="block relative">
      <a className={cn("border-b border-solid border-b-clr-1 inline-flex pb-0.5 items-center leading-[0.9375rem] cursor-pointer", styles.className)} data-component="button" aria-expanded="false" aria-haspopup="true" href={d.href}>
        {d.label}
        <span className="block ml-1 text-[0.625rem] leading-2.5">
          ▾
        </span>
        {" "}
      </a>
      {"  "}
    </div>
  );
}
