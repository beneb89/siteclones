import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  alt: string;
  srcSet: string;
  alt2: string;
  kind?: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className={cn("h-full", styles.className)}>
      <div className={cn("max-md:h-[33.5rem] md:max-lg:h-[42.2375rem]", styles.className2)}>
        <img className={cn("hidden h-full max-md:block", styles.className3)} alt={d.alt} height="900" sizes="(max-width: 1600px) 100vw, 1600px" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" srcSet={d.srcSet} width="600" />
        <img className={cn("h-full", styles.className4)} alt={d.alt2} height="900" sizes="(max-width: 1600px) 100vw, 1600px" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1600" data-component={d.kind} />
        <div className={cn("hidden max-md:h-[16.75rem] max-lg:block max-md:top-[16.75rem] md:max-lg:h-[21.125rem] md:max-lg:top-[21.125rem]", styles.className5)} />
      </div>
    </div>
  );
}
