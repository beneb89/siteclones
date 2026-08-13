import type { Tile3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile3Data = {
  name: string;
  description: string;
};
/** A content tile. */
export default function Tile3({ d, styles }: { d: Tile3Data; styles: Tile3Styles }) {
  return (
    <label className="w-full flex relative justify-start items-center content-center shrink-0 gap-2.5 cursor-default">
      <input className="w-auto h-4.5 flex relative rounded-sm justify-center items-center shrink-0 overflow-hidden aspect-square bg-color-007 before:content-[''] before:block before:absolute before:inset-0 before:w-4.5 before:h-4.5 before:bg-clr-1 before:bg-contain before:[background-position:50%_50%] before:bg-no-repeat before:opacity-0 after:content-[''] after:block after:absolute after:inset-0 after:w-4.5 after:h-4.5 after:rounded-tl-sm" data-component="input" name={d.name} type="checkbox" />
      <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap", styles.className)}>
        <p className="block text-color-001 [font-family:'Suisse_Int'l_Regular',_'Suisse_Int'l_Regular_Placeholder',_sans-serif] text-xl leading-[1.8125rem] text-left max-lg:text-base max-lg:leading-[1.4375rem]">
          {d.description}
        </p>
      </div>
    </label>
  );
}
