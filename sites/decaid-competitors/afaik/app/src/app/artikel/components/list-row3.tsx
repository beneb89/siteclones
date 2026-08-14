export type ListRow3Data = {
  text: string;
  text2: string;
  text3: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="box-content list-item mt-2">
      {d.text}
      <em className="box-content inline italic">
        {d.text2}
      </em>
      {d.text3}
    </li>
  );
}
