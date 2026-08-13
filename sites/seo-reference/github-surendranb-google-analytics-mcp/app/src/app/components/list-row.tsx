export type ListRowData = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="list-item mt-1">
      <strong className="inline font-semibold">
        {d.text}
      </strong>
      {d.text2}
    </li>
  );
}
