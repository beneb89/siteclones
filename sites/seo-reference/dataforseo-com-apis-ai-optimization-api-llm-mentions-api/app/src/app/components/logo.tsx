import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  alt: string;
  height: string;
  imgSrc: string;
  label: string;
  width: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className="flex items-center shrink-0">
      <img className={cn("h-8 block opacity-85 max-w-30 overflow-clip object-contain align-middle [filter:grayscale(0.2)] max-lg:h-7 2xl:h-10", styles.className)} alt={d.alt} height={d.height} src={d.imgSrc} title={d.label} width={d.width} />
      {" "}
    </div>
  );
}
