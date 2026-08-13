export type ListRow5Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow5({ d }: { d: ListRow5Data }) {
  return (
    <li className="list-item">
      <a className="inline-flex cursor-pointer hover:border-color-001 hover:text-color-001 hover:outline-color-001 hover:[text-decoration-color:var(--color-001)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
