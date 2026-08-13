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
      <div className={cn("w-full h-full block relative rounded-[45px] self-center shrink-0 col-end-[span_2] max-lg:rounded-[25px]", styles.className)}>
        <div className="h-full block absolute top-0 inset-x-0 rounded-[45px] max-lg:rounded-[25px]">
          <img className="w-full h-126 block rounded-[45px] overflow-clip object-cover max-lg:h-[11.0625rem] max-lg:rounded-[25px] 2xl:h-[42.3125rem]" data-component="image" alt="" sizes="calc(max((95vw - 55px) / 2, 50px) * 2 + 15px)" src={d.imgSrc} srcSet={d.srcSet} />
        </div>
      </div>
    </div>
  );
}
