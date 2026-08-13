import type { LogoStyles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type LogoData = {
  imgSrc: string;
  srcSet: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className={cn("w-full block relative rounded-xl shrink-0 aspect-[1.42308/1]", styles.className)}>
      <div className="h-full block absolute top-0 inset-x-0 rounded-xl">
        <img className="w-full h-[50.9375rem] block rounded-xl overflow-clip object-cover aspect-[auto_1480/1040] max-md:h-[14.6875rem] md:max-lg:h-128" data-component="image" alt="" height="1040" sizes="calc(min(100vw, 1200px) - 40px)" src={d.imgSrc} srcSet={d.srcSet} width="1480" />
      </div>
    </div>
  );
}
