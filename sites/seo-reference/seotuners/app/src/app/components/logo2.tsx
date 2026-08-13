import type { Logo2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo2Data = {
  height: string;
  imgSrc: string;
  width: string;
};
/** A logo. */
export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <div className={cn("block absolute z-1 min-w-0 max-w-full gap-[1.5625rem] text-center md:max-lg:gap-5 2xl:gap-7.5", styles.className)}>
      <div className="h-full block [overflow-wrap:break-word]">
        <img className={cn("inline-block max-w-full overflow-clip align-middle", styles.className2)} data-component="image" alt="Reg Gradient Hexagon Graphic" height={d.height} src={d.imgSrc} width={d.width} />
        {" "}
      </div>
      {" "}
    </div>
  );
}
