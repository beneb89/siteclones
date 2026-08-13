import type { Tile6Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile6Data = {
  href: string;
  description: string;
};
/** A content tile. */
export default function Tile6({ d, styles }: { d: Tile6Data; styles: Tile6Styles }) {
  return (
    <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap", styles.className)}>
      <p className="block text-muted [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base leading-6 tracking-[0.16px]" dir="auto">
        <a className="inline text-muted-foreground cursor-pointer hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)]" data-component="link" href={d.href}>
          {d.description}
        </a>
      </p>
    </div>
  );
}
