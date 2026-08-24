import type { MediaTileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTileData = {
  href: string;
  height: string;
  imgSrc: string;
  srcSet: string;
  text: string;
  href2: string;
  label: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <div className="box-content block">
      <div className={cn("box-content grid grid-cols-[334.7px] max-md:grid-cols-[290px]", styles.className)}>
        <div className="box-content block">
          <div className="box-content h-100 block mb-[0.9375rem] overflow-hidden max-md:h-82.5">
            <a className="box-content inline text-primary underline cursor-pointer" data-component="link" href={d.href}>
              <img className={cn("box-content w-[20.9375rem] h-100 inline max-w-full overflow-clip object-cover max-md:w-72.5 max-md:h-82.5", styles.className2)} data-component="image" alt="" height={d.height} sizes="(max-width: 768px) 100vw, 768px" src={d.imgSrc} srcSet={d.srcSet} width="768" />
            </a>
          </div>
          <div className="box-content block mb-[0.4375rem] text-border [font-family:'Ivy_Presto_Display_Light'] text-[0.9375rem] leading-6 tracking-[0.75px] uppercase max-md:text-sm max-md:leading-[1.5625rem] max-md:tracking-[0.7px]">
            {d.text}
          </div>
          <div className="box-content block">
            <a className="box-content inline text-muted-foreground [font-family:'Ivy_Presto_Display_Light'] text-[1.75rem] leading-0 cursor-pointer max-md:text-[1.4375rem]" data-component="link" href={d.href2}>
              {d.label}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
