import type { ListRow3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow3Data = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow3({ d, styles }: { d: ListRow3Data; styles: ListRow3Styles }) {
  return (
    <li className={cn("list-item text-muted-foreground", styles.className)}>
      <em className="inline italic">
        {d.text}
      </em>
      {" "}
      <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-sm leading-[1.25rem] bg-surface">
        {d.text2}
      </code>
    </li>
  );
}
