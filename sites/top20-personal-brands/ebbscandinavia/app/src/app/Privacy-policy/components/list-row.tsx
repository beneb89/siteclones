export type ListRowData = {
  description: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="list-item pl-6.5 [list-style-type:none]">
      <p className="block">
        {d.description}
      </p>
    </li>
  );
}
