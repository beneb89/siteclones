import type { ListRowStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRowData = {
  description: string;
  ariahidden?: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className="list-item" aria-hidden={d.ariahidden}>
      <div className="h-4 flex relative flex-col justify-center items-start content-start shrink-0 gap-2.5 overflow-hidden">
        <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap", styles.className)}>
          <p className="block text-color-001 [font-family:'Suisse_Int'l_Regular',_'Suisse_Int'l_Regular_Placeholder',_sans-serif] text-sm leading-[0.9375rem] tracking-[0.7px] text-left uppercase">
            {d.description}
          </p>
        </div>
      </div>
    </li>
  );
}
