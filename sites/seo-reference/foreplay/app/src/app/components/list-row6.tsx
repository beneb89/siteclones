import type { ListRow6Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow6Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow6({ d, styles }: { d: ListRow6Data; styles: ListRow6Styles }) {
  return (
    <li className="list-item">
      <a className={cn("inline-block py-[0.1875rem] justify-center items-center text-color-001 cursor-pointer max-md:py-1.5 hover:border-color-002 hover:text-color-002 hover:outline-color-002 hover:[text-decoration-color:var(--color-002)]", styles.className)} data-component="link" href={d.href}>
        <div className={cn("block text-sm leading-5 tracking-[-0.09px]", styles.className2)}>
          {d.label}
        </div>
      </a>
    </li>
  );
}
