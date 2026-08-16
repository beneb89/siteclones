import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  description: string;
  href: string;
  description2: string;
  description3: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <p className={cn("block", styles.className)}>
      {d.description}
      <strong className="inline font-bold">
        <a className="inline font-semibold underline cursor-pointer" data-component="link" href={d.href} rel="noreferrer noopener" target="_blank">
          {d.description2}
        </a>
      </strong>
      {d.description3}
    </p>
  );
}
