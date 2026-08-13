import type { ListRow3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow3Data = {
  text: string;
  text2: string;
  text3: string;
};
/** A list row. */
export default function ListRow3({ d, styles }: { d: ListRow3Data; styles: ListRow3Styles }) {
  return (
    <li className={cn("list-item", styles.className)}>
      {d.text}
      <code className="inline py-[2.7px] px-[0.3375rem] rounded-md [font-family:ui-monospace,_SFMono-Regular,_'SF_Mono',_Menlo,_Consolas,_'Liberation_Mono',_monospace] text-sm leading-[1.25rem] whitespace-break-spaces bg-color-001">
        {d.text2}
      </code>
      {d.text3}
    </li>
  );
}
