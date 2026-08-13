import type { Tile3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile3Data = {
  href: string;
  description: string;
};
/** A content tile. */
export default function Tile3({ d, styles }: { d: Tile3Data; styles: Tile3Styles }) {
  return (
    <div className={cn("block relative shrink-0 max-lg:hidden", styles.className)}>
      <a className="h-[2.4rem] flex relative p-2 rounded-lg flex-col justify-center items-center content-center gap-2.5 text-primary bg-clr-2 cursor-pointer max-lg:hidden" data-component="link" href={d.href}>
        <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:hidden", styles.className2)}>
          <p className={cn("block [font-family:'Raveo_Variable_Variable',_sans-serif] text-sm [font-weight:1000] leading-[1.375rem] tracking-[-0.28px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:hidden", styles.className3)} dir="auto">
            <strong className="inline max-lg:hidden">
              {d.description}
            </strong>
          </p>
        </div>
      </a>
    </div>
  );
}
