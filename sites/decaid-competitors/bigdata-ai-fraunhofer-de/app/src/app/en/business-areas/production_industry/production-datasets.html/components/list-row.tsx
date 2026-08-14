import type { ListRowStyles } from "../_styles";
import { cn } from "../../../../../../lib/utils";
export type ListRowData = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className={cn("list-item float-left pr-[0.3125rem] [list-style-type:none] max-md:relative max-md:-right-[0.9375rem] max-md:left-[0.9375rem] max-md:pt-[0.3125rem] max-md:align-top max-md:text-sm max-md:leading-4.5 max-md:[float:initial] max-md:[list-style-type:inherit] 2xl:pr-1.5 before:mr-[0.3125rem] before:text-xs", styles.className)}>
      <a className={cn("inline text-primary font-normal underline cursor-pointer max-md:text-[0.75rem] max-md:[word-break:break-word] max-md:[overflow-wrap:break-word] max-md:text-[color:inherit]", styles.className2)} data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
