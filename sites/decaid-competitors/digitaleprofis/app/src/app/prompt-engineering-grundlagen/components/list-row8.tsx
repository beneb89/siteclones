import type { ListRow8Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow8Data = {
  href: string;
  label: string;
  text: string;
};
/** A list row. */
export default function ListRow8({ d, styles }: { d: ListRow8Data; styles: ListRow8Styles }) {
  return (
    <li className={cn("list-item", styles.className)}>
      <a className="h-full grid py-4 items-center gap-y-1 gap-x-4 font-semibold cursor-pointer grid-cols-[1fr_auto]" data-component="link" href={d.href}>
        {" "}
        <span className="block col-start-1 text-color-008 text-xs [font-weight:520] leading-[1.0625rem]">
          {d.label}
        </span>
        {" "}
        <strong className="block col-start-1 text-lg font-black leading-[1.5rem] max-lg:text-base max-lg:leading-[1.3125rem]">
          {d.text}
        </strong>
        {" "}
        <span className="block col-start-2 row-start-1 row-end-[span_2] text-color-004 text-[1.375rem] leading-[1.375rem]" aria-hidden="true">
          →
        </span>
        {" "}
      </a>
      {" "}
    </li>
  );
}
