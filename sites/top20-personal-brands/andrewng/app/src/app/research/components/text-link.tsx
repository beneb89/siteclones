import type { TextLinkStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TextLinkData = {
  href: string;
  label: string;
  description: string;
  description2: string;
};
/** A text link. */
export default function TextLink({ d, styles }: { d: TextLinkData; styles: TextLinkStyles }) {
  return (
    <a className="flex py-4 gap-6 cursor-pointer" data-component="link" href={d.href} rel="noopener noreferrer" target="_blank">
      <span className="block pt-0.5 shrink-0 text-muted-foreground text-sm leading-5 w-12">
        {d.label}
      </span>
      <div className={cn("block min-w-0 max-md:w-[15.9375rem]", styles.className)}>
        <p className="block text-color-001 font-medium leading-[1.4375rem]">
          {d.description}
        </p>
        <p className="block mt-1 text-muted-foreground text-sm leading-[1.3125rem]">
          {d.description2}
        </p>
      </div>
    </a>
  );
}
