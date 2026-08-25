import type { ListRow2Styles } from "../_styles";
export type ListRow2Data = {
  kind?: string;
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className={styles.className}>
      <a className={styles.className2} data-component={d.kind} href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
