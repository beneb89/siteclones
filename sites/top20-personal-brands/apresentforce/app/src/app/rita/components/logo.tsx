import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  poster: string;
  preload?: string;
  loop?: boolean;
  videoSrc?: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className={cn("w-full flex relative rounded-3xl justify-center items-center content-center [align-self:start] shrink-0 gap-2.5 col-end-[span_2] overflow-hidden bg-color-025 max-lg:col-end-[span_1]", styles.className)} name="grid item">
      <div className={cn("shrink-0 block relative", styles.className2)}>
        <div className="contents">
          <video className={cn("w-308 block overflow-clip object-cover max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-400", styles.className3)} playsInline poster={d.poster} preload={d.preload} loop={d.loop} src={d.videoSrc} />
        </div>
      </div>
    </div>
  );
}
