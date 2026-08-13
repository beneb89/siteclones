import type { Logo7Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo7Data = Record<string, never>;
/** A logo. */
export default function Logo7({ d, styles }: { d: Logo7Data; styles: Logo7Styles }) {
  return (
    <li className={cn("w-full list-item max-lg:hidden", styles.className)} aria-hidden="true">
      <div className={cn("block relative shrink-0 aspect-[2.32973/1] max-lg:hidden", styles.className2)}>
        <div className={cn("h-full block absolute top-0 max-lg:hidden", styles.className3)}>
          <img className={cn("w-full h-[1.6875rem] block overflow-clip object-cover aspect-[auto_431/185] max-lg:hidden", styles.className4)} data-component="image" alt="" height="185" src="/assets/cloned/svg/07b4e76ff421.svg" width="431" />
        </div>
      </div>
    </li>
  );
}
