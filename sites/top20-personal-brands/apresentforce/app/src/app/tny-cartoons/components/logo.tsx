import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  poster: string;
  videoSrc: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className={cn("flex relative rounded-3xl justify-center items-center content-center [align-self:start] shrink-0 gap-2.5 col-start-[span_2] overflow-hidden max-lg:col-start-[span_1]", styles.className)}>
      <div className={cn("w-full block relative shrink-0", styles.className2)}>
        <video className={cn("w-full block overflow-clip", styles.className3)} loop muted playsInline poster={d.poster} src={d.videoSrc} />
      </div>
    </div>
  );
}
