import type { ListRowStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRowData = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className="box-content flex pr-2.5 items-center max-md:hidden">
      <a className={cn("box-content h-[1.3125rem] block relative pt-[0.3125rem] pb-[0.9375rem] px-2.5 text-foreground [font-family:Ryker,_sans-serif] cursor-pointer max-md:hidden before:content-[''] before:block before:absolute before:-top-[0.3125rem] before:-right-[1.5625rem] before:bottom-0 before:-left-[0.3125rem] before:h-11.5 before:bg-foreground before:opacity-0 before:rounded-tl-[10px] max-lg:before:hidden", styles.className)} data-component="link" href={d.href}>
        <span className={cn("box-content inline relative z-1 leading-[1.0625rem] max-md:hidden", styles.className2)}>
          {d.label}
        </span>
      </a>
    </li>
  );
}
