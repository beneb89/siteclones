import type { Logo2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo2Data = {
  alt: string;
  imgSrc: string;
};
/** A logo. */
export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <div className={cn("h-[119.5px] min-h-25 flex py-[1.8625rem] px-4 justify-center items-center bg-background 2xl:hidden", styles.className)}>
      <img className={cn("w-15 block opacity-70 max-w-full max-h-15 overflow-clip object-contain aspect-[auto_100/100] align-middle h-auto 2xl:hidden", styles.className2)} data-component="image" alt={d.alt} height="100" src={d.imgSrc} width="100" />
      {" "}
    </div>
  );
}
