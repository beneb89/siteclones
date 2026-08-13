import type { ListRow2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow2Data = {
  href: string;
  label: string;
  label2: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className="list-item leading-4">
      <a className={cn("h-6 min-h-5.5 inline-block relative py-0.5 text-muted text-sm leading-5 cursor-pointer after:content-[''] after:block after:absolute after:top-6 after:-bottom-px after:left-0 after:w-0 after:h-px after:bg-color-009 hover:text-color-001", styles.className)} data-component="link" href={d.href}>
        {d.label}
        <span className="inline ml-1.5 text-color-014 text-[0.625rem] leading-[0.875rem]">
          {d.label2}
        </span>
      </a>
    </li>
  );
}
