export type ListRow5Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow5({ d }: { d: ListRow5Data }) {
  return (
    <li className="box-content list-item">
      <a className="box-content inline text-background cursor-pointer hover:border-accent hover:text-accent hover:outline-accent hover:[text-decoration-color:var(--accent)]" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
