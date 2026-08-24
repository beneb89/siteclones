import type { MediaTileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTileData = {
  href: string;
  imgSrc: string;
  text: string;
  href2: string;
  label: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <div className="box-content block">
      <div className={cn("box-content grid grid-cols-[334px] max-md:grid-cols-[270px]", styles.className)}>
        <div className="box-content block">
          <div className="box-content h-100 block mb-[0.9375rem] overflow-hidden max-md:h-82.5">
            <a className="box-content inline text-primary underline cursor-pointer" data-component="link" href={d.href}>
              <img className="box-content w-83.5 h-100 inline max-w-full overflow-clip object-cover aspect-[auto_550/550] max-md:w-67.5 max-md:h-82.5" data-component="image" alt="" height="550" src={d.imgSrc} width="550" />
            </a>
          </div>
          <div className="box-content block mb-[0.4375rem] text-border [font-family:'Public_Sans'] text-[0.9375rem] leading-[1.6875rem] tracking-[0.75px] uppercase max-md:text-sm max-md:leading-[1.375rem] max-md:tracking-[0.7px]">
            {d.text}
          </div>
          <div className="box-content block">
            <a className="box-content inline text-muted-foreground [font-family:'Ivy_Presto_Display_Regular'] text-[1.75rem] leading-0 cursor-pointer max-md:text-[1.4375rem]" data-component="link" href={d.href2}>
              {d.label}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
