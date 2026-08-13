export type ListRow4Data = {
  text: string;
};
/** A list row. */
export default function ListRow4({ d }: { d: ListRow4Data }) {
  return (
    <li className="box-content list-item">
      {d.text}
    </li>
  );
}
