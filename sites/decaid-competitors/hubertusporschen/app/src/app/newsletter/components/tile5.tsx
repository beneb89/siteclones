import type { Tile5Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile5Data = {
  label: string;
};
/** A content tile. */
export default function Tile5({ d, styles }: { d: Tile5Data; styles: Tile5Styles }) {
  return (
    <button className={cn("hidden 2xl:border 2xl:border-solid 2xl:block 2xl:py-[0.6625rem] 2xl:px-4 2xl:[font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] 2xl:text-[0.6875rem] 2xl:font-semibold 2xl:leading-[1.1875rem] 2xl:tracking-[1.54px] 2xl:text-center 2xl:uppercase 2xl:cursor-pointer", styles.className)} type="button">
      {d.label}
    </button>
  );
}
