import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  imgSrc: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <img className={cn("box-content w-7.5 h-7.5 border border-solid border-border block p-[0.9375rem] rounded-[3px] overflow-clip shadow-[var(--border)_0px_5px_5px_0px] max-lg:p-[0.3125rem] max-lg:border-[0] max-lg:border-initial max-lg:border-[initial] max-lg:shadow-[initial] 2xl:w-10 2xl:h-10", styles.className)} data-component="image" src={d.imgSrc} />
  );
}
