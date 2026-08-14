import type { ListRowStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRowData = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className={cn("list-item [font-family:'Martina_Plantijn',_Georgia,_serif] text-base leading-[1.625rem] max-md:text-sm max-md:leading-[1.4375rem] md:max-lg:text-[0.9375rem] md:max-lg:leading-[1.5rem] 2xl:leading-6.5 2xl:[font-size:inherit]", styles.className)}>
      <span className="inline" />
      <strong className="inline [font-family:Soehne,_system-ui,_sans-serif] font-semibold">
        {d.text}
      </strong>
      <span className="inline">
        {d.text2}
      </span>
    </li>
  );
}
