export type ListRow2Data = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="list-item my-3 pl-2">
      <strong className="inline text-color-001 font-semibold">
        {d.text}
      </strong>
      {d.text2}
    </li>
  );
}
