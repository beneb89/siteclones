export type ListRow4Data = {
  text: string;
};
/** A list row. */
export default function ListRow4({ d }: { d: ListRow4Data }) {
  return (
    <li className="list-item">
      <span className="inline text-[1.375rem] leading-[1.5625rem]">
        {d.text}
      </span>
    </li>
  );
}
