import type { DittoNodeMetaMap } from "../ditto-meta";
import type { ListRow2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow2Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow2({ d, meta, styles }: { d: ListRow2Data; meta: DittoNodeMetaMap; styles: ListRow2Styles }) {
  return (
    <li data-ditto-id={meta[0]?.anchor} className="list-item py-2 pr-[0.9375rem] pointer-events-none">
      <a className={cn("inline-flex gap-5 text-lg font-normal leading-[1.4375rem] cursor-pointer pointer-events-none before:content-[''] before:block before:w-2 before:h-2 before:mt-2 before:transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] before:origin-[4px_4px] max-lg:before:transform-[none] max-lg:before:origin-[initial]", styles.className)} data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
