import type { ListRow5Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type ListRow5Data = {
  text: string;
  text2: string;
  text3: string;
};
/** A list row. */
export default function ListRow5({ d, styles }: { d: ListRow5Data; styles: ListRow5Styles }) {
  return (
    <li className={cn("grid py-5 items-start gap-5 grid-cols-[32px_1fr] 2xl:hidden", styles.className)}>
      <span className="block mt-1 text-color-011 [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-sm font-semibold leading-[1.5rem] max-md:leading-[1.375rem] 2xl:hidden" aria-hidden="true">
        {d.text}
      </span>
      {" "}
      <div className="block 2xl:hidden">
        <strong className="block mb-1 text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-lg font-semibold leading-[1.4375rem] 2xl:hidden">
          {d.text2}
        </strong>
        {" "}
        <span className="inline text-muted-foreground text-[0.9375rem] leading-6 2xl:hidden">
          {d.text3}
        </span>
        {" "}
      </div>
      {" "}
    </li>
  );
}
