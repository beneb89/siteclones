import type { TextLink2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TextLink2Data = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink2({ d, styles }: { d: TextLink2Data; styles: TextLink2Styles }) {
  return (
    <a className={cn("block relative [text-shadow:var(--clr-4)_0px_1px_12px] cursor-pointer max-lg:pointer-events-none max-lg:text-[color:inherit]", styles.className)} data-component="link" href={d.href}>
      {d.label}
    </a>
  );
}
