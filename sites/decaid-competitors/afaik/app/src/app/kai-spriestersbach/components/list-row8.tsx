import type { ListRow8Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow8Data = {
  href: string;
  rel: string;
  label: string;
};
/** A list row. */
export default function ListRow8({ d, styles }: { d: ListRow8Data; styles: ListRow8Styles }) {
  return (
    <li className={cn("box-content list-item", styles.className)}>
      <a className="box-content inline text-primary underline cursor-pointer" data-component="link" href={d.href} rel={d.rel} target="_blank">
        {d.label}
      </a>
    </li>
  );
}
