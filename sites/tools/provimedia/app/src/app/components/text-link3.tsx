import type { TextLink3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type TextLink3Data = {
  label: string;
};
/** A text link. */
export default function TextLink3({ d, styles }: { d: TextLink3Data; styles: TextLink3Styles }) {
  return (
    <button className={cn("border-solid block py-2.5 px-5 rounded-xl text-sm leading-5 text-center whitespace-nowrap text-nowrap cursor-pointer", styles.className)} data-component="button">
      {d.label}
    </button>
  );
}
