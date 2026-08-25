import type { TextLinkStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TextLinkData = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink({ d, styles }: { d: TextLinkData; styles: TextLinkStyles }) {
  return (
    <a className={cn("h-[5.3rem] min-h-20.5 border border-solid border-muted-foreground flex py-[0.9375rem] px-5 rounded-[15px] items-center text-primary bg-background cursor-pointer", styles.className)} data-component="link" href={d.href} rel="noopener" target="_blank">
      {" "}
      <span className={cn("block text-muted-foreground text-[1.375rem] font-medium leading-[1.625rem]", styles.className2)}>
        {d.label}
      </span>
      {" "}
    </a>
  );
}
