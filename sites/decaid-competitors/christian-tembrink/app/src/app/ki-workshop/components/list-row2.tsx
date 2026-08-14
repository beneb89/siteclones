export type ListRow2Data = {
  text: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="list-item">
      <span className="inline [font-family:Raleway] text-xl leading-6">
        {d.text}
      </span>
    </li>
  );
}
