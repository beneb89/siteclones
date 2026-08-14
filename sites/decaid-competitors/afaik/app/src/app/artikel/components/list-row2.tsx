export type ListRow2Data = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="box-content list-item mt-2">
      <strong className="box-content inline font-bold">
        {d.text}
      </strong>
      {d.text2}
    </li>
  );
}
