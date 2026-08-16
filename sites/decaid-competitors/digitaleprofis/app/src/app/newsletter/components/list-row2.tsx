import type { ListRow2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow2Data = {
  href: string;
  label: string;
  rel?: string;
  target?: string;
  ariacurrent?: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className="list-item">
      <a className={cn("inline font-semibold underline cursor-pointer max-lg:min-h-11 max-lg:block max-lg:py-[0.8125rem] max-lg:px-3.5 max-lg:rounded-[14px] max-lg:text-[0.9375rem] max-lg:leading-[1.0625rem] max-lg:[text-decoration-line:initial]", styles.className)} href={d.href} rel={d.rel} target={d.target} aria-current={d.ariacurrent}>
        {d.label}
      </a>
    </li>
  );
}
