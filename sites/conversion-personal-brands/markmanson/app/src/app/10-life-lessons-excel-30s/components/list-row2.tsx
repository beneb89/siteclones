export type ListRow2Data = {
  text: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="list-item relative mb-[0.9375rem] pl-6.5">
      {d.text}
    </li>
  );
}
