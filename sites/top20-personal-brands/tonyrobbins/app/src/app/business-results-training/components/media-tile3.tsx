import type { MediaTile3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTile3Data = {
  alt: string;
  imgSrc: string;
  srcSet: string;
  description: string;
  description2: string;
};
/** A media tile. */
export default function MediaTile3({ d, styles }: { d: MediaTile3Data; styles: MediaTile3Styles }) {
  return (
    <div className={styles.className}>
      <div className={styles.className2}>
        <div className={cn("h-16 w-16", styles.className3)}>
          <img className={cn("h-full", styles.className4)} alt={d.alt} height="128" sizes="64px" src={d.imgSrc} srcSet={d.srcSet} width="128" />
        </div>
        <p className={styles.className5}>
          {d.description}
        </p>
        <p className={cn("max-md:leading-[1.3125rem]", styles.className6)}>
          {d.description2}
        </p>
      </div>
    </div>
  );
}
