import type { ListRow7Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow7Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow7({ d, styles }: { d: ListRow7Data; styles: ListRow7Styles }) {
  return (
    <li className="list-item">
      <a className="inline-block max-w-full py-[0.1875rem] justify-center items-center text-color-001 cursor-pointer max-md:py-1.5 hover:border-color-002 hover:text-color-002 hover:outline-color-002 hover:[text-decoration-color:var(--color-002)]" data-component="link" href={d.href}>
        <div className={cn("block text-sm leading-5 tracking-[-0.09px]", styles.className)}>
          {d.label}
        </div>
      </a>
    </li>
  );
}
