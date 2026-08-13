import type { TextLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TextLinkData = {
  href: string;
  style: string;
  label: string;
  label2: string;
};
/** A text link. */
export default function TextLink({ d, styles }: { d: TextLinkData; styles: TextLinkStyles }) {
  return (
    <a className="flex p-2 rounded-lg items-start gap-3 cursor-pointer pointer-events-none" href={d.href}>
      <div className="w-8 h-8 flex min-w-0 rounded-md justify-center items-center shrink-0 text-primary bg-surface pointer-events-none">
        <span className={cn("h-4 block min-w-0 bg-primary pointer-events-none", styles.className)} style={d.style} aria-hidden="true" />
      </div>
      <div className="block min-w-0 pointer-events-none">
        <div className="block text-sm font-medium leading-5 pointer-events-none">
          {d.label}
        </div>
        <div className="block text-muted text-xs leading-4 pointer-events-none">
          {d.label2}
        </div>
      </div>
    </a>
  );
}
