import type { ListRow4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow4Data = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow4({ d, styles }: { d: ListRow4Data; styles: ListRow4Styles }) {
  return (
    <li className={cn("box-content list-item relative pl-3 before:content-['•'] before:block before:absolute before:inset-y-0 before:right-[47.0625rem] before:left-0 before:w-1.5 before:h-6 before:text-foreground before:text-base before:font-medium before:leading-6 max-md:before:right-[17.4375rem] md:max-lg:before:right-[630.5px]", styles.className)}>
      <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001">
        {d.text}
      </code>
      {d.text2}
    </li>
  );
}
