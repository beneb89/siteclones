export type NavLink2Data = {
  href: string;
  label: string;
};
/** A navigation link. */
export default function NavLink2({ d }: { d: NavLink2Data }) {
  return (
    <a className="block text-color-001 text-[0.8125rem] leading-[1.375rem] whitespace-nowrap text-nowrap cursor-pointer hover:text-surface hover:opacity-80 hover:outline-surface hover:[text-decoration-color:var(--surface)]" data-component="link" href={d.href}>
      {d.label}
    </a>
  );
}
