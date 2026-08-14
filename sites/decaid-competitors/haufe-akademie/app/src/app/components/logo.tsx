import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  imgSrc: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className="w-40 h-20 flex px-6 justify-center items-center bg-background max-lg:w-33 max-lg:h-16.5">
      <img className={cn("h-8 flex max-w-full max-h-8 justify-center items-center overflow-clip object-contain align-middle max-lg:h-6 max-lg:max-h-6 2xl:hidden", styles.className)} data-component="image" alt="" src={d.imgSrc} />
      {" "}
    </div>
  );
}
