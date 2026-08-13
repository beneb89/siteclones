import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  alt: string;
  imgSrc: string;
  srcSet: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className="w-0 h-7.5 block">
      <div className={cn("w-0 h-7.5 flex flex-col items-center text-center", styles.className)}>
        <div className="w-0 block relative h-[1.875rem]">
          <img className="w-full block absolute max-w-full overflow-clip align-middle text-clr-0 h-full" data-component="image" alt={d.alt} sizes="100vw" src={d.imgSrc} srcSet={d.srcSet} />
        </div>
      </div>
    </div>
  );
}
