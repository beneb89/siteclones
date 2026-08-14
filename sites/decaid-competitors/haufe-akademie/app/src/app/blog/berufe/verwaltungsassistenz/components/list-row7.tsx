import type { ListRow7Styles } from "../_styles";
import { cn } from "../../../../../lib/utils";
export type ListRow7Data = {
  href: string;
  rel?: string;
  target?: string;
  label: string;
};
/** A list row. */
export default function ListRow7({ d, styles }: { d: ListRow7Data; styles: ListRow7Styles }) {
  return (
    <li className={cn("box-content list-item max-md:w-[20.3125rem]", styles.className)}>
      <a className="box-content inline font-medium cursor-pointer" data-component="link" href={d.href} rel={d.rel} target={d.target}>
        {d.label}
      </a>
    </li>
  );
}
