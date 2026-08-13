import type { TileStyles } from "../_styles";
export type TileData = {
  description: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className={styles.className}>
      <blockquote className={styles.className2}>
        <p className={styles.className3}>
          {d.description}
        </p>
      </blockquote>
    </div>
  );
}
