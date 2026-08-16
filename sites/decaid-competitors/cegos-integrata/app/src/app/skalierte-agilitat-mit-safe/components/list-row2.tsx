export type ListRow2Data = {
  text: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="box-content list-item ml-5">
      <em className="box-content inline italic">
        {d.text}
      </em>
    </li>
  );
}
