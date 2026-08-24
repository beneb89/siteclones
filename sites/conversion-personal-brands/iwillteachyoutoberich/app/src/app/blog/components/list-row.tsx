import type { ListRowStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRowData = {
  id: string;
  href: string;
  label: string;
  ariacurrent?: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className="list-item pl-[0.4375rem] [list-style-type:none] 2xl:pl-[0.5625rem]" id={d.id}>
      <a className={cn("inline bg-no-repeat cursor-pointer", styles.className)} style={{ backgroundImage: "linear-gradient(var(--foreground), var(--foreground))" }} data-component="link" href={d.href} aria-current={d.ariacurrent}>
        {d.label}
      </a>
    </li>
  );
}
