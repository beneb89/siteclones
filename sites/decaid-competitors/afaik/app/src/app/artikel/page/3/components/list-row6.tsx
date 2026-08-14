export type ListRow6Data = {
  text: string;
};
/** A list row. */
export default function ListRow6({ d }: { d: ListRow6Data }) {
  return (
    <li className="box-content list-item mt-2">
      <strong className="box-content inline font-bold">
        {d.text}
      </strong>
    </li>
  );
}
