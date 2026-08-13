export type NavLinkData = {
  href: string;
  label: string;
};
/** A navigation link. */
export default function NavLink({ d }: { d: NavLinkData }) {
  return (
    <a className="block cursor-pointer hover:border-color-001 hover:text-color-001 hover:outline-color-001 hover:[text-decoration-color:var(--color-001)]" data-component="link" href={d.href}>
      {d.label}
    </a>
  );
}
