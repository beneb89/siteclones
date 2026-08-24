import type { MediaTileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTileData = {
  href: string;
  height: string;
  sizes: string;
  imgSrc: string;
  srcSet: string;
  width: string;
  href2: string;
  label: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <div className="box-content block mb-7.5 max-md:mb-0">
      <div className={cn("box-content grid grid-cols-[358.3px] max-md:grid-cols-[290px]", styles.className)}>
        <div className="box-content block">
          <div className="box-content block mb-2.5">
            <a className="box-content inline underline cursor-pointer" data-component="link" href={d.href}>
              <img className={cn("box-content w-89.5 inline max-w-full overflow-clip max-md:w-72.5", styles.className2)} data-component="image" alt="" height={d.height} sizes={d.sizes} src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
            </a>
          </div>
          <div className="box-content block">
            <a className="box-content inline font-medium leading-[1.375rem] cursor-pointer max-md:text-[1.125rem]" data-component="link" href={d.href2}>
              {d.label}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
