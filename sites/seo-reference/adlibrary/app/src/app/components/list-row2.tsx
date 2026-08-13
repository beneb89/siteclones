import type { ListRow2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow2Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className={cn("list-item", styles.className)}>
      <a className="block ml-3 py-1 text-muted-foreground [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm font-light leading-5 cursor-pointer hover:text-accent hover:outline-accent hover:[text-decoration-color:var(--accent)] focus:outline-muted-foreground focus:[text-decoration-color:var(--muted-foreground)]" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
