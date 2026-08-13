export type ListRow10Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow10({ d }: { d: ListRow10Data }) {
  return (
    <li className="list-item">
      <a className="inline cursor-pointer hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] focus:text-muted-foreground focus:outline-muted-foreground focus:[text-decoration-color:var(--muted-foreground)]" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
