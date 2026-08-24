import type { TextLinkStyles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type TextLinkData = {
  href: string;
  description: string;
};
/** A text link. */
export default function TextLink({ d, styles }: { d: TextLinkData; styles: TextLinkStyles }) {
  return (
    <a className={cn("h-5 block absolute top-[17.3125rem] transform-[none] cursor-pointer", styles.className)} data-component="link" href={d.href} target="_self">
      <p className="box-content h-full block absolute top-0 inset-x-0 text-color-001 [font-family:Montserrat] text-[0.9375rem] leading-6 text-left max-md:leading-[1.6875rem] max-md:text-center">
        {d.description}
      </p>
    </a>
  );
}
