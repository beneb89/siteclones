export type ListRow3Data = {
  text: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="list-item mb-2">
      <span className="inline mr-2 text-color-004">
        ●
      </span>
      {d.text}
    </li>
  );
}
