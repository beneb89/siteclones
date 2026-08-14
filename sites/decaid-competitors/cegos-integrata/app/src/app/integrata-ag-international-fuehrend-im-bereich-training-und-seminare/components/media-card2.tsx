import type { MediaCard2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCard2Data = {
  href: string;
  imgSrc: string;
  title: string;
};
/** A card with media + heading. */
export default function MediaCard2({ d, styles }: { d: MediaCard2Data; styles: MediaCard2Styles }) {
  return (
    <div className="box-content block rounded-[10px] bg-surface">
      <a className={cn("box-content inline cursor-pointer", styles.className)} data-component="link" href={d.href}>
        <div className="box-content block">
          <picture className="box-content inline">
            <img className="box-content w-full inline max-w-full rounded-tl-[10px] rounded-tr-[10px] overflow-clip object-cover aspect-video align-bottom h-auto" data-component="image" src={d.imgSrc} />
          </picture>
        </div>
        <div className="box-content block py-[1.5625rem] px-10">
          <div className="box-content block">
            <h3 className="box-content block my-5 text-foreground text-xl font-bold leading-[1.5625rem]" data-component="heading">
              {d.title}
            </h3>
          </div>
        </div>
      </a>
    </div>
  );
}
