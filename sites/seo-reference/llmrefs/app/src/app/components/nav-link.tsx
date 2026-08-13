export type NavLinkData = {
  href: string;
  label: string;
};
/** A navigation link. */
export default function NavLink({ d }: { d: NavLinkData }) {
  return (
    <a className="flex relative p-2 rounded-lg justify-center items-center gap-1.5 overflow-hidden [font-weight:521] text-center whitespace-nowrap text-nowrap cursor-pointer h-9 hover:underline" data-component="link" href={d.href}>
      {d.label}
    </a>
  );
}
