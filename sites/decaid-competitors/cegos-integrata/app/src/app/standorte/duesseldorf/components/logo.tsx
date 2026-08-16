import type { LogoStyles } from "../_styles";
export type LogoData = {
  kind?: string;
  alt: string;
  imgSrc: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className={styles.className}>
      <picture className={styles.className2}>
        <img className={styles.className3} data-component={d.kind} alt={d.alt} src={d.imgSrc} />
      </picture>
    </div>
  );
}
