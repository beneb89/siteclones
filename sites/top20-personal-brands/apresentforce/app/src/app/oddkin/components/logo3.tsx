import type { Logo3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Logo3Data = {
  srcSet: string;
};
/** A logo. */
export default function Logo3({ d, styles }: { d: Logo3Data; styles: Logo3Styles }) {
  return (
    <div className="contents min-w-0">
      <div className={cn("w-full block relative rounded-3xl [align-self:start] shrink-0 col-start-[span_2] overflow-hidden max-lg:rounded-[initial] md:max-lg:opacity-[initial] 2xl:aspect-[1.7963/1] 2xl:opacity-[initial]", styles.className)}>
        <div className="h-full block absolute top-0 inset-x-0 rounded-3xl max-lg:rounded-[initial]">
          <img className={cn("w-full block rounded-3xl overflow-clip object-cover aspect-[auto_3840/2160] max-lg:rounded-[initial] 2xl:h-260.5", styles.className2)} data-component="image" alt="" height="2160" sizes="calc(max((100vw - 96px) / 2, 200px) * 2 + 48px)" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" srcSet={d.srcSet} width="3840" />
        </div>
      </div>
    </div>
  );
}
