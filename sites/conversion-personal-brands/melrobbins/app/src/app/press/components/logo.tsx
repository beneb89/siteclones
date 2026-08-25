import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  ariahidden: string;
  imgSrc: string;
  srcSet: string;
  imgSrc2: string;
  srcSet2: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className={cn("block absolute top-0 z-2 pointer-events-none", styles.className)} aria-hidden={d.ariahidden}>
      <div className="hidden relative object-cover pointer-events-none h-full w-full max-md:block">
        <span className={cn("block pointer-events-none w-full", styles.className2)} />
        {" "}
        <img className="w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-cover align-middle pointer-events-none max-md:w-[23.4375rem] max-md:h-168" alt="" sizes="(max-width: 1134px) 100vw, 1134px" src={d.imgSrc} srcSet={d.srcSet} />
        {" "}
      </div>
      {" "}
      <div className="block relative object-cover pointer-events-none h-full w-full max-md:hidden">
        <span className={cn("block pointer-events-none w-full", styles.className3)} />
        {" "}
        <img className="w-320 h-224 block absolute top-0 left-0 max-w-full overflow-clip object-cover align-middle pointer-events-none md:max-lg:w-192 md:max-lg:h-168 2xl:w-480" data-component="image" alt="" sizes="(max-width: 2160px) 100vw, 2160px" src={d.imgSrc2} srcSet={d.srcSet2} />
        {" "}
      </div>
      {" "}
    </div>
  );
}
