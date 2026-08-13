import type { ReactNode } from "react";
import type { Logo8Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo8Data = {
  href: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo8({ d, styles }: { d: Logo8Data; styles: Logo8Styles }) {
  return (
    <a className={cn("w-8 relative shrink-0 overflow-hidden text-primary transform-[none] cursor-pointer max-lg:transform-[matrix(0.9,0,0,0.9,0,0)] max-lg:origin-[16px_16px]", styles.className)} data-component="link" href={d.href} rel="noopener" target="_blank">
      <div className={cn("block shrink-0 text-foreground", styles.className2)} aria-hidden="true">
        <div className={cn("block", styles.className3)}>
          <svg className={cn("block overflow-hidden", styles.className4)} data-component="icon" height="100%" viewBox="0 0 32 32" width="100%" preserveAspectRatio="none" fill="currentColor">{d.icon}</svg>
        </div>
      </div>
    </a>
  );
}
