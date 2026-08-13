import type { ListRowStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRowData = {
  href: string;
  text: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className={cn("h-17.5 min-h-17.5 flex relative items-center max-lg:h-10 max-lg:min-h-0", styles.className)}>
      <a className={cn("flex items-center text-xl font-semibold leading-[1.5625rem] whitespace-nowrap text-nowrap cursor-pointer max-lg:py-2.5 max-lg:[font-size:inherit] max-lg:leading-[inherit]", styles.className2)} data-component="link" href={d.href}>
        <strong className={cn("block font-medium", styles.className3)}>
          {d.text}
        </strong>
      </a>
    </li>
  );
}
