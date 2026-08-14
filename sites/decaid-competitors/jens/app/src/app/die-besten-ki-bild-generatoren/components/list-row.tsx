import type { ListRowStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRowData = {
  text: string;
  text2: string;
  href: string;
  label: string;
  text3: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className={cn("list-item", styles.className)}>
      {d.text}
      <strong className="inline font-medium">
        {d.text2}
      </strong>
      {" "}
      <strong className="inline font-medium">
        <a className="inline text-primary underline cursor-pointer" data-component="link" href={d.href}>
          {d.label}
        </a>
      </strong>
      {d.text3}
    </li>
  );
}
