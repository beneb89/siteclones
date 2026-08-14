import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  height: string;
  imgSrc: string;
  label?: string;
  width: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className="block max-w-[14.2857%] pl-[0.9375rem] grow max-lg:max-w-full max-lg:shrink-0 max-md:basis-[390px] md:max-lg:basis-[250px]">
      <div className={cn("flex relative flex-col", styles.className)}>
        <div className={cn("block relative max-w-full my-5", styles.className2)}>
          <span className="block relative max-w-full overflow-hidden">
            <a className="inline text-color-007 cursor-pointer" data-component="link" href="https://felixbeilharz.de/zertifizierungen-und-auszeichnungen/" target="_blank">
              <img className={cn("block max-w-full overflow-clip align-middle", styles.className3)} data-component="image" alt="" height={d.height} src={d.imgSrc} title={d.label} width={d.width} />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
