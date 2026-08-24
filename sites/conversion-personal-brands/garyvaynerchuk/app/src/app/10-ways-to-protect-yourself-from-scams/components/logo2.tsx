import type { Logo2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Logo2Data = {
  width: string;
};
/** A logo. */
export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <figure className="block max-w-full my-9">
      <img className={cn("w-200 block max-w-full overflow-clip align-middle text-clr-1 max-md:w-82.5", styles.className)} data-component="image" alt="" height="2037" sizes="(max-width: 700px) calc(100vw - 45px), 800px" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width={d.width} />
    </figure>
  );
}
