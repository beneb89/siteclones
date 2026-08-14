import type { ListRowStyles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type ListRowData = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className={cn("flex items-center gap-2 text-muted-foreground text-xs font-medium leading-4", styles.className)}>
      <i className="block [font-family:'Font_Awesome_Pro'] text-[0.625rem] font-black leading-[0.625rem] text-center transform-[matrix(0,1,-1,0,0,0)] origin-[5.5px_4.79688px]" />
      {" "}
      <a className="block cursor-pointer" data-component="link" href={d.href}>
        {d.label}
      </a>
      {" "}
    </li>
  );
}
