import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  alt: string;
  imgSrc: string;
  srcSet: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <img className={cn("w-12 h-12 border-2 border-solid border-border block max-w-full rounded-[50%] shrink-0 overflow-clip object-cover aspect-[auto_96/96] align-middle shadow-[var(--clr-10)_0px_1px_4px_0px]", styles.className)} data-component="avatar" alt={d.alt} height="96" sizes="auto, (max-width: 96px) 100vw, 96px" src={d.imgSrc} srcSet={d.srcSet} width="96" />
  );
}
