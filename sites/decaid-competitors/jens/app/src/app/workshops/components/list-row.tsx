import type { ListRowStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRowData = {
  text: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className={cn("flex items-start gap-3 font-light leading-[1.5625rem]", styles.className)}>
      <span className="flex mt-1 rounded-full justify-center items-center shrink-0 text-color-002 text-[0.8125rem] font-semibold leading-[1.25rem] bg-primary h-6 w-6" aria-hidden="true">
        ✓
      </span>
      <span className="block">
        {d.text}
      </span>
    </li>
  );
}
