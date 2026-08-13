import type { Tile2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile2Data = {
  href: string;
  description: string;
  kind?: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <div className={styles.className}>
      <a className={cn("max-lg:h-17 max-lg:py-2.5 max-lg:px-5 after:content-[''] after:block after:absolute after:inset-0", styles.className2)} href={d.href} data-component={d.kind}>
        <div className={styles.className3}>
          <p className={cn("max-lg:text-[2.5rem] max-lg:leading-12 max-lg:tracking-[-0.8px]", styles.className4)}>
            {d.description}
          </p>
        </div>
      </a>
    </div>
  );
}
