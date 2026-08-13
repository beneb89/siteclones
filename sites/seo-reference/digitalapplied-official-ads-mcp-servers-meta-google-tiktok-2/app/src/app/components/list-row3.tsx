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
    <li className={cn("grid py-5 gap-4 grid-cols-[40px_1fr]", styles.className)}>
      <span className="block pt-1 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-xs leading-4.5 tracking-[0.96px]">
        {d.text}
      </span>
      <div className="block">
        <span className="block mb-1.5 text-base font-semibold leading-[1.375rem] tracking-[-0.08px]">
          {d.text2}
        </span>
        <span className="inline text-muted-foreground text-[0.9375rem] leading-[1.4375rem]">
          {d.text3}
        </span>
      </div>
    </li>
  );
}
