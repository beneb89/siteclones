import type { Tile4Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile4Data = {
  description: string;
  href: string;
  description2: string;
  description3: string;
};
/** A content tile. */
export default function Tile4({ d, styles }: { d: Tile4Data; styles: Tile4Styles }) {
  return (
    <p className={cn("block", styles.className)}>
      {d.description}
      <a className="inline font-semibold underline cursor-pointer" data-component="link" href={d.href} rel="noopener noreferrer" target="_blank">
        {d.description2}
      </a>
      {d.description3}
    </p>
  );
}
