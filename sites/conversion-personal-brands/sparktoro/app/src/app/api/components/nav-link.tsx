export type NavLinkData = {
  href: string;
  label: string;
};
/** A navigation link. */
export default function NavLink({ d }: { d: NavLinkData }) {
  return (
    <a className="border-2 border-solid border-clr-1 block py-[0.5625rem] px-4.5 rounded-[11px] text-color-019 font-semibold whitespace-nowrap text-nowrap cursor-pointer" data-component="link" href={d.href}>
      {d.label}
    </a>
  );
}
