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
    <li className="list-item">
      <a className={cn("border-l-2 border-solid grid -ml-px py-2.5 px-3 gap-2.5 text-[0.8125rem] leading-[1.125rem] tracking-[-0.06px] cursor-pointer grid-cols-[32px_1fr]", styles.className)} data-component="link" href={d.href}>
        <span className={cn("block pt-px [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[0.9375rem] tracking-[0.63px]", styles.className2)}>
          {d.label}
        </span>
        <span className="block">
          {d.label2}
        </span>
      </a>
    </li>
  );
}
