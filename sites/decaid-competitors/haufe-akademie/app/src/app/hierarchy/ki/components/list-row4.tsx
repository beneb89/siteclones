import type { ListRow4Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type ListRow4Data = {
  href: string;
  label: string;
  target?: string;
};
/** A list row. */
export default function ListRow4({ d, styles }: { d: ListRow4Data; styles: ListRow4Styles }) {
  return (
    <li className={cn("list-item py-1 text-sm font-medium leading-5 max-lg:[font-size:inherit] max-lg:leading-[inherit]", styles.className)}>
      <a className="inline cursor-pointer" data-component="link" href={d.href} target={d.target}>
        {d.label}
      </a>
    </li>
  );
}
