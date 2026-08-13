import type { ListRow4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow4Data = {
  href: string;
  label: string;
  target?: string;
};
/** A list row. */
export default function ListRow4({ d, styles }: { d: ListRow4Data; styles: ListRow4Styles }) {
  return (
    <li className="list-item">
      <a className="inline-block max-w-full py-[0.1875rem] justify-center items-center text-color-001 cursor-pointer max-md:py-1.5 hover:border-color-002 hover:text-color-002 hover:outline-color-002 hover:[text-decoration-color:var(--color-002)]" data-component="link" href={d.href} target={d.target}>
        <div className={cn("block text-sm leading-5 tracking-[-0.09px]", styles.className)}>
          {d.label}
        </div>
      </a>
    </li>
  );
}
