import type { TextLink2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type TextLink2Data = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink2({ d, styles }: { d: TextLink2Data; styles: TextLink2Styles }) {
  return (
    <a className={cn("block relative cursor-pointer max-lg:invisible", styles.className)} data-component="link" href={d.href}>
      {d.label}
    </a>
  );
}
