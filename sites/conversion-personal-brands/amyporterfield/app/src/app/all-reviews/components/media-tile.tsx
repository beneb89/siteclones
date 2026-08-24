import type { MediaTileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTileData = {
  href: string;
  height: string;
  sizes?: string;
  imgSrc: string;
  srcSet?: string;
  width: string;
  text: string;
  href2: string;
  label: string;
  text2: string;
  href3: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <div className="box-content block">
      <div className={cn("box-content grid grid-cols-[283.3px] max-md:grid-cols-[280px]", styles.className)}>
        <div className="box-content block">
          <div className="box-content grid grid-cols-[283.3px] max-md:grid-cols-[280px]">
            <div className="box-content block">
              <div className="box-content block">
                <a className="box-content inline text-primary underline cursor-pointer" data-component="link" href={d.href}>
                  <img className={cn("box-content w-[17.6875rem] inline max-w-full overflow-clip max-md:w-70", styles.className2)} data-component="image" alt="" height={d.height} sizes={d.sizes} src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
                </a>
              </div>
              <div className="box-content block">
                {d.text}
              </div>
            </div>
          </div>
          <div className="box-content grid grid-cols-[283.3px] max-md:grid-cols-[280px]">
            <div className="box-content block">
              <div className="box-content block">
                <a className="box-content inline text-primary underline cursor-pointer" data-component="link" href={d.href2}>
                  {d.label}
                </a>
              </div>
              <div className="box-content block">
                {d.text2}
              </div>
              <div className="box-content block">
                <a className="box-content inline text-primary underline cursor-pointer" data-component="link" href={d.href3}>
                  VIEW STORY
                </a>
              </div>
              <div className="box-content block">
                <div className="box-content block mb-10">
                  <a className="box-content inline text-primary underline cursor-pointer" data-component="link" href="#">
                    All Stories
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
