import type { TextLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TextLinkData = {
  href: string;
  label: string;
  label2: string;
};
/** A text link. */
export default function TextLink({ d, styles }: { d: TextLinkData; styles: TextLinkStyles }) {
  return (
    <a className={cn("block cursor-pointer", styles.className)} data-component="link" href={d.href} title={d.label}>
      <div className={cn("w-full h-12.5 border border-solid border-foreground flex py-[1.0625rem] px-12.5 rounded-[25px] justify-center items-center text-color-001 [font-family:Montserrat,_sans-serif] text-[0.8125rem] font-semibold leading-3.5 uppercase bg-foreground max-md:px-7.5", styles.className2)} data-component="button">
        {d.label2}
      </div>
    </a>
  );
}
