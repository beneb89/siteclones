import type { Tile3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile3Data = {
  description: string;
  href: string;
  description2: string;
  description3: string;
};
/** A content tile. */
export default function Tile3({ d, styles }: { d: Tile3Data; styles: Tile3Styles }) {
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
