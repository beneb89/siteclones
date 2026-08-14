import type { ListRow3Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type ListRow3Data = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow3({ d, styles }: { d: ListRow3Data; styles: ListRow3Styles }) {
  return (
    <li className={cn("grid py-4 items-start gap-5 grid-cols-[32px_1fr] 2xl:hidden", styles.className)}>
      <span className="block mt-0.5 text-color-011 [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-sm font-semibold leading-[1.5rem] max-md:leading-[1.375rem] 2xl:hidden" aria-hidden="true">
        {d.text}
      </span>
      {" "}
      <span className="block text-base leading-[1.625rem] max-md:[font-size:inherit] max-md:leading-[inherit] 2xl:hidden">
        {d.text2}
      </span>
      {" "}
    </li>
  );
}
