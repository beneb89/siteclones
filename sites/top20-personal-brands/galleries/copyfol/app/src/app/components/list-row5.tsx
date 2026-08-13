import type { ListRow5Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow5Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow5({ d, styles }: { d: ListRow5Data; styles: ListRow5Styles }) {
  return (
    <li className={cn("list-item", styles.className)}>
      <span className="inline mb-3 leading-[1.5rem] max-md:mb-1 max-md:leading-5">
        <a className="inline cursor-pointer" data-component="link" href={d.href} rel="noopener noreferrer" target="_blank">
          <span className="inline-flex justify-center items-center gap-2">
            <div className={cn("block relative py-2 rounded-sm text-base leading-5 text-left max-md:leading-[inherit]", styles.className2)} data-component="button" type="button">
              {d.label}
            </div>
          </span>
        </a>
      </span>
    </li>
  );
}
