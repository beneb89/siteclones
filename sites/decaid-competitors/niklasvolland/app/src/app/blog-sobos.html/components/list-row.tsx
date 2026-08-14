export type ListRowData = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="list-item mb-2.5">
      <strong className="inline text-foreground font-semibold">
        {d.text}
      </strong>
      {d.text2}
    </li>
  );
}
