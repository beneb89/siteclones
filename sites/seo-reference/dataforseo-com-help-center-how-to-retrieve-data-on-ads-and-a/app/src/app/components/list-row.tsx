import type { DittoNodeMetaMap } from "../ditto-meta";
import type { ListRowStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRowData = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d, meta, styles }: { d: ListRowData; meta: DittoNodeMetaMap; styles: ListRowStyles }) {
  return (
    <li className="box-content list-item max-lg:invisible">
      <a data-ditto-id={meta[1]?.anchor} className={cn("box-content h-8.5 flex relative z-1 py-2 px-4 rounded-sm items-center gap-2 overflow-hidden text-color-007 text-base font-bold leading-8.5 cursor-pointer max-lg:invisible before:content-[''] before:block before:absolute before:inset-y-0 before:-z-1 before:w-0 before:h-12.5 before:bg-accent before: before:origin-[0px_25px] max-lg:before:hidden max-lg:before:left-1/2 max-lg:before:h-full max-lg:before:right-auto max-lg:before:bottom-auto max-lg:before:transform-[none] max-lg:before:origin-[initial]", styles.className)} data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
