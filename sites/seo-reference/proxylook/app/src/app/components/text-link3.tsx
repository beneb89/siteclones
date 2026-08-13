import type { TextLink3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type TextLink3Data = {
  style: string;
  label: string;
};
/** A text link. */
export default function TextLink3({ d, styles }: { d: TextLink3Data; styles: TextLink3Styles }) {
  return (
    <button className={cn("h-[2.9625rem] border-b-2 border-solid block py-3 px-4 text-[0.8125rem] font-semibold leading-[1.375rem] text-center whitespace-nowrap text-nowrap cursor-pointer hover:bg-surface-2", styles.className)} data-component="button" type="button">
      <i className={cn("h-[0.8125rem] inline-block mr-1.5 [vertical-align:-1.625px]", styles.className2)} style={d.style} />
      {d.label}
    </button>
  );
}
