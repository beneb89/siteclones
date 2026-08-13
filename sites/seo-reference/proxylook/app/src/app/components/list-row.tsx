import type { ListRowStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRowData = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className="border border-solid border-color-006 grid py-3 px-3.5 rounded-lg items-start gap-2.5 text-accent text-sm leading-[1.3125rem] bg-surface-8 grid-cols-[22px_1fr]">
      <span className="h-5.5 flex mt-px rounded-[50%] justify-center items-center text-surface [font-family:'JetBrains_Mono',_ui-monospace,_monospace] text-[0.6875rem] font-bold leading-[1.0625rem]" style={{ backgroundImage: "linear-gradient(135deg, var(--primary), var(--clr-10))" }}>
        {d.text}
      </span>
      <span className={cn("block", styles.className)}>
        {d.text2}
      </span>
    </li>
  );
}
