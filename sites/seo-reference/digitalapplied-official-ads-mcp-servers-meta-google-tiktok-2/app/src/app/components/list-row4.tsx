import type { ListRow4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow4Data = {
  text: string;
};
/** A list row. */
export default function ListRow4({ d, styles }: { d: ListRow4Data; styles: ListRow4Styles }) {
  return (
    <li className={cn("flex py-2.5 items-center gap-2.5 text-color-007 text-sm leading-[1.25rem]", styles.className)}>
      <span className="block text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.25rem]">
        →
      </span>
      {d.text}
    </li>
  );
}
