import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  height: string;
  imgSrc: string;
  width: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className={cn("w-[242.5px] h-52.5 min-h-px flex relative max-md:w-[23.4375rem] md:max-lg:w-48", styles.className)}>
      <div className={cn("flex relative flex-wrap content-start", styles.className2)}>
        <div className={cn("block relative max-w-full text-center", styles.className3)}>
          <div className={cn("h-full block", styles.className4)}>
            <img className={cn("h-50 inline-block max-w-full overflow-clip align-middle", styles.className5)} data-component="image" alt="" height={d.height} src={d.imgSrc} width={d.width} />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
