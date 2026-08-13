import type { Logo2Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type Logo2Data = {
  height: string;
  imgSrc: string;
  srcSet: string;
  width: string;
  height2: string;
  imgSrc2: string;
  srcSet2: string;
  width2: string;
};
/** A logo. */
export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <div className={cn("contents min-w-0 2xl:w-468 2xl:block 2xl:relative 2xl:shrink-0", styles.className)}>
      <div className={cn("w-312 block relative inset-0 shrink-0 max-md:w-[21.4375rem] max-lg:order-[initial] md:max-lg:w-184 2xl:w-468 2xl:absolute 2xl:right-auto 2xl:bottom-auto 2xl:shrink-[initial] 2xl:order-[initial] 2xl:aspect-[initial]", styles.className2)}>
        <img className={cn("hidden 2xl:w-full 2xl:block 2xl:overflow-clip 2xl:object-cover", styles.className3)} alt="" height={d.height} sizes="calc(100vw - 48px)" src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
        <div className="h-full block absolute top-0 inset-x-0 2xl:hidden">
          <img className={cn("w-full block overflow-clip object-cover 2xl:hidden", styles.className4)} data-component="image" alt="" height={d.height2} sizes="(min-width: 1366px) and (max-width: 1599.98px) calc(100vw - 32px), (min-width: 1024px) and (max-width: 1365.98px) calc(100vw - 32px), (max-width: 1023.98px) calc(100vw - 32px), (min-width: 1600px) calc(100vw - 48px)" src={d.imgSrc2} srcSet={d.srcSet2} width={d.width2} />
        </div>
      </div>
    </div>
  );
}
