import type { ListRow3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow3Data = {
  text: string;
  text2: string;
  text3: string;
  text4: string;
};
/** A list row. */
export default function ListRow3({ d, styles }: { d: ListRow3Data; styles: ListRow3Styles }) {
  return (
    <li className={cn("grid py-5 items-baseline gap-8 grid-cols-[auto_1fr_auto] max-md:gap-2 max-md:grid-cols-1 2xl:hidden", styles.className)}>
      <span className="block text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] font-semibold leading-[1.1875rem] tracking-[1.98px] max-md:leading-[1.125rem] 2xl:hidden">
        {d.text}
      </span>
      {" "}
      <div className="block [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-xl font-medium leading-6.5 tracking-[-0.2px] 2xl:hidden">
        {d.text2}
        <em className="block mt-1 text-muted-foreground text-sm font-normal italic leading-[1.125rem] 2xl:hidden">
          {d.text3}
        </em>
      </div>
      {" "}
      <span className="block text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] leading-[1.0625rem] tracking-[1.4px] uppercase max-md:leading-4 2xl:hidden">
        {d.text4}
      </span>
      {" "}
    </li>
  );
}
