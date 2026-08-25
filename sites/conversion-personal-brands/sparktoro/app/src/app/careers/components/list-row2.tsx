export type ListRow2Data = {
  text: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="list-item mb-2">
      <span className="inline mr-2 text-color-046">
        ●
      </span>
      {d.text}
    </li>
  );
}
