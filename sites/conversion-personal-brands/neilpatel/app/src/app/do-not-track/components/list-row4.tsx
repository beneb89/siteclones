import type { ListRow4Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow4Data = {
  href: string;
  label: string;
  rel?: string;
  target?: string;
};
/** A list row. */
export default function ListRow4({ d, styles }: { d: ListRow4Data; styles: ListRow4Styles }) {
  return (
    <li className="block relative ml-7.5">
      <a className={cn("inline-block text-base font-medium leading-[1.6875rem] cursor-pointer", styles.className)} data-component="link" href={d.href} rel={d.rel} target={d.target}>
        {d.label}
      </a>
    </li>
  );
}
