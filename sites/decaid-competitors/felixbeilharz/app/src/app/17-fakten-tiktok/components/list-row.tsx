export type ListRowData = {
  text: string;
  text2: string;
  text3: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="list-item ml-6 text-foreground text-base leading-7">
      {d.text}
      <strong className="inline font-semibold">
        {d.text2}
      </strong>
      {d.text3}
    </li>
  );
}
