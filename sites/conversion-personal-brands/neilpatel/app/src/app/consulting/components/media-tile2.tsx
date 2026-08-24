import type { MediaTile2Styles } from "../_styles";
export type MediaTile2Data = {
  ariahidden: string;
  label: string;
  label2: string;
  alt: string;
  imgSrc: string;
  kind?: string;
  kind2?: string;
};
/** A media tile. */
export default function MediaTile2({ d, styles }: { d: MediaTile2Data; styles: MediaTile2Styles }) {
  return (
    <div className={styles.className} aria-hidden={d.ariahidden}>
      <button className={styles.className2} type="button" data-component={d.kind}>
        <span className={styles.className3}>
          {d.label}
        </span>
        {" "}
        <span className={styles.className4}>
          {d.label2}
        </span>
        {" "}
        <span className={styles.className5}>
          <img className={styles.className6} alt={d.alt} height="175" src={d.imgSrc} width="350" data-component={d.kind2} />
        </span>
        {" "}
      </button>
      {" "}
    </div>
  );
}
