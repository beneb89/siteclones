export type ListRowData = {
  href: string;
  label: string;
  label2: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="list-item">
      <a className="inline underline cursor-pointer" data-component="link" href={d.href} rel="bookmark" title={d.label}>
        {d.label2}
      </a>
    </li>
  );
}
