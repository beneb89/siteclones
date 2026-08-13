import type { ListRow4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow4Data = {
  text: string;
  href: string;
  label: string;
  text2: string;
};
/** A list row. */
export default function ListRow4({ d, styles }: { d: ListRow4Data; styles: ListRow4Styles }) {
  return (
    <li className={cn("list-item text-muted-foreground", styles.className)}>
      <strong className="inline text-foreground font-semibold">
        {d.text}
      </strong>
      {" → "}
      <a className="inline text-primary underline cursor-pointer hover:text-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-component="link" href={d.href}>
        {d.label}
      </a>
      {d.text2}
    </li>
  );
}
