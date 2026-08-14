export type ListRowData = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="list-item mb-1">
      <strong className="inline text-foreground font-bold">
        {d.text}
      </strong>
      {d.text2}
    </li>
  );
}
