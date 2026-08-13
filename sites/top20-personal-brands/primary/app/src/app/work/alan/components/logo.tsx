import type { LogoStyles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type LogoData = {
  name: string;
  imgSrc: string;
  srcSet: string;
  name2: string;
  imgSrc2: string;
  srcSet2: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <section className="w-full flex relative justify-center items-center content-center shrink-0 gap-12.5 overflow-hidden bg-background">
      <div className={cn("w-full max-w-360 flex relative p-5 flex-col justify-center items-center content-center grow shrink-0 basis-0 overflow-hidden", styles.className)}>
        <div className={cn("flex relative justify-start items-start content-start shrink-0 gap-10 overflow-hidden", styles.className2)}>
          <div className={cn("block relative shrink-0 max-md:w-[20.9375rem] md:max-lg:w-182", styles.className3)} name={d.name}>
            <div className="flex justify-center items-center content-center justify-items-center">
              <img className={cn("w-auto block max-w-full max-h-full overflow-clip", styles.className4)} data-component="image" alt="" src={d.imgSrc} srcSet={d.srcSet} />
              <div className={cn("block absolute top-0 inset-x-0 min-w-0 pointer-events-none", styles.className5)} />
            </div>
          </div>
          <div className={cn("block relative shrink-0 max-md:w-[20.9375rem] md:max-lg:w-182", styles.className6)} name={d.name2}>
            <div className="flex justify-center items-center content-center justify-items-center">
              <img className={cn("w-auto block max-w-full max-h-full overflow-clip", styles.className7)} data-component="image" alt="" src={d.imgSrc2} srcSet={d.srcSet2} />
              <div className={cn("block absolute top-0 inset-x-0 min-w-0 pointer-events-none", styles.className8)} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
