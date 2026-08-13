import type { Tile5Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile5Data = {
  href: string;
  description: string;
  target?: string;
};
/** A content tile. */
export default function Tile5({ d, styles }: { d: Tile5Data; styles: Tile5Styles }) {
  return (
    <div className={cn("flex relative flex-col justify-start shrink-0", styles.className)}>
      <p className={cn("block [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base leading-6 tracking-[0.16px]", styles.className2)} dir="auto">
        <a className="inline text-muted-foreground cursor-pointer hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)]" data-component="link" href={d.href} target={d.target}>
          {d.description}
        </a>
      </p>
    </div>
  );
}
