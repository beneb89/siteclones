export type ListRow4Data = {
  href: string;
  label: string;
  target?: string;
};
/** A list row. */
export default function ListRow4({ d }: { d: ListRow4Data }) {
  return (
    <li className="list-item">
      <a className="inline-block text-background text-sm font-medium leading-[1.375rem] cursor-pointer hover:border-clr-29 hover:text-clr-29 hover:outline-clr-29 hover:[text-decoration-color:var(--clr-29)] focus:border-clr-43 focus:text-clr-43 focus:outline-clr-43 focus:[text-decoration-color:var(--clr-43)]" data-component="link" href={d.href} target={d.target}>
        {d.label}
      </a>
    </li>
  );
}
