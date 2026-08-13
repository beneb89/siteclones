import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  height: string;
  srcSet: string;
  width: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className="contents min-w-0">
      <div className={cn("w-full block relative rounded-3xl [align-self:start] shrink-0 col-start-[span_2] overflow-hidden max-lg:rounded-[initial]", styles.className)}>
        <div className="h-full block absolute top-0 inset-x-0 rounded-3xl max-lg:rounded-[initial]">
          <img className={cn("w-full block rounded-3xl overflow-clip object-cover max-lg:rounded-[initial]", styles.className2)} data-component="image" alt="" height={d.height} sizes="calc(max((100vw - 96px) / 2, 200px) * 2 + 48px)" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" srcSet={d.srcSet} width={d.width} />
        </div>
      </div>
    </div>
  );
}
