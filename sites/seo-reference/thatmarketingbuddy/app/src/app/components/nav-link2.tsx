export type NavLink2Data = {
  href: string;
  label: string;
};
/** A navigation link. */
export default function NavLink2({ d }: { d: NavLink2Data }) {
  return (
    <a className="block text-muted text-sm leading-5 cursor-pointer hover:border-color-001 hover:text-color-001 hover:outline-color-001 hover:[text-decoration-color:var(--color-001)]" data-component="link" href={d.href}>
      {d.label}
    </a>
  );
}
