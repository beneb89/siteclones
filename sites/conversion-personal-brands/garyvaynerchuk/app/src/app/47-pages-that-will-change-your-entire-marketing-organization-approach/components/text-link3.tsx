import type { TextLink3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TextLink3Data = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink3({ d, styles }: { d: TextLink3Data; styles: TextLink3Styles }) {
  return (
    <a className={cn("h-7.5 border-2 border-solid border-surface flex py-1 px-2.5 rounded-[100px] justify-center items-center [font-family:Oswald,_'Oswald_Fallback',_Arial,_sans-serif] text-[1.0625rem] font-medium leading-4.5 whitespace-nowrap text-nowrap cursor-pointer max-lg:border-clr-5 max-lg:bg-clr-6", styles.className)} data-component="button" href={d.href}>
      {d.label}
    </a>
  );
}
