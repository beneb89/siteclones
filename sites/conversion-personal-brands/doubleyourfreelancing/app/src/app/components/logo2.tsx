import type { Logo2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo2Data = {
  imgSrc: string;
  srcSet?: string;
};
/** A logo. */
export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <li className={cn("list-item max-h-[1e+06px] 2xl:hidden", styles.className)}>
      <div className="w-22.5 h-22.5 block max-h-[1e+06px] rounded-[50%] 2xl:hidden">
        <img className={cn("w-full inline max-w-full max-h-[1e+06px] overflow-clip object-cover align-top 2xl:hidden", styles.className2)} data-component="image" alt="" src={d.imgSrc} srcSet={d.srcSet} />
        {" "}
      </div>
      {" "}
    </li>
  );
}
