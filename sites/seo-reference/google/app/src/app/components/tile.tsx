import type { TileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TileData = {
  href: string;
  label: string;
  ariaLabel?: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <tab className={cn("flex relative shrink-0 [pointer-events:all]", styles.className)}>
      <a className={cn("h-12 flex px-4.5 items-center text-surface-3 [font-family:'Google_Sans',_'Noto_Sans',_'Noto_Sans_JP',_'Noto_Sans_KR',_'Noto_Naskh_Arabic',_'Noto_Sans_Thai',_'Noto_Sans_Hebrew',_'Noto_Sans_Bengali',_sans-serif] text-sm font-medium leading-5 whitespace-nowrap [word-break:break-word] text-nowrap cursor-pointer [pointer-events:all] focus:border-clr-10 focus:text-clr-10 focus:outline-clr-10 focus:[text-decoration-color:var(--clr-10)]", styles.className2)} data-component="link" href={d.href} aria-label={d.ariaLabel}>
        {d.label}
      </a>
      {" "}
    </tab>
  );
}
