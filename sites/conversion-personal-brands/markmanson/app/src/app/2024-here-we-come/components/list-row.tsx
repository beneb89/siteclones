export type ListRowData = {
  id: string;
  href: string;
  label: string;
  target?: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="list-item relative" id={d.id}>
      <a className="block py-2.5 px-5 uppercase cursor-pointer" data-component="link" href={d.href} target={d.target}>
        {d.label}
      </a>
    </li>
  );
}
