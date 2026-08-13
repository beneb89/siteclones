export type ListRowData = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="list-item">
      <a className="inline text-muted-foreground cursor-pointer hover:text-foreground hover:underline" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
