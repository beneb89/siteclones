export type NavLinkData = {
  href: string;
  rel?: string;
  target?: string;
  label: string;
};
/** A navigation link. */
export default function NavLink({ d }: { d: NavLinkData }) {
  return (
    <a className="block cursor-pointer" data-component="link" href={d.href} rel={d.rel} target={d.target}>
      {d.label}
    </a>
  );
}
