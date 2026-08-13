import type { ListRowStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRowData = {
  ariacurrent?: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className={cn("flex flex-col items-center overflow-hidden", styles.className)}>
      <a className={cn("h-8 flex relative max-w-full mb-2 py-1.5 px-2 rounded-md items-center text-center cursor-pointer after:content-[''] after:block after:absolute after:top-9.5 after:bottom-0 after:inset-x-0 after:h-0.5 after:-mb-2 hover:bg-color-001", styles.className2)} data-component="link" aria-current={d.ariacurrent} href="#">
        <span className={cn("block overflow-hidden before:block before:h-0 before:text-foreground before:text-sm before:font-semibold before:leading-[1.3125rem] before:text-center", styles.className3)}>
          {d.label}
        </span>
      </a>
    </li>
  );
}
