import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  kind?: string;
  height: string;
  imgSrc: string;
  srcSet: string;
  width: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className={cn("block", styles.className)}>
      <div className={cn("flex relative mr-4 p-6 rounded-2xl items-end overflow-hidden bg-border", styles.className2)}>
        <img className={cn("w-full block absolute top-0 left-0 min-w-0 max-w-full overflow-clip object-cover align-middle text-clr-0 h-full", styles.className3)} data-component={d.kind} alt="" height={d.height} src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
      </div>
    </div>
  );
}
