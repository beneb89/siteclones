import type { ListRowStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRowData = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className={cn("list-item relative py-2 pl-6.5 text-muted-foreground text-[0.9375rem] leading-[1.4375rem] pointer-events-none 2xl:[pointer-events:initial] before:content-[''] before:block before:absolute before:top-3.5 before:right-108 before:left-0 before:w-2 before:h-0.5 before:bg-primary max-md:before:right-[16.6875rem]", styles.className)}>
      <strong className="inline text-foreground font-bold pointer-events-none 2xl:[pointer-events:initial]">
        {d.text}
      </strong>
      {d.text2}
    </li>
  );
}
