import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  imgSrc: string;
  srcSet: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className="contents min-w-0">
      <div className={cn("w-full h-full block relative rounded-[45px] self-center shrink-0 col-end-[span_2] 2xl:[grid-column-end:initial]", styles.className)}>
        <div className="h-full block absolute top-0 inset-x-0 rounded-[45px]">
          <img className={cn("w-full block rounded-[45px] overflow-clip object-cover", styles.className2)} data-component="image" alt="" sizes="calc(max((95vw - 55px) / 2, 50px) * 2 + 15px)" src={d.imgSrc} srcSet={d.srcSet} />
        </div>
      </div>
    </div>
  );
}
