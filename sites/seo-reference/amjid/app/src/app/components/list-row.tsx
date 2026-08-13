import type { ListRowStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRowData = {
  href: string;
  label: string;
  ariacurrent?: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className="list-item">
      <a className={cn("inline relative py-2 [font-family:'JetBrains_Mono',_ui-monospace,_SFMono-Regular,_Menlo,_monospace] text-xs leading-[1.1875rem] tracking-[1.18px] uppercase cursor-pointer 2xl:tracking-[1.2px] after:content-[''] after:absolute after:-bottom-0.5 after:inset-x-0 after:h-px after:bg-primary", styles.className)} data-component="link" href={d.href} aria-current={d.ariacurrent}>
        {d.label}
      </a>
      {" "}
    </li>
  );
}
