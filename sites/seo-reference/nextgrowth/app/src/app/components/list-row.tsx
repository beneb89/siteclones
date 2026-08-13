import type { ListRowStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRowData = {
  id: string;
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className="list-item" id={d.id}>
      <a className={cn("block relative py-[0.2125rem] px-[1.275rem] text-accent [font-family:Poppins,_sans-serif] font-medium cursor-pointer after:content-[''] after:block after:absolute after:top-8 after:bottom-0 after:h-0.5 after:bg-accent after:transform-[matrix(0,0,0,0,0,0)] max-lg:after:right-1/2 max-lg:after:w-[calc(100%_-_40.8px)] max-lg:after:top-auto max-lg:after:left-auto max-lg:after:transform-[none] max-lg:after:origin-[initial]", styles.className)} data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
