import type { ListRow2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow2Data = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className={cn("list-item", styles.className)}>
      <code className="inline py-[2.7px] px-[0.3375rem] rounded-md [font-family:ui-monospace,_SFMono-Regular,_'SF_Mono',_Menlo,_Consolas,_'Liberation_Mono',_monospace] text-sm leading-[1.25rem] whitespace-break-spaces bg-color-001">
        {d.text}
      </code>
      {d.text2}
    </li>
  );
}
