import type { MediaTileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTileData = {
  arialabelledby: string;
  id: string;
  text: string;
  kind?: string;
  alt: string;
  sizes: string;
  imgSrc: string;
  srcSet: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <div className={styles.className} aria-labelledby={d.arialabelledby} id={d.id} role="tabpanel">
      <div className={cn("block", styles.className2)}>
        <ul className="block [list-style-type:none] list-outside">
          <li className={cn("list-item relative pl-9 text-base font-normal leading-[1.6875rem] before:content-[''] before:block before:absolute before:top-[0.45rem] before:left-0 before:w-3 before:h-3 before:bg-primary", styles.className3)}>
            {d.text}
          </li>
        </ul>
        {" "}
      </div>
      {" "}
      <div className={cn("block -mr-8 -mb-8 [align-self:end] pointer-events-none", styles.className4)}>
        <img className={cn("block max-w-full overflow-clip aspect-[auto_575/800] pointer-events-none", styles.className5)} data-component={d.kind} alt={d.alt} height="800" sizes={d.sizes} src={d.imgSrc} srcSet={d.srcSet} width="575" />
        {" "}
      </div>
      {" "}
    </div>
  );
}
