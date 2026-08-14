export type NavLinkData = {
  href: string;
  label: string;
};
/** A navigation link. */
export default function NavLink({ d }: { d: NavLinkData }) {
  return (
    <a className="block cursor-pointer" data-component="link" href={d.href}>
      {d.label}
    </a>
  );
}
