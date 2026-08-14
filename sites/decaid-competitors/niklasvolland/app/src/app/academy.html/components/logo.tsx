import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  alt: string;
  imgSrc: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className={cn("block absolute", styles.className)}>
      <img className={cn("block overflow-clip", styles.className2)} data-component="image" alt={d.alt} src={d.imgSrc} />
      {" "}
    </div>
  );
}
