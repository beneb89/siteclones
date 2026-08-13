import type { Logo3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo3Data = {
  alt: string;
  height: string;
  sizes?: string;
  imgSrc: string;
  srcSet?: string;
  width: string;
};
/** A logo. */
export default function Logo3({ d, styles }: { d: Logo3Data; styles: Logo3Styles }) {
  return (
    <div className="w-56 flex relative z-3 min-w-0 flex-col gap-5 max-md:w-[158.7px] max-md:flex-wrap md:max-lg:w-[225.7px]">
      <div className="block relative min-w-0 max-w-full gap-5 text-center">
        <div className="block [overflow-wrap:break-word]">
          <img className={cn("inline-block max-w-full overflow-clip align-middle", styles.className)} data-component="image" alt={d.alt} height={d.height} sizes={d.sizes} src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
