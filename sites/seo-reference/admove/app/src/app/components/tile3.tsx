import type { Tile3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile3Data = {
  description: string;
};
/** A content tile. */
export default function Tile3({ d, styles }: { d: Tile3Data; styles: Tile3Styles }) {
  return (
    <td className={cn("w-[6.675rem] border-t border-solid border-t-border table-cell min-w-[6.675rem] p-2.5 align-top [overflow-wrap:anywhere]", styles.className)}>
      <p className="block text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        {d.description}
      </p>
    </td>
  );
}
