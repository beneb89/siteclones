import type { TextLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TextLinkData = {
  href: string;
  text: string;
};
/** A text link. */
export default function TextLink({ d, styles }: { d: TextLinkData; styles: TextLinkStyles }) {
  return (
    <a className={cn("h-full block absolute top-0 transform-[matrix(1,0,0,1,40,0)] cursor-pointer max-md:hidden 2xl:transform-[matrix(1,0,0,1,360,0)]", styles.className)} data-component="link" href={d.href} target="_self">
      <nav className="box-content h-full block absolute top-0 inset-x-0 text-background [font-family:Montserrat] text-[0.8125rem] leading-19.5 tracking-[0.65px] text-center uppercase" data-component="nav">
        {d.text}
      </nav>
    </a>
  );
}
