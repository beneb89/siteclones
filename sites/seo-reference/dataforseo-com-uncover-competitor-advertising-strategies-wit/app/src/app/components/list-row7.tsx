export type ListRow7Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow7({ d }: { d: ListRow7Data }) {
  return (
    <li className="list-item">
      <a className="inline-block text-background text-sm font-medium leading-[1.375rem] cursor-pointer hover:border-color-002 hover:text-color-002 hover:outline-color-002 hover:[text-decoration-color:var(--color-002)] focus:border-clr-16 focus:text-clr-16 focus:outline-clr-16 focus:[text-decoration-color:var(--clr-16)]" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
