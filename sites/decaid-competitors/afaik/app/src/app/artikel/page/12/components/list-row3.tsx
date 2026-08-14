export type ListRow3Data = {
  text: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="box-content list-item mt-2">
      {d.text}
    </li>
  );
}
