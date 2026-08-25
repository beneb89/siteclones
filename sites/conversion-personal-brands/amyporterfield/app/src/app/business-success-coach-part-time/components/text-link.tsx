import type { TextLinkStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TextLinkData = {
  href: string;
  target: string;
  text: string;
};
/** A text link. */
export default function TextLink({ d, styles }: { d: TextLinkData; styles: TextLinkStyles }) {
  return (
    <a className={cn("h-4.5 block absolute transform-[none] cursor-pointer max-md:h-[1.3125rem]", styles.className)} data-component="link" href={d.href} target={d.target}>
      <nav className="box-content h-full block absolute top-0 inset-x-0 text-border [font-family:Montserrat] text-[0.8125rem] font-semibold leading-[1.3125rem] tracking-[0.65px] text-left uppercase max-md:leading-[1.4375rem] max-md:tracking-[inherit]" data-component="nav">
        {d.text}
      </nav>
    </a>
  );
}
