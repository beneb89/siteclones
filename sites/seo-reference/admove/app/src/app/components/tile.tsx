import type { TileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TileData = {
  href: string;
  description: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className={cn("block relative shrink-0 max-lg:hidden", styles.className)}>
      <a className="h-10 flex relative py-1 px-4 rounded-full justify-start items-center content-center gap-2 text-accent bg-clr-0 cursor-pointer max-lg:hidden" data-component="link" href={d.href}>
        <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:hidden", styles.className2)}>
          <p className="block text-background [font-family:'DM_Mono',_monospace] text-sm leading-6 tracking-[0.1px] text-left uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'ss01'] max-lg:hidden" dir="auto">
            {d.description}
          </p>
        </div>
      </a>
    </div>
  );
}
