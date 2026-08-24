import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  ariahidden: string;
  alt: string;
  imgSrc: string;
  alt2: string;
  imgSrc2: string;
  alt3: string;
  imgSrc3: string;
  kind?: string;
  kind2?: string;
  kind3?: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className={cn("box-content min-h-px block float-left px-4", styles.className)} aria-hidden={d.ariahidden}>
      <div className="box-content block">
        <img className={cn("box-content inline-block mb-4 overflow-clip", styles.className2)} alt={d.alt} src={d.imgSrc} data-component={d.kind} />
      </div>
      <div className="box-content block max-md:hidden">
        <img className={cn("box-content inline-block mb-4 overflow-clip max-md:hidden", styles.className3)} alt={d.alt2} src={d.imgSrc2} data-component={d.kind2} />
      </div>
      <div className="box-content block max-md:hidden">
        <img className={cn("box-content inline-block mb-4 overflow-clip max-md:hidden", styles.className4)} alt={d.alt3} src={d.imgSrc3} data-component={d.kind3} />
      </div>
    </div>
  );
}
