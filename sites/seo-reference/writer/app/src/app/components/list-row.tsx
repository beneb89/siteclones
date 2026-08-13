import type { DittoNodeMetaMap } from "../ditto-meta";
import type { ListRowStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRowData = {
  id: string;
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d, meta, styles }: { d: ListRowData; meta: DittoNodeMetaMap; styles: ListRowStyles }) {
  return (
    <li className="list-item px-[1.0625rem] [list-style-type:none] max-md:mb-[0.1875rem] max-lg:px-[0.3125rem]" id={d.id}>
      <a data-ditto-id={meta[1]?.anchor} className={cn("inline [font-family:Poppins,_sans-serif] text-sm font-semibold leading-5.5 whitespace-nowrap text-nowrap cursor-pointer max-md:text-[0.8125rem] max-md:leading-[1.4375rem] hover:border-color-002 hover:text-color-002 hover:outline-color-002 hover:[text-decoration-color:var(--color-002)]", styles.className)} data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
