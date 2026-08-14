import type { Tile5Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type Tile5Data = {
  open?: boolean;
  text: string;
  description: string;
};
/** A content tile. */
export default function Tile5({ d, styles }: { d: Tile5Data; styles: Tile5Styles }) {
  return (
    <details className="border-b border-solid border-b-border block py-5.5 2xl:hidden" open={d.open}>
      <summary className={cn("flex justify-between items-start gap-5 text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.1875rem] font-semibold leading-[1.625rem] list-inside cursor-pointer 2xl:hidden after:block after:w-[0.9375rem] after:h-3.5 after:text-accent after:text-[1.75rem] after:font-light after:leading-3.5 2xl:after:hidden", styles.className)}>
        {d.text}
      </summary>
      {" "}
      <p className="block max-w-198 mt-4 text-muted-foreground max-md:max-w-180 max-md:leading-[1.6875rem] 2xl:hidden">
        {d.description}
      </p>
      {" "}
    </details>
  );
}
