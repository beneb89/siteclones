import type { ListRow9Styles } from "../_styles";
export type ListRow9Data = {
  description: string;
  kind?: string;
  href?: string;
};
/** A list row. */
export default function ListRow9({ d, styles }: { d: ListRow9Data; styles: ListRow9Styles }) {
  return (
    <li className={styles.className}>
      <a className={styles.className2} data-component={d.kind} href={d.href}>
        <div className={styles.className3} lang="zxx">
          <p className={styles.className4} dir="auto">
            {d.description}
          </p>
        </div>
      </a>
    </li>
  );
}
