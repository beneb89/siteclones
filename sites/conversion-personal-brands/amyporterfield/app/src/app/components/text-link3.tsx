import type { TextLink3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type TextLink3Data = {
  href: string;
  text: string;
};
/** A text link. */
export default function TextLink3({ d, styles }: { d: TextLink3Data; styles: TextLink3Styles }) {
  return (
    <a className={cn("h-4.5 block absolute top-[1.9375rem] transform-[matrix(1,0,0,1,40,0)] cursor-pointer 2xl:transform-[matrix(1,0,0,1,360,0)]", styles.className)} data-component="link" href={d.href} target="_self">
      <nav className="box-content h-full block absolute top-0 inset-x-0 text-background [font-family:Montserrat] text-[0.6875rem] font-medium leading-[1.125rem] tracking-[0.55px] text-right uppercase max-md:text-[0.625rem] max-md:leading-4.5 max-md:text-left max-md:tracking-[inherit]" data-component="nav">
        {d.text}
      </nav>
    </a>
  );
}
