export type ListRow9Data = {
  href: string;
  label: string;
  target?: string;
};
/** A list row. */
export default function ListRow9({ d }: { d: ListRow9Data }) {
  return (
    <li className="list-item">
      <a className="inline-block text-background text-sm font-medium leading-[1.375rem] cursor-pointer hover:border-color-002 hover:text-color-002 hover:outline-color-002 hover:[text-decoration-color:var(--color-002)] focus:border-clr-16 focus:text-clr-16 focus:outline-clr-16 focus:[text-decoration-color:var(--clr-16)]" data-component="link" href={d.href} target={d.target}>
        {d.label}
      </a>
    </li>
  );
}
