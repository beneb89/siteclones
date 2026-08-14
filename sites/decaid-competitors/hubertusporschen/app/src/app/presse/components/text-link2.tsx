import type { TextLink2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TextLink2Data = {
  download?: string;
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink2({ d, styles }: { d: TextLink2Data; styles: TextLink2Styles }) {
  return (
    <a className={cn("border border-solid flex py-[1.0625rem] px-6.5 justify-between items-center gap-[14.9px] text-[0.8125rem] font-semibold leading-[1.375rem] tracking-[0.52px] uppercase whitespace-nowrap text-nowrap cursor-pointer max-md:gap-3.5 max-md:leading-[1.3125rem] 2xl:hidden", styles.className)} data-component="button" download={d.download} href={d.href}>
      {d.label}
    </a>
  );
}
