import type { ListRow2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow2Data = {
  text: string;
  text2: string;
  text3: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className={cn("list-item [font-family:'Martina_Plantijn',_Georgia,_serif] text-base leading-[1.625rem] max-md:text-sm max-md:leading-[1.4375rem] md:max-lg:text-[0.9375rem] md:max-lg:leading-[1.5rem] 2xl:leading-6.5 2xl:[font-size:inherit]", styles.className)}>
      <span className="inline">
        {d.text}
      </span>
      <strong className="inline [font-family:Soehne,_system-ui,_sans-serif] font-semibold">
        {d.text2}
      </strong>
      <span className="inline">
        {d.text3}
      </span>
    </li>
  );
}
