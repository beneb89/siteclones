import type { DittoNodeMetaMap } from "../ditto-meta";
import type { ListRow5Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow5Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow5({ d, meta, styles }: { d: ListRow5Data; meta: DittoNodeMetaMap; styles: ListRow5Styles }) {
  return (
    <li className="list-item leading-4">
      <a data-ditto-id={meta[1]?.anchor} className={cn("h-5.5 min-h-5.5 inline-block relative py-0.5 text-muted text-[0.8125rem] leading-[0.8125rem] cursor-pointer after:content-[''] after:block after:absolute after:top-5.5 after:-bottom-px after:left-0 after:w-0 after:h-px after:bg-color-009 hover:text-color-001", styles.className)} data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
