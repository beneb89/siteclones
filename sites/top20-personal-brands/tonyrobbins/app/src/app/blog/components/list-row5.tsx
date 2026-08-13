import type { ListRow5Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow5Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow5({ d, styles }: { d: ListRow5Data; styles: ListRow5Styles }) {
  return (
    <li className="list-item">
      <a className={cn("h-full border border-solid flex py-3 px-6 rounded-full text-sm font-medium leading-[0.875rem] whitespace-nowrap text-nowrap cursor-pointer max-md:py-2 max-md:px-4 max-lg:leading-3.5 2xl:text-[0.9375rem] 2xl:leading-[0.9375rem]", styles.className)} data-component="link" href={d.href}>
        <span className="block">
          {d.label}
        </span>
      </a>
    </li>
  );
}
