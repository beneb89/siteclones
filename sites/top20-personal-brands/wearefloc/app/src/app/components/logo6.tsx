import type { Logo6Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo6Data = Record<string, never>;
/** A logo. */
export default function Logo6({ d, styles }: { d: Logo6Data; styles: Logo6Styles }) {
  return (
    <li className={cn("hidden", styles.className)} aria-hidden="true">
      <div className={cn("hidden", styles.className2)}>
        <div className={cn("hidden", styles.className3)}>
          <img className={cn("hidden max-md:h-12", styles.className4)} alt="" height="185" src="/assets/cloned/svg/07b4e76ff421.svg" width="431" />
        </div>
      </div>
    </li>
  );
}
