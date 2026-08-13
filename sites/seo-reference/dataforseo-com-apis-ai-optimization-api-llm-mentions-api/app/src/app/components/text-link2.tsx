import type { DittoNodeMetaMap } from "../ditto-meta";
import type { TextLink2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type TextLink2Data = {
  ariacontrols: string;
  ariaselected: string;
  id: string;
  label: string;
};
/** A text link. */
export default function TextLink2({ d, meta, styles }: { d: TextLink2Data; meta: DittoNodeMetaMap; styles: TextLink2Styles }) {
  return (
    <button data-ditto-id={meta[0]?.anchor} className={cn("w-full flex relative pb-5 px-4 rounded-lg justify-center items-center flex-1 gap-2 font-semibold leading-[1.1875rem] cursor-pointer max-md:border-b max-md:border-solid max-md:border-b-clr-1 max-md:block hover:border-color-009 hover:shadow-[var(--clr-11)_0px_2px_8px_0px]", styles.className)} data-component="button" aria-controls={d.ariacontrols} aria-selected={d.ariaselected} id={d.id} role="tab">
      {d.label}
    </button>
  );
}
