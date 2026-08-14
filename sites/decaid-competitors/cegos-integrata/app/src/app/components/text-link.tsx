import type { TextLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TextLinkData = {
  href: string;
  label: string;
  label2: string;
  label3: string;
};
/** A text link. */
export default function TextLink({ d, styles }: { d: TextLinkData; styles: TextLinkStyles }) {
  return (
    <a className={cn("grid py-[0.9375rem] px-2.5 items-center gap-2.5 cursor-pointer grid-cols-[1fr_repeat(2,minmax(0,0.5fr))] max-md:grid-cols-[1fr]", styles.className)} data-component="link" href={d.href}>
      <div className="block font-semibold">
        {d.label}
      </div>
      <div className="w-[68.95rem] block max-md:w-[19.6875rem] md:max-lg:w-177 2xl:w-[71.5625rem]">
        {d.label2}
      </div>
      <div className="block text-primary whitespace-nowrap text-nowrap">
        {d.label3}
      </div>
    </a>
  );
}
