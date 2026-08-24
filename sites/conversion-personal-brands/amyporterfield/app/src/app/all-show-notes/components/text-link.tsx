import type { TextLinkStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TextLinkData = {
  href: string;
  description: string;
};
/** A text link. */
export default function TextLink({ d, styles }: { d: TextLinkData; styles: TextLinkStyles }) {
  return (
    <a className={cn("w-[21.8125rem] block absolute left-210.5 transform-[matrix(1,0,0,1,40,0)] cursor-pointer max-md:w-57.5 max-md:h-5 max-md:left-20 max-md:origin-[115px_10px] 2xl:transform-[matrix(1,0,0,1,360,0)]", styles.className)} data-component="link" href={d.href} target="_blank">
      <p className="box-content h-full block absolute top-0 inset-x-0 text-background [font-family:AcuminProSemibold] text-[1.5625rem] leading-[2.8125rem] text-left max-md:leading-[1.8125rem] max-md:[font-size:inherit]">
        {d.description}
      </p>
    </a>
  );
}
