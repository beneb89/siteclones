import type { ListRow5Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow5Data = {
  text: string;
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow5({ d, styles }: { d: ListRow5Data; styles: ListRow5Styles }) {
  return (
    <li className={cn("list-item 2xl:hidden", styles.className)}>
      {d.text}
      <a className="inline text-color-024 cursor-pointer 2xl:hidden" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
