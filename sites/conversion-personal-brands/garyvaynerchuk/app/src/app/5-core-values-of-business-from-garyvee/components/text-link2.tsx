import type { TextLink2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TextLink2Data = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink2({ d, styles }: { d: TextLink2Data; styles: TextLink2Styles }) {
  return (
    <a className={cn("min-h-[1.8125rem] block py-[0.1875rem] pl-[1.5625rem] [font-family:'Bebas_Neue',_'Bebas_Neue_Fallback',_Impact,_sans-serif] text-xl leading-[1.4375rem] cursor-pointer max-lg:text-[1.375rem] max-lg:leading-[1.5625rem] max-lg:pointer-events-none", styles.className)} data-component="link" href={d.href}>
      {d.label}
    </a>
  );
}
