import type { ListRow2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow2Data = {
  description: string;
  description2: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className={cn("list-item relative pl-6 [list-style-type:none] list-outside 2xl:pl-9 before:content-['•'] before:block before:absolute before:top-0 before:right-[576.1px] before:bottom-10 before:left-0 before:text-foreground before:text-base before:leading-[1.375rem] before:text-center max-md:before:right-[19.9375rem] max-md:before:bottom-[4.45rem] max-lg:before:text-base max-lg:before:leading-[1.375rem] md:max-lg:before:right-156 md:max-lg:before:bottom-10 2xl:before:right-216 2xl:before:text-2xl 2xl:before:leading-[2.125rem]", styles.className)}>
      <p className="h-full block [font-family:'PP_Mori'] text-lg leading-[1.9375rem]">
        <strong className="inline font-bold">
          {d.description}
        </strong>
        {d.description2}
      </p>
      {" "}
    </li>
  );
}
