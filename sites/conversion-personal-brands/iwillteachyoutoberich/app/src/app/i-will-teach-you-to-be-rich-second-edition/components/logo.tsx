import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  ariaLabel: string;
  imgSrc: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className={cn("basis-full shrink-0 block relative", styles.className)} aria-label={d.ariaLabel} role="group">
      <img className={cn("w-95 block max-w-full overflow-clip align-middle pointer-events-none max-md:w-[12.6875rem] md:max-lg:w-127 2xl:w-142.5", styles.className2)} data-component="image" alt="I Will Teach You To Be Rich by Ramit Sethi" src={d.imgSrc} />
      {" "}
    </div>
  );
}
