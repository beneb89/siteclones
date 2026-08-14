import type { ListRow2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow2Data = {
  text: string;
  description: string;
  description2: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className={cn("flex items-center gap-4", styles.className)}>
      <span className="border border-solid border-surface-3 flex rounded-full justify-center items-center shrink-0 text-xl font-bold leading-7 h-14 w-14 max-md:text-sm max-md:leading-[1.25rem] max-md:h-10 max-md:w-10">
        {d.text}
      </span>
      <p className="block text-color-022 [font-family:'Martina_Plantijn',_Georgia,_serif] text-base leading-[1.375rem] [font-feature-settings:'calt',_'liga',_'onum'] max-md:text-sm max-md:leading-[1.25rem] md:max-lg:text-[0.9375rem] md:max-lg:leading-[1.3125rem] 2xl:[font-size:inherit]">
        <strong className="inline text-foreground [font-family:Soehne,_system-ui,_sans-serif] font-semibold">
          {d.description}
        </strong>
        {d.description2}
      </p>
    </li>
  );
}
