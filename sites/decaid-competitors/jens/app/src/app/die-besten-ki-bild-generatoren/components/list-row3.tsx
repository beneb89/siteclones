export type ListRow3Data = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="list-item mb-2">
      <strong className="inline font-medium">
        {d.text}
      </strong>
      {d.text2}
    </li>
  );
}
