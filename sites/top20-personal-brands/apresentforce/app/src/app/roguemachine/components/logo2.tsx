import type { Logo2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Logo2Data = {
  poster: string;
};
/** A logo. */
export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <div className={cn("flex relative rounded-3xl justify-center items-center content-center [align-self:start] shrink-0 gap-2.5 col-start-[span_2] overflow-hidden bg-color-024 max-lg:col-start-[span_1] max-lg:rounded-[initial]", styles.className)}>
      <div className="w-[88.55rem] block relative shrink-0 max-lg:w-full 2xl:w-[134.55rem]">
        <video className={cn("w-full block overflow-clip object-cover", styles.className2)} muted playsInline poster={d.poster} preload="none" />
      </div>
    </div>
  );
}
