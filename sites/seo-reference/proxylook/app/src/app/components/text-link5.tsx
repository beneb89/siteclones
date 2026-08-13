import type { TextLink5Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type TextLink5Data = {
  href: string;
  text: string;
};
/** A text link. */
export default function TextLink5({ d, styles }: { d: TextLink5Data; styles: TextLink5Styles }) {
  return (
    <a className={cn("border border-solid border-border flex py-[0.1875rem] px-2 rounded-[999px] items-center gap-1 text-primary text-xs font-semibold leading-[1.25rem] whitespace-nowrap text-nowrap bg-surface-2 cursor-pointer max-lg:[white-space:inherit] max-lg:[text-wrap:initial]", styles.className)} data-component="button" href={d.href}>
      <b className="h-full block font-black">
        DataForSEO
      </b>
      {" vs "}
      <b className="h-full block font-black">
        {d.text}
      </b>
      {" — full head-to-head →"}
    </a>
  );
}
