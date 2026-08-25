import type { ListRow2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow2Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className="list-item">
      <a className={cn("border border-solid border-muted flex p-5 rounded-[10px] items-center gap-[0.9375rem] text-muted-foreground text-lg font-medium leading-[1.375rem] cursor-pointer", styles.className)} data-component="link" href={d.href}>
        {" "}
        <span className="block shrink-0 text-color-036 text-[1.5625rem] leading-[1.5625rem]" aria-hidden="true">
          ★
        </span>
        {" "}
        <span className={cn("block", styles.className2)}>
          {d.label}
        </span>
        {" "}
      </a>
      {" "}
    </li>
  );
}
