import type { TextLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TextLinkData = {
  href: string;
  title: string;
};
/** A text link. */
export default function TextLink({ d, styles }: { d: TextLinkData; styles: TextLinkStyles }) {
  return (
    <a className="border border-solid border-border block p-4 rounded-[3.2px] cursor-pointer hover:border-color-001" data-component="link" href={d.href}>
      <h3 className={cn("block font-light hover:text-color-002 hover:outline-color-002 hover:[text-decoration-color:var(--color-002)]", styles.className)} data-component="heading">
        {d.title}
      </h3>
    </a>
  );
}
