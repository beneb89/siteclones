export type ListRow3Data = {
  text: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="list-item">
      <span className="inline [font-family:Raleway] text-[1.375rem] leading-6.5">
        {d.text}
      </span>
    </li>
  );
}
