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
    <div className={cn("w-10 h-full block absolute top-0 rounded-[100%] shrink-0 cursor-pointer after:content-[''] after:block after:absolute after:inset-0 after:w-10 after:h-10 after:rounded-tl-[100%]", styles.className)}>
      <div className="w-10 h-full block absolute top-0 rounded-[100%]">
        <img className={cn("w-full h-10 block rounded-[100%] overflow-clip object-cover", styles.className2)} data-component="avatar" alt="" height={d.height} src={d.imgSrc} width={d.width} />
      </div>
    </div>
  );
}
