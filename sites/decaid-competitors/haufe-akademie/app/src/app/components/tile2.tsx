import type { Tile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile2Data = {
  href: string;
  label: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <div className={cn("w-[298.5px] block max-w-full px-3 shrink-0 md:max-lg:w-94.5", styles.className)}>
      <div className="block mb-6">
        <a className={cn("h-19 block relative py-4 pr-4 pl-12 rounded-xl font-medium cursor-pointer", styles.className2)} data-component="link" href={d.href}>
          <i className="w-6 h-6 block absolute left-4 mr-3 py-1 rounded-full text-primary [font-family:'Font_Awesome_Pro'] font-black leading-4 text-center bg-surface" />
          {d.label}
        </a>
      </div>
    </div>
  );
}
