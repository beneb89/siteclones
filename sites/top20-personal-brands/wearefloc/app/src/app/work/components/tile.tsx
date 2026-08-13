import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  href: string;
  description: string;
  dir?: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:hidden", styles.className)}>
      <p className="block text-color-001 [font-family:'Geist_Mono_Regular',_'Geist_Mono_Regular_Placeholder',_monospace] text-sm leading-[1.125rem] text-center uppercase max-lg:hidden" dir={d.dir}>
        <a className="inline max-lg:hidden" data-component="link" href={d.href}>
          {d.description}
        </a>
      </p>
    </div>
  );
}
