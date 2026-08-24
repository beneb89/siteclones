import type { TextLink2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TextLink2Data = {
  href: string;
  target: string;
  text: string;
};
/** A text link. */
export default function TextLink2({ d, styles }: { d: TextLink2Data; styles: TextLink2Styles }) {
  return (
    <a className={cn("h-4.5 block absolute transform-[none] cursor-pointer max-md:h-[1.3125rem]", styles.className)} data-component="link" href={d.href} target={d.target}>
      <nav className="box-content h-full block absolute top-0 inset-x-0 text-color-001 [font-family:Montserrat] text-[0.8125rem] font-semibold leading-[1.3125rem] tracking-[0.65px] text-left uppercase max-md:leading-[1.4375rem] max-md:tracking-[inherit]" data-component="nav">
        {d.text}
      </nav>
    </a>
  );
}
