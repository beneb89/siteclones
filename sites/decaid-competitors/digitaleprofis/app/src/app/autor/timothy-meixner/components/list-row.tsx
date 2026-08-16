import type { ListRowStyles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type ListRowData = {
  href: string;
  label: string;
  rel?: string;
  target?: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className="list-item">
      <a className={cn("inline-flex items-center gap-[0.3125rem] text-color-002 text-[0.8125rem] [font-weight:520] leading-[1.3125rem] cursor-pointer", styles.className)} data-component="link" href={d.href} rel={d.rel} target={d.target}>
        {d.label}
      </a>
    </li>
  );
}
