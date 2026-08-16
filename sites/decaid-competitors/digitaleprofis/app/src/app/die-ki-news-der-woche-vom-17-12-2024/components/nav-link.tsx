export type NavLinkData = {
  href: string;
  label: string;
};
/** A navigation link. */
export default function NavLink({ d }: { d: NavLinkData }) {
  return (
    <a className="border border-solid border-border block min-w-0 py-[0.5625rem] px-3 rounded-[999px] text-foreground text-[0.8125rem] font-semibold leading-[1.3125rem] bg-surface-4 cursor-pointer" href={d.href}>
      {d.label}
    </a>
  );
}
