export type ListRow3Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="list-item">
      <a className="inline text-primary cursor-pointer hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] hover:underline focus:border-background focus:text-background focus:outline-background focus:[text-decoration-color:var(--background)]" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
