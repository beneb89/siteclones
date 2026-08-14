import type { ListRowStyles } from "../_styles";
import { cn } from "../../../../../../../lib/utils";
export type ListRowData = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className={cn("block relative mt-1.5 pl-0.5 max-md:max-w-[10%] max-md:grow max-md:basis-[10%]", styles.className)}>
      <a className={cn("w-6.5 block relative z-1 [font-family:Korb,_sans-serif] text-[1.75rem] leading-10.5 text-center cursor-pointer max-md:w-[31.7px] before:content-[''] before:block before:absolute before:-z-1 before:w-6.5 max-md:before:w-[31.7px]", styles.className2)} data-component="link" href={d.href}>
        {d.label}
      </a>
      {" "}
    </li>
  );
}
