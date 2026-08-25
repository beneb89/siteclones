import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  ariahidden: string;
  imgSrc: string;
  kind?: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className="w-[11.8125rem] min-h-px flex px-2.5 justify-center items-center max-md:w-[10.1875rem] max-md:py-2 max-md:px-1.5 md:max-lg:w-[22.4375rem] md:max-lg:py-3 md:max-lg:px-2" aria-hidden={d.ariahidden}>
      <img className={cn("h-35 border border-solid border-surface block max-w-full max-h-35 p-3 rounded-sm overflow-clip object-contain aspect-[auto_500/500] bg-background max-md:p-2 md:max-lg:p-2.5", styles.className)} alt="" height="500" src={d.imgSrc} width="500" data-component={d.kind} />
      {" "}
    </div>
  );
}
