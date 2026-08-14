import type { ListRow3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow3Data = {
  text: string;
  description: string;
  description2: string;
};
/** A list row. */
export default function ListRow3({ d, styles }: { d: ListRow3Data; styles: ListRow3Styles }) {
  return (
    <li className={cn("list-item", styles.className)}>
      <div className="w-[30.275rem] h-px block mb-5 shrink-0 bg-surface-11 max-md:w-[17.25rem] md:max-lg:w-[243.1px] 2xl:w-[513.5px]" role="none" />
      <div className="flex items-start gap-4">
        <span className="border border-solid border-surface-3 flex rounded-full justify-center items-center shrink-0 text-xl font-bold leading-7 h-14 w-14 max-md:text-sm max-md:leading-[1.25rem] max-md:h-10 max-md:w-10">
          {d.text}
        </span>
        <p className="block text-color-022 text-base leading-[1.375rem] max-md:text-sm max-md:leading-[1.25rem] md:max-lg:text-[0.9375rem] md:max-lg:leading-[1.3125rem] 2xl:[font-size:inherit]">
          <strong className="inline text-foreground font-semibold">
            {d.description}
          </strong>
          {d.description2}
        </p>
      </div>
    </li>
  );
}
