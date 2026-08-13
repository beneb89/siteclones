import type { ListRow6Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow6Data = {
  description: string;
};
/** A list row. */
export default function ListRow6({ d, styles }: { d: ListRow6Data; styles: ListRow6Styles }) {
  return (
    <li className={cn("flex items-start leading-6 2xl:hidden", styles.className)}>
      <div className="w-6 min-h-6 flex min-w-6 mr-1 justify-center items-center text-muted-foreground 2xl:hidden">
        <div className="block text-[1.5rem] 2xl:hidden before:content-['•'] before:text-muted-foreground before:text-2xl before:leading-6 2xl:before:hidden" />
      </div>
      <div className="w-124.5 flex min-w-0 flex-col flex-1 max-md:w-[14.5625rem] md:max-lg:w-148.5 2xl:hidden">
        <div className="min-h-6 block relative justify-start self-start max-w-3xl w-full 2xl:hidden">
          <p className="min-h-6 block justify-start self-start max-w-3xl w-full 2xl:hidden">
            {d.description}
          </p>
        </div>
      </div>
    </li>
  );
}
