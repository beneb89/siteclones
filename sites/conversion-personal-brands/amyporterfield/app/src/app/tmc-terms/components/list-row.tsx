export type ListRowData = {
  text: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="box-content list-item">
      {d.text}
    </li>
  );
}
