import type { ListRow5Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow5Data = {
  description: string;
};
/** A list row. */
export default function ListRow5({ d, styles }: { d: ListRow5Data; styles: ListRow5Styles }) {
  return (
    <li className={cn("flex items-start leading-6 2xl:hidden", styles.className)}>
      <div className="w-6 min-h-6 flex min-w-6 mr-1 justify-center items-center text-muted-foreground 2xl:hidden">
        <div className={cn("block 2xl:hidden before:text-muted-foreground before:text-base before:leading-6 2xl:before:hidden", styles.className2)} />
      </div>
      <div className="w-145 flex min-w-0 flex-col flex-1 max-md:w-[19.6875rem] md:max-lg:w-169 2xl:hidden">
        <div className="min-h-6 block relative justify-start self-start max-w-3xl w-full 2xl:hidden">
          <p className="min-h-6 block justify-start self-start max-w-3xl w-full 2xl:hidden">
            {d.description}
          </p>
        </div>
      </div>
    </li>
  );
}
