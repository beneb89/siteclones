export type ListRow6Data = {
  text: string;
};
/** A list row. */
export default function ListRow6({ d }: { d: ListRow6Data }) {
  return (
    <li className="box-content list-item relative ml-5">
      <em className="box-content inline italic">
        {d.text}
      </em>
    </li>
  );
}
