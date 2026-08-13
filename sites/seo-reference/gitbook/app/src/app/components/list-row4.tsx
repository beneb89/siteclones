import type { ListRow4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow4Data = {
  description: string;
  description2: string;
};
/** A list row. */
export default function ListRow4({ d, styles }: { d: ListRow4Data; styles: ListRow4Styles }) {
  return (
    <li className={cn("flex items-start leading-6 2xl:hidden", styles.className)}>
      <div className="w-6 min-h-6 flex min-w-6 mr-1 justify-center items-center text-muted-foreground 2xl:hidden">
        <div className="block text-[1.5rem] 2xl:hidden before:content-['•'] before:text-muted-foreground before:text-2xl before:leading-6 2xl:before:hidden" />
      </div>
      <div className="w-145 flex min-w-0 flex-col flex-1 max-md:w-[19.6875rem] md:max-lg:w-169 2xl:hidden">
        <div className="min-h-6 block relative justify-start self-start max-w-3xl w-full 2xl:hidden">
          <p className="min-h-6 block justify-start self-start max-w-3xl w-full 2xl:hidden">
            <strong className="inline font-bold 2xl:hidden">
              {d.description}
            </strong>
            {d.description2}
          </p>
        </div>
      </div>
    </li>
  );
}
