export type ListRow6Data = {
  text: string;
};
/** A list row. */
export default function ListRow6({ d }: { d: ListRow6Data }) {
  return (
    <li className="list-item">
      {d.text}
    </li>
  );
}
