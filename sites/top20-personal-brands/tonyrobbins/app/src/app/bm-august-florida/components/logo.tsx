import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  alt: string;
  height: string;
  width: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className="h-full block">
      <div className={cn("h-full flex relative mr-4 p-6 rounded-2xl items-end overflow-hidden bg-border", styles.className)}>
        <img className={cn("w-full block absolute top-0 left-0 min-w-0 max-w-full overflow-clip object-cover align-middle text-clr-0 h-full", styles.className2)} data-component="image" alt={d.alt} height={d.height} src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width={d.width} />
      </div>
    </div>
  );
}
