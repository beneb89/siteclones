import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  height: string;
  imgSrc: string;
  srcSet: string;
  width: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className="contents min-w-0">
      <div className={cn("w-full block relative rounded-3xl [align-self:start] shrink-0 col-start-[span_2] overflow-hidden max-lg:aspect-[initial] md:max-lg:opacity-[initial] 2xl:opacity-[initial]", styles.className)}>
        <div className={cn("h-full block absolute top-0 inset-x-0 rounded-3xl", styles.className2)}>
          <img className={cn("w-full block rounded-3xl overflow-clip", styles.className3)} data-component="image" alt="" height={d.height} sizes="calc(max((100vw - 96px) / 2, 200px) * 2 + 48px)" src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
        </div>
      </div>
    </div>
  );
}
