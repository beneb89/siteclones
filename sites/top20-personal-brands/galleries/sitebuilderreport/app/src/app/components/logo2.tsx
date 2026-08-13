import type { Logo2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo2Data = {
  imgSrc: string;
};
/** A logo. */
export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <img className={cn("box-content w-7.5 h-7.5 border border-solid border-border block p-[0.9375rem] rounded-[3px] overflow-clip shadow-[var(--border)_0px_5px_5px_0px] 2xl:w-10 2xl:h-10", styles.className)} data-component="image" src={d.imgSrc} />
  );
}
