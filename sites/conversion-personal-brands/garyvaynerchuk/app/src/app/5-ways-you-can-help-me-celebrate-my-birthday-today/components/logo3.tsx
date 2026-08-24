import type { Logo3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Logo3Data = {
  height: string;
  width: string;
};
/** A logo. */
export default function Logo3({ d, styles }: { d: Logo3Data; styles: Logo3Styles }) {
  return (
    <p className={cn("block pb-[25.5px]", styles.className)}>
      <img className={cn("block max-w-full overflow-clip align-middle text-clr-1 max-md:w-82.5", styles.className2)} data-component="image" alt="" height={d.height} sizes="(max-width: 700px) calc(100vw - 45px), 800px" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width={d.width} />
    </p>
  );
}
