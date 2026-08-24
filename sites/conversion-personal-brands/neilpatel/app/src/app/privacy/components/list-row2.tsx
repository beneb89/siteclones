export type ListRow2Data = {
  text: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="list-item ml-4 py-[0.1875rem]">
      {d.text}
    </li>
  );
}
