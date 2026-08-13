export type ListRowData = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="flex items-center gap-2">
      <a className="block cursor-pointer hover:text-accent hover:[text-decoration-color:var(--accent)]" data-component="link" href={d.href}>
        {d.label}
      </a>
      <span className="block text-color-013">
        /
      </span>
    </li>
  );
}
