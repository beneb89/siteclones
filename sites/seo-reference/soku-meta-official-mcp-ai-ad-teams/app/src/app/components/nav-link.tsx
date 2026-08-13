import type { NavLinkStyles } from "../_styles";
export type NavLinkData = {
  kind?: string;
  href: string;
  label: string;
};
/** A navigation link. */
export default function NavLink({ d, styles }: { d: NavLinkData; styles: NavLinkStyles }) {
  return (
    <a className={styles.className} data-component={d.kind} href={d.href}>
      {d.label}
    </a>
  );
}
