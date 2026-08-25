import type { ListRow2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow2Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className={cn("list-item relative max-h-[1e+06px] leading-6.5 2xl:hidden before:content-[''] before:hidden before:absolute before:top-[0.9rem] before:left-0 before:w-[0.4375rem] before:h-[0.4375rem] before:bg-foreground before:rounded-tl-[50%] 2xl:before:hidden", styles.className)}>
      <a className="inline max-h-[1e+06px] text-color-001 cursor-pointer 2xl:hidden" data-component="link" href={d.href}>
        {d.label}
      </a>
      {" "}
    </li>
  );
}
