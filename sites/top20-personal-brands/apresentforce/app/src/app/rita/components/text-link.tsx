import type { TextLinkStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TextLinkData = {
  href: string;
  description: string;
};
/** A text link. */
export default function TextLink({ d, styles }: { d: TextLinkData; styles: TextLinkStyles }) {
  return (
    <a className={cn("flex relative py-2 rounded-[100px] flex-col justify-center items-center content-center shrink-0 gap-2.5 text-primary cursor-pointer", styles.className)} data-component="link" href={d.href}>
      <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap", styles.className2)}>
        <p className={cn("block text-color-003 [font-family:'Neue_Haas_Unica_Pro_Regular',_'Neue_Haas_Unica_Pro_Regular_Placeholder',_sans-serif] leading-[0.875rem] tracking-[1.2px] uppercase", styles.className3)}>
          {d.description}
        </p>
      </div>
    </a>
  );
}
