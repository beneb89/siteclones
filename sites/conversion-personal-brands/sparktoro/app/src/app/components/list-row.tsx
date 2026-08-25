import type { ListRowStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRowData = {
  text: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className={cn("border border-solid border-border list-item py-[0.5625rem] px-4.5 rounded-[45px] text-[0.9375rem] leading-[1.4375rem] cursor-pointer", styles.className)} data-component="button" role="button">
      {d.text}
    </li>
  );
}
