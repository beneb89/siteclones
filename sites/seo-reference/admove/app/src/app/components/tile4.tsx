import type { Tile4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile4Data = {
  href: string;
  description: string;
};
/** A content tile. */
export default function Tile4({ d, styles }: { d: Tile4Data; styles: Tile4Styles }) {
  return (
    <div className={cn("w-78 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-lg:whitespace-pre max-lg:text-nowrap", styles.className)}>
      <p className={cn("block [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base leading-6 tracking-[0.16px]", styles.className2)} dir="auto">
        <a className="inline text-muted-foreground cursor-pointer hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)]" data-component="link" href={d.href}>
          {d.description}
        </a>
      </p>
    </div>
  );
}
