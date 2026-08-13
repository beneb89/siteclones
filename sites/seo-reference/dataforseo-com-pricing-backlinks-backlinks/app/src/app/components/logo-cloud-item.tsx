import type { LogoCloudItemStyles } from "../_styles";
export type LogoCloudItemData = {
  alt: string;
  height?: string;
  href?: string;
  imgSrc: string;
  rel?: string;
  srcSet?: string;
  target?: string;
  tooltip?: string;
  width?: string;
};
/** logo cloud item component. */
export default function LogoCloudItem({ d, styles }: { d: LogoCloudItemData; styles: LogoCloudItemStyles }) {
  const image = <img className={styles.imgClassName} data-component="image" alt={d.alt} height={d.height} src={d.imgSrc} srcSet={d.srcSet} width={d.width} />;
  return (
    <div className={styles.rootClassName}>
      {d.href ? (
        <a className={styles.linkClassName} data-component="link" href={d.href} rel={d.rel} target={d.target}>
          <div className={styles.innerClassName}>
            {image}
            {d.tooltip ? <div className={styles.tooltipClassName}>{d.tooltip}</div> : null}
          </div>
        </a>
      ) : image}
    </div>
  );
}
